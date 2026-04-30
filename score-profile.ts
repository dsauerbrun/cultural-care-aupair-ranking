import { loadCriteria, scoreAll } from "./criteria-engine.ts";
import type { CriterionResult } from "./criteria-engine.ts";
import type { PhotoAnalysisResult } from "./analyze-photos.ts";

export type { CriterionResult };

export type ProfileScores = {
  criterionResults: CriterionResult[];
  flags: string[];
  composite: number;
};

export function scoreProfile(
  profile: Record<string, unknown>,
  photoAnalysis?: PhotoAnalysisResult | null
): ProfileScores {
  const criteria = loadCriteria();
  return scoreAll(criteria, profile, photoAnalysis ?? undefined);
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

  const profile = (await fetchProfile(id)) as Record<string, unknown> & {
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

  const scores = scoreProfile(profile as Record<string, unknown>, photoAnalysis);
  console.log(JSON.stringify(scores, null, 2));
}
