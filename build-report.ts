import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type { ProfileScores } from "./score-profile.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

type RankedResult = {
  rank: number;
  name: string;
  auPairNumber: string;
  composite: number;
  scores: ProfileScores;
};

function buildMarkdown(results: RankedResult[], narratives: Record<string, string>, timestamp: string): string {
  const medals = ["🥇", "🥈", "🥉"];
  const lines: string[] = [
    `# Au Pair Rankings — Boulder, CO`,
    `_Generated: ${new Date(timestamp).toLocaleString()}_`,
    "",
    "## Scoring weights",
    "| Criteria | Weight |",
    "|---|---|",
    "| Infant care experience | 40% |",
    "| Outdoor/active lifestyle | 35% |",
    "| English level (threshold: 4) | 20% |",
    "| Acrylic nails | penalty |",
    "",
    "---",
    "",
  ];

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const s = r.scores;
    const medal = medals[i] ?? `#${i + 1}`;
    const nailsStr = s.acrylicNails.detected && s.acrylicNails.confidence !== "low"
      ? `⚠️ Detected (${s.acrylicNails.confidence} confidence)`
      : "Not detected ✓";

    lines.push(`## ${medal} ${r.name} (${r.auPairNumber})`);
    lines.push(`**Overall: ${r.composite.toFixed(1)}/10**`);
    lines.push("");
    lines.push(narratives[r.auPairNumber] ?? "_No narrative generated._");
    lines.push("");
    lines.push("| Category | Score | Detail |");
    lines.push("|---|---|---|");
    lines.push(`| Infant care | ${s.infantCare.score}/10 | ${s.infantCare.breakdown.hoursWithInfants}h documented, photo score ${s.infantCare.breakdown.photoScore}/10 |`);
    lines.push(`| Outdoor | ${s.outdoor.score}/10 | Text: ${s.outdoor.textScore}, Photos: ${s.outdoor.photoScore} |`);
    lines.push(`| English | Level ${s.englishLevel.level} | ${s.englishLevel.raw} |`);
    lines.push(`| Acrylic nails | — | ${nailsStr} |`);
    if (s.flags.length > 0) {
      lines.push("");
      lines.push(`> ⚠️ ${s.flags.join(" · ")}`);
    }
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

// --- Main ---
const resultsFile = process.argv[2];
const narrativesFile = process.argv[3];

if (!resultsFile || !narrativesFile) {
  console.error("Usage: bun build-report.ts <results-file.json> <narratives-file.json>");
  process.exit(1);
}

const { generatedAt, candidates } = JSON.parse(readFileSync(resultsFile, "utf-8")) as {
  generatedAt: string;
  candidates: RankedResult[];
};

const narrativesRaw = JSON.parse(readFileSync(narrativesFile, "utf-8")) as Record<string, string>;

const markdown = buildMarkdown(candidates, narrativesRaw, generatedAt);

// Write markdown alongside the results JSON, replacing .json with .md
const mdPath = resultsFile.replace(/\.json$/, ".md");
writeFileSync(mdPath, markdown);

console.log(`Saved report to results-${slug}.md`);
