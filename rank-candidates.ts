import { fetchProfile } from "./fetch-profile.ts";
import { fetchAupairs, saveAndCompare, checkProfilesAvailable } from "./fetch-aupairs.ts";
import { addToFavorites } from "./add-to-favorites.ts";
import { analyzePhotos, type PhotoAnalysisResult } from "./analyze-photos.ts";
import { scoreProfile } from "./score-profile.ts";
import type { CriterionResult } from "./criteria-engine.ts";
import { loadCriteria } from "./criteria-engine.ts";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PHOTO_CACHE_DIR = join(__dirname, "photo-analysis");
const PROFILES_DIR  = join(__dirname, "profiles");
const RESULTS_DIR   = join(__dirname, "results");
const NARRATIVES_DIR = join(__dirname, "narratives");

const criteria = loadCriteria();

// ─── Candidate List ───────────────────────────────────────────────────────────

console.log("Fetching current au pair list...");
const allCandidates = await fetchAupairs() as Array<{
  id: string;
  auPairNumber: string;
  auPairName?: string;
  firstName?: string;
}>;

saveAndCompare(allCandidates);

const liveIds = new Set(allCandidates.map(c => c.id));

const cachedOnly = readdirSync(PROFILES_DIR)
  .filter(f => f.endsWith(".json"))
  .map(f => f.replace(".json", ""))
  .filter(id => !liveIds.has(id))
  .map(id => {
    const p = JSON.parse(readFileSync(join(PROFILES_DIR, `${id}.json`), "utf-8")) as {
      auPairNumber?: string; firstName?: string; nickName?: string;
    };
    return { id, auPairNumber: p.auPairNumber ?? id, name: p.nickName ?? p.firstName ?? p.auPairNumber ?? id };
  });

if (cachedOnly.length > 0) {
  console.log(`Including ${cachedOnly.length} cached candidate(s) not in current search results.`);
}

const SHORTLIST = [
  ...allCandidates.map(c => ({ id: c.id, name: c.auPairName ?? c.firstName ?? c.auPairNumber, auPairNumber: c.auPairNumber })),
  ...cachedOnly,
];

// ─── Types ────────────────────────────────────────────────────────────────────

type RankedResult = {
  rank: number;
  id: string;
  name: string;
  auPairNumber: string;
  composite: number;
  criterionResults: CriterionResult[];
  flags: string[];
  profileViewable?: boolean;
  availabilityReason?: string;
};

// ─── Narrative Prompt ─────────────────────────────────────────────────────────

function buildNarrativesPrompt(results: RankedResult[]): string {
  const criteriaDesc = criteria
    .map(c => {
      if (c.type === "penalty") return `- ${c.label} (penalty if detected)`;
      return `- ${c.label} (${(c.weight * 100).toFixed(0)}% of score)`;
    })
    .join("\n");

  const candidateData = results.slice(0, 50).map(r => {
    const lines: string[] = [
      `RANK #${r.rank}: ${r.name} (${r.auPairNumber}) — composite ${r.composite.toFixed(1)}/10`,
    ];

    if (r.profileViewable !== undefined) {
      const avail = r.profileViewable ? "✓ Available"
        : `✗ Unavailable — ${r.availabilityReason ?? "unknown reason"}`;
      lines.push(`Availability: ${avail}`);
    }

    for (const cr of r.criterionResults) {
      if (cr.type === "score") {
        const detail = [
          cr.profileScore != null ? `text: ${cr.profileScore}` : null,
          cr.photoScore != null ? `photos: ${cr.photoScore}` : null,
        ].filter(Boolean).join(", ");
        const notes = cr.notes.slice(0, 2).join("; ") || "no signals";
        lines.push(`${cr.label} (${cr.score}/10${detail ? ` — ${detail}` : ""}): ${notes}`);
      } else if (cr.type === "threshold") {
        lines.push(`${cr.label}: ${cr.raw} (Level ${cr.level}) — ${cr.meetsThreshold ? "meets threshold" : "BELOW threshold"}`);
      } else if (cr.type === "penalty") {
        lines.push(`${cr.label}: detected=${cr.detected} (${cr.confidence}). ${cr.penaltyNote ?? ""}`);
      }
    }

    if (r.flags.length > 0) lines.push(`Flags: ${r.flags.join("; ")}`);
    return lines.join("\n");
  }).join("\n\n---\n\n");

  return `You are helping evaluate au pair candidates. Scoring criteria:
${criteriaDesc}

For each candidate, write 2-3 sentences explaining their ranking. Be specific — reference actual signals: photos, documented hours, bio mentions, specific findings. Top candidates: highlight strengths. Bottom candidates: explain what they missed.

Return ONLY a valid JSON object mapping auPairNumber to explanation, no markdown fences:
{"COL2279373": "explanation...", ...}

CANDIDATES:
${candidateData}`;
}

// ─── Scoring Loop ─────────────────────────────────────────────────────────────

const hasAnthropicKey = !!process.env.ANTHROPIC_API_KEY;
if (!hasAnthropicKey) {
  console.warn("No ANTHROPIC_API_KEY — photo analysis will be skipped for uncached candidates.\n");
}

console.log(`Fetching and scoring ${SHORTLIST.length} candidates...\n`);

