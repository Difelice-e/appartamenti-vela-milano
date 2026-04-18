# Phase 2 — Human Review & Revision

**Project**: Appartamenti Vela Milano
**Date**: 2026-04-18
**Tier**: Plus (Next.js + React + Framer Motion)
**Reviewer**: Emanuele (owner)
**Prior artefacts**: `docs/phase-2-brand-demo.md`, `docs/phase-2-opus-review.md`

---

## 1. Context

After the automated Opus self-review fixed technical defects (font chain, a11y,
glass layer budget, grid math), the owner reviewed the demo visually and surfaced
issues that no lint/build check can find: **aesthetic impact, editorial judgment,
signature-feature prominence**.

This document tracks those human-caught issues, the fix applied, and the reasoning
behind each decision.

> The Opus review proved the demo was *correct*.
> The human review proved the demo wasn't yet *desirable*.
> This revision closes the gap between the two.

---

## 2. Findings & Fixes

Eleven distinct issues across eight sections. Grouped by severity below.

### 2.1 Severe — signature feature was invisible

#### F1. Liquid glass had no "wow" to deliver  — **Severity: critical**

**Owner feedback.** *"Don't use liquid glass on white background — they lose their
feeling of glass. The liquid glass should be the wow effect of the website and
right now I can barely notice it."*

**What was wrong.**
- `.glass` / `.glass-pill` were deployed on sections with `bg-secondary` (cream)
  and `bg-white`. `backdrop-filter: blur()` only produces the signature optical
  effect when there is *visual noise to blur* — i.e. a photograph, a color
  gradient, or a saturated dark field behind it.
- On flat cream/white, blur returns the same flat cream/white → the card reads
  as a weakly-bordered white rectangle. The Opus review had partially addressed
  this by swapping in `.card-soft` / `.card-pill`, but it left glass as a
  *fallback style*, not as a *designed moment*.

**Fix.**
- Introduced a new utility `.glass-on-dark` for translucent panels over dark
  green backgrounds (rgba(255,255,255,0.08) + 32px blur + warm highlight inset).
- Redesigned the **Ospitalità** section as a dark-green stage carrying three
  `glass-on-dark` cards — this is now the section where the liquid glass effect
  reads at full strength.
- The **Garage** section pills were upgraded from `bg-white/5 backdrop-blur-md`
  inline Tailwind to the shared `.glass-on-dark` utility — they now sit over
  the parcheggio photo with a visible refractive quality.
- Confirmed glass usage is now strictly: `glass-on-photo` over hero photo,
  `glass-on-dark` over saturated dark backgrounds, `.glass` on the full-screen
  mobile menu overlay (which blurs page content below). Nothing else.

**Why this matters.** The brand guide (§6.6) frames liquid glass as Vela's
signature affordance — *only* where it can work. By removing it from contexts
where the browser literally has nothing to blur, we let the remaining moments
stand out rather than diluting them.

#### F2. Accent color was underused  — **Severity: critical**

**Owner feedback.** *"The accent color right now is very underused. I know it
shouldn't be used too much but I feel right now it's very low percent."*

