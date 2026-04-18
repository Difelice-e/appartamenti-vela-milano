# Phase 0 — Brand Init — Report

**Project:** Appartamenti Vela Milano
**Date:** 2026-04-18
**Pipeline:** `/web-pipeline` → `/brand-init`
**Mode:** Plan (Opus)

---

## 1. Objective

Bootstrap the project: validate the client brief, normalize it into a machine-readable input, inventory the assets provided, and scaffold the directory structure that all subsequent phases feed into.

---

## 2. Inputs

Raw materials received from the client inside `brand_asset/`:

| File | Type | Role |
|---|---|---|
| `consulenza_report.txt` | Transcript of the commercial call | Source of truth for philosophy, target audience, client asks |
| `notes.md` | Free-form notes / TODOs | Secondary context, open questions |
| `balcone_*.jpg`, `bagni_*.jpg`, `camere_*.jpg`, `colazione_*.jpg`, `cucina_*.jpg`, `esterno_*.jpg`, `soggiorno_*.jpg` | 21 professional photos | Visual library for demo + delivery |

No logo, no brand manual, no existing copy, no reference sites liked/disliked, no drone shots. Only the Booking.com listing existed as prior digital footprint (9.2 / 678 reviews).

### Client-declared constraints

- **Tier:** `plus` — required for the liquid-glass effect the client explicitly asked for.
- **Business type:** `appartamenti` — 3 bilocali matrimoniali, all very similar (not distinct units to showcase separately).
- **Locale:** IT only for demo; i18n-ready architecture because EN (and potentially FR/DE/ES) will be evaluated in delivery.
- **Address:** Via Vincenzo Vela 17, 20133 Milano — Città Studi / Loreto / Piola, positioned as "green pocket" nel centro.
- **Hard product requests:**
  - Liquid glass diffused across the site (not only hero).
  - Lead-gen email form to the owner — **no** direct Booking redirect.
  - Dedicated garage section (priced separately, point of differentiation).
  - "Green & Bio" narrative (bio toiletries, plant/nature theme).
  - 3 apartments told as **one coherent story**, not 3 cards.
  - Business / fiere / co-working CTA block.
- **Contacts:** all placeholders in demo; the owner's private number must never appear publicly.

---

## 3. Process

1. **Read and parsed `brand_asset/input.yml`.** The file was already substantially filled by the consulenza; validated that required fields (`name`, `type`, `tier`) were present.
2. **Cross-checked the brief against the call transcript** (`consulenza_report.txt`) — confirmed positioning, target segments (leisure couples + business/fiere + digital nomads), owner-as-host hospitality angle.
3. **Flagged open tensions for Phase 1 resolution:**
   - Client-proposed accent `#E8C547` (giallo) vs. dominant interior material (parquet chiaro). Declared as `accent_alternatives_to_research` — four oak/wood tones listed.
   - Fonts entirely unspecified — to be decided during brand guide generation.
   - Liquid glass + light palette: contrast risk flagged explicitly.
4. **Inventoried the 21 photos** into `assets.photos_inventory` by room type so the demo can pull from named buckets.
5. **Scaffolded the Phase-1+ directory structure** the skill expects:
   ```
   brand/           # Phase 1 output (research, guide, tokens, design refs, prototypes)
   demo/            # Phase 2 output
   dist/            # Phase 3 output
   docs/            # Legal pages, audit reports, this report
   ```
6. **Initialized git** and committed the `brand_asset/` baseline — commit `2d1fd3d Phase 0 — brand input and assets`.

---

## 4. Outputs

| Artifact | Status |
|---|---|
| Validated `brand_asset/input.yml` | ✅ Complete, all required fields + rich extras |
| Asset inventory inside `input.yml` | ✅ 21 photos indexed by category |
| Open-questions register (`internal_notes.open_questions`) | ✅ Tracked for delivery handoff |
| Directory scaffolding (`brand/`, `demo/`, `dist/`, `docs/`) | ✅ Created |
| Git repo + first commit | ✅ `2d1fd3d` |

---

## 5. Analysis — What Phase 0 Resolved vs. What It Pushed Forward

**Resolved:**
- Tier decision is locked: `plus` (Next.js + React + Framer Motion). Driven by the liquid-glass requirement and the premium business/fiere segment — no second-guessing needed downstream.
- Photography budget is clear: 21 interior shots are strong; exterior/drone is a known gap for delivery, not demo.
- Copy strategy is set: demo uses creative evocative IT copy ("respira", "luce", "silenzio"); owner validates in delivery.
- Storytelling rule locked: **one narrative for 3 similar apartments**, not a card grid — avoids the generic AI "our rooms" section.

**Pushed to Phase 1:**
- Accent color: giallo vs. oak tones — deliberately left as an open research question rather than pre-decided.
- Typography pairing: entirely unchosen, to be derived from competitive/inspirational research.
- Section architecture: the skill warns against generic Hero→About→Services templates; the `display_strategy` and `extra_requests` fields encode enough intent (garage section, green&bio section, business block, unified apartment story) for Phase 1 to design a bespoke 10-section flow.

**Risks flagged early:**
- Liquid glass on a light palette is a contrast/legibility hazard. Flagged in `palette_notes` so Phase 1 typography and overlay choices would address it.
- Placeholder contact strategy documented explicitly so the demo doesn't accidentally leak the private number.

---

## 6. Handoff to Phase 1

Phase 1 inherits a complete, validated brief with:

- 3 explicit creative choices to make (accent color, fonts, section order).
- 1 hard technical constraint to design around (diffused liquid glass on light theme).
- 3 non-negotiable content moats (garage, green&bio, unified apartment story).
- A 9.2/678-review social-proof asymmetry to exploit.

No new inputs are needed from the client to proceed.
