import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const GRAPHQL_ENDPOINT =
  "https://jn6xymv2sfgljcnnjzffb7jaum.appsync-api.us-east-1.amazonaws.com/graphql";

const __dirname = dirname(fileURLToPath(import.meta.url));
const queryTemplate = JSON.parse(
  readFileSync(join(__dirname, "query.graphql"), "utf-8")
);

const PROFILES_DIR = join(__dirname, "profiles");

export async function fetchProfile(id: string, token: string) {
  const cachePath = join(PROFILES_DIR, `${id}.json`);
  if (existsSync(cachePath)) {
    return JSON.parse(readFileSync(cachePath, "utf-8"));
  }

  const body = {
    ...queryTemplate,
    query: queryTemplate.query.replace(
      /getAPProfileAsHF\(id: "[^"]*"\)/,
      `getAPProfileAsHF(id: "${id}")`
    ),
  };

  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    throw new Error("401 Unauthorized — token has expired, please provide a fresh CULTURAL_CARE_TOKEN");
  }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  }

  const json = await res.json() as { data?: { getAPProfileAsHF: unknown }; errors?: unknown[] };
  if (json.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }

  const profile = json.data!.getAPProfileAsHF;
  mkdirSync(PROFILES_DIR, { recursive: true });
  writeFileSync(cachePath, JSON.stringify(profile, null, 2));

  // Polite delay after every real network fetch to avoid rate limiting
  const delay = 1000 + Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return profile;
}

// CLI: bun fetch-profile.ts <au-pair-id>
if (import.meta.main) {
  const id = process.argv[2];
  if (!id) {
    console.error("Usage: bun fetch-profile.ts <au-pair-id>");
    process.exit(1);
  }

  const token = process.env.CULTURAL_CARE_TOKEN;
  if (!token) {
    console.error("Set CULTURAL_CARE_TOKEN env var to a fresh Cognito JWT before running.");
    process.exit(1);
  }

  const profile = await fetchProfile(id, token);
  console.log(JSON.stringify(profile, null, 2));
}
