# Phase 2 — Opus Review — Findings & Fixes

**Project:** Appartamenti Vela Milano
**Date:** 2026-04-18
**Pipeline:** `/web-pipeline` → `/brand-demo plus` → self-review
**Mode:** Plan (Opus) — post-Sonnet review of the built demo
**Scope:** full audit of `demo/`, issues ranked by severity, fixes applied inline

---

## 1. Intent

The Phase 2 demo was built by Sonnet from a Plan-mode architecture. Before handing anything to the client, re-read every file in Opus with a critical eye: broken patterns, accessibility gaps, brand violations, silent bugs. This report documents what was found and what was changed.

Nothing cosmetic is logged — only real defects. Nitpicks (preference-level choices) were intentionally ignored.

---

## 2. Method

1. Re-read every demo file in order: `app/layout.tsx`, `app/globals.css`, `tailwind.config.ts`, `brand/tokens.css`, every component including UI primitives.
2. Cross-referenced against the brand guide's budget (6-desktop / 4-mobile glass layers) and the token chain (next/font ⟶ CSS vars ⟶ Tailwind theme ⟶ component classes).
3. Ran the rendered HTML through a structural check (grep for rendered classes, inspect `<html>` tag, verify anchor targets).
4. Fixed each real defect; re-ran `next build` after fixes.

No tests were added (demo scope).

---

## 3. Findings — by Severity

### 3.1 CRITICAL — silent bugs that affect every page

| # | File | Issue | Why it matters |
|---|---|---|---|
| C-1 | `brand/tokens.css` | `--font-body: 'Inter', …` and `--font-display: 'Fraunces', …` use **literal font names**, not the CSS variables produced by `next/font` (`--font-inter`, `--font-fraunces`). | Google-loaded Inter/Fraunces were **never actually used** by the body. The browser fell back to the system "Inter" (if installed) or system-ui. The whole next/font optimization was dead weight. |
| C-2 | `demo/app/globals.css` | No `scroll-padding-top`. | Every anchor-link click (nav, footer, in-page CTAs) scrolled the target heading **underneath the 72-px sticky nav**. Users had to scroll up to see the section title. |
| C-3 | `demo/components/GliAppartamenti.tsx` | 3×4 grid (12 cells), six items sized at `2×2, 1×2, 1×2, 1×1, 1×1, 1×1` = **11 cells total**. | One empty cell in the apartment mosaic — a visible layout hole directly in the hero story section. |
| C-4 | `demo/components/Prenota.tsx` | `Ospiti` select and `Note` textarea had `<label>` elements **without `htmlFor`** and inputs **without `id`**. | Screen readers announce the control with no label. Clicking the visible label didn't focus the control. WCAG 2.1 1.3.1 + 3.3.2 fail. |
| C-5 | `demo/components/Navigation.tsx` | Mobile menu overlay had no `role="dialog"`, no `aria-modal`, no Escape key handler, hamburger had no `aria-expanded` / `aria-controls`. | A screen-reader/keyboard user could open the menu and get stuck inside it. No dismissal affordance beyond re-tapping the hamburger. |

### 3.2 HIGH — brand, performance, or code quality

| # | File | Issue | Why it matters |
|---|---|---|---|
| H-1 | 5 components | `.glass` / `.glass-pill` applied on **solid-background sections** (`bg-white`, `bg-secondary`) — GreenPocket pills, Ospitalita pills, MaterialTruth cards, Recensioni cards, Prenota form, BusinessFiere distance cards. | `backdrop-filter: blur` has no content to blur through on opaque sections, so it costs GPU for **zero visual effect**. Also pushed the layer count over the brand guide's 6-desktop budget (7 surfaces visible on GreenPocket alone). |
| H-2 | `Hero.tsx` | Parallax `motion.div` was exactly 100 % of the hero height; transform `y: 0 → 12 %` on scroll **exposed empty space** at the bottom of the hero during scroll-out. | User-visible gap — the warm cream of the next section (or raw body bg) briefly flashed at the hero's bottom edge on scroll. |
| H-3 | `Footer.tsx` | Wordmark styled "Vela" in `text-accent` (warm oak). Navigation renders the same word in `text-primary` (green). | Brand inconsistency — the wordmark is the clearest single-token brand asset on the page. Two colors across two components is a direct brand-guide violation. |
| H-4 | `Prenota.tsx` | `import type { Icon as PhosphorIcon }` placed **on line 145, after the `Contact` function definition**. | Imports hoist, so it ran, but the style is confusing and breaks tooling assumptions (tree-shakers, import organizers). |
| H-5 | `Navigation.tsx` | Scrolled-state transition used `transition-all` and toggled `mx-4 mt-3 rounded-pill` together. | `transition-all` animates **layout** properties (margin, border-radius) alongside surface properties. Result: the nav container visibly jittered at the scroll-threshold crossover. |
| H-6 | `components/ui/GlassPanel.tsx`, `components/ui/RevealSection.tsx` | Defined but **never imported** anywhere. `RevealSection` also used a sketchy `motion[as as keyof typeof motion]` type cast that would break at runtime with certain `as` values. | Dead code + a latent bug waiting to be discovered. |

