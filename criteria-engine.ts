import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── YAML Schema Types ────────────────────────────────────────────────────────

type SignalArrayMatch = {
  type: "array_match";
  field?: string;
  fields?: string[];
  values: string[];
  points_each: number;
  max: number;
};

type SignalBioKeywords = {
  type: "bio_keywords";
  fields: string[];
  keywords: string[];
  points_each: number;
  max: number;
};

type SignalArraySum = {
  type: "array_sum";
  field: string;
  subfield: string;
  full_credit_at: number;
  max: number;
};

type SignalArrayKeywordAny = {
  type: "array_keyword_any";
  field: string;
  subfield?: string;
  keywords: string[];
  max: number;
};

type SignalBioKeywordAny = {
  type: "bio_keyword_any";
  fields: string[];
  keywords: string[];
  max: number;
};

type Signal =
  | SignalArrayMatch
  | SignalBioKeywords
  | SignalArraySum
  | SignalArrayKeywordAny
  | SignalBioKeywordAny;

export type CriterionScore = {
  id: string;
  label: string;
  weight: number;
  type: "score";
  photo_weight?: number;
  photo?: { description: string };
  profile_signals?: { raw_max: number; items: Signal[] };
};

export type CriterionThreshold = {
  id: string;
  label: string;
  weight: number;
  type: "threshold";
  threshold: {
    field: string;
    parse_regex: string;
    minimum: number;
    score_multiplier: number;
    max_score: number;
  };
  flag_below_threshold: string;
};

export type CriterionPenalty = {
  id: string;
  label: string;
  weight: number;
  type: "penalty";
  photo?: { description: string };
  trigger: string;
  flag_message: string;
};

export type Criterion = CriterionScore | CriterionThreshold | CriterionPenalty;

// ─── Loader ───────────────────────────────────────────────────────────────────

let _cached: Criterion[] | null = null;

export function loadCriteria(): Criterion[] {
  if (_cached) return _cached;
  const raw = readFileSync(join(__dirname, "criteria.yaml"), "utf-8");
  const config = yaml.load(raw) as { criteria: Criterion[] };
  _cached = config.criteria;
  return _cached;
}

// ─── Field Access ─────────────────────────────────────────────────────────────

function getField(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((cur: unknown, key) => {
    if (cur == null || typeof cur !== "object") return undefined;
    return (cur as Record<string, unknown>)[key];
  }, obj);
}

// ─── Signal Scorers ───────────────────────────────────────────────────────────

function scoreSignal(
  signal: Signal,
  profile: Record<string, unknown>
): { points: number; note: string | null } {
  switch (signal.type) {
    case "array_match": {
      const fieldNames = signal.fields ?? (signal.field ? [signal.field] : []);
      const matched: string[] = [];
      for (const f of fieldNames) {
        const arr = getField(profile, f) as string[] | undefined;
        if (!arr) continue;
        for (const item of arr) {
          if (signal.values.some(v => item.toLowerCase().includes(v.toLowerCase()))) {
            if (!matched.includes(item)) matched.push(item);
          }
        }
      }
      const pts = Math.min(signal.max, matched.length * signal.points_each);
      return {
        points: pts,
        note: matched.length > 0 ? `${fieldNames.join("/")}: ${matched.join(", ")}` : null,
      };
    }

    case "bio_keywords": {
      const text = signal.fields
        .map(f => ((getField(profile, f) as string) ?? ""))
        .join(" ")
        .toLowerCase();
      const matched = signal.keywords.filter(kw => text.includes(kw.toLowerCase()));
      const pts = Math.min(signal.max, matched.length * signal.points_each);
      return {
        points: pts,
        note: matched.length > 0 ? `Bio keywords: ${matched.join(", ")}` : null,
      };
    }

    case "array_sum": {
      const arr = getField(profile, signal.field) as Array<Record<string, unknown>> | undefined;
      if (!arr?.length) return { points: 0, note: "No documented hours" };
      const total = arr.reduce((sum, item) => sum + (((item[signal.subfield] as number) ?? 0)), 0);
      const pts = Math.min(signal.max, (total / signal.full_credit_at) * signal.max);
      return {
        points: pts,
        note: `${total}h documented (full credit at ${signal.full_credit_at}h)`,
      };
    }

    case "array_keyword_any": {
      const arr = getField(profile, signal.field) as Array<unknown> | undefined;
      if (!arr?.length) return { points: 0, note: null };
      const found = arr.some(item => {
        const val = signal.subfield
          ? (((item as Record<string, unknown>)[signal.subfield] as string) ?? "")
          : ((item as string) ?? "");
        return signal.keywords.some(kw => val.toLowerCase().includes(kw.toLowerCase()));
      });
      return {
        points: found ? signal.max : 0,
        note: found ? `${signal.field} includes infant-age references` : null,
      };
    }

    case "bio_keyword_any": {
      const text = signal.fields
        .map(f => ((getField(profile, f) as string) ?? ""))
        .join(" ")
        .toLowerCase();
      const found = signal.keywords.some(kw => text.includes(kw.toLowerCase()));
      return {
        points: found ? signal.max : 0,
        note: found ? "Bio mentions infant/baby care" : null,
      };
    }
  }
}

// ─── Result Types ─────────────────────────────────────────────────────────────

