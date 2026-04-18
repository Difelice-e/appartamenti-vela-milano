# Phase 2 — Brand Demo (Plus) — Report

**Project:** Appartamenti Vela Milano
**Date:** 2026-04-18
**Pipeline:** `/web-pipeline` → `/brand-demo plus`
**Mode:** Plan (Opus) for architecture + review → Edit (Sonnet) for code

---

## 1. Objective

Turn the Phase 1 identity into a working single-page demo in Next.js + React + Framer Motion, impressive enough to win the client but scoped as a sales tool — not the final product. Every section must be justified by the business (short-stay apartments in Milano with garage, green pocket moat, multilingual host) and never default to the generic Hero→About→Services template.

---

## 2. Inputs Consumed

| Source | What was used |
|---|---|
| `brand/tokens.css` | Imported directly into `app/globals.css` — no retranslation |
| `brand/guide.md` | Voice, typography scale, glass spec, motion philosophy, do's/don'ts |
| `brand/site-plan.md` | 10-section homepage architecture + rationale |
| `brand/research-synthesis.md` | Narrative direction ("green pocket", unified apartment story) |
| `brand/design-references/*/DESIGN.md` | Concrete layout grammar (1 Hotels biophilia, Locke apartment-as-lifestyle, Aman typographic restraint) |
| `brand_asset/*.jpg` (20 photos) | All real client photos, copied to `demo/public/photos/` |

No placeholder Unsplash imagery used — the demo runs entirely on real client material, so the client sees their own apartments, not stock.

---

## 3. Process

### 3.1 Architecture decisions (Plan mode)

Before any code: locked the 10 sections from `site-plan.md` into a concrete component tree, confirmed the liquid-glass budget (6 desktop / 4 mobile), and decided the animation topology — Framer Motion `whileInView` staggered reveals as the house pattern, `useScroll` + `useTransform` parallax reserved for the hero background only.

Key architectural calls:

- **One client-side motion primitive per section**, not a global orchestrator — keeps each section independently inspectable.
- **Tailwind as the styling layer**, with `tailwind.config.ts` mapping brand CSS vars (`var(--color-primary)` etc.) to the Tailwind theme so class names stay idiomatic (`bg-primary`, `text-ink`) without losing the token pipeline.
- **Icons via `@phosphor-icons/react/dist/ssr`** (Regular weight across the board, per brand guide), with a shared `PhosphorIcon` type for components that accept an icon as prop.
- **No headless UI libs, no animation libs beyond Framer Motion** — demo budget forbids dependency sprawl.

### 3.2 Scaffold

Next.js 14.2.15 App Router, React 18.3.1, TypeScript 5.6, Tailwind 3.4, Framer Motion 11.11, Phosphor Icons 2.1.7. Fonts loaded via `next/font/google` (Fraunces + Inter) with `display: swap` and variable bindings surfaced as CSS variables.

20 client photos copied verbatim from `brand_asset/` into `demo/public/photos/`.

### 3.3 UI primitives (`components/ui/`)

Four reusable primitives that encode the brand rules once:

| File | Purpose |
|---|---|
| `GlassPanel.tsx` | Canonical `.glass` wrapper — centralizes the blur/saturate/border/inset-highlight recipe so every usage is a single glass "layer" against the budget |
| `SectionLabel.tsx` | Eyebrow component — uppercase, tracked, primary-tinted — the consistent section opener |
| `BookingBadge.tsx` | 9.2/678 reviews pill in `.glass-on-photo` variant — used in hero, reused in Recensioni |
| `RevealSection.tsx` | Framer-based scroll reveal with `prefers-reduced-motion` awareness — wrapped around sections that don't need bespoke motion |

### 3.4 Sections (10, per site-plan.md)