### 3.3 MEDIUM — avoidable waste

| # | File | Issue |
|---|---|---|
| M-1 | `GliAppartamenti.tsx` + `MaterialTruth.tsx` | `camere_3.jpg` rendered twice — once in the mosaic, once as the parquet-chiaro card photo. 6 bedroom photos available; no reason to dedupe poorly. |
| M-2 | `Hero.tsx` | `md:rounded-[28px]` redundant — `rounded-xl` already maps to `var(--radius-xl)` = 28 px via Tailwind theme. |
| M-3 | `Hero.tsx` | Hero card used `inline-block` with `lg:max-w-[720px]` and no explicit width on smaller breakpoints — shrink-to-fit behavior was load-bearing on layout accuracy. |
| M-4 | `GliAppartamenti.tsx` | Mosaic `sizes="(max-width: 1024px) 50vw, 40vw"` overserved small mosaic cells (1/3 of a 700 px container ≈ 233 px served at 40 vw ≈ 768 px — ~3× oversized). |

---

## 4. Fixes Applied

All fixes were committed directly to the demo codebase. Build remains green (`next build` → 78.4 kB / 166 kB First Load JS).

### C-1 — Font variable chain
```diff
- --font-display: 'Fraunces', 'Newsreader', Georgia, serif;
- --font-body: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
+ --font-display: var(--font-fraunces, 'Fraunces'), 'Newsreader', Georgia, serif;
+ --font-body: var(--font-inter, 'Inter'), system-ui, -apple-system, 'Segoe UI', sans-serif;
```
Verified: `<html class="__variable_80e2a8 __variable_37ef13">` at runtime — next/font variables are now chained through tokens → body actually uses the Google-loaded fonts.

