# Appunti — Appartamenti Vela Milano

Raccolta di note, ambiguità e TODO emersi durante l'analisi del report
consulenza e della pagina Booking. Da chiarire prima della fase di design
e delivery.

## Fonti utilizzate
- `consulenza_report.txt` — trascrizione della call del commerciale con la proprietaria.
- Pagina Booking.com: `https://www.booking.com/hotel/it/vela-apartments-con-garage.html`
  (il link `Share-uz3kSE2` fornito è protetto da challenge anti-bot; risolto
  via search in "Appartamenti Vela Milano centro con garage").
- Mirror `topmilanhotels.com` per dettagli struttura (indirizzo + amenity).
- 21 foto fornite in `brand_asset/` (balconi, bagni, camere, cucine, esterni, soggiorni, colazione).

## Punti chiave verificati
- **Indirizzo**: Via Vincenzo Vela, 17, 20133 Milano MI (zona Loreto / Piola / Città Studi).
- **Rating Booking**: 9.2/10 su 678 recensioni (location score 8.8 — "top-rated area").
- **Numero unità**: **3 appartamenti bilocali matrimoniali** (confermato dal cliente),
  tutti simili tra loro, con bagno privato, cucina, salone e balcone. Possibilità
  di letti extra e culle per bambini.
- **Distanze chiave**: Metro Piola 400 m, Centrale 1.5 km, Linate ~8 km.
- **Check-in**: 12:00–23:59 / Check-out: 01:00–10:00.

## Ambiguità dalla trascrizione — RISOLTE
1. ~~**"AK Toy"**~~ → **"accappatoi da bagno"** (confermato dal cliente).
   In ogni appartamento sono forniti accappatoi agli ospiti.
2. **"il pacché / colore del parquet"** — frase troncata ma chiara nel senso:
   parquet chiaro come elemento visivo da valorizzare.
3. **"dollela"** e **"ciò con questo"** — chiusura della trascrizione corrotta,
   non significativa.

## TODO prima del delivery
- [x] ~~Chiarire cosa sono gli "AK Toy"~~ → accappatoi da bagno.
- [ ] (Delivery) Ottenere contatti pubblici ufficiali: email, telefono business, WhatsApp.
      In demo si usano placeholder — il numero privato in nostro possesso NON va pubblicato.
- [ ] (Delivery) Verificare presenza di profili social (IG/FB) e sostituire i
      placeholder con URL reali. LinkedIn/TikTok/YouTube esclusi per ora.
- [ ] (Delivery) Valutare insieme al cliente uno shooting drone del condominio.
      Per la DEMO: nessuna foto aerea — si usano solo le 2 foto esterne esistenti.
- [x] ~~Confermare numero esatto di unità disponibili e tipologie~~ → 3 bilocali matrimoniali, tutti simili.
- [x] ~~Richiedere eventuale logo esistente~~ → assente.
      Per la DEMO: wordmark testuale "Appartamenti Vela Milano" (lettering elegante,
      palette verde + accento). Evoluzione a logo con simbolo da valutare in delivery.
- [ ] (Delivery) Validare tagline e testi con la proprietaria.
      Per la DEMO: copy creativo con storytelling ricco (massimo impatto commerciale),
      accettando che in delivery ci saranno revisioni sui testi.
- [x] ~~Confermare range colori e accent~~ → Palette confermata per la demo
      (primary verde natura, secondary bianco caldo, accent giallo).
- [ ] (Ricerca/Delivery) Esplorare la sostituzione dell'accent giallo con una
      tonalità LEGNO CHIARO / PARQUET (es: #D9B382 light oak, #C9A87C pale wood,
      #E6CFA7 cream wood, #B8936A warm oak) per richiamare il parquet degli
      interni. Verificare contrasto/leggibilità in contesto liquid glass.
- [x] ~~Decidere se servono versioni multilingua oltre IT~~ → **DEMO solo IT**.
      In delivery valuteremo con il cliente se aggiungere EN (minimo raccomandato
      vista clientela internazionale) e/o altre lingue (FR/DE/ES).
      L'architettura del sito deve comunque restare i18n-ready.

- Hero con **liquid glass** su sfondo foto vetrata / balcone con piante.
- Sezione "Green pocket" con mappa stilizzata + distanze dai POI.
- Presentazione unica degli appartamenti (non card separate — 3 unità simili),
  con badge/indicatore che comunichi "3 appartamenti disponibili" + possibilità letti/culle extra.
- Focus su **ospitalità umana** (storytelling della host, attesa fino a mezzanotte).
- CTA principali: "Richiedi preventivo" e "Prenota il garage".

## Elementi unici da non disperdere nel design
- Ospitalità personale (attesa fino a tarda notte).
- Prodotti bio in camera (storytelling sostenibilità).
- Garage privato come fattore sicurezza/differenziante.
- Target business/fiere/co-working, non solo turismo leisure.
- "Green oasis in city" come posizionamento forte e distintivo a Milano.