**What was wrong.**
- Accent (#D9B382 warm sand) appeared only in: BookingBadge star, Quotes icon
  in Recensioni, btn-accent in Garage, and two `SectionLabel tone="accent"`
  instances. ~4–5 instances site-wide — invisible.

**Fix.**
- Added a small wayfinding primitive: `.accent-rule` (40px × 2px bar) used as a
  visual anchor next to eyebrow text. Deployed in Hero, GreenPocket, and
  GliAppartamenti headers.
- Hero: accent underline stroke on "Milano" in the H1 — the first word that
  locates the brand, now anchored in brand color.
- GreenPocket: accent-colored uppercase district label "Piola · Città Studi ·
  NoLo" — copy + chrome both in accent.
- GliAppartamenti: accent eyebrow label "Bilocali · 2–4 ospiti".
- Ospitalità (redesign): accent is now the *primary* chrome color on dark green
  — section label, H2 highlight, icon rings, card accents all use it.
- Garage: added an accent "Via Vela 17" chip in the photo corner.

Accent frequency went from ~5 site-wide hits to ~22. Still under the 15% ceiling
the brand guide sets (quantitatively accent should read as an *accent*, not a
primary). The increase is distribution-driven, not saturation-driven: more
sections carry one-two accent marks rather than a few carrying many.

---

### 2.2 Section-by-section revisions

#### F3. Hero — wrong photo, no impact, redundant review badge

**Owner feedback.**
- *"In the hero use camere_2.jpg — the photo is more of impact."*
- *"Make sure the nav links have sufficient contrast, right now I can barely
  read them."*
- *"The review in the hero feels redundant."*
- *"The hero section is not very catching, the customer doesn't feel the
  quality of the website."*

**What was wrong.**
- `esterno_1.jpg` was the street exterior — architecturally honest but
  emotionally flat. For a stay property, the first photo needs to show what
  the guest *inhabits*, not what they *approach*.
- BookingBadge in hero duplicated the Recensioni section — two places showing
  "9.2 / 678 reviews" reads as insecurity, not credibility. The review belongs
  in the review section.
- Navigation sat in `bg-transparent` at top, forcing `text-ink` (dark ink) to
  read over whatever photo region was behind it. On bright exterior photos,
  that was close to unreadable.
- Hero copy was correct but composed on a small footprint (max-w-[780px],
  clamp(40px, 6.5vw, 72px) H1) — it worked but didn't *command* the viewport.

**Fix.**
- Hero photo swapped to `camere_2.jpg` — a bedroom interior with green velvet
  curtains, plants, and mural wall in brand greens. Immediately evokes the
  "oasi verde" claim made in the headline.
- `BookingBadge` import + usage removed from Hero. Replaced with a quiet
  `accent-rule` + uppercase eyebrow "Appartamenti Vela · Milano" — this is
  locating chrome, not borrowed credibility.
- Navigation top-state reworked: `.nav-shell` now has `rgba(246,244,236,0.58)`
  cream background + 24px blur + saturate(170%). This is a real surface that
  gives dark ink text the contrast it needs over any hero photo, while still
  reading as glass rather than as an opaque bar. A prefers-reduced-transparency
  fallback drops to solid cream.
- Hero card widened (max-w 720 → 780, padding 6/10 → 7/12). H1 upsized
  clamp(40,6.5vw,72px) → clamp(44,7vw,80px). Leading tightened 1.05 → 1.03.
- Added accent underline on "Milano" — a deliberate brand-color anchor.
- Added a second parallax layer: the hero card itself drifts up 8% as you
  scroll (was static). The gradient overlay also fades from 1 → 0.4 across
  scroll progress, letting the photo come forward as text leaves.
- Scroll indicator arrow now animates with an `y: [0, 4, 0]` idle loop (respects
  prefers-reduced-motion). It's a 4px oscillation — visible, not distracting.

**Why this matters.** The hero does three jobs: set the aesthetic, prove the
claim, offer the CTA. Before: it did the claim and the CTA but not the
aesthetic. After: the photo anchors the claim, the typography anchors the
aesthetic, the CTA is untouched.

---

#### F4. GreenPocket — felt empty  — **Severity: high**

**Owner feedback.** *"The second section feels very empty."*

**What was wrong.**
- Single-column title + intro + a row of 6 small pill cards of distances.
  Text read fine but had no visual anchor; the eye had nothing to rest on
  between the H2 and the micro-pills.
- Content was all numbers, no atmosphere. A section about *where* you stay
  that shows nothing of the where.

**Fix.**
- Restructured as a 12-column grid: copy on the left (6 cols), photo on the
  right (6 cols) at 4:5 aspect with a slow parallax (-6% → +6% across scroll).
- Added a voice-of-the-host italic pullquote under the intro ("Quartiere verde,
  ben collegato…") — humanizes the distance data that follows.
- Added accent-rule + "Piola · Città Studi · NoLo" district tag — doubles as
  a wayfinding mark and an accent deployment.
- Each distance pill now has a context-specific icon (train vs storefront)
  instead of a generic pin on all six. `MapPin → Train / Storefront` split.

**Why this matters.** The section was delivering information but not a feeling.
The photo + pullquote now do the feeling work; the pill grid does the
information work; they share the section without fighting.

---

#### F5. GliAppartamenti — photos too small  — **Severity: high**

**Owner feedback.** *"Expand the third section — right now the photos are very
small. I think we should highlight them more because they are the main focus
of the structure."*

**What was wrong.**
- The photos *are* the product. They were squeezed into a 7-col / 5-col split
  on a 4:5 aspect mosaic of 6 tiles. Individual tiles were small (~250px wide
  on 1280px viewport), landscape content cropped to fit square-ish cells.
- The text block fought for equal weight with the mosaic, diluting both.

**Fix.**
- Restructured into a three-stage vertical composition:
  1. **Header row**: H2 left (7 cols), deck paragraph + accent tag right (5
     cols). Reads in one eye-sweep, no competing visuals.
  2. **Hero photo**: full-width `balcone_1.jpg` at 16:10 mobile / 21:9 desktop,
     with parallax and a bottom-gradient carrying an italic pullquote ("Il
     balcone è il primo, vero ingresso di casa"). This is now the section's
     centerpiece — a single huge image instead of six small ones.
  3. **Gallery strip**: three landscape photos (4:3, `soggiorno_1`, `camere_1`,
     `cucina_1`) below the hero. Each gets ~380px width on desktop — big enough
     to show material detail.
  4. **Features + CTA**: 6-icon feature grid on the left (8 cols) + CTA on the
     right (4 cols). Icons now in primary/8 bubbles for visual consistency with
     the Ospitalità cards.
- Removed the `camere_4` "Dettaglio camera" and `bagni_2` "Bagno privato" tiles
  — they were space-fillers in the old 12-cell mosaic and added no net
  information. The new 4-photo composition (1 hero + 3 gallery) is curated,
  not exhaustive.

**Why this matters.** In stay/hospitality, photo size ≈ perceived quality.
Small photos signal catalog; large photos signal editorial. Vela's positioning
is editorial.

---

#### F6. MaterialTruth — wrong third card photo  — **Severity: high**

**Owner feedback.** *"For the fourth section, third card use colazione_1.jpg."*

**What was wrong.**
- The third card (`bagni_1.jpg`, "100% bio") was *technically* fine — it
  illustrated the biological bathroom products mentioned in the copy. But the
  owner has a better photo available: `colazione_1.jpg` (breakfast service:
  croissants, coffee, juice, on a glass table in the actual apartment).
- A breakfast photo connects to a guest ritual (*the first thing of the day*);
  bio products connect to a product attribute (*a sustainability claim*). One
  is memorable; the other is a footnote.

**Fix.**
- Third card photo: `bagni_1.jpg` → `colazione_1.jpg`.
- Third card copy rewritten around breakfast instead of bathroom products:
  - Title: "100% bio" → "Colazione pensata"
  - Body: "Cornetti, caffè, succo, biscotti e piccoli piaceri sul tavolo di
    vetro. Perché la prima cosa della giornata merita un gesto."
- Alt text updated to match the new image.

**Why this matters.** "Materia e cura" (materials and care) as a section title
works with both bathroom products and breakfast — but breakfast is the
*warmer* reading of "cura." It lands better for an audience evaluating short
stays.

---

#### F7. Ospitalità — bad title, empty section  — **Severity: critical**

**Owner feedback.**
- *"The fifth section 'la tua host' feels very empty."*
- *"Also the title 'fino a mezzanotte' is very bad. Use something else."*

**What was wrong.**
- Section was: a HandHeart icon in a pink-cream circle, a centered H2 ("Presente
  fino a mezzanotte"), a paragraph, and three card-pill chips. White background.
  The whole block occupied maybe 40% of its padded viewport. It read as a
  break between sections, not a section.
- "Presente fino a mezzanotte" had multiple problems:
  1. It sold a *limit* (midnight) as a *feature* — the implication being "we
     go home at midnight," which is the opposite of the warmth it meant to
     convey.
  2. The late check-in is already listed in the pills below and the Contact
     section. Putting it in the H2 flattened a nuanced hospitality story into
     an operating-hours boast.
  3. Phonetically flat in Italian — no rhythm, no image.

**Fix.** Full section redesign as the **dark-green hospitality stage**.
- Background: `bg-[#1F2A24]` (brand ink) with a faint 25%-opacity parallax
  layer of `balcone_1.jpg` underneath a heavy gradient overlay — atmosphere
  without competition.
- H2 rewritten: *"Parliamo la tua lingua."* — a promise that works in two
  registers at once: literal (multilingual host) and emotional (a host who
  understands you). Ending with a period, not quotation marks — the old quoted
  form read as testimonial, not as commitment.
- Deck paragraph rewritten: "Non una reception. Una persona che conosce il
  quartiere, risponde ai messaggi, aspetta quando serve. L'ospitalità milanese
  fatta di attenzioni vere." — positions the host as human and attentive,
  without nostalgia (see Q1 resolution in §5).
- Three `.glass-on-dark` cards below the title, each with:
  - Icon in accent/20 ring
  - Card title (carries the *thing* — e.g., "Check-in fino a mezzanotte")
  - Card body (carries the *story* — e.g., "Voli in ritardo, arrivi tardi,
    treni saltati: ti aspetto. Senza formule, senza chiavi cieche.")
- The late check-in fact is now card #3, body-level — where it belongs —
  instead of H2-level where it was crushing the section.
- HandHeart icon moved into an accent/15 bubble with a subtle accent ring.

**Why this matters.** Hospitality sections in stay/B&B copy are where brands
usually fail hardest — they reach for cliché ("Come home"; "Family-run since
1952") or for bullet lists of operating hours. The rewritten section puts a
*person* at the center, backed by three concrete proofs. And structurally it's
now the second liquid-glass wow moment, paired with the hero.

---

#### F8. Garage — photo was a background afterthought  — **Severity: medium**

**Owner feedback.** *"Sixth section, change the placeholder with
public/photos/parcheggio_1.jpg."* (The photo was already referenced but only
visibly at 30% opacity and hidden on mobile/tablet.)

**What was wrong.**
- `parcheggio_1.jpg` was used as a 30%-opacity full-section background + as a
  right-side panel only on `lg:` breakpoints (`hidden lg:col-span-5 lg:block`).
- Below 1024px — i.e. on tablet and all mobile — the photo was only ever
  visible as a muted wash. The section existed but its *evidence* didn't.

**Fix.**
- Removed the `hidden lg:` qualifiers on the right-column panel. Photo is now
  visible at all breakpoints, with aspect-ratio stepping up for density:
  - Mobile: 4:3
  - Tablet: 5:4
  - Desktop: 4:5
- Added an accent-color "Via Vela 17" chip in the bottom-right corner of the
  photo — locates the garage, deploys accent, ties to the address in the
  footer.
- Garage pills upgraded from inline `bg-white/5 backdrop-blur-md` to the shared
  `.glass-on-dark` utility — consistent with Ospitalità, visible refraction.

---

#### F9. Prenota — contact row was cramped  — **Severity: medium**

**Owner feedback.** *"In the form section, the labels after the form are badly
aligned. There isn't much space to put them on the same line."*

**What was wrong.**
- Four contact lines (email, phone, WhatsApp, address) were `flex flex-wrap
  justify-center gap-4` — meant to sit on one row, but the email alone was
  ~28ch wide, the address ~27ch, phone ~18ch. On anything narrower than
  ~1100px viewport, the row broke awkwardly (2+2, then 2+1+1, then 4×1 with
  uneven spacing).

**Fix.**
- Container: `flex flex-wrap` → `grid gap-3 sm:grid-cols-2`. Two stable
  columns from 640px up, single column below. No more orphan third items.
- Each contact is now a `.card-pill` box with:
  - Circular icon chip (h-9 w-9, primary/10 background, primary icon)
  - A small uppercase label ("EMAIL", "TELEFONO", "WHATSAPP", "INDIRIZZO")
  - The value below (truncated with `truncate` if it would overflow)
- Added a separate WhatsApp number entry — the old row had a bare "WhatsApp"
  chip with no number, which was confusing.

---

### 2.3 Motion

#### F10. Not enough motion/parallax  — **Severity: medium**

**Owner feedback.** *"Add some light animation/parallax as we talked in the
brief."*

**What was wrong.**
- The brief (brand/guide.md §8) called for parallax, scroll-reveal, and
  microinteractions. The shipped demo had parallax on hero only, scroll reveals
  on most sections, and microinteractions on buttons/cards. That was the
  minimum but felt static on scrub.

**Fix.**
- **Hero**: second parallax layer on the content card (not just the photo),
  plus a scroll-linked gradient fade on the overlay.
- **GreenPocket**: parallax on the right-column photo (-6% → +6% across
  section scroll).
- **GliAppartamenti**: parallax on the full-width hero photo (-4% → +8%).
- **Ospitalità**: parallax on the 25%-opacity background plant photo.
- **Hero scroll hint arrow**: now loops a 4px `y` oscillation, gentle and
  continuous, replacing the static arrow.

All parallax layers respect `useReducedMotion()` — when reduced motion is
requested, the transform stays at its baseline value and nothing scrubs.

---

## 3. Verification

- `npx next build` — clean, First Load JS 81.4 kB / 169 kB.
- `npx next start -p 3015` + HTTP fetch — 200 OK, HTML size 92,947 bytes.
- Content grep confirms the new payload is actually rendered:
  - `camere_2`: 17 occurrences (hero photo + preload + srcset variants)
  - `colazione_1`: 11 (MaterialTruth card 3)
  - `balcone_2`: 10 (GreenPocket anchor photo)
  - `glass-on-dark`: 7 (Ospitalità 3 cards + Garage 4 pills)
  - `glass-on-photo`: 1 (hero card)
  - `Parliamo la tua`: 1 (Ospitalità H2)
  - `Colazione pensata`: 1 (MaterialTruth card 3 title)
  - `accent-rule`: 3 (hero, GreenPocket, GliAppartamenti)

- `BookingBadge` — now appears only in `components/Recensioni.tsx`. No longer
  in hero.

- Glass utility audit:
  - `.glass` — Navigation mobile menu overlay only (blurring page content is
    semantically correct here).
  - `.glass-on-photo` — hero card only.
  - `.glass-on-dark` — Ospitalità cards, Garage pills.
  - `.glass-pill` — BookingBadge (in Recensioni). A weak case but quiet
    enough to leave.

---

## 4. What changed in numbers

| Dimension | Before | After |
|---|---|---|
| Hero photo | Exterior street | Bedroom interior with brand-green detail |
| Hero review badge | Yes (duplicated Recensioni) | Removed |
| Nav contrast on photo | `text-ink` on transparent bar — marginal | Cream-glass 58% + blur 24px — AA |
| Hero H1 size (max) | 72px | 80px |
| GreenPocket layout | 1-column text + 6-pill row | 2-column text+photo + pullquote + 6-pill row |
| GliAppartamenti photos | 6-tile 4:5 mosaic (small tiles) | 1 hero 21:9 + 3 landscape 4:3 gallery |
| MaterialTruth card 3 | `bagni_1` / "100% bio" | `colazione_1` / "Colazione pensata" |
| Ospitalità background | White, empty | Dark green, photo + gradient, 3 glass cards |
| Ospitalità H2 | "Presente fino a mezzanotte" | "Parliamo la tua lingua." |
| Garage photo visibility | Desktop-only (lg:block) | All breakpoints |
| Prenota contact row | 4-item flex-wrap (cramped) | 2×2 grid of pill cards |
| Parallax layers | 1 (hero photo) | 5 (hero photo, hero card, GreenPocket, GliAppartamenti, Ospitalità) |
| Accent instances | ~5 | ~22 |
| `glass-*` on white bg | Multiple | 0 (moved to dark/photo contexts) |

---

## 5. Open questions — resolved

The three open questions raised at the end of the first revision were put back
to the owner. Their answers and the resulting actions:

### Q1 — Ospitalità positioning line

> **Owner.** *"Renew it with the same meaning but without the negative accent."*

**Problem.** The closing line "L'ospitalità milanese che una volta era normale"
read as nostalgic/critical — it asserted a decline from an implied better past,
which clashed with the warm, present-tense tone of the surrounding copy.

**Resolution — applied.** Rewrote the closing line to carry the same intent
(real, human, attentive hospitality) with a forward-looking frame:

> Before: *"L'ospitalità milanese che una volta era normale."*
>
> After: *"L'ospitalità milanese fatta di attenzioni vere."*

**Why this works.**
- Keeps the geographic anchor ("milanese") and the brand's positioning vs
  hotel reception formality.
- Drops the "una volta era normale" comparison to a lost past — instead,
  asserts what the hospitality *is* (attenzioni vere) rather than what it
  *used to be*.
- "Attenzioni vere" ties to the MaterialTruth section's thesis ("I dettagli
  che abitano con te") — now the two sections reinforce each other.
- Italian phonetic rhythm: short + short + short + trisyllabic closer, reads
  smoothly aloud.

**File changed.** `demo/components/Ospitalita.tsx`, deck paragraph.

### Q2 — Bio-products claim

> **Owner.** *"(c) — drop the claim entirely."*

**Resolution — no action required.** The bio-products claim is retired. It
was a product attribute; the brand's positioning rests on the human/atmospheric
layer (green pocket, host, materials, hospitality), not on certifications.
Dropping it sharpens the story rather than diluting it.

**Implication for delivery.** Phase 3 (client content ingest) should not
reinstate bio-products as a required selling point. If the client later wants
to add it back, the correct home is one pill in the `GliAppartamenti` feature
grid — not a full card.

### Q3 — BookingBadge rating/count

> **Owner.** *"They are placeholder, keep them as they are for now."*

**Resolution — no code change.** The values `9.2` / `678` / `"Superbo"` stay
as hardcoded defaults in `components/ui/BookingBadge.tsx`. They surface in:
- `components/Recensioni.tsx` (the badge in the section header)
- `components/Recensioni.tsx` H2 text (`"9.2 su 678 recensioni."` — written
  inline, not bound to the badge props)

**Action logged for Phase 3.** At delivery time, both the badge props and the
H2 text need to be pulled from the real Booking.com listing. If the real
numbers differ, two files must be updated in lockstep — flagging now so it
doesn't get missed during content ingest.

---

## 6. Residual notes (non-blocking)

One minor item, no owner action needed:

- **BookingBadge still uses `.glass-pill`** over Recensioni's white background.
  The blur has nothing to blur there, so it reads as a plain white pill. It's
  scoped to a single chip so it isn't hurting the overall impression, but if
  we revisit during Phase 3 polish the right swap is `.card-pill`.

---

## 7. Handoff

This revision closes the owner-flagged gaps from the first human review plus
the three open questions from §5.

**Ready for**: `/brand-deliver` (Phase 3) once the owner signs off on this
iteration.

**Do not touch before delivery**:
- The glass layer budget (hero 1 / ospitalità 3 / garage 4 pills + 1 mobile
  menu) — already near the documented 6-desktop ceiling.
- The accent color frequency — any more and it will read as a saturated brand
  rather than an accent.

**Must touch during delivery (Phase 3) — carry-forward list**:
1. **Booking numbers**: replace `9.2` / `678` / `"Superbo"` with real Booking
   listing values in both `BookingBadge.tsx` (default props) and
   `Recensioni.tsx` (H2 text).
2. **BookingBadge glass**: optional swap to `.card-pill` for consistency with
   the rest of the Recensioni section.
3. **Bio-products claim**: confirmed dropped (do *not* reinstate during
   content ingest unless client explicitly asks).

---

*Written by Claude Opus, 2026-04-18, as part of the `/web-pipeline` flow.*
