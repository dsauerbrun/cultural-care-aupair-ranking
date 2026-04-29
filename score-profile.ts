import type { PhotoAnalysisResult } from "./analyze-photos.ts";

export interface ProfileScores {
  outdoor: {
    score: number; // 0–10 holistic
    textScore: number; // 0–10 from profile text/traits/sports
    photoScore: number; // 0–10 from photo analysis
    hasActivePhoto: boolean;
    textEvidence: string[];
    photoEvidence: string[];
  };
  infantCare: {
    score: number; // 0–10 holistic
    breakdown: {
      hoursWithInfants: number;
      experienceAgesIncludeInfants: boolean;
      prefersInfantAges: boolean;
      bioMentionsInfants: boolean;
      photoScore: number;
    };
    notes: string[];
  };
  englishLevel: {
    raw: string;
    level: number;
    meetsThreshold: boolean; // >= 4
    score: number; // 0–10
  };
  acrylicNails: {
    detected: boolean;
    confidence: "high" | "medium" | "low";
    penalty: number; // 0 or -1
    note: string;
  };
  flags: string[];
}

type Profile = {
  interview?: { englishProficiencyLevel?: string } | null;
  childcareExperiences?: Array<{
    agesOfChildren?: string | null;
    infantCareHours?: number | null;
    childcareHours?: number | null;
  }> | null;
  preferredAgeGroupToCareFor?: string[] | null;
  aboutChildcareExperience?: string | null;
  aboutSelfAndInterests?: string | null;
  WhyBecomeAuPair?: string | null;
  otherInterests?: string | null;
  sports?: string[] | null;
  personalityTraits?: string[] | null;
  social?: string[] | null;
  relaxing?: string[] | null;
};

// ---------- Outdoor scoring ----------

const OUTDOOR_TRAITS = ["Active", "Adventurous", "Athletic", "Energetic"];
const OUTDOOR_SPORTS = [
  "Hiking", "Running", "Cycling", "Skiing", "Swimming", "Water sports",
  "Soccer", "Basketball", "Volleyball", "Tennis", "Skateboarding",
  "Roller skating", "Horseback riding", "Martial arts", "Gymnastics",
  "Sailing", "Fishing", "Golf", "Pickleball",
];
const OUTDOOR_LEISURE = ["Camping", "Walking", "Gardening"];
const OUTDOOR_BIO_KEYWORDS = [
  "outdoor", "nature", "hik", "mountain", "gym", "fitness", "sport",
  "active", "adventur", "walk", "run", "bik", "cycl", "camp", "explor",
  "travel", "park", "beach", "wild", "aerial silk", "cheer", "capoeira",
  "gymnastic", "climb", "ski", "snowboard", "surf",
];