export type CriterionResult = {
  id: string;
  label: string;
  weight: number;
  type: string;
  score: number;
  // score criteria
  profileScore?: number;
  photoScore?: number;
  notes: string[];
  // threshold criteria
  level?: number;
  raw?: string;
  meetsThreshold?: boolean;
  // penalty criteria
  detected?: boolean;
  confidence?: string;
  penaltyNote?: string;
  penaltyAmount?: number;
  // flags
  flag?: string;
};

// ─── Score One Criterion ──────────────────────────────────────────────────────

export function scoreCriterion(
  criterion: Criterion,
  profile: Record<string, unknown>,
  photoResult?: Record<string, unknown>
): CriterionResult {

  // ── Score ──
  if (criterion.type === "score") {
    const notes: string[] = [];

    let profileScore = 0;
    if (criterion.profile_signals) {
      const { raw_max, items } = criterion.profile_signals;
      let rawPts = 0;
      for (const signal of items) {
        const { points, note } = scoreSignal(signal, profile);
        rawPts += points;
        if (note) notes.push(note);
      }
      profileScore = Math.min(10, Math.round((rawPts / raw_max) * 10));
    }

    const photoData = photoResult?.[criterion.id] as { score?: number; evidence?: string[] } | undefined;
    const photoScore = photoData?.score ?? 0;
    if (photoData?.evidence?.length) notes.push(...photoData.evidence);

    const photoWeight = criterion.photo_weight ?? (criterion.photo ? 0.5 : 0);
    let score: number;
    if (criterion.photo && criterion.profile_signals) {
      score = Math.round(profileScore * (1 - photoWeight) + photoScore * photoWeight);
    } else if (criterion.photo) {
      score = photoScore;
    } else {
      score = profileScore;
    }

    return {
      id: criterion.id, label: criterion.label, weight: criterion.weight, type: "score",
      score, profileScore, photoScore, notes,
    };
  }

  // ── Threshold ──
  if (criterion.type === "threshold") {
    const { field, parse_regex, minimum, score_multiplier, max_score } = criterion.threshold;
    const raw = ((getField(profile, field) as string) ?? "");
    const match = raw.match(new RegExp(parse_regex, "i"));
    const value = match ? parseInt(match[1], 10) : 0;
    const score = Math.min(max_score, value * score_multiplier);
    const meetsThreshold = value >= minimum;
    const flag = !meetsThreshold
      ? criterion.flag_below_threshold.replace("{value}", String(value))
      : undefined;
    return {
      id: criterion.id, label: criterion.label, weight: criterion.weight, type: "threshold",
      score, level: value, raw, meetsThreshold, notes: [], flag,
    };
  }

  // ── Penalty ──
  if (criterion.type === "penalty") {
    const photoData = photoResult?.[criterion.id] as
      | { detected?: boolean; confidence?: string; note?: string }
      | undefined;
    const detected = photoData?.detected ?? false;
    const confidence = (photoData?.confidence as string) ?? "low";
    const triggered = detected && confidence !== "low";
    const penaltyAmount = triggered ? Math.abs(criterion.weight) : 0;
    const flag = triggered
      ? criterion.flag_message
          .replace("{confidence}", confidence)
          .replace("{detected}", String(detected))
      : undefined;
    return {
      id: criterion.id, label: criterion.label, weight: criterion.weight, type: "penalty",
      score: 0, detected, confidence, penaltyNote: photoData?.note, penaltyAmount, notes: [], flag,
    };
  }

  throw new Error(`Unknown criterion type: ${(criterion as { type: string }).type}`);
}

// ─── Score All Criteria ───────────────────────────────────────────────────────

export function scoreAll(
  criteria: Criterion[],
  profile: Record<string, unknown>,
  photoResult?: Record<string, unknown>
): { criterionResults: CriterionResult[]; flags: string[]; composite: number } {
  const criterionResults = criteria.map(c => scoreCriterion(c, profile, photoResult));
  const flags = criterionResults.filter(r => r.flag).map(r => r.flag!);
  const composite = criterionResults.reduce((sum, r) => {
    if (r.type === "score" || r.type === "threshold") return sum + r.score * r.weight;
    if (r.type === "penalty") return sum - (r.penaltyAmount ?? 0);
    return sum;
  }, 0);
  return { criterionResults, flags, composite };
}

// ─── Photo Prompt Builder ─────────────────────────────────────────────────────

export function buildPhotoPrompt(criteria: Criterion[], photoCount: number): string {
  const photoCriteria = criteria.filter(c => c.photo);

  const sections = photoCriteria.map((c, i) =>
    `DIMENSION ${i + 1} — ${c.label.toUpperCase()}\n${c.photo!.description.trim()}`
  );

  const responseShape = photoCriteria
    .map(c => {
      if (c.type === "score" || c.type === "threshold") {
        return `  "${c.id}": { "score": <0-10 integer>, "evidence": ["specific observations"] }`;
      }
      return `  "${c.id}": { "detected": <true/false>, "confidence": <"high"|"medium"|"low">, "note": "<one sentence>" }`;
    })
    .join(",\n");

  return `You are evaluating an au pair candidate's photo gallery across ${photoCriteria.length} dimensions. Analyze these ${photoCount} photo(s) carefully.

${sections.join("\n\n---\n\n")}

---
Return ONLY this JSON object, no additional text:
{
${responseShape}
}`;
}
