# aman DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 11
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![aman Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography pairs **Arial** for display/headings with **Lyon Display Web** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#f6f6f6` | background | Page background, darkest surface |
| text-primary | `#000000` | text-primary | Headings and body text |
| pswp-preloader-color-secondary | `#ffffff` | text-muted | Captions, placeholders, secondary info |
| text-muted | `#82847f` | text-muted | Captions, placeholders, secondary info |
| border | `#313131` | border | Dividers, card borders, outlines |
| danger | `#f9c9bf` | danger | Error states, destructive actions |
| success | `#c9e1bd` | success | Success states, positive indicators |
| theme-color | `#f3eee7` | warning | Warning states, caution indicators |
| unknown | `#e6e2db` | unknown | Palette color |
| unknown | `#d8d4cf` | unknown | Palette color |
| unknown | `#454545` | unknown | Palette color |
| pswp-preloader-color | `#555555` | unknown | Palette color |
| unknown | `#aaaaaa` | unknown | Palette color |
| unknown | `#625f5f` | unknown | Palette color |
| unknown | `#b7c3bf` | unknown | Palette color |
| unknown | `#f4daa6` | unknown | Palette color |
| unknown | `#b38b5b` | unknown | Palette color |
| unknown | `#bb1616` | unknown | Palette color |
| unknown | `#232323` | unknown | Palette color |
| unknown | `#5f3f3f` | unknown | Palette color |

### CSS Variable Tokens

```css
--pswp-preloader-color-secondary: hsla(0,0%,100%,0.9);
--pswp-icon-color-secondary: #4f4f4f;
```


---

## 3. Typography Rules

**Font Stack:**
- **Lyon Display Web** — Heading 1, Heading 2, Heading 3
- **Arial** — Body, Caption
- **Source Code Pro** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Lyon Display Web";
  src: url("https://www.aman.com/themes/custom/aman/assets/dist/font/LyonDisplay-Light-Web.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "Lyon Text Web";
  src: url("https://www.aman.com/themes/custom/aman/assets/dist/font/LyonText-Regular-Web.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "WhitneySSm";
  src: url("https://www.aman.com/themes/custom/aman/assets/dist/font/WhitneySSm_italic_normal_400.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Calligraph810";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/calligraph/calligraphic-810-regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "NotoSerifJP";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/noto_serif/NotoSerifJP-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "NotoSerifSC";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/noto_serif/NotoSerifSC-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "WhitneyBook";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/whitney_book/Whitney-Book-Pro_2.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "SuisseBP";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/suisse/SuisseBPIntl-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Beausite";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/beausite/BeausiteSlick-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Lyon";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/lyon/LyonText-Aman-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Source Code Pro";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/source/source-code-pro-v23-latin_vietnamese-regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Source Code Pro";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/source/source-code-pro-v23-latin_vietnamese-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Spectral";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/spectral/spectral-v13-latin_vietnamese-regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Spectral";
  src: url("https://www.aman.com/themes/custom/aman/assets/src/fonts/spectral/spectral-v13-latin_vietnamese-700.woff2") format("woff2");
  font-weight: 700;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Lyon Display Web | 5.1428571429rem | 700 |
| Heading 2 | Lyon Display Web | 3.4285714286rem | 700 |
| Heading 3 | Lyon Display Web | 3rem | 700 |
| Body | Arial | 16px | 400 |
| Caption | Arial | 13px | 400 |
| Code | Source Code Pro | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Lyon Display Web** for body/UI text, **Arial** for display/headings
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

### Data Display (3)

**Card** — `html`
- Variants: `-horizontal`, `-image`, `-two_thirds`, `-link`, `image-style--square`

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** .2rem, .4rem, 1.4rem, 2px, 3px, 4px, 7px, 10px, 12px, 100%, inherit
- **Max content width:** 1023px

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

- `inset 0 0 0 1px #e6e6e6`
- `inset 0 0 0 1px #d5d1c8`
- `-1px 0 0#fff`

### Raised — cards, buttons, interactive elements

- `0 0 3px 1px rgb(94,158,214)`
- `0 0 5px #666666`
- `.0714285714rem .0714285714rem .4285714286rem rgba(0,0,0,.1)`

### Z-Index Scale

`0, 1, 2, 3, 5, 9, 10, 15, 20, 22, 99, 100, 102, 110, 120, 122, 999, 1000, 1060, 5000, 9999, 100000`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes rotateplane`
- `@keyframes slide-in-left`
- `@keyframes slide-fade-in-left`
- `@keyframes slide-in-right`
- `@keyframes slide-in-bottom`
- `@keyframes slide-in-top`
- `@keyframes slide-out-top`
- `@keyframes header-slide-out-top`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#f6f6f6` as the primary page background
- Pair **Lyon Display Web** (body) with **Arial** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .2rem, .4rem, 1.4rem, 2px, 3px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Lyon Display Web and Arial and Source Code Pro
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use gradients — the design uses solid colors only
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No gradient backgrounds
- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 350px | css |
| xs | 480px | css |
| sm | 481px | css |
| sm | 500px | css |
| sm | 599px | css |
| sm | 600px | css |
| md | 768px | css |
| lg | 769px | css |
| lg | 1023px | css |
| lg | 1024px | css |
| xl | 1100px | css |
| xl | 1101px | css |
| xl | 1240px | css |
| xl | 1241px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f6f6f6
Border: 1px solid #313131
Radius: 4px
Padding: 16px
Font: Lyon Display Web
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #313131
Padding: 8px 16px
Radius: 4px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #f6f6f6
Max-width: 1023px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f6f6f6
Label: #ffffff (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #f6f6f6
Input border: 1px solid #313131
Focus: border-color var(--accent)
Label: #ffffff 12px
Spacing: 16px between fields
Radius: 4px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Lyon Display Web, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
