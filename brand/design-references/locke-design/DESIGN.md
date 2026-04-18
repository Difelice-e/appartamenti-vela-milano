# locke DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 11
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![locke Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a warm, approachable feel. The light background emphasizes content clarity. Typography pairs **Gilroy** for display/headings with **NeueHaas** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **5px base grid** (standard density), with scale: 5, 10, 15, 20, 25, 30, 35, 40px. The palette is predominantly monochromatic with **#cc0019** as the single accent color — used sparingly for interactive elements and emphasis. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tile-color | `#ffffff` | background | Page background, darkest surface |
| surface | `#f4f1e9` | surface | Card and panel backgrounds |
| text-primary | `#121414` | text-primary | Headings and body text |
| text-muted | `#885550` | text-muted | Captions, placeholders, secondary info |
| border | `#393939` | border | Dividers, card borders, outlines |
| accent | `#cc0019` | accent | CTAs, links, focus rings, active states |
| danger | `#e2b7b9` | danger | Error states, destructive actions |
| info | `#569ff7` | info | Informational highlights |
| unknown | `#0a0a0a` | unknown | Palette color |
| unknown | `#000000` | unknown | Palette color |
| unknown | `#e6e6e6` | unknown | Palette color |
| unknown | `#959ea9` | unknown | Palette color |
| unknown | `#fed8d6` | unknown | Palette color |
| unknown | `#234943` | unknown | Palette color |
| unknown | `#979797` | unknown | Palette color |
| unknown | `#cacaca` | unknown | Palette color |
| unknown | `#8a8a8a` | unknown | Palette color |
| unknown | `#f64747` | unknown | Palette color |
| theme-color | `#ffb3ab` | unknown | Palette color |
| unknown | `#e85c41` | unknown | Palette color |


---

## 3. Typography Rules

**Font Stack:**
- **NeueHaas** — Heading 1, Heading 2, Heading 3
- **Gilroy** — Body, Caption
- **Consolas** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Gilroy";
  src: url("https://lockeliving.com/web/webfonts/3B2D7A_0_0.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Gilroy";
  src: url("https://lockeliving.com/web/webfonts/3B2D7A_5_0.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "NeueHaas";
  src: url("https://lockeliving.com/web/webfonts/NeueHaasGroteskDisplayPro55Roman/font.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "NeueHaas";
  src: url("https://lockeliving.com/web/webfonts/NeueHaasGroteskDisplayPro75Bold/font.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("https://lockeliving.com/web/webfonts/ProximaNova-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("https://lockeliving.com/web/webfonts/ProximaNova-Bold.woff2") format("woff2");
  font-weight: 700;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | NeueHaas | 160px | 700 |
| Heading 2 | NeueHaas | 10rem | 700 |
| Heading 3 | NeueHaas | 120px | 700 |
| Body | Gilroy | 1rem | 400 |
| Caption | Gilroy | .875rem | 400 |
| Code | Consolas | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **NeueHaas** for body/UI text, **Gilroy** for display/headings
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

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Variants: `_block`, `_small-fill`, `_hollow`, `_fill`, `-reverse`
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

- **Base spacing unit:** 5px
- **Spacing scale:** 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
- **Border radius:** 3px, 4px, 5px, 10px, 15px, 25px, 30px, 40px, 50px, 150px
- **Max content width:** 63.99875em

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 2.5-5px | Tight: related items within a group |
| 10px | Medium: between groups |
| 15-20px | Wide: between sections |
| 30px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `-1px 0 0#e6e6e6`
- `1px 0 0#e6e6e6`

### Raised — cards, buttons, interactive elements

- `-2px 0 0#e6e6e6,5px 0 0#e6e6e6`
- `-5px 0 0#e6e6e6,5px 0 0#e6e6e6`
- `-5px 0 0#569ff7,5px 0 0#569ff7`

### Floating — dropdowns, popovers, modals

- `1px 0 0#e6e6e6,-1px 0 0#e6e6e6,0 1px 0#e6e6e6,0-1px 0#e6e6e6,0 3px 13px rgba(0,0,0,.08)`
- `-10px 0 0#e2b7b9`
- `0 0 20px rgba(10,10,10,.3)`

### Z-Index Scale

`0, 1, 2, 3, 9, 10, 11, 999, 1000, 1010, 9998, 9999, 107159, 107160, 999999`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes fpFadeInDown`
- `@keyframes rotation`
- `@keyframes wave`
- `@keyframes frc-fade-in`
- `@keyframes bounce-mobile`
- `@keyframes bounce`
- `@keyframes bounce-stop-mobile`
- `@keyframes bounce-stop`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#cc0019` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **NeueHaas** (body) with **Gilroy** (display) — these are the only allowed fonts
- Follow the **5px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 3px, 4px, 5px, 10px, 15px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond NeueHaas and Gilroy and Consolas
- Don't use arbitrary spacing values — stick to multiples of 5px
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
| xs | 18.75em | css |
| xs | 20.9375em | css |
| xs | 25.625em | css |
| xs | 28.75em | css |
| sm | 31.25em | css |
| sm | 36.25em | css |
| sm | 39.99875em | css |
| sm | 40em | css |
| md | 46.25em | css |
| md | 46.875em | css |
| lg | 50em | css |
| lg | 51.875em | css |
| lg | 53.125em | css |
| lg | 56.25em | css |
| lg | 62.5em | css |
| lg | 63.99875em | css |
| lg | 64em | css |
| xl | 64.375em | css |
| xl | 68.75em | css |
| xl | 74.99875em | css |
| xl | 75em | css |
| 2xl | 81.25em | css |
| 2xl | 89.99875em | css |
| 2xl | 90em | css |
| 2xl | 100em | css |
| 2xl | 103.125em | css |
| 2xl | 106.25em | css |
| 2xl | 107.5em | css |
| 2xl | 117.1875em | css |
| 2xl | 125em | css |
| 2xl | 126em | css |
| xs | 400px | css |
| xs | 431px | css |
| sm | 600px | css |
| sm | 640px | css |
| md | 740px | css |
| lg | 820px | css |
| lg | 1024px | css |
| 2xl | 1450px | css |
| 2xl | 1800px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f4f1e9
Border: 1px solid #393939
Radius: 25px
Padding: 20px
Font: NeueHaas
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #cc0019, text white
Ghost: bg transparent, border #393939
Padding: 10px 20px
Radius: 25px
Hover: opacity 0.9 or lighter shade
Focus: ring with #cc0019
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 63.99875em, centered
Grid: 5px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f4f1e9
Label: #885550 (muted, 12px, uppercase)
Value: #121414 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #393939
Focus: border-color #cc0019
Label: #885550 12px
Spacing: 20px between fields
Radius: 25px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: NeueHaas, type scale from Section 3
4. Spacing: 5px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
