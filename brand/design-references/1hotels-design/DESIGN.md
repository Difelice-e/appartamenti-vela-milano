# 1hotels DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 9
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![1hotels Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a cool tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Brown** for display/headings with **Arial** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The palette is predominantly monochromatic with **#00a699** as the single accent color — used sparingly for interactive elements and emphasis. Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| swiper-preloader-color | `#000000` | background | Page background, darkest surface |
| surface | `#232323` | surface | Card and panel backgrounds |
| swiper-preloader-color | `#ffffff` | text-primary | Headings and body text |
| text-muted | `#535353` | text-muted | Captions, placeholders, secondary info |
| border | `#394034` | border | Dividers, card borders, outlines |
| accent | `#00a699` | accent | CTAs, links, focus rings, active states |
| warning | `#fffa90` | warning | Warning states, caution indicators |
| swiper-theme-color | `#007fff` | info | Informational highlights |
| unknown | `#ededed` | unknown | Palette color |
| unknown | `#cccccc` | unknown | Palette color |
| unknown | `#454545` | unknown | Palette color |
| unknown | `#e5e3df` | unknown | Palette color |
| unknown | `#888888` | unknown | Palette color |
| unknown | `#6b6b6b` | unknown | Palette color |
| unknown | `#bbbbbb` | unknown | Palette color |
| unknown | `#757575` | unknown | Palette color |
| unknown | `#5f3f3f` | unknown | Palette color |
| unknown | `#0d334a` | unknown | Palette color |
| unknown | `#615144` | unknown | Palette color |
| unknown | `#f6f6f6` | unknown | Palette color |


---

## 3. Typography Rules

**Font Stack:**
- **Arial** — Heading 1, Heading 2, Heading 3
- **Brown** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "brown";
  src: url("https://www.1hotels.com/flow-query-reservation-card/static/media/lineto-brown-regular.ac2dd209.woff") format("woff");
  font-weight: 400;
}
@font-face {
  font-family: "brown";
  src: url("https://www.1hotels.com/flow-query-reservation-card/static/media/lineto-brown-bold.259044c3.woff") format("woff");
  font-weight: 700;
}
@font-face {
  font-family: "Brown";
  src: url("https://www.1hotels.com/themes/custom/onehotels/assets/fonts/lineto-brown-regular.svg");
  font-weight: 400;
}
@font-face {
  font-family: "Brown";
  src: url("https://www.1hotels.com/themes/custom/onehotels/assets/fonts/lineto-brown-bold.svg");
  font-weight: 700;
}
@font-face {
  font-family: "Plantin";
  src: url("https://www.1hotels.com/themes/custom/onehotels/assets/fonts/plantinstd.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "NotoSansJP";
  src: url("https://www.1hotels.com/themes/custom/onehotels/assets/fonts/NotoSansJP-VariableFont_wght.ttf") format("truetype");
  font-weight: 100;
}
@font-face {
  font-family: "swiper-icons";
  src: url("data:application/font-woff;charset=utf-8;base64, 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");
  font-weight: 400;
}
@font-face {
  font-family: "Montserrat";
  src: url("https://www.1hotels.com/modules/custom/starwood_hapi_sf/fonts/Montserrat/montserrat-v12-latin-regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Montserrat";
  src: url("https://www.1hotels.com/modules/custom/starwood_hapi_sf/fonts/Montserrat/montserrat-v12-latin-700.woff2") format("woff2");
  font-weight: 700;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Arial | 20rem | 700 |
| Heading 2 | Arial | 15.5rem | 700 |
| Heading 3 | Arial | 3.6rem | 700 |
| Body | Brown | 1rem | 400 |
| Caption | Brown | .75rem | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Arial** for body/UI text, **Brown** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (2)

**Card** — `html`

**Badge** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (2)

**Image** — `html`

**Icon** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** .12em, .25rem, .3rem, 1em, 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px
- **Max content width:** 1024px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `inset 1px 1px 1px #ccc`
- `0 1px 2px rgba(0,0,0,.06)`
- `2px 2px 2px rgba(0,0,0,.2)`

### Raised — cards, buttons, interactive elements

- `0 0 3px 1px rgb(94,158,214)`
- `0 0 5px #666666`
- `inset 0 0 6px rgba(0,0,0,.3)`

### Floating — dropdowns, popovers, modals

- `0 0 10px rgba(0,0,0,.5)`
- `0 4px 20px rgba(0,0,0,0.3)`
- `inset 0 0 10px 0 rgba(0,0,0,.1490196078)`

### Overlay — full-screen overlays, top-level dialogs

- `0 9px 22px rgba(0,0,0,.35),0 0 0 1px rgba(0,0,0,.07)`
- `0 10px 40px rgba(0,0,0,.3)`

### Z-Index Scale

`0, 1, 2, 3, 4, 5, 8, 10, 11, 20, 50, 99, 100, 101, 102, 399, 401, 503, 998, 999, 1000, 1001, 1010, 1020, 1030, 1040, 1050, 5025, 9000, 9999, 10000, 99991, 99992, 99994, 99995, 99997, 99998, 99999`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### CSS Animations

- `@keyframes a`
- `@keyframes hero-scroll-bounce`
- `@keyframes swiper-preloader-spin`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#00a699` for interactive elements (buttons, links, focus rings)
- Use `#000000` as the primary page background
- Pair **Arial** (body) with **Brown** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .12em, .25rem, .3rem, 1em, 1px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Arial and Brown and SFMono-Regular
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 375px | css |
| xs | 480px | css |
| sm | 481px | css |
| sm | 576px | css |
| sm | 590px | css |
| sm | 600px | css |
| sm | 601px | css |
| sm | 640px | css |
| md | 767.98px | css |
| md | 768px | css |
| lg | 769px | css |
| lg | 875px | css |
| lg | 974px | css |
| lg | 975px | css |
| lg | 1023.98px | css |
| lg | 1024px | css |
| xl | 1025px | css |
| xl | 1200px | css |
| xl | 1280px | css |
| 2xl | 1281px | css |
| 2xl | 1350px | css |
| 2xl | 1439px | css |
| 2xl | 1440px | css |
| 2xl | 1441px | css |
| 2xl | 1500px | css |
| 2xl | 1545px | css |
| 2xl | 1625px | css |
| 2xl | 1650px | css |
| 2xl | 1740px | css |
| 2xl | 1919px | css |
| 2xl | 1920px | css |
| 2xl | 1921px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #232323
Border: 1px solid #394034
Radius: 3px
Padding: 16px
Font: Arial
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #00a699, text white
Ghost: bg transparent, border #394034
Padding: 8px 16px
Radius: 3px
Hover: opacity 0.9 or lighter shade
Focus: ring with #00a699
```

### Build a Page Layout

```
Background: #000000
Max-width: 1024px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #232323
Label: #535353 (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #000000
Input border: 1px solid #394034
Focus: border-color #00a699
Label: #535353 12px
Spacing: 16px between fields
Radius: 3px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Arial, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
