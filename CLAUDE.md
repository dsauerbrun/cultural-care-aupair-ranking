# Au Pair Search — Boulder, CO

## Goal

Find au pairs from the Cultural Care program who would genuinely enjoy living in Boulder, Colorado — an active, outdoorsy mountain town. Filter and rank candidates based on outdoor/active lifestyle signals, then enrich the top candidates with detailed profile data (long-form bios, photo galleries, video intros) for final review.

## Inputs

- `aupairs.json` — search API response with 56 pre-filtered candidates (already filtered by travel dates, age, gender, country, religion, etc. via the search endpoint).
- This file (`CLAUDE.md`) — task brief.

If `aupairs.json` is not in the working directory, ask the user to drop it in or re-run the search endpoint below.

## APIs

### 1. Search endpoint (already used — keeping for reference)

```
GET https://4bzk4o198j.execute-api.us-east-1.amazonaws.com/prod/v2/matching/search/au-pairs?pageSize=1000&randomSeed=399025113
```

Body (POST-style filter params — confirm method with user if re-running):

```json
{
  "earliestTravelDate": "2026-08-07",
  "latestTravelDate": "2026-09-25",
  "ages": ["21 - 23", "24+"],
  "homeCountry": ["AR","AU","AT","BE","BR","CA","CL","CO","HR","CZ","DK","EE","EC","FR","DE","GR","HU","IE","IT","LV","LT","MX","NL","NZ","NO","PA","PT","SK","SI","SE","CH","TH","UY"],
  "genderIdentity": ["Female"],
  "religion": ["Agnostic","Atheist","Buddhist","Catholic","Christian","Hindu","Jewish","Spiritual","Other","Not religious"],
  "okToSuperviseSwimmingChildren": false,
  "livedAwayFromHome": false,
  "okToLiveSingleParent": false,
  "preferredAges": ["3 - 11 months"]
}
```

### 2. GraphQL profile detail endpoint (the rich one)

```
POST https://jn6xymv2sfgljcnnjzffb7jaum.appsync-api.us-east-1.amazonaws.com/graphql
```

**Headers:**
- `Authorization: <bearer token>` — Cognito JWT, ~1 hour TTL. User must grab a fresh one from browser DevTools → Network tab → any GraphQL request → copy the Authorization header value. Token contains `cognito:groups: ["HostFamily"]` and `exp` claim.
- `Content-Type: application/json`

**Body:** GraphQL query `getAPProfileAsHF(id: "<au pair id>")`. Full query is below — it returns long-form bio fields, childcare experience, media files (photos), video intros, neurocolor personality results, recommendations, and more.

The fields most relevant for outdoor/Boulder fit:
- `aboutSelfAndInterests` (longer than search version)
- `WhyBecomeAuPair`
- `otherInterests`
- `sports`, `social`, `relaxing`, `creativity`
- `personalityTraits`
- `mediaFiles[].file.cfnUrl` — photo gallery (signed CloudFront URLs)
- `video.file.cfnUrl` — video intro if present
- `hostFamilyRecommendations[].comment` and `lccRecommendations[].comment`

**Full GraphQL query:** save as `query.graphql` in this directory. Operation name is `getAPProfileAsHF`. Include all fields from the original request: `WhyBecomeAuPair, aboutChildcareExperience, aboutSelfAndInterests, additionalSkillList, auPairNumber, firstName, lastName, nickName, dateOfBirth, currentLocation, currentState, languages, motherTongue, languagesOther, drivingFrequency, yearsDriving, hasConfidentSwimmingSkills, isExtensionAP, validNumberOfChats, lastLogin, personalityTraits, sports, social, relaxing, creativity, otherInterests, foodPreferences, religiousBeliefs, mediaFiles { caption, file { fileName, cfnUrl, url, metaType }, type }, video { caption, file { fileName, cfnUrl, url, metaType }, type }, profilePicture { fileName, cfnUrl, url }, hostFamilyRecommendations { comment, name, title }, lccRecommendations { comment, name, title }, childcareExperiences { agesOfChildren, childcareHours, comment, experienceTypesList, numberOfChildren }, neurocolor { result { behaviour, energy, reportUrl } }`. The user has the complete query as a JSON paste from the network tab — ask them for it if needed.

**Auth caveats:**
- Tokens expire ~1 hour after issue. If you get 401s mid-batch, prompt the user for a fresh token before continuing.
- Don't log the token to stdout or commit it. Read from env var `CULTURAL_CARE_TOKEN` or prompt interactively.

## Filtering & scoring rubric

Already applied to the 56 search results. The scoring function rewards:

