# Phase 1 — Brand Research & Identity — Report

**Project:** Appartamenti Vela Milano
**Date:** 2026-04-18
**Pipeline:** `/web-pipeline` → `/brand-research`
**Mode:** Plan (Opus) for the entire phase

---

## 1. Objective

Turn the validated brief from Phase 0 into a complete, defensible brand identity: local competitive landscape, top-tier aspirational references, a strategic synthesis, a comprehensive brand guide, and machine-readable design tokens ready for code.

---

## 2. Inputs Consumed

| Source | What was used |
|---|---|
| `brand_asset/input.yml` | Type, tier, locale, philosophy, target segments, extra_requests, accent_alternatives, photos inventory |
| `brand_asset/consulenza_report.txt` | Tone of voice, hospitality narrative, garage/green&bio moats |
| `brand_asset/*.jpg` (21 photos) | Visual ground truth: parquet chiaro, vetrate, balconi, interiors palette |
| Live web search (Booking, Google, brand sites) | Competitor identification in Milano + top-tier hospitality references |
| `skillui` CLI | Static design-pattern extraction from 3 reference sites |

Deliberately **not** consumed: Google Stitch MCP (attempted, empty output after 180s wait — formally skipped per skill spec).

---

## 3. Process

### 3.1 Local competitor research

Searched direct competitors serving the same niche (short-stay apartments / aparthotel, Milano center). 4 sites analyzed for visual style, strengths, weaknesses, tone, tech, mobile UX.

One initial target (BB Hotels) timed out; substituted with Meneghino Aparthotel. One (Mia Aparthotel) redirected/was unresolvable — dropped rather than force-substitute.

**Key finding:** local competitors converge on generic booking-engine-first design, weak storytelling, cluttered hero photography, no real brand voice. Opportunity space is wide.

Output: `brand/research-competitors.md` (259 lines).

### 3.2 Top-tier inspiration research

Searched aspirational references beyond the immediate niche — boutique hospitality brands, premium short-stay operators, sites recognized for hospitality UX craft. 4 references retained.

Six Senses returned 403 for `skillui`, replaced with Casa Cook.

`skillui` run on 3 of the 4 best references — full design extracts saved under `brand/design-references/`:

- `1hotels-design/` — biophilic luxury, nature-first imagery, generous whitespace
- `aman-design/` — silence as UX, extreme typographic restraint, slow reveals
- `locke-design/` — apartment-style stay told as lifestyle, not as listing grid

Each includes `DESIGN.md` (~370–390 lines) + a homepage screenshot.

Output: `brand/research-inspiration.md` (178 lines) + `brand/design-references/*/` (3 folders).

### 3.3 Synthesis

Combined both research tracks into a strategic brief:

- **Competitive gap:** no Milano aparthotel tells a coherent brand story — they all sell rooms, not experience.
- **Aspirational pull:** 1 Hotels' biophilic language + Locke's apartment-as-lifestyle + Aman's typographic calm = a defensible, differentiated territory.
- **Proposed direction:** "green pocket" storytelling, one-narrative-for-three-apartments, diffused liquid glass as the signature trademark, Fraunces + Inter, warm oak accent to bind the visual system to the parquet chiaro.

10-section homepage flow drafted here (not the generic Hero→About→Services template).

Output: `brand/research-synthesis.md` (189 lines).

### 3.4 Stitch prototyping — skipped

Stitch MCP returned `{}` for `list_screens` on 4 consecutive calls including after a 180s background wait (project `8476665036683746114`). Per the skill's own fallback clause ("If Stitch is unavailable or the user prefers to skip this step, proceed directly to Step 1.5 — the brand guide can be written from research alone"), the step was formally skipped. The `brand/prototypes/` directory exists but is empty; the brand guide was written directly from research + approved creative decisions.

### 3.5 Client alignment on open decisions

Four creative decisions were surfaced to the user mid-phase and confirmed:

| Decision | Options offered | Chosen |
|---|---|---|
| A — Accent color | A1 giallo `#E8C547` / **A2 warm oak `#D9B382`** / A3 coral | **A2** |
| B — Font pairing | B1 Playfair + Inter / **B2 Fraunces + Inter** / B3 Newsreader + IBM Plex | **B2** |
| C — Motion budget | C1 minimal / **C2 subtle + some parallax** / C3 rich | **C2 with parallax accepted** |
| D — Liquid glass scope | D1 hero-only / **D2 diffused across site** (budget permitting) | **D2 — site-wide** |

### 3.6 Brand guide

Full brand guide drafted: essence, palette with hover/pressed/state variants, typography scale with clamp() formulas, voice & tone, photography direction, liquid glass spec with budget limits + accessibility fallback, UI patterns, layout, motion, do's/don'ts, references, open decisions register.

Output: `brand/guide.md` (504 lines).

### 3.7 Design tokens extraction

