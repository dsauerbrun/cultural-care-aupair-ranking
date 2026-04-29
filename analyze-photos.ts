import Anthropic from "@anthropic-ai/sdk";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = join(__dirname, "photo-analysis");

export interface PhotoAnalysisResult {
  outdoor: {
    score: number; // 0–10
    hasActivePhoto: boolean;
    evidence: string[];
  };
  infantCare: {
    score: number; // 0–10
    hasBabyPhoto: boolean;
    evidence: string[];
  };
  acrylicNails: {
    detected: boolean;
    confidence: "high" | "medium" | "low";
    note: string;
  };
  photoCount: number;
  analyzedCount: number;
}

const MAX_PHOTOS = 10;

export async function analyzePhotos(
  mediaFiles: Array<{
    file: { cfnUrl?: string | null; metaType?: string | null };
  }>,
  profilePicture?: { cfnUrl?: string | null } | null,
  cacheId?: string
): Promise<PhotoAnalysisResult> {
  if (cacheId) {
    const cachePath = join(CACHE_DIR, `${cacheId}.json`);
    if (existsSync(cachePath)) {
      return JSON.parse(readFileSync(cachePath, "utf-8")) as PhotoAnalysisResult;
    }
  }

  const client = new Anthropic();

  // Collect unique photo URLs: gallery first (higher signal), then profile pic
  const urls: string[] = [];
  for (const m of mediaFiles) {
    if (m.file?.cfnUrl) {
      urls.push(m.file.cfnUrl);
    }
  }
  if (profilePicture?.cfnUrl && !urls.includes(profilePicture.cfnUrl)) {
    urls.push(profilePicture.cfnUrl);
  }

  let toAnalyze = urls.slice(0, MAX_PHOTOS);

  if (toAnalyze.length === 0) {
    return {
      outdoor: { score: 0, hasActivePhoto: false, evidence: ["No photos available"] },
      infantCare: { score: 0, hasBabyPhoto: false, evidence: ["No photos available"] },
      acrylicNails: { detected: false, confidence: "low", note: "No photos available" },
      photoCount: 0,
      analyzedCount: 0,
    };
  }

  // Retry loop: if Claude rejects an image as invalid format, drop the last
  // image and try again until we find a valid set or run out of images.
  let response;
  while (true) {
    try {
      response = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          ...toAnalyze.map((url) => ({
            type: "image" as const,
            source: { type: "url" as const, url },
          })),
          {
            type: "text" as const,
            text: `You are evaluating an au pair candidate's photo gallery across three dimensions. Analyze these ${toAnalyze.length} photo(s) carefully.

---
DIMENSION 1 — OUTDOOR/ACTIVE LIFESTYLE (fit for Boulder, CO: hiking, cycling, skiing, climbing)

HIGH SIGNAL (7-10): hiking trails, camping, outdoor rock climbing, skiing/snowboarding, mountain biking, trail running, indoor climbing gym with harness, competitive sport in action, multiple active photos
MEDIUM SIGNAL (4-6): nature/park/beach settings, gym workouts, athletic gear in use, dance or gymnastics in practice
LOW SIGNAL (1-3): selfie in front of a landmark, sports uniform but no action
NO SIGNAL (0): posed indoor selfies, studio portraits, café shots

---
DIMENSION 2 — INFANT/BABY CARE SIGNALS (host family has a 6-month-old)

Score 8-10: clearly holding or actively caring for an infant/baby, looks comfortable and nurturing
Score 5-7: photo with a baby/toddler nearby, warm interaction visible
Score 2-4: photo with young children (not infants), caring body language
Score 0-1: no children visible, or children only in background with no interaction

---
DIMENSION 3 — ACRYLIC NAILS

Look at hand/nail visibility across all photos. Acrylic nails are typically: long, uniform, often decorated or painted, unnatural-looking tips.
- detected: true/false
- confidence: "high" (clearly visible long acrylic nails), "medium" (likely but not certain), "low" (hands not visible or nails too small to judge)
- note: one sentence describing what you see

---
Return ONLY this JSON object, no additional text:
{
  "outdoor": {
    "score": <0-10 integer>,
    "hasActivePhoto": <true if score >= 4>,
    "evidence": [<up to 4 specific observations>]
  },
  "infantCare": {
    "score": <0-10 integer>,
    "hasBabyPhoto": <true if score >= 5>,
    "evidence": [<up to 3 specific observations>]
  },
  "acrylicNails": {
    "detected": <boolean>,
    "confidence": <"high"|"medium"|"low">,
    "note": <one sentence>
  }
}`,
          },
        ],
      },
    ],
      });
      break; // success
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      const status = (e as {status?: number}).status;
      if (status === 400) {
        // Extract the exact index Claude rejected; fall back to last image
        const indexMatch = msg.match(/content\.(\d+)\.image/);
        const badIndex = indexMatch ? parseInt(indexMatch[1]) : toAnalyze.length - 1;
        toAnalyze = toAnalyze.filter((_, i) => i !== badIndex);
        if (toAnalyze.length === 0) break; // no valid images left — return empty result
        continue;
      }
      throw e;
    }
  }

  if (!response) {
    return {
      outdoor: { score: 0, hasActivePhoto: false, evidence: ["No usable photos — all were rejected by the API"] },
      infantCare: { score: 0, hasBabyPhoto: false, evidence: ["No usable photos"] },
      acrylicNails: { detected: false, confidence: "low", note: "No usable photos" },
      photoCount: urls.length,
      analyzedCount: 0,
    };
  }

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Unexpected response format from Claude vision");
  }

  const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Could not parse JSON from response: ${textBlock.text}`);
  }

  const parsed = JSON.parse(jsonMatch[0]) as Omit<PhotoAnalysisResult, "photoCount" | "analyzedCount">;

  const result: PhotoAnalysisResult = {
    ...parsed,
    photoCount: urls.length,
    analyzedCount: toAnalyze.length,
  };

  if (cacheId) {
    mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(join(CACHE_DIR, `${cacheId}.json`), JSON.stringify(result, null, 2));
  }

  return result;
}

// CLI: bun analyze-photos.ts <au-pair-id>
if (import.meta.main) {
  const { fetchProfile } = await import("./fetch-profile.ts");

  const id = process.argv[2];
  if (!id) {
    console.error("Usage: bun analyze-photos.ts <au-pair-id>");
    process.exit(1);
  }

  const token = process.env.CULTURAL_CARE_TOKEN;
  if (!token) {
    console.error("Set CULTURAL_CARE_TOKEN env var before running.");
    process.exit(1);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Set ANTHROPIC_API_KEY env var before running.");
    process.exit(1);
  }

  const profile = (await fetchProfile(id, token)) as {
    mediaFiles?: Array<{ file: { cfnUrl?: string; metaType?: string } }>;
    profilePicture?: { cfnUrl?: string };
    firstName?: string;
    auPairNumber?: string;
  };

  console.log(
    `Analyzing photos for ${profile.firstName ?? id} (${profile.auPairNumber ?? "unknown"})...`
  );
  const result = await analyzePhotos(
    profile.mediaFiles ?? [],
    profile.profilePicture,
    id
  );
  console.log(JSON.stringify(result, null, 2));
}