function scoreOutdoorFromText(profile: Profile): { score: number; evidence: string[] } {
  const evidence: string[] = [];
  let pts = 0;

  // Personality traits (×2 each, max 8 pts from traits)
  const matchedTraits = (profile.personalityTraits ?? []).filter((t) =>
    OUTDOOR_TRAITS.some((ot) => t.toLowerCase().includes(ot.toLowerCase()))
  );
  if (matchedTraits.length > 0) {
    pts += Math.min(8, matchedTraits.length * 2);
    evidence.push(`Traits: ${matchedTraits.join(", ")}`);
  }

  // Sports interests (×1 each, max 4 pts)
  const matchedSports = (profile.sports ?? []).filter((s) =>
    OUTDOOR_SPORTS.some((os) => s.toLowerCase().includes(os.toLowerCase()))
  );
  if (matchedSports.length > 0) {
    pts += Math.min(4, matchedSports.length);
    evidence.push(`Sports: ${matchedSports.join(", ")}`);
  }

  // Outdoor leisure (×1 each, max 2 pts)
  const allInterests = [
    ...(profile.sports ?? []),
    ...(profile.social ?? []),
    ...(profile.relaxing ?? []),
  ];
  const matchedLeisure = allInterests.filter((i) =>
    OUTDOOR_LEISURE.some((ol) => i.toLowerCase().includes(ol.toLowerCase()))
  );
  if (matchedLeisure.length > 0) {
    pts += Math.min(2, matchedLeisure.length);
    evidence.push(`Leisure: ${matchedLeisure.join(", ")}`);
  }

  // Bio keywords (×1 per unique match, max 4 pts)
  const bioText = [
    profile.aboutSelfAndInterests,
    profile.WhyBecomeAuPair,
    profile.otherInterests,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const matchedKeywords = OUTDOOR_BIO_KEYWORDS.filter((kw) => bioText.includes(kw));
  if (matchedKeywords.length > 0) {
    pts += Math.min(4, matchedKeywords.length);
    evidence.push(`Bio keywords: ${matchedKeywords.join(", ")}`);
  }

  // Normalize to 0–10 (max possible raw pts is 18)
  return { score: Math.min(10, Math.round((pts / 18) * 10)), evidence };
}

// ---------- Infant care scoring ----------

const INFANT_KEYWORDS = [
  "infant", "newborn", "baby", "babies", "0 -", "0-", "3 - 11 months",
  "3-11 months", "6 month", "3 month", "11 month",
];

function infantCareHoursTotal(experiences: Profile["childcareExperiences"]): number {
  if (!experiences) return 0;
  return experiences.reduce((sum, e) => sum + (e.infantCareHours ?? 0), 0);
}

function experienceAgesIncludeInfants(experiences: Profile["childcareExperiences"]): boolean {
  if (!experiences) return false;
  return experiences.some((e) =>
    INFANT_KEYWORDS.some((kw) => (e.agesOfChildren ?? "").toLowerCase().includes(kw))
  );
}

function prefersInfantAges(preferred: string[] | null | undefined): boolean {
  if (!preferred) return false;
  return preferred.some((age) =>
    INFANT_KEYWORDS.some((kw) => age.toLowerCase().includes(kw.toLowerCase()))
  );
}

function bioMentionsInfants(profile: Profile): boolean {
  const text = [
    profile.aboutChildcareExperience,
    profile.aboutSelfAndInterests,
    profile.WhyBecomeAuPair,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return INFANT_KEYWORDS.some((kw) => text.includes(kw.toLowerCase()));
}

// ---------- English level ----------

function parseEnglishLevel(raw: string | null | undefined): number {
  if (!raw) return 0;
  const match = raw.match(/level\s*(\d)/i);
  return match ? parseInt(match[1], 10) : 0;
}

// ---------- Main scorer ----------

export function scoreProfile(
  profile: Profile,
  photoAnalysis?: PhotoAnalysisResult | null
): ProfileScores {
  const flags: string[] = [];

  // --- Outdoor (holistic) ---
  const { score: textOutdoor, evidence: textOutdoorEvidence } = scoreOutdoorFromText(profile);
  const photoOutdoor = photoAnalysis?.outdoor.score ?? 0;
  // Average text + photo; if either is strong (>=7) don't let the other drag it below 5
  const rawOutdoor = (textOutdoor + photoOutdoor) / 2;
  const outdoorScore = Math.min(
    10,
    Math.round(Math.max(rawOutdoor, Math.max(textOutdoor, photoOutdoor) >= 7 ? 5 : 0))
  );
  const outdoor: ProfileScores["outdoor"] = {
    score: outdoorScore,
    textScore: textOutdoor,
    photoScore: photoOutdoor,
    hasActivePhoto: photoAnalysis?.outdoor.hasActivePhoto ?? false,
    textEvidence: textOutdoorEvidence,
    photoEvidence: photoAnalysis?.outdoor.evidence ?? [],
  };

  // --- English level ---
  const rawEnglish = profile.interview?.englishProficiencyLevel ?? null;
  const englishLevelNum = parseEnglishLevel(rawEnglish);
  const englishScore = Math.min(10, englishLevelNum * 2);
  if (englishLevelNum < 4) flags.push(`English level ${englishLevelNum} — below threshold of 4`);
  const englishLevel: ProfileScores["englishLevel"] = {
    raw: rawEnglish ?? "unknown",
    level: englishLevelNum,
    meetsThreshold: englishLevelNum >= 4,
    score: englishScore,
  };

  // --- Infant care (holistic) ---
  const infantHours = infantCareHoursTotal(profile.childcareExperiences);
  const expAgesInfants = experienceAgesIncludeInfants(profile.childcareExperiences);
  const prefersInfants = prefersInfantAges(profile.preferredAgeGroupToCareFor);
  const bioMentions = bioMentionsInfants(profile);
  const photoInfantScore = photoAnalysis?.infantCare.score ?? 0;
  const infantNotes: string[] = [];
  let infantPts = 0;

  // Documented hours with infants (up to 4 pts, full at 500h)
  if (infantHours > 0) {
    infantPts += Math.min(4, (infantHours / 500) * 4);
    infantNotes.push(`${infantHours}h documented infant care hours`);
  } else {
    infantNotes.push("No documented infant care hours");
    flags.push("No documented infant care hours — verify experience with babies");
  }

  // Experience references mention infant ages (up to 1 pt)
  if (expAgesInfants) {
    infantPts += 1;
    infantNotes.push("Reference experience lists infant ages");
  }

  // Applied preferring infant ages (up to 2 pts)
  if (prefersInfants) {
    infantPts += 2;
    infantNotes.push("Opted into infant age groups on their application");
  }

  // Bio mentions infants (up to 1 pt)
  if (bioMentions) {
    infantPts += 1;
    infantNotes.push("Bio mentions infant/baby care experience");
  }

  // Photo evidence (up to 2 pts)
  infantPts += (photoInfantScore / 10) * 2;
  if (photoAnalysis?.infantCare.hasBabyPhoto) {
    infantNotes.push(...photoAnalysis.infantCare.evidence);
  }

  const infantCare: ProfileScores["infantCare"] = {
    score: Math.min(10, Math.round(infantPts)),
    breakdown: {
      hoursWithInfants: infantHours,
      experienceAgesIncludeInfants: expAgesInfants,
      prefersInfantAges: prefersInfants,
      bioMentionsInfants: bioMentions,
      photoScore: photoInfantScore,
    },
    notes: infantNotes,
  };

  // --- Acrylic nails (photo-only — purely visual) ---
  const nailsDetected = photoAnalysis?.acrylicNails.detected ?? false;
  const nailsConfidence = photoAnalysis?.acrylicNails.confidence ?? "low";
  const nailsPenalty = nailsDetected && nailsConfidence !== "low" ? -1 : 0;
  if (nailsDetected && nailsConfidence !== "low") {
    flags.push(`Acrylic nails detected (${nailsConfidence} confidence) — harder to keep clean with infant care`);
  }
  const acrylicNails: ProfileScores["acrylicNails"] = {
    detected: nailsDetected,
    confidence: nailsConfidence,
    penalty: nailsPenalty,
    note: photoAnalysis?.acrylicNails.note ?? "No photo data",
  };

  return { outdoor, infantCare, englishLevel, acrylicNails, flags };
}

// CLI: bun score-profile.ts <au-pair-id>
if (import.meta.main) {
  const { fetchProfile } = await import("./fetch-profile.ts");
  const { analyzePhotos } = await import("./analyze-photos.ts");
  const { existsSync, readFileSync } = await import("fs");
  const { join, dirname } = await import("path");
  const { fileURLToPath } = await import("url");

  const __dirname = dirname(fileURLToPath(import.meta.url));

  const id = process.argv[2];
  if (!id) {
    console.error("Usage: bun score-profile.ts <au-pair-id>");
    process.exit(1);
  }

  const token = process.env.CULTURAL_CARE_TOKEN;
  if (!token) {
    console.error("Set CULTURAL_CARE_TOKEN env var before running.");
    process.exit(1);
  }

  const profile = (await fetchProfile(id, token)) as Profile & {
    firstName?: string;
    auPairNumber?: string;
    mediaFiles?: Array<{ file: { cfnUrl?: string } }>;
    profilePicture?: { cfnUrl?: string };
  };

  console.log(`Scoring ${profile.firstName ?? id} (${profile.auPairNumber ?? "unknown"})...`);

  const cachePath = join(__dirname, "photo-analysis", `${id}.json`);
  let photoAnalysis: PhotoAnalysisResult | null = null;
  if (existsSync(cachePath)) {
    photoAnalysis = JSON.parse(readFileSync(cachePath, "utf-8"));
    console.log("Using cached photo analysis.");
  } else if (process.env.ANTHROPIC_API_KEY) {
    console.log("Running photo analysis...");
    photoAnalysis = await analyzePhotos(profile.mediaFiles ?? [], profile.profilePicture, id);
  } else {
    console.log("No ANTHROPIC_API_KEY — skipping photo analysis.");
  }

  const scores = scoreProfile(profile, photoAnalysis);
  console.log(JSON.stringify(scores, null, 2));
}
