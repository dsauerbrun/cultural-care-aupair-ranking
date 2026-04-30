import Anthropic from "@anthropic-ai/sdk";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { loadCriteria, buildPhotoPrompt } from "./criteria-engine.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = join(__dirname, "photo-analysis");

// Opaque map from criterion id → photo result for that criterion
export type PhotoAnalysisResult = Record<string, unknown>;

const MAX_PHOTOS = 10;

export async function analyzePhotos(
  mediaFiles: Array<{ file: { cfnUrl?: string | null; metaType?: string | null } }>,
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
  const criteria = loadCriteria();

  function cacheAndReturn(result: PhotoAnalysisResult): PhotoAnalysisResult {
    if (cacheId) {
      mkdirSync(CACHE_DIR, { recursive: true });
      writeFileSync(join(CACHE_DIR, `${cacheId}.json`), JSON.stringify(result, null, 2));
    }
    return result;
  }

  // Collect photo URLs
  const urls: string[] = [];
  for (const m of mediaFiles) {
    if (m.file?.cfnUrl) urls.push(m.file.cfnUrl);
  }
  if (profilePicture?.cfnUrl && !urls.includes(profilePicture.cfnUrl)) {
    urls.push(profilePicture.cfnUrl);
  }

  let toAnalyze = urls.slice(0, MAX_PHOTOS);

  const emptyResult = (): PhotoAnalysisResult => {
    const result: PhotoAnalysisResult = {};
    for (const c of criteria) {
      if (!c.photo) continue;
      if (c.type === "penalty") {
        result[c.id] = { detected: false, confidence: "low", note: "No usable photos" };
      } else {
        result[c.id] = { score: 0, evidence: ["No usable photos"] };
      }
    }
    return result;
  };

  if (toAnalyze.length === 0) {
    return cacheAndReturn({ ...emptyResult(), photoCount: 0, analyzedCount: 0 });
  }

  let response: Awaited<ReturnType<typeof client.messages.create>> | undefined;

  while (true) {
    try {
      response = await client.messages.create({
        model: "claude-haiku-4-5",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: [
              ...toAnalyze.map(url => ({
                type: "image" as const,
                source: { type: "url" as const, url },
              })),
              {
                type: "text" as const,
                text: buildPhotoPrompt(criteria, toAnalyze.length),
              },
            ],
          },
        ],
      });
      break;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      const status = (e as { status?: number }).status;
      if (status === 400) {
        const indexMatch = msg.match(/content\.(\d+)\.image/);
        const badIndex = indexMatch ? parseInt(indexMatch[1]) : toAnalyze.length - 1;
        toAnalyze = toAnalyze.filter((_, i) => i !== badIndex);
        if (toAnalyze.length === 0) break;
        continue;
      }
      throw e;
    }
  }

  if (!response) {
    return cacheAndReturn({
      ...emptyResult(),
      photoCount: urls.length,
      analyzedCount: 0,
    });
  }

  const textBlock = response.content.find(b => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Unexpected response format from Claude vision");
  }

  const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Could not parse JSON from photo analysis response: ${textBlock.text}`);
  }

  const parsed = JSON.parse(jsonMatch[0]) as Record<string, unknown>;
  const result: PhotoAnalysisResult = {
    ...parsed,
    photoCount: urls.length,
    analyzedCount: toAnalyze.length,
  };

  return cacheAndReturn(result);
}

// CLI: bun analyze-photos.ts <au-pair-id>
if (import.meta.main) {
  const { fetchProfile } = await import("./fetch-profile.ts");

  const id = process.argv[2];
  if (!id) {
    console.error("Usage: bun analyze-photos.ts <au-pair-id>");
    process.exit(1);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Set ANTHROPIC_API_KEY env var before running.");
    process.exit(1);
  }

  const profile = (await fetchProfile(id)) as {
    mediaFiles?: Array<{ file: { cfnUrl?: string; metaType?: string } }>;
    profilePicture?: { cfnUrl?: string };
    firstName?: string;
    auPairNumber?: string;
  };

  console.log(`Analyzing photos for ${profile.firstName ?? id} (${profile.auPairNumber ?? "unknown"})...`);
  const result = await analyzePhotos(profile.mediaFiles ?? [], profile.profilePicture, id);
  console.log(JSON.stringify(result, null, 2));
}
