// Fetches a fresh Cognito JWT for the Cultural Care host family portal.
// Requires CULTURAL_CARE_EMAIL and CULTURAL_CARE_PASSWORD in .env.

const COGNITO_ENDPOINT = "https://cognito-idp.us-east-1.amazonaws.com/";
const CLIENT_ID = "3jsqobi851prmu958rn4b0t26e";

function tokenExpiresAt(token: string): number {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp ?? 0;
  } catch {
    return 0;
  }
}

function isExpired(token: string): boolean {
  // Treat token as expired 60 seconds before actual expiry to avoid edge cases
  return Date.now() / 1000 >= tokenExpiresAt(token) - 60;
}

async function fetchFreshToken(email: string, password: string): Promise<string> {
  const res = await fetch(COGNITO_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
    },
    body: JSON.stringify({
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Cognito auth failed (${res.status}): ${body}`);
  }

  const json = await res.json() as {
    AuthenticationResult?: { IdToken?: string };
  };
  const token = json.AuthenticationResult?.IdToken;
  if (!token) throw new Error("Cognito response missing IdToken");
  return token;
}

/**
 * Returns a valid Cognito token, refreshing automatically if expired.
 * Pass force=true to skip the expiry check and always fetch a new token.
 */
export async function getToken(force = false): Promise<string> {
  const current = process.env.CULTURAL_CARE_TOKEN ?? "";

  if (!force && current && !isExpired(current)) {
    return current;
  }

  const email = process.env.CULTURAL_CARE_EMAIL;
  const password = process.env.CULTURAL_CARE_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "Token expired. Add CULTURAL_CARE_EMAIL and CULTURAL_CARE_PASSWORD to .env for auto-refresh, or set CULTURAL_CARE_TOKEN manually."
    );
  }

  console.log("Token expired — fetching a fresh one from Cognito...");
  const token = await fetchFreshToken(email, password);
  process.env.CULTURAL_CARE_TOKEN = token;
  return token;
}
