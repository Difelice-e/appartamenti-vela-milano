# Brand Guide — Appartamenti Vela Milano

> La guida operativa che deve sopravvivere al singolo progetto. Ogni scelta
> qui è rooted in `research-competitors.md`, `research-inspiration.md`,
> `research-synthesis.md` e nei `design-references/` estratti via skillui.

Versione: 1.0 — Phase 1
Data: 2026-04-18
Tier: Plus (Next.js + React + Framer Motion)

---

## 1. Essenza del brand

### 1.1 One-liner
> **Il green pocket di Milano — abiti il verde a 400 m dalla metro Piola.**

### 1.2 Manifest (uso interno)
Appartamenti Vela Milano è l'oasi che Milano non sa di avere. Tre bilocali luminosi dove il parquet chiaro riflette la luce di mattina, le piante in balcone respirano insieme a te, e una proprietaria ti aspetta fino a mezzanotte perché l'ospitalità non ha orari. Non un hotel, non un Airbnb: un luogo vero, a due passi dalla frenesia, silenzioso come un cortile interno, concreto come una tazza di caffè sul balcone.

### 1.3 Valori (da `input.yml`)
1. **Ospitalità personale** — presenza, non servizio. La proprietaria aspetta fino a mezzanotte.
2. **Sostenibilità** — prodotti 100% bio, come estensione della filosofia, non come claim.
3. **Natura in città** — piante, aria pulita, verde reale.
4. **Comfort premium** — cucine attrezzate, parquet chiaro, balconi, aree esterne.
5. **Sicurezza** — garage privato prenotabile, ground-level.
6. **Multiculturalità** — host parla più lingue.
7. **Luminosità** — grandi vetrate, spazi aperti.

### 1.4 Posizionamento competitivo
Vela occupa un terreno di marca oggi libero nel mercato short-stay milanese: **green pocket credibile nel centro**. Cfr. `research-synthesis.md` §3.

---

## 2. Color Palette

### 2.1 Palette operativa (LIGHT MODE, unica direzione per il sito)

| Ruolo | Token | Hex | Uso | Perché |
|---|---|---|---|---|
| Primary | `--color-primary` | `#3A7D44` | Nav, CTA primari, micro-accenti tipografici (una parola chiave in headline), icone | Verde foglia identitario. Nessun competitor milanese lo prende → territorio libero (synth §3) |
| Secondary (page) | `--color-secondary` | `#F6F4EC` | Sfondo pagina | Bianco caldo: lega col parquet chiaro e scalda il liquid glass. Preferito a #FFF puro |
| Accent | `--color-accent` | `#D9B382` | Bottoni secondari, bordi sottili su glass card, highlight microcopy, divisori delicati | Legno chiaro (warm oak). Material truth: chiude il loop col parquet interno. Sostituisce il giallo #E8C547 dopo ricerca (insp §1 + synth §5A) |
| Neutral dark | `--color-neutral-dark` | `#1F2A24` | Tutti i testi (body + heading), icone scure, bordi forti | Verde-nero profondo, non nero puro. Coerente col verde |
| Pure white | `--color-white` | `#FFFFFF` | Solo come layer liquid glass | Ancoraggio della traslucenza |

### 2.2 Regole d'uso
- **Mai** più di 4 colori operativi per schermata (lezione Aman, 1 Hotels).
- Primary su CTA principale = **azione verso l'ospite** (es. "Chiedi disponibilità").
- Accent su CTA secondaria = **azione esplorativa** (es. "Scopri il luogo").
- Primary in tipografia: **una parola chiave** per headline, max. Es. "**Respira** Milano, senza rinunciare al silenzio."
- Neutral dark sempre a opacità 100% per body; usare 75% per testi secondari/captions, mai sotto 55%.

### 2.3 Palette estesa (per UI state)

| Scopo | Hex | Note |
|---|---|---|
| Primary hover | `#2F6939` | Primary × 0.86 |
| Primary pressed | `#285B31` | Primary × 0.74 |
| Accent hover | `#CEA373` | Accent scuro |
| Success | `#3A7D44` | = Primary |
| Warning | `#C68B4A` | Legno scuro saturo |
| Error | `#B2453A` | Terracotta sobrio, non rosso puro |
| Divider soft | `rgba(31,42,36,0.08)` | Righe delicate |
| Divider strong | `rgba(31,42,36,0.18)` | Righe di separazione sezione |

