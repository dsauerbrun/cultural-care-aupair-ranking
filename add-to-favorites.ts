import { getToken } from "./get-token.ts";

const GRAPHQL_ENDPOINT =
  "https://jn6xymv2sfgljcnnjzffb7jaum.appsync-api.us-east-1.amazonaws.com/graphql";

const MUTATION = `mutation CreateFavoriteAuPairFavoriteAuPair($input: CreateFavoriteAuPairInput!, $condition: ModelFavoriteAuPairConditionInput) {
  __typename
  createFavoriteAuPair(input: $input, condition: $condition) {
    __typename
    id
    owner
    apId
    hfId
    status
    note
    recommendationReason
    recommendedBy
    recommendedByRole
    favoritedAt
    unfavoritedAt
    createdAt
    updatedAt
  }
}`;

export async function addToFavorites(apId: string): Promise<void> {
  const hfId = process.env.CULTURAL_CARE_HF_ID;
  if (!hfId) {
    throw new Error("Set CULTURAL_CARE_HF_ID in .env (your host family UUID from the Cultural Care portal)");
  }

  const token = await getToken();

  const payload = {
    operationName: null,
    variables: {
      input: {
        id: crypto.randomUUID(),
        apId,
        hfId,
        status: "Favorited",
        note: "",
        recommendationReason: null,
        recommendedBy: null,
        recommendedByRole: "Staff",
        favoritedAt: new Date().toISOString(),
        unfavoritedAt: null,
      },
    },
    query: MUTATION,
  };

  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  }

  const json = await res.json() as { errors?: unknown[] };
  if (json.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }
}