- **Personality traits:** `Active`, `Adventurous`, `Athletic`, `Energetic` (×2 weight each)
- **Sport interests:** `Hiking`, `Running`, `Cycling`, `Skiing`, `Swimming`, `Water sports`, `Soccer`, `Basketball`, `Volleyball`, `Tennis`, `Skateboarding`, `Roller skating`, `Horseback riding`, `Martial arts`, `Gymnastics`, `Sailing`, `Fishing`, `Golf`, `Pickleball` (×1 each)
- **Outdoor leisure:** `Camping`, `Walking`, `Gardening` (×1 each)
- **Bio keywords:** `outdoor`, `nature`, `hik`, `mountain`, `gym`, `fitness`, `sport`, `active`, `adventur`, `walk`, `run`, `bik`, `cycl`, `camp`, `explore`, `travel`, `park`, `beach`, `wild`, `aerial silk`, `cheer`, `capoeira`, `gymnastic` (×1 each)

Feel free to refine — possible additions: weight Boulder-specific signals like skiing/hiking higher than generic team sports, penalize "I don't like outdoors" type bio language, look for elevation/altitude mentions.

## Shortlist — top 7 candidates from initial scoring

These are the IDs to enrich first via the GraphQL endpoint:

| Name | ID | auPairNumber | Country |
|---|---|---|---|
| Carolina "Caro" | `b4d87498-3061-70e3-d8dc-74d8b40d7d3c` | COL2279373 | CO |
| Daisy | `a498f498-a021-7054-475b-652c983b58bd` | BRA2306700 | BR |
| Emely | `9408d498-f0f1-7034-a319-5a4c63bfb364` | COL2234447 | CO |
| Viola | `d4189478-b061-70b0-1779-ebd923ec2aab` | ITA2361367 | IT |
| Stephany Alejandra | `d49894f8-40e1-7098-18fb-3b3627cd194e` | COL2111913 | CO |
| Anny Valentina | `04d804f8-6021-70b5-e5d8-0cb87e0dfa86` | COL2287010 | CO |
| Yuliana Morales | `04582418-e041-7037-09a0-51d8608f177d` | COL2379568 | CO |

Second-tier candidates worth fetching if budget allows: Angelica Josselyn (MEX2390791), Lizeth (COL2246535), Sarah (BRA2030200), Natalia (COL2314116), Léa (FRA2004936), Emanuelle "Manu" (BRA2251555), María Catalina (ARG2268054).

## Suggested workflow

1. **Confirm token.** Ask user for a fresh `CULTURAL_CARE_TOKEN`. Verify by hitting GraphQL with one ID.
2. **Fetch shortlist.** POST to GraphQL for each of the 7 IDs. Save responses to `profiles/<auPairNumber>.json`.
3. **Download media.** For each profile, pull `mediaFiles[].file.cfnUrl` images into `media/<auPairNumber>/` and `video.file.cfnUrl` if present. CloudFront URLs are pre-signed — fetch directly, no auth header.
4. **Vision pass on photos.** Use vision capability to scan each photo for outdoor cues: hiking gear, mountains, trails, running clothes, gyms, ski gear, beaches, bikes, sports uniforms. Score per-candidate on photographic evidence, separate from bio-text score.
5. **Compose ranking.** Build a final report (`ranking.md` or CSV) combining: original outdoor score, full-bio rescore, photo evidence score, video presence (yes/no), notable LCC/host-family recommendations. Flag any disqualifiers (e.g., explicit dislike of outdoors, low English level for active social life, etc.).
6. **Present to user.** Don't overwhelm — top 3–5 with concise rationale per candidate, link to their profile photos, and one-line "why Boulder fits."

## Things to flag to the user

- **Token rotation.** If batch is interrupted by 401, pause and ask for new token rather than stalling silently.
- **Photo signal is noisy.** A single posed headshot tells you nothing. Look at the gallery, not just the profile picture. If a candidate has only one photo, say so — don't over-interpret.
- **Video > photos > bio.** If video intros are available, they are by far the highest-signal source. Surface video links prominently.
- **Self-reported bias.** Every au pair claims to be "active and outdoorsy" because that's what they think hosts want. Look for *specific* evidence (named sports, specific places, specific activities) over generic claims.
- **Boulder-specific fit goes beyond outdoorsy.** Altitude (~5,400 ft), cold winters, college-town vibe, lots of Spanish-speaking community, strong cycling culture. Candidates from mountain regions (Medellín, Bogotá, parts of Italy) may adapt to altitude better than coastal candidates.

## Out of scope (don't do these without asking)

- Don't contact au pairs directly.
- Don't store the auth token in any committed file or log.
- Don't fetch all 56 profiles by default — start with the 7 shortlist, expand only if user asks.
- Don't make recommendations about non-childcare-related personal attributes (religion, dating life, etc.) even if the data is in the response.
