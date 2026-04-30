import { writeFileSync, mkdirSync, readdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { getToken } from "./get-token.ts";
import { findUniqueItems } from "./listcompare.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const AUPAIRS_FILE = join(__dirname, "aupairs.json");
const RESPONSES_DIR = join(__dirname, "au-pair-filter-responses");

const SEARCH_URL =
  "https://4bzk4o198j.execute-api.us-east-1.amazonaws.com/prod/v2/matching/search/au-pairs?pageSize=1000";

const SEARCH_BODY = {
  earliestTravelDate: "2026-08-07",
  latestTravelDate: "2026-09-25",
  ages: ["21 - 23", "24+"],
  homeCountry: [
    "AR","AU","AT","BE","BR","CA","CL","CO","HR","CZ","DK","EE","EC","FI",
    "FR","DE","GR","HU","IE","IT","LV","LT","MX","NL","NZ","NO","PA","PT",
    "SK","SI","SE","CH","TH","UY",
  ],
  genderIdentity: ["Female"],
  religion: [
    "Agnostic","Atheist","Buddhist","Catholic","Christian","Hindu","Jewish",
    "Spiritual","Other","Not religious",
  ],
  okToSuperviseSwimmingChildren: false,
  livedAwayFromHome: false,
  okToLiveSingleParent: false,
};

export async function fetchAupairs(): Promise<object[]> {
  const token = await getToken();

  const res = await fetch(SEARCH_URL, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SEARCH_BODY),
  });

  if (res.status === 401) {
    // Force-refresh token and retry once
    const freshToken = await getToken(true);
    const retry = await fetch(SEARCH_URL, {
      method: "POST",
      headers: {
        Authorization: freshToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SEARCH_BODY),
    });
    if (!retry.ok) throw new Error(`Search failed after token refresh: ${retry.status}`);
    return parseResponse(await retry.json());
  }

  if (!res.ok) throw new Error(`Search endpoint returned ${res.status}: ${await res.text()}`);
  return parseResponse(await res.json());
}

function parseResponse(data: unknown): object[] {
  if (Array.isArray(data)) return data;
  const d = data as Record<string, unknown>;
  const list = d.items ?? Object.values(d).find(Array.isArray);
  if (!Array.isArray(list)) throw new Error(`Unexpected search response shape: ${JSON.stringify(Object.keys(d))}`);
  return list as object[];
}

const AVAILABILITY_URL =
  "https://4bzk4o198j.execute-api.us-east-1.amazonaws.com/prod/matching/search/au-pairs/available";

export type AvailabilityResult = {
  available: boolean;
  isVisible: boolean;
  reason?: string;
};

const MATCHED_CACHE_FILE = join(__dirname, "matched-aupairs.json");
const FOUND_MATCH_REASON = "This au pair has already found their match.";

function loadMatchedCache(): Set<string> {
  try {
    const data = JSON.parse(readFileSync(MATCHED_CACHE_FILE, "utf-8")) as string[];
    return new Set(data);
  } catch {
    return new Set();
  }
}

function saveMatchedCache(matched: Set<string>): void {
  writeFileSync(MATCHED_CACHE_FILE, JSON.stringify([...matched], null, 2));
}

export async function checkProfilesAvailable(
  ids: string[]
): Promise<Record<string, AvailabilityResult>> {
  const matchedCache = loadMatchedCache();

  // Pre-fill results for already-cached matched candidates
  const results: Record<string, AvailabilityResult> = {};
  const toCheck: string[] = [];

  for (const id of ids) {
    if (matchedCache.has(id)) {
      results[id] = { available: false, isVisible: false, reason: FOUND_MATCH_REASON };
    } else {
      toCheck.push(id);
    }
  }

  if (toCheck.length === 0) return results;

  const token = await getToken();
  const res = await fetch(AVAILABILITY_URL, {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
    body: JSON.stringify({ auPairLoginIds: toCheck }),
  });
  if (!res.ok) throw new Error(`Availability check failed: ${res.status}`);
  const data = await res.json() as {
    auPairs: Array<{ auPairLoginId: string; available: boolean; isVisible: boolean; reason?: string }>;
  };

  let cacheUpdated = false;
  for (const ap of data.auPairs) {
    results[ap.auPairLoginId] = {
      available: ap.available,
      isVisible: ap.isVisible,
      reason: ap.reason,
    };
    if (ap.reason === FOUND_MATCH_REASON) {
      matchedCache.add(ap.auPairLoginId);
      cacheUpdated = true;
    }
  }

  if (cacheUpdated) saveMatchedCache(matchedCache);
  return results;
}

export function saveAndCompare(aupairs: object[]): void {
  const payload = JSON.stringify({ total: aupairs.length, items: aupairs }, null, 2);

  // Save to aupairs.json
  writeFileSync(AUPAIRS_FILE, payload);

  // Save timestamped copy to au-pair-filter-responses/
  mkdirSync(RESPONSES_DIR, { recursive: true });
  const slug = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const newFilename = `response-${slug}.json`;
  writeFileSync(join(RESPONSES_DIR, newFilename), payload);
  console.log(`Saved ${aupairs.length} candidates → aupairs.json + au-pair-filter-responses/${newFilename}`);

  // Find the most recent previous response to compare against
  const previous = readdirSync(RESPONSES_DIR)
    .filter(f => f.startsWith("response-") && f.endsWith(".json") && f !== newFilename)
    .sort();

  if (previous.length === 0) {
    console.log("No previous response to compare against.");
    return;
  }

  const prevFilename = previous[previous.length - 1];
  const prevList = (() => {
    const raw = JSON.parse(readFileSync(join(RESPONSES_DIR, prevFilename), "utf-8"));
    return (Array.isArray(raw) ? raw : (raw.items ?? [])) as object[];
  })();

  console.log(`\nComparing against: ${prevFilename}`);
  const result = findUniqueItems(prevList, aupairs, "id");
  const s = result.summary as Record<string, number>;
  console.log(`  Previous: ${s.totalInList1}  |  Current: ${s.totalInList2}  |  Removed: ${s.uniqueToList1}  |  Added: ${s.uniqueToList2}  |  In both: ${s.commonItems}`);

  if (s.uniqueToList1 > 0) {
    const removed = (result.onlyInList1 as Record<string, string>[]).map(x => x.auPairNumber ?? x.id);
    console.log(`  Removed: ${removed.join(", ")}`);
  }
  if (s.uniqueToList2 > 0) {
    const added = (result.onlyInList2 as Record<string, string>[]).map(x => x.auPairNumber ?? x.id);
    console.log(`  Added:   ${added.join(", ")}`);
  }
}

// CLI: bun fetch-aupairs.ts
if (import.meta.main) {
  console.log("Fetching au pair list...");
  const aupairs = await fetchAupairs();
  saveAndCompare(aupairs);
}