### 2.4 Cosa NON usare

- Giallo brillante (#E8C547) — sostituito dopo ricerca per coerenza material truth.
- Corallo/lime delle palette alternative del brief — scartati: introducono registro urban-pop.
- Nero puro #000 — usare sempre `#1F2A24`.
- Bianco puro #FFF come sfondo pagina — usare `#F6F4EC` (layer glass ok su bianco).
- Qualsiasi gradient colorato (verde→giallo, verde→blu, ecc.) — rompe material truth.

---

## 3. Typography

### 3.1 Font families (Google Fonts)

| Ruolo | Family | Pesi | Axis | Rationale |
|---|---|---|---|---|
| Display / Headlines | **Fraunces** | 400, 500, 600 | opsz (optical size), SOFT, WONK | Serif contemporaneo variable, progettato per schermo. Caldo ma non antiquato. Coerente con tono sensoriale. In Stitch prototyping usato Newsreader (closest disponibile) |
| Body / UI | **Inter** | 400, 500, 600 | — | Standard contemporaneo. Leggibile a ogni dimensione. Neutralità che fa risaltare Fraunces |

Import via `next/font`:
```ts
import { Fraunces, Inter } from 'next/font/google';
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', axes: ['SOFT', 'WONK'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
```

### 3.2 Type scale (desktop — ≥1024px)

| Livello | Font | Size | Weight | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|---|
| Display XL | Fraunces italic | 72px | 400 | 1.05 | -0.02em | Hero headline |
| Display L | Fraunces italic | 56px | 400 | 1.08 | -0.015em | Section opener (grande) |
| H1 | Fraunces | 44px | 500 | 1.1 | -0.012em | Section title |
| H2 | Fraunces | 32px | 500 | 1.15 | -0.01em | Sub-section |
| H3 | Inter | 20px | 600 | 1.3 | 0 | Card title / micro-heading |
| Body L | Inter | 18px | 400 | 1.55 | 0 | Paragraph primario |
| Body | Inter | 16px | 400 | 1.55 | 0 | Body default |
| Small | Inter | 14px | 400 | 1.5 | 0 | Caption |
| Micro | Inter | 12px | 600 | 1.4 | +0.08em uppercase | Eyebrow, tag, data-label |

### 3.3 Type scale (mobile — <768px)

Uso `clamp()` fluido: esempi di scalatura.

| Livello | Formula |
|---|---|
| Display XL | `clamp(44px, 7vw, 72px)` |
| Display L | `clamp(36px, 5.5vw, 56px)` |
| H1 | `clamp(30px, 4.5vw, 44px)` |
| H2 | `clamp(24px, 3.5vw, 32px)` |
| Body L | `clamp(16px, 1.6vw, 18px)` |
| Body | `16px` (fisso — mai < 16px per leggibilità) |

### 3.4 Regole tipografiche

- **Gerarchia**: max 3 livelli per schermata (Aman principle).
- **Colore accent in headline**: solo UNA parola per headline può essere in `--color-primary`. Es. "**Respira** Milano".
- **Italic**: solo su Fraunces, solo per Display XL/L (le dimensioni grandi). Mai italic su body Inter.
- **Uppercase**: solo micro-labels Inter 600 con letter-spacing +0.08em. Mai uppercase su body.
- **Copy italiano sensoriale**: parole-guida = respira, luce, silenzio, cura, verde, oasi, mattina, calma. Fatti specifici (numeri, distanze) > aggettivi (Aman + 1 Hotels lesson).
- **Lunghezza body**: max 2 righe per sezione secondaria, max 4 righe per sezione principale. Brutalmente disciplinato.

---

## 4. Voice & Tone

### 4.1 Personalità
Vela parla come una **proprietaria colta, calma, sicura**. Non urla, non promette l'impossibile, non usa luxury-speak. Descrive fatti e sensazioni: "parquet chiaro", "balcone con piante", "check-in fino a mezzanotte", "400 m dalla metro". Le immagini dicono il resto.

### 4.2 Voice attributes

| Sì | No |
|---|---|
| Warm, sensoriale, specifica | Luxury-speak, superlativi, esclamazioni |
| Italiana (con forma IT-only per la demo) | Anglismi non necessari |
| Breve (max 2 righe) | Paragrafi lunghi |
| Concreta (numeri, materiali) | Aggettivi generici ("amazing", "unique") |
| Human (la proprietaria aspetta fino a mezzanotte) | Corporate ("il nostro team", "eccellenza") |
| Invitante ("Chiedi disponibilità") | Transazionale ("Prenota ora!") |

### 4.3 Parole-guida da usare
respira, luce, silenzio, calma, oasi, verde, parquet, mattina, balcone, mezzanotte, cura, attenzione, attesa, radici, quartiere, piante, cucina, bio, induzione, garage, traffico, metro, trasparenza.

### 4.4 Parole da evitare
incredibile, unico, esclusivo (usato da tutti), eccellenza, luxury, boutique (già saturo), il tuo sogno, la tua esperienza, fantastico, amazing, unmissable.

### 4.5 Esempi copy (riferimento per Phase 2)

**Hero taglines** (pick uno in Phase 2 testing):
- "Respira Milano, senza rinunciare al silenzio."
- "La tua pausa green nel centro città."
- "Un'oasi verde nel cuore di Milano."
- "Abita la luce, ascolta il verde."

**Micro-CTA**:
- "Chiedi disponibilità" (primario)
- "Scopri il luogo" (secondario)
- "Pianifica la tua pausa verde" (form)
- "Prenota il garage" (specifica)

**Body esempio** (Green Pocket section):
> "A 400 m dalla metropolitana Piola, 1,5 km dalla Stazione Centrale, 8 km dall'aeroporto di Linate. In mezzo al traffico milanese c'è un cortile interno dove le piante hanno più anni di noi."

**Body esempio** (Bio & Parquet):
> "Parquet chiaro in rovere. Cucine con piano a induzione, forno e macchina del caffè. Tre linee di prodotti bio in bagno, accappatoi inclusi. La sostenibilità abitata, non dichiarata."

---

## 5. Photography

### 5.1 Filosofia visiva
**Material truth over generic mood.** Le foto non devono evocare un'atmosfera generica ("casa accogliente"), devono mostrare i **materiali e la luce** che Vela offre davvero: parquet chiaro, piante specifiche sui balconi, cucina in induzione, prodotti bio etichettati, vetri con luce di mattina. Riferimento: 1 Hotels sanctuary stories + Casa Cook golden hour.

### 5.2 Color grade (da applicare in Phase 2 su tutte le 21 foto)
- Saturazione: +8% globale, +12% sul verde.
- Temperatura: +5 (più caldo).
- Contrasto: -5 (più soft).
- Ombre: lift +8 (più aperte).
- Tinta: preservata (no tinte artificiali).
- Target: 5500-6000K warm light.

### 5.3 Soggetti per ogni sezione sito

| Sezione | Soggetto |
|---|---|
| Hero | Esterno/balcone con luce mattina + piante |
| Green Pocket | Mappa stilizzata Milano in toni legno+salvia + dettaglio foglia vicino al vetro |
| Gli appartamenti | Mosaico: camera (4:5) + cucina close-up (1:1) + bio products (1:1) |
| Green & Bio | Prodotti bio sul lavabo + etichette leggibili |
| Ospitalità | Minima figura umana (mani, non volto) — o pittogramma elegante se non disponibile |
| Garage | Foto entrata garage con luce e parquet che continua (materiale coerente con interni) |
| Business/Co-working | Postazione sul tavolo con tazza caffè e luce laterale |
| Voci ospiti | Nessuna foto — glass card con citazioni |

### 5.4 Aspect ratios
- Hero full-bleed: **16:9**.
- Card appartamenti: **4:5** (portrait) per la principale.
- Dettagli materiali: **1:1**.
- Banda trasversale: **3:1** solo se giustificata.

### 5.5 Regole
- **Zero stock photo con volti generici.**
- **Zero AI-generated images** (anche in demo — skill rule).
- Se un'immagine manca (es. drone esterno), **non inventarla** — usare un'altra angolazione delle 21 disponibili.
- Loop video 10s muted ok (vapore caffè, foglia che si muove, luce mattina su parquet) — opzionale Phase 2.

---

## 6. Liquid Glass — la firma visiva

Liquid glass è la firma visiva di Vela, **diffusa nel sito** (non solo in hero). Questa è la richiesta esplicita del cliente ed è uno spazio libero nel mercato (nessun competitor milanese lo usa).

### 6.1 Principi
1. **Apple Vision quality, non Bootstrap.** Traslucenza sottile, bordi appena percepibili, blur generoso.
2. **Sopra contenuto visivo caldo.** Il glass vela qualcosa (foto, materiale, luce) — mai uno sfondo piatto. Questo lo trasforma da effetto in firma.
3. **Strategico, non decorativo.** Applicato dove l'utente ha bisogno di leggibilità sopra una foto o per generare gerarchia; non ovunque per vanità visiva.

### 6.2 Specifiche tecniche

```css
/* Liquid glass base */
.glass {
  background-color: rgba(255, 255, 255, 0.55);  /* su sfondi chiari */
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 20px;
  box-shadow: 0 12px 48px rgba(31, 42, 36, 0.12);

  /* Highlight sottile top */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 12px 48px rgba(31, 42, 36, 0.12);
}

/* Variante su foto (più saturazione, meno fill) */
.glass-on-photo {
  background-color: rgba(246, 244, 236, 0.45);
  backdrop-filter: blur(48px) saturate(200%);
  /* altro identico */
}
```

### 6.3 Dove usare

| ✅ Usare | ❌ Non usare |
|---|---|
| Hero card overlay | Body text block lunghi (uccide leggibilità) |
| Navbar sticky | Footer (appesantisce, conflitto gerarchia) |
| Badge Booking rating | Micro-labels (troppo sottile per il blur) |
| CTA primarie (pill) | Sfondi sezione interi |
| Card lead-form | Intere pagine con glass layered infinite |
| Card testimonial | Scroll-transitions (performance su mobile) |
| Feature cards selezionate (2-3 per pagina) | Dietro text paragrafi |
| Distanza/data-strip | |

### 6.4 Border-radius scale glass

| Componente | Radius |
|---|---|
| Hero card grande | 24-28px |
| Card feature media | 20px |
| Pill CTA / badge | 14-18px |
| Micro-pill (chip) | 999px (full round) |

### 6.5 Accessibilità & fallback

```css
@media (prefers-reduced-transparency: reduce) {
  .glass, .glass-on-photo {
    background-color: #F6F4EC; /* opaco */
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: 0 8px 32px rgba(31,42,36,0.10);
  }
}
```

Contrasto testo su glass: verificare con tool che il testo mantenga WCAG AA 4.5:1 contro la combinazione di fill + sottostante peggiore case (tipicamente una foto molto chiara). Se fallisce, aumentare opacità fill del glass a 0.65.

### 6.6 Performance
- `backdrop-filter` è GPU-accelerated ma costoso se applicato a molte superfici simultaneamente.
- **Limite di budget**: max **6 layer glass visibili simultaneamente** nel viewport desktop. Su mobile max **4**.
- Lazy-inizializzare (applicare la classe glass solo quando in viewport) sulle card sotto il fold.
- Testare su Safari iOS (il motore più lento per backdrop-filter).

---

## 7. UI Patterns & Components

### 7.1 Button

| Type | Fill | Text | Border | Radius | Padding | Hover |
|---|---|---|---|---|---|---|
| Primary | `#3A7D44` | `#FFFFFF` | — | 14px | 12px 20px | Fill → `#2F6939`, y -1px, shadow grow |
| Secondary (ghost) | transparent | `#1F2A24` | 1px `rgba(31,42,36,0.22)` | 14px | 12px 20px | Border → `#1F2A24` full, bg → `rgba(31,42,36,0.04)` |
| Accent | `#D9B382` | `#1F2A24` | — | 14px | 12px 20px | Fill → `#CEA373` |
| Glass pill | vedi 6.2 | `#1F2A24` | vedi 6.2 | 999px | 10px 18px | Fill opacity +0.08 |

### 7.2 Card

- **Feature card**: radius 20px, padding 32px, shadow soft (`0 8px 32px rgba(31,42,36,0.08)`), hover lift 4px + scale 1.01.
- **Glass card**: vedi §6.2.
- **Data strip** (banda orizzontale 72px): glass pill radius 999px, divisori verticali 1px `rgba(31,42,36,0.1)`.

### 7.3 Input (lead form)

- Height 52px
- Radius 14px (coerente con button)
- Border 1px `rgba(31,42,36,0.18)`
- Focus: border 1.5px `#3A7D44`, outline ring `rgba(58,125,68,0.15)` 3px
- Placeholder `rgba(31,42,36,0.4)`
- Font Inter 400 16px

### 7.4 Navigation
- Sticky top, glass (vedi §6.2), 72px tall desktop / 64px mobile.
- Logo wordmark Fraunces italic light 22px `#1F2A24` a sinistra.
- Link Inter 500 14px +0.04em letter-spacing `#1F2A24` centrali/destra.
- CTA pill "Disponibilità" primary a destra.
- Mobile: hamburger che apre menu full-screen con glass + typography Fraunces 36px (scroll-reveal sottile delle voci).

### 7.5 Icon style
- Line icons, stroke 1.5px.
- Rounded corners (non sharp).
- Family: **Phosphor Icons** (Regular weight) — coerente con tono warm/modern.
- Mai Font Awesome (troppo generico).
- Colore: `--color-neutral-dark` o `--color-primary` per accenti.

---

## 8. Layout & Spacing

### 8.1 Grid
- **Desktop**: 12 colonne, gutter 24px, max-width 1200px (1280px per hero full-bleed).
- **Tablet**: 8 colonne, gutter 20px.
- **Mobile**: 4 colonne, gutter 16px.

### 8.2 Spacing scale (base 4px)

| Token | Value | Uso |
|---|---|---|
| `space-1` | 4px | Micro-gap |
| `space-2` | 8px | Tight |
| `space-3` | 12px | Inline |
| `space-4` | 16px | Base |
| `space-5` | 24px | Elemento-elemento |
| `space-6` | 32px | Sezione interna |
| `space-8` | 48px | Tra blocchi |
| `space-10` | 64px | Componenti distanti |
| `space-12` | 96px | Sezione-sezione mobile |
| `space-16` | 128px | Sezione-sezione desktop |
| `space-20` | 160px | Whitespace large (Aman) |

### 8.3 Whitespace philosophy
- **Ratio ≥ 2:1** whitespace-to-content nelle sezioni principali (disciplina Aman).
- Section padding verticale: **120-160px desktop**, **80-100px mobile**.
- Mai comprimere per "far entrare tutto above the fold" — Vela respira.

### 8.4 Breakpoints

| Name | Min |
|---|---|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1440px |

---

## 9. Motion & Animation

### 9.1 Principi
- Motion **supporta contenuto**, mai decora.
- **Silenzioso per default.** L'utente non deve notare l'animazione finché non ha finito.
- `prefers-reduced-motion` rispettato sempre.

### 9.2 Timing

| Curve | Easing | Uso |
|---|---|---|
| Soft out | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveal on scroll, card hover |
| Smooth inout | `cubic-bezier(0.65, 0, 0.35, 1)` | Transizioni di stato |
| Linear | `linear` | Loop video, parallax |

| Durata | Uso |
|---|---|
| 200ms | Hover micro (button, link) |
| 400ms | Hover card (lift+scale) |
| 600ms | Reveal on scroll (fade+translate) |
| 1200ms | Entrata hero iniziale stagger |

### 9.3 Patterns ricorrenti

**Scroll reveal**:
```ts
// Framer Motion
initial={{ opacity: 0, y: 16 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-10% 0px' }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
```

**Stagger children**:
- Delay 80ms tra ogni child.
- Max 5-6 children per stagger group (oltre è rumore).

**Hover card**:
- `translateY(-4px)` + `scale(1.01)` + shadow intensify.
- 200ms ease-out.

**Parallax**:
- Solo su **hero background** e max 1 divider.
- Movement max **8-12%** del viewport (non di più — fa girare la testa).
- Mai su contenuto sotto glass.
- Mai su mobile (off).

**Loop video** (opzionale Phase 2):
- 10s muted autoplay loop, 1280x720 max, WebM + MP4 fallback, poster frame statico prima del load.

### 9.4 Anti-patterns motion
- Carousel automatico (smette di essere utile e intralcia scroll).
- Fade-in lento (>1000ms) — sembra pigro, non premium.
- Bounce easing (Disney feel, non Vela).
- Parallax su card o tipografia.
- Wipe fullscreen tra sezioni.

---

## 10. Do's and Don'ts (visione sintetica)

### ✅ Do

1. **Usa il verde come colore di marca**, non come accent. È la base identitaria. Nessun competitor milanese lo fa.
2. **Fotografa materiali specifici** (parquet, piante, prodotti bio etichettati) con color grade warm uniforme.
3. **Metti il Booking 9.2/678 in hero.** È il nostro vantaggio asimmetrico — ogni competitor lo invidia.
4. **Racconta il garage come storia** (sicurezza + libertà di camminare Milano), non come amenity.
5. **Racconta la proprietaria** (attesa fino a mezzanotte come gesto-firma). Nessun competitor ha questo.
6. **Whitespace ≥ 2:1.** Respiro è il brand.
7. **Max 2 righe di body per sezione.** Brutalmente disciplinato.
8. **Lead-gen email-based** per preventivi (richiesta esplicita cliente, NO OTA redirect).
9. **Mobile-first vero**, dal primo componente.
10. **Liquid glass usato strategicamente** (6 layer max desktop, 4 mobile).
11. **Una parola primary-colored per headline**, max. La chiave del gesto.
12. **Specificità > aggettivi.** "400 m da Piola" > "vicino ai mezzi".

### ❌ Don't

1. **Non usare il giallo** (sostituito da legno chiaro).
2. **Non presentare i 3 appartamenti come 3 card separate** — racconto unico + data-strip (UP to Home anti-esempio).
3. **Non usare Playfair o serif antiquato** — Fraunces è moderno e caldo.
4. **Non usare bandierine lingua** (Aparthotel Meneghino anti-esempio). In delivery, toggle testo IT/EN integrato in nav.
5. **Non usare CTA rotte o link "#"** (Intomilan anti-esempio). Ogni CTA deve funzionare dal primo demo.
6. **Non usare Bootstrap/skeuomorph glass** (bordi 2px bianchi spessi, ombre pesanti, saturation bassa).
7. **Non usare AI-generated images**, mai.
8. **Non usare copy AI-slop** ("incredibile", "unico", "la tua esperienza"). Specificità italiana sensoriale.
9. **Non usare stock photo con volti**.
10. **Non usare carousel automatico**.
11. **Non comprimere per above-the-fold** — Vela respira, lo scroll è il nostro amico.
12. **Non dimenticare** il `prefers-reduced-motion` e `prefers-reduced-transparency` fallback.

---

## 11. Referenze visive (per Phase 2)

Per ogni decisione visiva, rileggere:
- `design-references/1hotels-design/DESIGN.md` — material truth, sanctuary narrative, green-as-brand.
- `design-references/aman-design/DESIGN.md` — whitespace discipline, typography restraint.
- `design-references/locke-design/DESIGN.md` — aparthotel category moves, "live" language.
- `brand/prototypes/` — Stitch visual prototypes (hero concept A, hero concept B, mid-page section), se generati.

Riferimenti rimandati (da NON replicare alla lettera):
- **Intomilan** — buon boutique, ma CTA rotti e scroll orizzontale fragile.
- **Galleria Altido** — virtual tour Matterport interessante (per Phase 3 delivery).
- **UP to Home** — anti-esempio same-zone.
- **Aparthotel Meneghino** — anti-esempio aparthotel classico.

---

## 12. Checklist decisioni aperte (per Phase 2 e Phase 3)

### Da validare in Phase 2 (demo)
- [ ] Hero copy finale (scegliere tra le 4 taglines §4.5).
- [ ] Composizione hero: overlay card (concept A) vs split (concept B) — decidere dopo Stitch prototypes.
- [ ] Fraunces axis values (SOFT e WONK) — testare su headline reale.
- [ ] Virtual tour / Matterport (no per demo, valutare Phase 3).
- [ ] Quante review Booking estrarre e mostrare (suggerito: 3-4).

### Da confermare con cliente in Phase 3 (delivery)
- [ ] Contatti reali (email, telefono, WhatsApp) — input.yml placeholder.
- [ ] Social: IG + FB reali?
- [ ] EN + altre lingue?
- [ ] Shooting drone esterno?
- [ ] Logo simbolico (oltre wordmark) in evoluzione?

---

*Fine brand guide v1.0. Tokens machine-readable in `brand/tokens.css` + `brand/tokens.json`.*
