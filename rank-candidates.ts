import { fetchProfile } from "./fetch-profile.ts";
import { fetchAupairs, saveAndCompare, checkProfileViewable } from "./fetch-aupairs.ts";
import { analyzePhotos, type PhotoAnalysisResult } from "./analyze-photos.ts";
import { scoreProfile, type ProfileScores } from "./score-profile.ts";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PHOTO_CACHE_DIR = join(__dirname, "photo-analysis");
const RESULTS_DIR = join(__dirname, "results");
const NARRATIVES_DIR = join(__dirname, "narratives");

console.log("Fetching current au pair list...");
const allCandidates = await fetchAupairs() as Array<{
  id: string;
  auPairNumber: string;
  auPairName?: string;
  firstName?: string;
}>;

saveAndCompare(allCandidates);

const liveIds = new Set(allCandidates.map(c => c.id));

// Merge in any cached profiles that didn't appear in this search response
const PROFILES_DIR = join(__dirname, "profiles");
const cachedOnly = readdirSync(PROFILES_DIR)
  .filter(f => f.endsWith(".json"))
  .map(f => f.replace(".json", ""))
  .filter(id => !liveIds.has(id))
  .map(id => {
    const p = JSON.parse(readFileSync(join(PROFILES_DIR, `${id}.json`), "utf-8")) as {
      id?: string;
      auPairNumber?: string;
      firstName?: string;
      nickName?: string;
    };
    return {
      id,
      auPairNumber: p.auPairNumber ?? id,
      name: p.nickName ?? p.firstName ?? p.auPairNumber ?? id,
    };
  });

if (cachedOnly.length > 0) {
  console.log(`Including ${cachedOnly.length} cached candidate(s) not in current search results.`);
}

const SHORTLIST = [
  ...allCandidates.map(c => ({
    id: c.id,
    name: c.auPairName ?? c.firstName ?? c.auPairNumber,
    auPairNumber: c.auPairNumber,
  })),
  ...cachedOnly,
];

type RankedResult = {
  rank: number;
  id: string;
  name: string;
  auPairNumber: string;
  composite: number;
  scores: ProfileScores;
  profileViewable?: boolean;
};

function compositeScore(s: ProfileScores): number {
  return (
    s.infantCare.score   * 0.40 +
    s.outdoor.score      * 0.35 +
    s.englishLevel.score * 0.20 +
    s.acrylicNails.penalty
  );
}

function buildNarrativesPrompt(results: RankedResult[]): string {
  const candidateData = results.map((r) => {
    const s = r.scores;
    const ic = s.infantCare;
    const od = s.outdoor;
    const viewability = r.profileViewable === true ? "✓ Profile viewable in app"
      : r.profileViewable === false ? "✗ Profile unavailable in app"
      : "Not checked";
    return `RANK #${r.rank}: ${r.name} (${r.auPairNumber}) — composite ${r.composite.toFixed(1)}/10
Profile viewable in app: ${viewability}
Infant care (${ic.score}/10): hours=${ic.breakdown.hoursWithInfants}, prefersInfants=${ic.breakdown.prefersInfantAges}, bioMentions=${ic.breakdown.bioMentionsInfants}, photoScore=${ic.breakdown.photoScore}/10. Notes: ${ic.notes.slice(0, 2).join("; ")}
Outdoor (${od.score}/10, text:${od.textScore}, photos:${od.photoScore}): ${[...od.textEvidence.slice(0, 1), ...od.photoEvidence.slice(0, 1)].join("; ") || "no signals"}
English: Level ${s.englishLevel.level} (${s.englishLevel.raw})
Acrylic nails: detected=${s.acrylicNails.detected} (${s.acrylicNails.confidence}). ${s.acrylicNails.note}
Flags: ${s.flags.join("; ") || "none"}`;
  }).join("\n\n---\n\n");

  return `You are helping a family in Boulder, Colorado evaluate au pair candidates. They have a 6-month-old baby.

Their priorities (in order):
1. Infant care (40%) — documented hours with babies, preference for infant ages, bio mentions, photo evidence of baby interaction
2. Outdoor/active lifestyle (35%) — fit for Boulder: hiking, cycling, skiing, climbing culture. Scored from both profile text (sports listed, personality traits) and photos
3. English Level 4+ (20%)
4. No acrylic nails (penalty if detected) — hygiene concern with infant care

For each candidate below, write 2-3 sentences explaining why they are ranked where they are. Be specific — reference actual signals from their data: outdoor photos (hiking trails, gym, climbing), infant care hours, baby photos, acrylic nail findings. Top candidates: highlight what makes them stand out. Bottom candidates: clearly explain which criteria they fell short on.

Return ONLY a valid JSON object mapping auPairNumber to explanation string, no other text, no markdown fences:
{"COL2279373": "explanation...", "BRA2306700": "explanation...", ...}

CANDIDATES:
${candidateData}`;
}