const results: RankedResult[] = [];

for (const candidate of SHORTLIST) {
  process.stdout.write(`  ${candidate.name} (${candidate.auPairNumber})... `);

  const profile = await fetchProfile(candidate.id) as Record<string, unknown>;

  const cachePath = join(PHOTO_CACHE_DIR, `${candidate.id}.json`);
  let photoAnalysis: PhotoAnalysisResult | null = null;
  if (existsSync(cachePath)) {
    photoAnalysis = JSON.parse(readFileSync(cachePath, "utf-8"));
    process.stdout.write("(photo cache hit) ");
  } else if (hasAnthropicKey) {
    const p = profile as { mediaFiles?: Array<{ file: { cfnUrl?: string } }>; profilePicture?: { cfnUrl?: string } };
    photoAnalysis = await analyzePhotos(p.mediaFiles ?? [], p.profilePicture, candidate.id);
    process.stdout.write("(photos analyzed) ");
  } else {
    process.stdout.write("(no photo analysis) ");
  }

  const { criterionResults, flags, composite } = scoreProfile(profile, photoAnalysis);
  results.push({ rank: 0, ...candidate, criterionResults, flags, composite });
  console.log(`composite: ${composite.toFixed(2)}`);
}

// ─── Filter out au pairs not interested in or already chatted with ────────────

const ignoreListYaml = readFileSync(join(__dirname, "ignore-list.yaml"), "utf-8");

const notInterestedAuPairNumbers = (yaml.load(ignoreListYaml) as { aupairNumbersToIgnore: string[] }).aupairNumbersToIgnore || [];
console.log('\nFiltering out candidates previously indicated as not interested or already chatted with...');
results.forEach(r => {
  if (notInterestedAuPairNumbers.includes(r.auPairNumber)) {
    r.composite = 0;
    r.flags.push("Previously indicated not interested");
    console.log(` ${r.name} (${r.auPairNumber}): ✗ Previously indicated not interested — score zeroed`);
  }
});


// ─── Sort & Rank ──────────────────────────────────────────────────────────────

results.sort((a, b) => b.composite - a.composite);
results.forEach((r, i) => { r.rank = i + 1; });


// ─── Availability Checking ────────────────────────────────────────────────────

const FOUND_MATCH_REASON = "This au pair has already found their match.";
const AVAILABILITY_BATCH = 10;
let nonMatchedFound = 0;
let checkedUpTo = 0;

console.log("\nChecking availability (until 10 non-matched found)...");

while (nonMatchedFound < 10 && checkedUpTo < results.length) {
  const batch = results.slice(checkedUpTo, checkedUpTo + AVAILABILITY_BATCH);
  checkedUpTo += batch.length;

  const availability = await checkProfilesAvailable(batch.map(r => r.id));

  for (const r of batch) {
    const av = availability[r.id];
    r.profileViewable = av?.available ?? false;
    r.availabilityReason = av?.reason;

    if (av?.reason === FOUND_MATCH_REASON) {
      r.composite = 0;
      console.log(`  #${r.rank} ${r.name} (${r.auPairNumber}): 💍 Found their match — score zeroed`);
    } else {
      nonMatchedFound++;
      if (av?.available) {
        console.log(`  #${r.rank} ${r.name} (${r.auPairNumber}): ✓ available`);
      } else {
        const reason = av?.reason ?? "unavailable";
        console.log(`  #${r.rank} ${r.name} (${r.auPairNumber}): ✗ ${reason} — adding to favorites`);
        try {
          await addToFavorites(r.id);
          console.log(`    → added to favorites`);
        } catch (e) {
          console.warn(`    → failed to favorite: ${e instanceof Error ? e.message : e}`);
        }
      }
    }
  }
}

console.log(`\nFound ${nonMatchedFound} non-matched candidate(s) after checking ${checkedUpTo}.`);

results.sort((a, b) => b.composite - a.composite);
results.forEach((r, i) => { r.rank = i + 1; });

// ─── Save Outputs ─────────────────────────────────────────────────────────────

const timestamp = new Date().toISOString();
const slug = timestamp.replace(/[:.]/g, "-").slice(0, 19);
mkdirSync(RESULTS_DIR, { recursive: true });
mkdirSync(NARRATIVES_DIR, { recursive: true });

writeFileSync(
  join(RESULTS_DIR, `results-${slug}.json`),
  JSON.stringify({ generatedAt: timestamp, candidates: results }, null, 2)
);
console.log(`\nSaved results to results/results-${slug}.json`);

const promptPath = join(NARRATIVES_DIR, `narratives-prompt-${slug}.txt`);
writeFileSync(promptPath, buildNarrativesPrompt(results));
console.log(`Saved prompt to narratives/narratives-prompt-${slug}.txt`);
console.log(`
The ranked results are in results/results-${slug}.json.
narratives/narratives-prompt-${slug}.txt is already human-readable — open it directly for a quick summary of every candidate without any extra steps.

To generate a full markdown report (optional — requires a Claude.ai or similar subscription):
  1. Paste narratives/narratives-prompt-${slug}.txt into claude.ai
  2. Save Claude's JSON response as narratives/narratives-${slug}.json
  3. Run: bun build-report.ts results/results-${slug}.json narratives/narratives-${slug}.json`);
