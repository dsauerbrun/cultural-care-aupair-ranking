# Au Pair Search Tool

Fetches, scores, and ranks Cultural Care au pair candidates. Generates a human-readable report so you can quickly identify the best matches.

## How it works

### 1. Candidate list — always fresh, always complete

Every run starts by fetching the live candidate list from the Cultural Care search API. The results are saved to `aupairs.json` and compared against the previous fetch so you can see who appeared or disappeared between runs.

Because the search API returns non-deterministic results (the same filters don't always return the same candidates), the tool also includes every candidate whose profile has ever been cached — so no one falls off your radar just because they didn't appear in the latest API response.

### 2. Profile and photo fetching — cached after first fetch

Each candidate's full profile is fetched via the Cultural Care GraphQL API and saved to `profiles/<id>.json`. Photos are analyzed using Claude vision and saved to `photo-analysis/<id>.json`. Both caches persist across runs, so each candidate only ever costs one profile fetch and one photo analysis — re-runs are nearly instant and free for already-seen candidates.

If the auth token expires mid-run (they last ~1 hour), the tool automatically fetches a fresh one using your stored credentials and continues without losing progress.

### 3. Scoring and ranking

Each candidate is scored across multiple criteria drawn from their profile text, listed interests, and photo analysis. The scoring is holistic — a candidate who writes extensively about hiking in their bio but has no outdoor photos still scores well on that dimension, and vice versa. Scores are combined into a single composite ranking.

### 4. Availability checking and auto-favorites

After ranking, the tool checks availability for the top candidates in batches using the Cultural Care availability API:

- **Available** — can be viewed and contacted normally
- **Chatting with max families** — profile is visible but you can't initiate contact. These candidates are automatically added to your favorites list so you can view their full profile in the app
- **Already matched** — candidate has accepted a placement. Their score is set to 0 so they sink to the bottom of the rankings, and their matched status is cached permanently so future runs skip the API check for them entirely

The tool keeps checking candidates in order until it has found 10 who haven't yet been matched.

### 5. Report generation

Results are saved as a timestamped JSON file. A narrative prompt is also generated — paste it into Claude.ai (using your Pro subscription, no API credits needed) to get human-readable explanations for each candidate's ranking. Run `build-report.ts` to combine the scores and narratives into a final markdown report.

---

## Setup

```bash
bun install
```

Create a `.env` file with:

```
CULTURAL_CARE_EMAIL=your@email.com
CULTURAL_CARE_PASSWORD=yourpassword
CULTURAL_CARE_HF_ID=<your host family UUID>
ANTHROPIC_API_KEY=<your Anthropic API key>
```

**`CULTURAL_CARE_HF_ID`:** Open DevTools on the Cultural Care portal → Network tab → find any GraphQL request that includes `hfId` in the payload → copy that UUID. It never changes.

**`ANTHROPIC_API_KEY`:** Used only for photo analysis. Create an account at console.anthropic.com and add credits — ~$5 covers the full candidate list many times over.

The Cognito auth token is fetched and refreshed automatically using your email and password. You never need to copy tokens manually.

---

## Workflow

### Step 1 — Run the ranker

```bash
bun rank-candidates.ts
```

This will:
- Fetch the live candidate list and compare it to the previous fetch
- Fetch and cache any new candidate profiles
- Analyze and cache photos for any new candidates
- Score and rank all candidates (including previously cached ones not in the current search results)
- Check availability for the top candidates, auto-favorite unavailable ones, and zero out matched ones
- Save ranked results to `results/results-<timestamp>.json`
- Save a narrative prompt to `narratives/narratives-prompt-<timestamp>.txt`

### Step 2 — Generate narratives (free, uses Claude.ai)

1. Open `narratives/narratives-prompt-<timestamp>.txt`
2. Paste the entire contents into [claude.ai](https://claude.ai) (uses your Pro subscription — no API credits)
3. Claude responds with a JSON object mapping each candidate's ID to a narrative explanation
4. Save that response as `narratives/narratives-<timestamp>.json`

### Step 3 — Build the markdown report

```bash
bun build-report.ts results/results-<timestamp>.json narratives/narratives-<timestamp>.json
```

Generates `results/results-<timestamp>.md` — open it in any markdown viewer.

```bash
open results/results-<timestamp>.md
```

---

## Files

| File/Folder | Purpose |
|---|---|
| `profiles/<id>.json` | Cached candidate profiles — fetched once, reused forever |
| `photo-analysis/<id>.json` | Cached photo analysis results |
| `matched-aupairs.json` | Cached list of candidates who have already been matched — skipped in future availability checks |
| `au-pair-filter-responses/` | Timestamped snapshots of each search API response, used to diff between runs |
| `aupairs.json` | Latest candidate list from the search API |
| `results/results-<timestamp>.json` | Full ranked results with scores and availability |
| `results/results-<timestamp>.md` | Final human-readable report |
| `narratives/narratives-prompt-<timestamp>.txt` | Prompt to paste into claude.ai |
| `narratives/narratives-<timestamp>.json` | Claude's narrative responses (you create this) |

---

## Individual scripts

```bash
# Refresh the candidate list and diff against previous fetch
bun fetch-aupairs.ts

# Fetch a single profile (cached after first run)
bun fetch-profile.ts <au-pair-id>

# Analyze photos for a single candidate
bun analyze-photos.ts <au-pair-id>

# Score a single candidate
bun score-profile.ts <au-pair-id>

# Compare two candidate list JSON files
bun listcompare.ts <file1.json> <file2.json>

# Build a markdown report from existing results and narratives
bun build-report.ts results/results-<timestamp>.json narratives/narratives-<timestamp>.json
```