### C-2 — Scroll padding
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--nav-h-mobile) + 12px);
}
@media (min-width: 1024px) {
  html { scroll-padding-top: calc(var(--nav-h-desktop) + 16px); }
}
```

### C-3 — Mosaic grid closure
Redesigned the mosaic to fill exactly 12 cells:

| Item | Span | Placement |
|---|---|---|
| balcone_1 | 2×2 | rows 1-2, cols 1-2 |
| camere_1 | 1×2 | rows 1-2, col 3 |
| soggiorno_1 | 1×2 | rows 3-4, col 1 |
| cucina_1 | 2×1 | row 3, cols 2-3 |
| bagni_2 | 1×1 | row 4, col 2 |
| camere_4 | 1×1 | row 4, col 3 |

Also moved the per-item span to the data array (instead of computing from index inline) and fixed M-1 by swapping `bagni_1 → bagni_2` and `camere_3 → camere_4`.

### C-4 — Form labels
Added `htmlFor` + matching `id` on `Ospiti` and `Note` controls.

### C-5 — Mobile menu a11y
- Overlay: `role="dialog"` + `aria-modal="true"` + `aria-label="Menu"` + stable `id`.
- Hamburger: `aria-expanded={open}` + `aria-controls={MENU_ID}`.
- Open effect: focus first link on mount, bind Escape-to-close, remove handler and restore `overflow` on close.

### H-1 — Kill decorative glass on opaque sections
Added two solid-surface utilities to `globals.css`:
```css
.card-soft { background: var(--color-white); border: 1px solid var(--color-divider-soft); box-shadow: var(--shadow-card-soft); }
.card-pill { background: var(--color-white); border: 1px solid var(--color-divider-soft); box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 14px rgba(31,42,36,0.05); }
```
Swapped `.glass`/`.glass-pill` → `.card-soft`/`.card-pill` in: GreenPocket pills, Ospitalita pills, MaterialTruth cards, Recensioni cards, Prenota form, BusinessFiere distance cards.

Glass usage after cleanup is now **only where there is something behind it to blur**:
- Sticky navigation (scrolled state) — over scrolling page content.
- Hero `BookingBadge` + hero card — over the esterno photo.
- Mobile menu overlay — over the page content.
- Garage pills (kept `bg-white/5 backdrop-blur-md`) — over the parcheggio photo at 30 % opacity.

Layer budget at peak (hero fully visible, nav scrolled): **3 desktop / 2 mobile** — well under the 6/4 cap.

### H-2 — Hero parallax overscan
```diff
- <motion.div style={{ y: parallaxY }} className="absolute inset-0 -z-10">
+ <motion.div
+   style={{ y: parallaxY, top: '-15%', height: '115%' }}
+   className="absolute inset-x-0 -z-10"
+ >
```
The bg is now overscanned by 15 % so the 12 % parallax shift never exposes a gap.

### H-3 — Wordmark color
`Footer.tsx`: `text-accent` → `text-primary` on the "Vela" span. Now matches Navigation.

### H-4 — Prenota import
Moved `import type { Icon as PhosphorIcon }` to the top of the file, next to the other imports.

### H-5 — Nav surface transition
Introduced `.nav-shell` / `.nav-shell-scrolled` in `globals.css`. The outer container keeps its size; only background, backdrop-filter, border, and shadow transition (explicit `transition-[background-color,backdrop-filter,box-shadow,border-color]`). No more margin/radius wobble.

Bonus: the scrolled state now degrades correctly under `prefers-reduced-transparency` (swaps to opaque cream).

### H-6 — Dead code removal
Deleted `components/ui/GlassPanel.tsx` and `components/ui/RevealSection.tsx`.

### M-2 + M-3 — Hero card
`inline-block rounded-xl p-6 md:rounded-[28px] md:p-10 lg:max-w-[720px]` → `block rounded-xl p-6 md:p-10 lg:max-w-[720px]`.

### M-4 — Mosaic `sizes`
`"(max-width: 1024px) 50vw, 40vw"` → `"(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"`. Smaller cells no longer pull oversized images.

---

## 5. Verification

- `npx next build` — green, 78.4 kB / 166 kB First Load JS (one-line regressions from dead-code removal and token chain fix).
- `npx next start -p 3015` → HTTP 200, 87 954 bytes HTML.
- Grepped rendered HTML for the new photo IDs (`camere_4`, `bagni_2`) and utility classes (`card-soft`, `card-pill`) — all present.
- Inspected `<html>` classes — `__variable_80e2a8 __variable_37ef13` confirms next/font CSS variables applied.

No manual device test yet. Lighthouse + axe sweep deferred to Phase 4 (`/brand-audit`).

---

## 6. What was NOT fixed (intentional)

- **`mailto:` form action with `encType="text/plain"`** — already flagged in the Phase 2 report as a Phase-3 delivery task. Replacing it now would require a real endpoint (Formspree / API route). Out of demo scope.
- **Honeypot field without server-side validation** — useless against bots given the mailto flow, but costs nothing and stays in place for Phase 3 when a real endpoint lands.
- **Next.js 14.2.15 security advisory** — upgrade is a Phase-3 task. Demo is not internet-exposed.
- **No map embed, no cookie banner, no legal pages** — all explicitly Phase-3.
- **Tests** — demo scope excludes them per pipeline spec.

---

## 7. Residual Risk into Phase 3

1. **Mobile responsive QA** — none of the fixes were device-tested; only build-verified. Every breakpoint still needs a manual sweep in Phase 3.
2. **Glass contrast on `glass-on-photo`** — text opacity tiers defined but no axe run yet. The hero card sits over a warm overlay; contrast should pass but is unverified.
3. **`next/font` cache warm-up** — the first paint may briefly fall back to system fonts. Acceptable on modern browsers; note for Phase 4 Lighthouse interpretation (`font-display: swap` is already set).
4. **Mobile menu focus trap is minimal** — focus moves to first link on open, Escape closes. There is no full trap (Tab at last link escapes the dialog). Enough for a demo; a real focus trap (e.g., `focus-trap-react`) is a Phase-3 consideration.

Demo state is now acceptable for client presentation. The hand-off to Phase 3 is unchanged except that the "responsive polish" item in the Phase-2 handoff list has become **"responsive polish + retest the 10 items fixed here."**