| # | Component | Role in the narrative |
|---|---|---|
| 0 | `Navigation.tsx` | Sticky nav, transparent → glass at 20px scroll, wordmark with "Vela" in primary, hamburger + full-screen mobile overlay with staggered entrance |
| 1 | `Hero.tsx` | 100svh full-bleed on `esterno_1.jpg` with parallax (12% max), warm overlay gradient, `.glass-on-photo` card with H1 "Un'oasi verde nel cuore di Milano" + BookingBadge + 2 CTAs |
| 2 | `GreenPocket.tsx` | The biophilic hook — 6 distance pills (Metro Piola 400m, Centrale 1.5km, Linate 8km, etc.) establishing "city + escape" in one glance |
| 3 | `GliAppartamenti.tsx` | 6-photo mosaic (balcone, camere, soggiorno, cucina, bagni, dettaglio) told as **one apartment story, not three listings** — the hardest call from Phase 1 risk register |
| 4 | `MaterialTruth.tsx` | 3 glass cards with photo: parquet chiaro, cucina completa, bagno 100% bio — the artisanal, tactile proof |
| 5 | `Ospitalita.tsx` | "Presente fino a mezzanotte" — HandHeart-centered, 3 info pills (check-in, multilingua, garage aggiungibile) |
| 6 | `Garage.tsx` | Dark section on `parcheggio_1.jpg` with opacity-30 background — the moat visualized. 4 feature pills + accent-colored CTA |
| 7 | `BusinessFiere.tsx` | 2-col: left copy with 5 business features, right 2×2 distance grid (Rho Fiera, MiCo, Centrale, Linate) in glass cards |
| 8 | `Recensioni.tsx` | 3 glass review cards (IT/EN/FR) with Quotes + 5 stars, Booking 9.2/678 badge reinforced |
| 9 | `Prenota.tsx` | Lead-gen form (mailto action, honeypot) — **no Booking redirect** per extra_requests. Garage upsell as opt-in checkbox |
| 10 | `Footer.tsx` | Ink background, 3-col (brand+socials / nav / contacts), legal links as `href="#"` with `data-page` attrs for Phase 3 |

All sections use the `section-py` vertical rhythm token and a `container-vela` max-width, keeping section cadence consistent.

### 3.5 Liquid glass accounting

The brand guide's 6-desktop / 4-mobile budget was respected by counting actual glass layers per viewport:

- Persistent: sticky nav (1).
- Above the fold: hero card + BookingBadge + nav = 3.
- Peak density: when scrolling past Ospitalita, BusinessFiere distance grid (4 cards on wide screens) or Recensioni (3 cards) plus the sticky nav — 4 or 5, within budget.
- Mobile: `.glass-desktop-only` class strips backdrop-filter on `<md`, falling back to solid `bg-secondary` — keeps the form legible on low-end devices without removing the visual anchor.

### 3.6 Accessibility & performance

- `useReducedMotion` respected in every animated component: parallax, scale-in, and slide-in all collapse to opacity-only transitions.
- `@media (prefers-reduced-transparency: reduce)` override in tokens.css swaps glass for opaque `#F6F4EC` — no code change needed in components.
- All photos use `next/image` with `sizes` hints; hero photo marked `priority` for LCP.
- Form has a hidden honeypot field (`company`) with `tabIndex={-1}` and `autoComplete="off"`.
- Semantic landmarks: `<main>` in `page.tsx`, `<nav>`, `<footer>`, `<section>` with `id` anchors matching nav hrefs.

### 3.7 Build + runtime verification

- `npx next build` → success. Route `/` at 78.2 kB, First Load JS 165 kB.
- `npx next start -p 3014` → HTTP 200, 87 611 bytes HTML.
- Grep against rendered HTML confirmed all 7 photo categories present and key brand phrases rendered ("green pocket", "parquet chiaro", "9.2", "Pianifica").

---

## 4. Outputs

```
demo/
├── app/
│   ├── layout.tsx          # 40 lines — fonts, metadata, OG image
│   ├── page.tsx            # 31 lines — section assembly
│   └── globals.css         # 256 lines — imports tokens.css + utility classes (.glass, .btn-*, .container-*, .section-py)
├── components/
│   ├── ui/
│   │   ├── BookingBadge.tsx    # 25
│   │   ├── GlassPanel.tsx      # 26
│   │   ├── RevealSection.tsx   # 32
│   │   └── SectionLabel.tsx    # 23
│   ├── Navigation.tsx          # 124
│   ├── Hero.tsx                # 113
│   ├── GreenPocket.tsx         #  86
│   ├── GliAppartamenti.tsx     # 120
│   ├── MaterialTruth.tsx       #  91
│   ├── Ospitalita.tsx          #  65
│   ├── Garage.tsx              # 115
│   ├── BusinessFiere.tsx       #  98
│   ├── Recensioni.tsx          #  95
│   ├── Prenota.tsx             # 154
│   └── Footer.tsx              # 123
├── lib/
│   └── motion.ts               # EASE_SOFT_OUT + shared viewport config
├── public/photos/              # 20 real client photos
├── tailwind.config.ts          # brand tokens → Tailwind theme
├── next.config.js
└── package.json
```