// --- Main ---
const hasAnthropicKey = !!process.env.ANTHROPIC_API_KEY;
if (!hasAnthropicKey) {
  console.warn("No ANTHROPIC_API_KEY — photo analysis will be skipped for uncached candidates.\n");
}

console.log(`Fetching and scoring ${SHORTLIST.length} candidates...\n`);

const results: RankedResult[] = [];

for (const candidate of SHORTLIST) {
  process.stdout.write(`  ${candidate.name} (${candidate.auPairNumber})... `);

  const profile = await fetchProfile(candidate.id) as {
    mediaFiles?: Array<{ file: { cfnUrl?: string } }>;
    profilePicture?: { cfnUrl?: string };
    interview?: { englishProficiencyLevel?: string };
    childcareExperiences?: unknown[];
    preferredAgeGroupToCareFor?: string[];
    aboutChildcareExperience?: string;
    aboutSelfAndInterests?: string;
    WhyBecomeAuPair?: string;
    otherInterests?: string;
    sports?: string[];
    personalityTraits?: string[];
    social?: string[];
    relaxing?: string[];
  };

  const cachePath = join(PHOTO_CACHE_DIR, `${candidate.id}.json`);
  let photoAnalysis: PhotoAnalysisResult | null = null;
  if (existsSync(cachePath)) {
    photoAnalysis = JSON.parse(readFileSync(cachePath, "utf-8"));
    process.stdout.write("(photo cache hit) ");
  } else if (hasAnthropicKey) {
    photoAnalysis = await analyzePhotos(profile.mediaFiles ?? [], profile.profilePicture, candidate.id);
    process.stdout.write("(photos analyzed) ");
  } else {
    process.stdout.write("(no photo analysis) ");
  }

  const scores = scoreProfile(profile, photoAnalysis);
  const composite = compositeScore(scores);
  results.push({ rank: 0, ...candidate, scores, composite });
  console.log(`composite: ${composite.toFixed(2)}`);
}

results.sort((a, b) => b.composite - a.composite);
results.forEach((r, i) => { r.rank = i + 1; });

// Check profile viewability until we have 10 viewable candidates
console.log("\nChecking profile viewability (until 10 viewable found)...");
let viewableCount = 0;
for (const r of results) {
  if (viewableCount >= 10) break;
  r.profileViewable = await checkProfileViewable(r.auPairNumber);
  if (r.profileViewable) viewableCount++;
  console.log(`  #${r.rank} ${r.name} (${r.auPairNumber}): ${r.profileViewable ? "✓ viewable" : "✗ unavailable"}`);
}
console.log(`Found ${viewableCount} viewable profile(s).`);

// Save JSON results
const timestamp = new Date().toISOString();
const slug = timestamp.replace(/[:.]/g, "-").slice(0, 19);
mkdirSync(RESULTS_DIR, { recursive: true });
mkdirSync(NARRATIVES_DIR, { recursive: true });
const jsonPath = join(RESULTS_DIR, `results-${slug}.json`);
writeFileSync(jsonPath, JSON.stringify({ generatedAt: timestamp, candidates: results }, null, 2));
console.log(`\nSaved results to results/${slug}.json`);

// Write the narratives prompt for Claude.ai
const promptPath = join(NARRATIVES_DIR, `narratives-prompt-${slug}.txt`);
writeFileSync(promptPath, buildNarrativesPrompt(results));
console.log(`Saved prompt to narratives/narratives-prompt-${slug}.txt`);
console.log(`
Next steps:
  1. Open narratives/narratives-prompt-${slug}.txt and paste its contents into claude.ai
  2. Save Claude's JSON response as narratives/narratives-${slug}.json
  3. Run: bun build-report.ts results/results-${slug}.json narratives/narratives-${slug}.json`);
