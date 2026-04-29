# Au Pair Search — Boulder, CO

Scores and ranks Cultural Care au pair candidates based on infant care experience, outdoor/active lifestyle fit for Boulder, English level, and acrylic nails.

## Setup

```bash
bun install
```

Create a `.env` file in this directory with:

```
CULTURAL_CARE_EMAIL=your@email.com
CULTURAL_CARE_PASSWORD=yourpassword
ANTHROPIC_API_KEY=<your Anthropic API key>
```

**Token handling:** The Cognito JWT is fetched and refreshed automatically using your email and password — no manual token copying needed. If you prefer to set a token manually instead, you can still set `CULTURAL_CARE_TOKEN` directly and it will be used until it expires.

**Getting `ANTHROPIC_API_KEY`:** Used only for photo analysis (not narrative generation). Create an account at console.anthropic.com and add API credits (~$5 covers the full candidate list many times over).

## Full workflow

### Step 1 — Run the ranker

```bash
bun rank-candidates.ts
```

This will:
- Fetch all candidate profiles from `aupairs.json` (cached in `profiles/`)
- Analyze photos with Claude Haiku vision (cached in `photo-analysis/`)
- Score each candidate on infant care, outdoor fit, English level, and acrylic nails
- Save ranked results to `results-<timestamp>.json`
- Save a narrative prompt to `narratives-prompt-<timestamp>.txt`

All fetched profiles and photo analyses are cached to disk — if the token expires mid-run, just refresh it in `.env` and re-run. It will pick up exactly where it left off.

### Step 2 — Generate narratives (free, uses Claude.ai)

1. Open `narratives/narratives-prompt-<timestamp>.txt`
2. Paste the entire contents into [claude.ai](https://claude.ai) (uses your Pro subscription — no API credits)
3. Claude will respond with a JSON object like `{"COL2279373": "explanation...", ...}`
4. Save that JSON response as `narratives/narratives-<timestamp>.json`

### Step 3 — Build the markdown report

```bash
bun build-report.ts results/results-<timestamp>.json narratives/narratives-<timestamp>.json
```

This generates `results/results-<timestamp>.md` — a ranked markdown report with scores and narrative explanations for every candidate.

```bash
open results/results-<timestamp>.md   # open in your default markdown viewer
```

## Scoring weights

| Criteria | Weight | Source |
|---|---|---|
| Infant care experience | 40% | Documented hours, preferred age groups, bio text, baby photos |
| Outdoor/active lifestyle | 35% | Personality traits, listed sports, bio keywords, outdoor photos |
| English level (threshold: 4) | 20% | Interview assessment |
| Acrylic nails | penalty | Photo detection |

## Files

| File | Purpose |
|---|---|
| `aupairs.json` | Search results from the Cultural Care API — update this to refresh the candidate pool |
| `profiles/<id>.json` | Cached GraphQL profile for each candidate |
| `photo-analysis/<id>.json` | Cached photo analysis results |
| `results/results-<timestamp>.json` | Full ranked results with scores |
| `results/results-<timestamp>.md` | Final human-readable report |
| `narratives/narratives-prompt-<timestamp>.txt` | Prompt to paste into claude.ai |
| `narratives/narratives-<timestamp>.json` | Claude's narrative responses (you create this) |

## Individual scripts

```bash
# Fetch a single profile (cached after first run)
bun fetch-profile.ts <au-pair-id>

# Analyze photos for a single candidate
bun analyze-photos.ts <au-pair-id>

# Score a single candidate
bun score-profile.ts <au-pair-id>
```

## Updating the candidate pool

Re-run the search on the Cultural Care portal with your filters, save the response as `aupairs.json`, and run `bun rank-candidates.ts` again. Previously fetched profiles and photo analyses are cached so only new candidates will incur API costs.