Total hand-written code: ~1 511 lines across 14 components + layout + globals + page.

---

## 5. Key Decisions Locked

- **Section architecture diverges from the generic AI template.** "Gli appartamenti", "Green pocket", "Materia", "Ospitalità", "Garage", "Business & Fiere" are named and scoped per the business, not per a reusable theme.
- **Three apartments as one narrative.** The mosaic in `GliAppartamenti.tsx` is a single sequence with 6 photo crops, not a 3-card listing grid. Resolves the Phase 1 risk.
- **Lead-gen form instead of Booking redirect.** Confirmed via `extra_requests` — the form is the conversion endpoint; Booking is referenced only as a trust signal (9.2/678).
- **Garage as a dedicated section.** Not a feature bullet elsewhere. Own dark section with its own CTA ("Aggiungi il garage alla prenotazione"), accent-colored button to visually separate from the primary flow.
- **Parallax confined to hero.** 12% max shift, desktop only, disabled under reduced-motion. No parallax elsewhere.
- **Italian copy throughout.** Written in the brand voice from the guide, not auto-translated or lorem. Reads like the proprietor wrote it.

---

## 6. Analysis — Quality vs. Effort vs. Risk

**What went well:**

- Token pipeline paid off: `tokens.css` imported once in `globals.css`, Tailwind mapped the vars, and no color or spacing value was ever hard-coded in component code.
- The UI primitives folder (`ui/`) kept the glass rules and eyebrow style in one place — every section reads from the same primitives, so refactors are local.
- The demo uses only real client photos. This is unusual for Phase 2 and raises the perceived fidelity significantly — the client will see their own balcony, not a stock interior.
- `use client` scoped per section, not globalized — server component in `page.tsx` assembles everything, keeping initial JS minimal.

**What was cut / deferred:**

- **No microinteraction polish on form fields.** Inputs use focus:border-primary but no floating labels, no async validation. Scope: Phase 3.
- **No cookie banner.** GDPR deferred to delivery per skill spec.
- **Legal pages are `href="#"` stubs** with `data-page` attrs for Phase 3 to wire up.
- **No map embed.** Address rendered as text in contacts strip + footer. A styled map is a Phase 3 delivery task.
- **No Instagram feed / social proof block.** Recensioni block + Booking badge cover social proof adequately for the demo; an IG embed is delivery polish.

**Risks carried into Phase 3:**

- **Next.js 14.2.15 has a known security advisory.** Acceptable for a demo that runs locally, but must be bumped before production deploy. Log: pin to 14.2.33+ or migrate to 15.x during delivery.
- **Form currently uses `mailto:` action** — works in the demo but unreliable (depends on client OS mail app). Delivery must swap to a real endpoint (Formspree / Resend / custom API route).
- **Contrast audit on glass surfaces not yet run.** Visual inspection passed but no Lighthouse/axe sweep yet. Phase 4 (`/brand-audit`) will catch this.
- **Mobile glass fallback is binary** (on/off via `.glass-desktop-only`). If the client tests on mid-range Android and the stripped version feels flat, Phase 3 may need a middle tier (reduced blur rather than removed).
- **No tests.** Per pipeline spec (demo = sales tool) this is intentional, but means any Phase 3 refactor has no safety net.

---

## 7. Handoff to Phase 3

Phase 3 (`/brand-deliver`) inherits:

- A working Next.js 14 demo at `demo/` — approved by client before any delivery work starts.
- All brand tokens already wired through — no brand retranslation needed.
- 10-section architecture that **should not be reopened** unless the client explicitly asks. Delivery is about polish and content finalization, not redesign.
- A Phase-3 punch list already identified above (legal pages, cookie banner, map embed, real form endpoint, Next.js upgrade, responsive audit at all breakpoints).

No Phase-2 loose ends block Phase 3. The demo builds, runs, and tells a coherent brand story end-to-end. Client walkthrough is the gate.
