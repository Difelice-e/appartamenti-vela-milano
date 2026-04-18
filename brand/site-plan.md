# Site Plan — Appartamenti Vela Milano
# Phase 2 architecture document — Next.js + Framer Motion (tier: plus)
# Written in Opus Plan Mode before any code is written

---

## 1. Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | Tier plus requirement; SSR for meta tags; next/image for real photos |
| Language | TypeScript | Type-safe components |
| Styling | Tailwind CSS v3 + CSS custom properties | Brand tokens mapped to Tailwind theme; utility-first |
| Animation | Framer Motion v11 | whileInView scroll reveals, stagger, hover microinteractions |
| Fonts | next/font/google (Fraunces + Inter) | Zero layout shift; subset loading |
| Icons | @phosphor-icons/react (Regular) | Confirmed brand icon family |
| Images | next/image + local /public/photos | 21 real client photos copied from brand_asset/ |
| Form | HTML form + mailto action (demo) | Lead-gen, no Booking. Delivery: Formspree |

---

## 2. Section Architecture

Derived from what an actual Vela guest needs, NOT from a template.
Reference: `research-synthesis.md §5 — Decisione D`.

```
┌─────────────────────────────────────────────────┐
│  0. Navigation                                   │  sticky glass nav
├─────────────────────────────────────────────────┤
│  1. Hero                                         │  full-vp, exterior photo
├─────────────────────────────────────────────────┤
│  2. Green Pocket                                 │  "dove siamo" — location story
├─────────────────────────────────────────────────┤
│  3. Gli Appartamenti                             │  unified story, photo mosaic
├─────────────────────────────────────────────────┤
│  4. Material Truth                               │  parquet · cucina · bio
├─────────────────────────────────────────────────┤
│  5. Ospitalità                                   │  host story, check-in tardivo
├─────────────────────────────────────────────────┤
│  6. Garage                                       │  dedicated section, sicurezza
├─────────────────────────────────────────────────┤
│  7. Business & Fiere                             │  professionals CTA
├─────────────────────────────────────────────────┤
│  8. Voci degli Ospiti                            │  3-4 Booking reviews
├─────────────────────────────────────────────────┤
│  9. Prenota                                      │  lead-gen form, NO OTA redirect
├─────────────────────────────────────────────────┤
│  10. Footer                                      │  contacts + social + legal
└─────────────────────────────────────────────────┘
```

### Section details

#### 0. Navigation
- Component: `Navigation.tsx`
- Behavior: transparent on scroll-top → glass on scroll-down (`backdrop-filter` activates at 20px scroll)
- Content: wordmark "Appartamenti Vela Milano" (left), links: Appartamenti · Garage · Business · Prenota (right), CTA button "Chiedi disponibilità" (primary green pill)
- Mobile: hamburger → full-screen overlay with glass background
- Z-index: `--z-sticky-nav` (40)

#### 1. Hero
- Component: `Hero.tsx`
- Layout: full viewport height (100dvh), background photo `esterno_1.jpg` with warm overlay
- Foreground: glass panel (`.glass-on-photo`) centered/left-aligned with:
  - tagline italic: *"Un'oasi verde nel cuore di Milano"* (displayXL, Fraunces italic)
  - sub-tagline: "Tre appartamenti luminosi a 400m dalla metro Piola" (bodyL, Inter)
  - BookingBadge: ⭐ 9.2 · 678 recensioni (accent pill)
  - CTA: "Chiedi disponibilità" (primary) + "Scopri gli appartamenti" (ghost, scroll to §3)
- Animation: staggered Framer Motion entrance (opacity 0→1 + translateY 24→0), delay 0/150/300/450ms
- Parallax: background photo at 12% max shift on scroll (desktop only, `parallax.allowed: hero-background`)

