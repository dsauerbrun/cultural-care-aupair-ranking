import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const USER_POOL_ID = "us-east-1_sx86Ih47F";
const CLIENT_ID = "3jsqobi851prmu958rn4b0t26e";

const userPool = new CognitoUserPool({
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID,
});

function tokenExpiresAt(token: string): number {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp ?? 0;
  } catch {
    return 0;
  }
}

function isExpired(token: string): boolean {
  return Date.now() / 1000 >= tokenExpiresAt(token) - 60;
}

function fetchFreshToken(email: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const auth = new AuthenticationDetails({ Username: email, Password: password });

    user.authenticateUser(auth, {
      onSuccess(session) {
        resolve(session.getIdToken().getJwtToken());
      },
      onFailure(err) {
        reject(new Error(`Cognito auth failed: ${err.message ?? err}`));
      },
    });
  });
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