Two parallel artifacts machine-readable by downstream code:

- `brand/tokens.css` (216 lines) — CSS custom properties with `@media (prefers-reduced-transparency: reduce)` and `@media (prefers-reduced-motion: reduce)` overrides that remap glass + duration tokens.
- `brand/tokens.json` (253 lines) — DTCG-like structured JSON with `meta`, `color`, `glass`, `typography`, `spacing`, `layout`, `radius`, `shadow`, `motion`, `breakpoints`, `zIndex`, `iconography`, `accessibility`.

Coverage: 10 token categories, including liquid-glass layer budgets (`maxLayersDesktop: 6`, `maxLayersMobile: 4`) and parallax limits (`maxViewportShift: 12%`, `mobile: off`).

---

## 4. Outputs

```
brand/
├── research-competitors.md         # 259 lines — 4 Milano competitors
├── research-inspiration.md         # 178 lines — 4 top-tier aspirational refs
├── research-synthesis.md           # 189 lines — strategic direction + 10-section plan
├── design-references/
│   ├── 1hotels-design/DESIGN.md    # 376 lines + screenshot
│   ├── aman-design/DESIGN.md       # 390 lines + screenshot
│   └── locke-design/DESIGN.md      # 373 lines + screenshot
├── prototypes/                     # empty (Stitch skipped)
├── guide.md                        # 504 lines — comprehensive brand guide
├── tokens.css                      # 216 lines — CSS custom properties
└── tokens.json                     # 253 lines — DTCG-like JSON
```

---

## 5. Key Decisions Locked

- **Palette:** `#3A7D44` primary green, `#F6F4EC` warm white, `#D9B382` warm oak accent (replaces giallo), `#1F2A24` neutral dark. Hover/pressed/state variants defined.
- **Typography:** Fraunces (display, variable axes opsz/SOFT/WONK, italic on displayXL/L) + Inter (body). Full 9-step scale with fluid clamp() sizing.
- **Liquid glass:** `backdrop-filter: blur(40–48px) saturate(180–200%)`, border `rgba(255,255,255,0.35)`, shadow + inset highlight. Diffused across the site within a layer budget (6 desktop / 4 mobile). Fallback to opaque `#F6F4EC` on `prefers-reduced-transparency`.
- **Motion:** `cubic-bezier(0.16, 1, 0.3, 1)` soft-out as house easing; durations 200/400/600/1200ms; stagger 80ms; parallax allowed on hero background + one divider max, capped at 12% viewport shift, off on mobile.
- **Section architecture:** 10-section homepage draft rejecting the generic template — includes the 3 moats (garage, green & bio, unified apartment story) and a business/fiere/coworking block.

---

## 6. Analysis — Quality vs. Effort vs. Risk

**What went well:**
- The 4 creative decisions were surfaced as explicit options, not silently made. Client answered in one pass.
- `skillui` extractions gave concrete, structured design-reference input — far more actionable than subjective mood notes.
- Tokens extracted to both CSS and JSON means Phase 2 can import either without re-reading the brand guide.
- Accessibility fallbacks (reduced-transparency, reduced-motion) are baked into the tokens file, not deferred to implementation.

**What was lost:**
- Stitch prototyping was skipped. The consequence is a visual direction validated only through research + reference images, not through bespoke compositions. Mitigation: the three `skillui` extractions (1 Hotels, Locke, Aman) provide concrete visual grammar to adapt, and the brand guide references them by name.
- Two competitor candidates (BB Hotels timeout, Mia Aparthotel redirect) were replaced/dropped. Sample of 4 is preserved but with substitutions.

**Risks carried into Phase 2:**
- **Glass performance budget on mobile** — 4-layer cap is aggressive; Phase 2 must verify perceived quality doesn't degrade when glass is stripped on low-end devices.
- **Contrast on glass surfaces** — light palette + translucent surfaces is a known AA contrast hazard. Tokens define text-on-glass opacity tiers (1 / 0.75 / 0.55); Phase 2 must audit every glass usage against `#1F2A24` text.
- **"One narrative, three apartments"** — easy to articulate in research, hard to execute without collapsing into a vague tour. The 21 photos need curating into a single sequence, not a gallery grid. Phase 2 must resolve this.

---

## 7. Handoff to Phase 2

Phase 2 (`/brand-demo plus`) inherits:

- `brand/tokens.css` + `brand/tokens.json` — import directly, no further translation needed.
- `brand/guide.md` — reference for voice, do's/don'ts, motion philosophy.
- `brand/research-synthesis.md` — contains the 10-section plan and rationale. Becomes the starting point for `brand/site-plan.md`.
- `brand/design-references/*/DESIGN.md` — concrete layout/typography patterns to adapt.
- 21 curated photos in `brand_asset/`.

No Phase-1 loose ends block Phase 2. All staged artifacts are still uncommitted — awaiting explicit user go-ahead before committing.
