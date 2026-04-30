import { readFileSync, writeFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { loadCriteria } from "./criteria-engine.ts";
import type { CriterionResult } from "./criteria-engine.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

type RankedResult = {
  rank: number;
  name: string;
  auPairNumber: string;
  composite: number;
  criterionResults: CriterionResult[];
  flags: string[];
  profileViewable?: boolean;
  availabilityReason?: string;
};

function buildMarkdown(
  results: RankedResult[],
  narratives: Record<string, string>,
  timestamp: string
): string {
  const criteria = loadCriteria();
  const medals = ["🥇", "🥈", "🥉"];

  const weightRows = criteria.map(c => {
    if (c.type === "penalty") return `| ${c.label} | penalty |`;
    return `| ${c.label} | ${(c.weight * 100).toFixed(0)}% |`;
  });

  const lines: string[] = [
    `# Au Pair Rankings`,
    `_Generated: ${new Date(timestamp).toLocaleString()}_`,
    "",
    "## Scoring weights",
    "| Criteria | Weight |",
    "|---|---|",
    ...weightRows,
    "",
    "---",
    "",
  ];

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const medal = medals[i] ?? `#${i + 1}`;

    const viewBadge =
      r.profileViewable === true ? "✅ Available"
      : r.profileViewable === false && r.availabilityReason === "This au pair has already found their match." ? "💍 Found their match"
      : r.profileViewable === false ? `⏳ ${r.availabilityReason ?? "Unavailable"}`
      : "";

    lines.push(`## ${medal} ${r.name} (${r.auPairNumber})`);
    lines.push(`**Overall: ${r.composite.toFixed(1)}/10**${viewBadge ? `  ·  ${viewBadge}` : ""}`);
    lines.push("");
    lines.push(narratives[r.auPairNumber] ?? "_No narrative generated._");
    lines.push("");

    // Score table — one row per criterion
    lines.push("| Category | Score | Detail |");
    lines.push("|---|---|---|");

    for (const c of criteria) {
      const cr = r.criterionResults?.find(x => x.id === c.id);
      if (!cr) continue;

      if (cr.type === "score") {
        const detail = [
          cr.profileScore != null ? `Text: ${cr.profileScore}` : null,
          cr.photoScore != null ? `Photos: ${cr.photoScore}` : null,
        ].filter(Boolean).join(", ");
        lines.push(`| ${cr.label} | ${cr.score}/10 | ${detail || "—"} |`);
      } else if (cr.type === "threshold") {
        const status = cr.meetsThreshold ? "✓" : "✗ below threshold";
        lines.push(`| ${cr.label} | Level ${cr.level} | ${cr.raw} ${status} |`);
      } else if (cr.type === "penalty") {
        const detected = cr.detected && cr.confidence !== "low";
        const detail = detected
          ? `⚠️ Detected (${cr.confidence} confidence)`
          : "Not detected ✓";
        lines.push(`| ${cr.label} | — | ${detail} |`);
      }
    }

    if (r.flags?.length > 0) {
      lines.push("");
      lines.push(`> ⚠️ ${r.flags.join(" · ")}`);
    }

    lines.push("");
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

// ─── Main ─────────────────────────────────────────────────────────────────────

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

const narratives = JSON.parse(readFileSync(narrativesFile, "utf-8")) as Record<string, string>;
const markdown = buildMarkdown(candidates, narratives, generatedAt);
const mdPath = resultsFile.replace(/\.json$/, ".md");
writeFileSync(mdPath, markdown);
console.log(`Saved report to ${mdPath}`);