#### 2. Green Pocket
- Component: `GreenPocket.tsx`
- Purpose: answer "dove siete? è ben collegato?" without a boring About section
- Layout: full-width section, white/secondary bg, generous padding
- Content:
  - Section label: MICRO uppercase "La nostra zona"
  - H2: "Il green pocket di Milano"
  - Body: 2 lines max — via Vincenzo Vela, 17 · Loreto / Piola / Città Studi
  - Distance strip: 6 pills — Metro Piola 400m · Centrale 1.5km · Linate 8km · Duomo 3.5km · Fiera RHO 25km · Lambrate 18min
  - Background: subtle nature/map illustration or solid secondary (#F6F4EC) — no stock photo map
- Animation: distance pills stagger-reveal (80ms each) on scroll

#### 3. Gli Appartamenti
- Component: `GliAppartamenti.tsx`
- RULE: ONE story for 3 apartments, NOT 3 cards (see input.yml `display_strategy`)
- Layout: asymmetric 2-col desktop (photo mosaic left 60% / text + data right 40%)
- Photo mosaic: 6 photos in a masonry-like grid (balcone_1, camere_1, camere_2, soggiorno_1, cucina_1, bagni_1) — all from brand_asset
- Text side:
  - H2: "Tre appartamenti, un respiro solo"
  - Body: 3 lines max evocative copy (parquet, balconi, luce mattina)
  - Data strip (compact, icon + label): 3 bilocali · fino a 4 persone · balcone · cucina completa · bagno privato · WiFi · letti extra disponibili
  - CTA: "Prenota il tuo soggiorno" → scrolls to §9
- Animation: photo mosaic reveals staggered (top-left to bottom-right), text fades from right

#### 4. Material Truth
- Component: `MaterialTruth.tsx`
- Purpose: show specificity (Lezione 1 Hotels) — material claims, not generic "comfort"
- Layout: 3 equal columns, each a glass card with close-up photo + micro-story
  - **Parquet chiaro**: photo `cucina_3.jpg` or `camere_3.jpg` (floor shot), text "Rovere chiaro nei 3 appartamenti — il mattino entra attraverso il legno"
  - **Cucina completa**: photo `cucina_1.jpg` — "Piano induzione, forno, Nespresso. Cucina come a casa, a Milano"
  - **100% Bio**: photo `bagni_1.jpg` — "Prodotti da bagno certificati bio — shampoo, balsamo, bagnoschiuma inclusi"
- Animation: cards reveal on scroll, slight y-offset stagger

#### 5. Ospitalità
- Component: `Ospitalita.tsx`
- Purpose: humanize the host — nobody else does this in the Milano short-stay market
- Layout: large single-panel, secondary background, centered text + icon
  - Label: MICRO "La tua host"
  - H2: "Presente fino a mezzanotte"
  - Body: "Parliamo italiano, inglese, e altre lingue. Check-in flessibile su richiesta — l'attesa tardiva non è un problema, è parte della nostra ospitalità"
  - Icon: Phosphor `HandHeart` or `ChatCircle` Regular, large, accent color
  - Detail strip: check-in 12:00–23:59 · check-out 10:00 · su richiesta anche oltre
- Animation: icon draws in from scale 0.8, text fades up

#### 6. Garage
- Component: `Garage.tsx`
- Purpose: explicit client request — dedicated section, NOT just a bullet in a list
- Layout: dark-ish section (neutral dark background `#1F2A24`) for visual contrast — breaks the all-white rhythm
  - Label: MICRO uppercase (accent color) "Garage privato"
  - H2: "Lascia l'auto. Esplora a piedi." (white text)
  - Body: "Garage ground-level prenotabile a parte. Arriva in auto, parcheggia sicuro, poi muoviti in metro, in bici, a piedi — Milano è a due passi" (white/75% opacity)
  - Feature pills: Sicurezza · Ground-level · Prenotabile · Coperto
  - CTA: "Aggiungi il garage alla tua prenotazione" → scrolls to §9 with pre-filled note
- Animation: fade-reveal on dark bg, pills stagger

#### 7. Business & Fiere
- Component: `BusinessFiere.tsx`
- Purpose: explicit client request — dedicated CTA block for professional travelers
- Layout: 2-col split — icon grid left / copy + CTA right
  - Label: "Per chi viene per lavoro"
  - H2: "Base perfetta per fiere e trasferte"
  - Distance list: Rho Fiera 25km · MiCo Milano 6km · Stazione Centrale 1.5km · Aeroporto Linate 8km
  - Features: Desk-ready · WiFi · Check-in tardivo · Cucina autonoma · Garage
  - CTA: "Chiedi un preventivo business" (primary pill) → §9
- Animation: distance items stagger on scroll

#### 8. Voci degli Ospiti
- Component: `Recensioni.tsx`
- Purpose: leverage the 9.2/678 Booking rating asymmetric advantage
- Layout: 3 glass cards side-by-side (horizontal scroll on mobile)
  - Each card: rating stars (5/5) · quote · name + country + date
  - Fake realistic quotes (until delivery provides real Booking excerpts):
    - "Appartamento luminosissimo, tutto come descritto. L'host ci ha aspettati dopo mezzanotte senza problemi." — Marco R., Italia, Feb 2026
    - "Clean, bright and perfectly located. The private garage was a game changer." — Sarah T., UK, Jan 2026
    - "Cuisine équipée impeccable, linge de maison de qualité. Hôte très réactif." — Claire M., France, Mar 2026
  - Below cards: Booking badge "9.2 Superbo · 678 recensioni" with Booking logo
- Animation: cards slide from right, stagger 80ms

#### 9. Prenota (Lead Form)
- Component: `Prenota.tsx`
- Purpose: lead-gen to owner — NO Booking redirect (explicit client requirement)
- Layout: full-width, secondary background, centered form in glass panel
  - Label: MICRO "Contattaci"
  - H2: *"Pianifica la tua pausa verde"* (Fraunces italic)
  - Form fields: Nome · Email* · Check-in (date) · Check-out (date) · Ospiti (select 1-4) · Note (textarea) · [optional] Garage (checkbox)
  - Submit: "Invia richiesta" (primary) — mailto:info@appartamentivelamilano.it in demo
  - Below form: contacts strip — phone placeholder · WhatsApp · email · address
- Honeypot field (hidden) for spam
- Animation: form fades in on scroll

#### 10. Footer
- Component: `Footer.tsx`
- Layout: 3-col (brand/tagline | links | contacts) + bottom bar (legal)
  - Col 1: wordmark + tagline "Un'oasi verde nel cuore di Milano" + social icons (IG, FB)
  - Col 2: Nav links — Appartamenti · Garage · Business · Prenota · [anchor links]
  - Col 3: Address · Email · Phone (all placeholders) · Check-in hours
  - Bottom bar: © 2026 Appartamenti Vela Milano · Privacy Policy · Cookie Policy · Termini e Condizioni (all `href="#"` with `data-page="privacy"` etc.)
- Separator: `--color-divider-soft` top border on footer

---

## 3. Component Map

```
demo/
├── app/
│   ├── layout.tsx          # Fonts, metadata, globals.css import
│   ├── page.tsx            # Assembles all sections in order
│   └── globals.css         # @import tokens.css + glass utilities + base resets
├── components/
│   ├── Navigation.tsx      # Glass sticky nav + mobile overlay
│   ├── Hero.tsx            # Full-vp hero with glass panel + Framer entrance
│   ├── GreenPocket.tsx     # Location section + distance strip
│   ├── GliAppartamenti.tsx # Unified apartment story + photo mosaic
│   ├── MaterialTruth.tsx   # 3-col material claims
│   ├── Ospitalita.tsx      # Host section
│   ├── Garage.tsx          # Dark garage section
│   ├── BusinessFiere.tsx   # Business/fiere CTA
│   ├── Recensioni.tsx      # Testimonials with glass cards
│   ├── Prenota.tsx         # Lead-gen form
│   ├── Footer.tsx          # Footer
│   └── ui/
│       ├── GlassPanel.tsx  # Reusable glass surface (polymorphic div)
│       ├── RevealSection.tsx # Framer Motion whileInView wrapper
│       ├── BookingBadge.tsx  # ⭐ 9.2 · 678 badge
│       └── SectionLabel.tsx  # MICRO uppercase label
├── lib/
│   └── tokens.ts           # Design tokens as typed TS object (mirrors tokens.json)
├── public/
│   └── photos/             # Copied from brand_asset/ (21 photos)
├── tailwind.config.ts      # Extends with brand tokens from CSS vars
├── next.config.js
└── package.json
```

---

## 4. Liquid Glass Implementation Strategy

Glass is used site-wide per client directive (Decision D). Budget enforced.

### CSS utility classes (in globals.css)
```css
.glass {
  background: var(--glass-bg-light);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  box-shadow: var(--glass-highlight-inset), var(--glass-shadow);
}

.glass-on-photo {
  background: var(--glass-bg-on-photo);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(var(--glass-blur-photo)) saturate(var(--glass-saturate-photo));
  -webkit-backdrop-filter: blur(var(--glass-blur-photo)) saturate(var(--glass-saturate-photo));
  box-shadow: var(--glass-highlight-inset), var(--glass-shadow);
}
```

### Glass layer usage (budget: 6 desktop / 4 mobile)
| # | Element | Glass type | Mobile |
|---|---|---|---|
| 1 | Navigation (on scroll) | `.glass` | ✅ included |
| 2 | Hero foreground panel | `.glass-on-photo` | ✅ included |
| 3 | Material Truth cards (×3 = 1 layer) | `.glass` | ✅ included |
| 4 | Recensioni cards (×3 = 1 layer) | `.glass` | ✅ included |
| 5 | Prenota form panel | `.glass` | ❌ solid fallback on mobile |
| 6 | Hover states (buttons/nav) | inline glass micro | ❌ removed on mobile |

Desktop total: 6 ✅ | Mobile total: 4 ✅

### Fallback (prefers-reduced-transparency)
Handled in `tokens.css` — glass vars remap to solid `#F6F4EC`. No JS needed.

---

## 5. Animation Plan

All animations via Framer Motion. All respect `prefers-reduced-motion`.

| Component | Animation | Duration | Trigger |
|---|---|---|---|
| Hero text stack | stagger fade+translateY (0→-24px) | 600ms softOut | mount |
| Hero background | parallax scroll | 12% shift | scroll |
| Nav | opacity 0→1 on scroll | 200ms | scroll |
| Distance pills (GreenPocket) | stagger scale+fade | 80ms each | whileInView |
| Photo mosaic | stagger opacity | 80ms each | whileInView |
| Material Truth cards | translateY+fade | 600ms stagger | whileInView |
| Garage content | fade from left | 600ms | whileInView |
| Review cards | translateX+fade | 80ms stagger | whileInView |
| Form panel | fade+scale 0.97→1 | 600ms | whileInView |
| Hover: CTA buttons | scale 1.02 | 200ms | hover |
| Hover: glass cards | translateY -4px + shadow | 400ms | hover |

### Reduced motion overrides
```tsx
const prefersReducedMotion = useReducedMotion() // Framer hook
// When true: remove translateY/translateX, keep opacity-only fades at 200ms
```

---

## 6. Tailwind Config Token Mapping

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      'primary-hover': 'var(--color-primary-hover)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      'neutral-dark': 'var(--color-neutral-dark)',
      white: 'var(--color-white)',
    },
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-body)',
    },
    borderRadius: {
      xs: 'var(--radius-xs)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      pill: 'var(--radius-pill)',
    },
    boxShadow: {
      'card-soft': 'var(--shadow-card-soft)',
      'card-hover': 'var(--shadow-card-hover)',
      glass: 'var(--shadow-glass)',
      focus: 'var(--shadow-focus-ring)',
    },
    transitionTimingFunction: {
      'soft-out': 'var(--ease-soft-out)',
      'smooth-inout': 'var(--ease-smooth-inout)',
    },
    transitionDuration: {
      micro: 'var(--dur-micro)',
      card: 'var(--dur-card)',
      reveal: 'var(--dur-reveal)',
    },
  }
}
```

---

## 7. Photo Assignment

All photos from `brand_asset/`, copied to `demo/public/photos/`.

| Section | Photo(s) | Role |
|---|---|---|
| Hero bg | `esterno_1.jpg` | Exterior shot, warm light |
| Hero bg alt | `balcone_1.jpg` | Balcony if exterior too generic |
| Appartamenti mosaic | `balcone_1`, `camere_1`, `camere_2`, `soggiorno_1`, `cucina_1`, `bagni_1` | 6-photo grid |
| Material Truth — parquet | `camere_3.jpg` or `cucina_2.jpg` | Floor close-up |
| Material Truth — cucina | `cucina_1.jpg` | Kitchen equipped |
| Material Truth — bio | `bagni_1.jpg` | Bathroom products |
| Garage | No real photo → green-dark solid bg with icon | Photo to get in delivery |
| Ospitalità | No host photo → abstract icon | Photo to get in delivery |
| Footer/og:image | `esterno_1.jpg` | Social preview |

---

## 8. Copy Tone Guide (demo)

Per brand guide voice & research-synthesis §6 "Voice: live language":
- Use verbs: *vivi, respira, abita, scopri* — not *soggiorna, alloggia, prenota*
- Use sensory specificity: "luce che entra bassa dai vetri grandi la mattina" — not "stanze luminose"
- Max 2-3 lines per section body — whitespace IS the message
- CTA micro-copy: "Pianifica la tua pausa verde" / "Chiedi disponibilità" / "Aggiungi il garage"
- Numbers as trust anchors: 9.2 · 678 · 3 appartamenti · 400m · fino a mezzanotte

---

## 9. Pre-code Checklist

- [x] Brand tokens locked (tokens.css + tokens.json)
- [x] Section architecture derived from business needs (not template)
- [x] Liquid glass budget planned (6D / 4M)
- [x] Photo assignments mapped
- [x] Animation plan documented
- [x] Copy tone defined
- [x] Lead-gen form confirmed (no Booking redirect)
- [x] Garage section confirmed as standalone
- [x] Mobile-first planned (glass stripped on mobile per budget)
- [x] prefers-reduced-motion handled
- [x] All contacts are placeholder — private phone excluded

Next step: scaffold Next.js project and build components in Sonnet Edit Mode.
