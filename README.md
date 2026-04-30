# Au Pair Search Tool

Fetches, scores, and ranks Cultural Care au pair candidates. Generates a human-readable report so you can quickly identify the best matches.

If you found this tool useful and want to buy me a coffee! [![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/dsauerbrun)

## Table of contents

- [How it works](#how-it-works)
- [Setup](#setup)
- [Setup your own criteria](#setup-your-own-criteria-criteriayaml)
- [Usage](#usage)
  - [Generating with an LLM (recommended)](#generating-a-criteriayaml-with-an-llm-recommended)
  - [Criterion types](#criterion-types)
  - [Signal types](#signal-types-for-profile_signals)
  - [Tips](#tips)
- [Files](#files)
- [Individual scripts](#individual-scripts)

---

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

### Example output

> **Au Pair Rankings — Fake Town, CO**
> _Generated: 4/29/2026, 9:52:21 PM_
>
> | Criteria | Weight |
> |---|---|
> | Infant care experience | 40% |
> | Outdoor/active lifestyle | 35% |
> | English level (threshold: 4) | 20% |
> | Drinks alcohol | penalty |
>
> ---
>
> **🥇 Fake Name (BRA999999999)**
> **Overall: 8.4/10**  ·  ⏳ This au pair is currently chatting with the maximum number of families.
>
> Top-ranked overall — strong infant care (1835h documented, prefers infants, bio mentions babies, 9/10 photo evidence), Level 5 English, and the active/adventurous trait set the family wants. Not a drinker. The most well-rounded candidate, but unfortunately currently unavailable as she's chatting with the maximum number of families.
>
> | Category | Score | Detail |
> |---|---|---|
> | Infant care | 9/10 | 1835h documented, photo score 9/10 |
> | Outdoor | 8/10 | Text: 9, Photos: 6 |
> | English | Level 5 | Proficient - Level 5 |
> | Drinks alcohol | — | Not detected ✓ |
>
> ---
>
> **🥈 Fake name2 (COL9999999)**
> **Overall: 8.0/10**  ·  ✅ Available
>
> Standout outdoor profile (8/10 across both text and photos) with a scuba diving photo showing full gear — genuine adventurous signal. Decent infant care (613h, 8/10 baby photos) and not a drinker. Available right now, making her the highest-ranked candidate the family can actually action on; held back from #1 only because hours are lower and bio doesn't explicitly mention babies.
>
> | Category | Score | Detail |
> |---|---|---|
> | Infant care | 9/10 | 613h documented, photo score 8/10 |
> | Outdoor | 8/10 | Text: 8, Photos: 8 |
> | English | Level 4 | Intermediate - Level 4 |
> | Drinks alcohol | — | Not detected ✓ |

## Setup

```bash
bun install
```

Copy `.env.example` to `.env` and fill in each value:

```bash
cp .env.example .env
```

### Environment variables

**`CULTURAL_CARE_EMAIL` and `CULTURAL_CARE_PASSWORD`**
Your Cultural Care host family portal login credentials. The tool uses these to automatically fetch and refresh the auth token — you never need to copy tokens manually.

**`CULTURAL_CARE_HF_ID`**
Your host family's UUID, used when adding au pairs to your favorites list.

To find it: log into the Cultural Care portal → open DevTools (F12) → go to the Network tab → click any GraphQL request → look in the request payload for a field called `hfId` → copy that UUID. It never changes.

**`ANTHROPIC_API_KEY`**
Used only for photo analysis (Claude vision). The narrative generation uses your Claude.ai Pro subscription instead, so API usage is minimal.

To get one: go to console.anthropic.com → sign up or log in → API Keys → Create Key. Add a small credit balance ($2 is more than enough to analyze the full candidate list multiple times).

---

## Setup your own criteria (`criteria.yaml`)

All scoring is driven by `criteria.yaml`. Copy `criteria.example.yaml` to `criteria.yaml` and edit it to match what you care about. No code changes needed.

### Generating a `criteria.yaml` with an LLM (recommended)

Writing YAML by hand can be fiddly. The easiest approach is to let Claude (or any LLM) generate it for you:

1. Open `criteria.example.yaml` and copy its full contents
2. Go to [claude.ai](https://claude.ai) and paste a message like this:

> I want to score au pair candidates using the following YAML format. Here is an example file that shows all the supported criterion types and signal types:
>
> ```yaml
> [paste the full contents of criteria.example.yaml here]
> ```
>
> Please generate a `criteria.yaml` file for my situation:
> [describe what you care about in plain English, e.g. "I have a dog so I want candidates who love animals. I also want someone who is creative and artistic. I'd prefer someone who doesn't smoke — flag it if there's evidence of smoking in photos."]

3. Copy the generated YAML into `criteria.yaml`
4. Run `bun score-profile.ts <any-au-pair-id>` to test it on a single candidate before doing a full run
5. Tweak and re-test until the scores feel right

The example file is designed to cover all the supported patterns, so the LLM will have everything it needs to generate valid criteria for almost any preference you can describe.

Each criterion is one entry in the `criteria` list with a `type` of `score`, `threshold`, or `penalty`.

---

### Criterion types

#### `score` — contributes positively to the composite score

```yaml
- id: outdoor_fit           # unique key used internally
  label: "Outdoor Lifestyle" # shown in the report
  weight: 0.35              # contribution to composite (scores 0-10 × weight)
  type: score
  photo_weight: 0.5         # how much photo evidence vs profile text contributes (0-1)

  photo:                    # optional — omit if you don't want photo analysis for this criterion
    description: |
      What to look for in photos. Written as instructions to Claude vision.
      Include score tiers (HIGH/MEDIUM/LOW/NONE) and what each looks like.
      End with: Return: { "score": <0-10 integer>, "evidence": ["observations"] }

  profile_signals:          # optional — omit if photos are the only signal
    raw_max: 18             # max possible raw points before normalizing to 0-10
    items:
      - ...                 # one or more signals (see Signal types below)
```

#### `threshold` — pass/fail check that contributes to the score and flags failures

```yaml
- id: english_level
  label: "English Level"
  weight: 0.20
  type: threshold

  threshold:
    field: "interview.englishProficiencyLevel"  # dotted path into the profile JSON
    parse_regex: "level\\s*(\\d)"               # regex to extract a number from the field value
    minimum: 4                                  # value must be >= this to pass
    score_multiplier: 2                         # score = parsed_value × multiplier
    max_score: 10

  flag_below_threshold: "English Level {value} — below required Level 4"
  # {value} is replaced with the parsed number
```

#### `penalty` — subtracts from the composite score if triggered by photo evidence

```yaml
- id: alcohol
  label: "Alcohol in Photos"
  weight: -1                # amount subtracted from composite if triggered
  type: penalty

  photo:
    description: |
      What to look for. End with:
      Return: { "detected": <true/false>, "confidence": <"high"|"medium"|"low">, "note": "<one sentence>" }

  trigger: "detected and confidence != low"   # when to apply the penalty
  flag_message: "Alcohol detected ({confidence} confidence)"
  # {confidence} is replaced with the actual confidence value
```

---

### Signal types (for `profile_signals`)

**`array_match`** — award points for matching items in an array field

```yaml
- type: array_match
  field: personalityTraits        # or use `fields: [field1, field2]` to check multiple
  values: [Active, Adventurous]   # case-insensitive substring match against each item
  points_each: 2                  # points per matched item
  max: 8                          # cap on total points from this signal
```

**`bio_keywords`** — award points for keywords found anywhere in bio text fields

```yaml
- type: bio_keywords
  fields: [aboutSelfAndInterests, WhyBecomeAuPair]  # string fields to search
  keywords: [outdoor, hiking, mountain]              # substring matches (case-insensitive)
  points_each: 1                                     # points per unique keyword found
  max: 4
```

**`array_sum`** — award points based on a numeric value summed across an array of objects

```yaml
- type: array_sum
  field: childcareExperiences    # array of objects in the profile
  subfield: infantCareHours      # numeric field on each object to sum
  full_credit_at: 500            # max points awarded when sum reaches this value
  max: 4                         # max points from this signal
```

**`array_keyword_any`** — binary: award max points if any item in an array contains a keyword

```yaml
- type: array_keyword_any
  field: preferredAgeGroupToCareFor   # array field (strings or objects)
  subfield: agesOfChildren            # optional — if field is array of objects, which subfield to check
  keywords: [infant, baby, months]    # any match awards max points
  max: 2
```

**`bio_keyword_any`** — binary: award max points if any bio field contains any keyword

```yaml
- type: bio_keyword_any
  fields: [aboutChildcareExperience, WhyBecomeAuPair]
  keywords: [infant, baby, newborn]   # any match in any field awards max points
  max: 1
```

---

### Tips

- **Weights don't need to sum to 1.** The composite score is `sum(criterion_score × weight)` where scores are 0-10. Typical weights (0.35, 0.40, 0.20) naturally produce composites in the 0-10 range.
- **`photo_weight`** controls how much photo evidence contributes vs profile text. `0.5` means 50/50. Set to `0` to ignore photos for a criterion; omit the `photo` section entirely to skip photo analysis.
- **`raw_max`** is the denominator for normalizing profile signals to 0-10. Set it to the maximum raw points any candidate could realistically earn across all signals.
- **Clear the photo cache** (`photo-analysis/`) when you add or remove criteria that have a `photo` section — cached results won't include the new dimensions.
- **Test a single candidate** before a full run: `bun score-profile.ts <au-pair-id>`

---

## Usage

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

You can stop here. The raw ranked scores are in `results/results-<timestamp>.json`, and the narrative prompt at `narratives/narratives-prompt-<timestamp>.txt` is human-readable on its own if you want a quick look without generating the full report.

### Step 2 — Generate narratives _(optional — requires Claude.ai or similar)_

1. Open `narratives/narratives-prompt-<timestamp>.txt`
2. Paste the entire contents into [claude.ai](https://claude.ai) (uses your Pro subscription — no API credits)
3. Claude responds with a JSON object mapping each candidate's ID to a narrative explanation
4. Save that response as `narratives/narratives-<timestamp>.json`

### Step 3 — Build the markdown report _(optional — requires Step 2)_

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
| `criteria.yaml` | Your scoring criteria — edit this to change what matters |
| `criteria.example.yaml` | Reference example showing all criterion types |
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
