"use client";

import { Star } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import GlassPanel from "./ui/GlassPanel";
import BookingBadge from "./ui/BookingBadge";

const reviews = [
  {
    quote:
      "Appartamento luminosissimo, tutto esattamente come descritto. L'host ci ha aspettati dopo mezzanotte senza problemi — un gesto che non dimentico.",
    name: "Marco R.",
    country: "Italia",
    date: "Feb 2026",
    rating: 5,
  },
  {
    quote:
      "Clean, bright and perfectly located. The private garage was a game changer — we arrived by car and explored the city entirely on foot.",
    name: "Sarah T.",
    country: "United Kingdom",
    date: "Gen 2026",
    rating: 5,
  },
  {
    quote:
      "Cuisine équipée impeccable, linge de maison de qualité. L'hôte est très réactif et la literie est excellente. On revient à coup sûr.",
    name: "Claire M.",
    country: "France",
    date: "Mar 2026",
    rating: 5,
  },
];

export default function Recensioni() {
  return (
    <section id="recensioni" className="section-py bg-white">
      <div className="container-brand">
        <RevealSection className="text-center mb-14">
          <SectionLabel>Voci degli ospiti</SectionLabel>
          <h2 className="heading-h2 text-neutral-dark mb-5 text-balance">
            Lo dicono i nostri ospiti
          </h2>
          <BookingBadge />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <RevealSection key={r.name} delay={i * 0.1} direction="right">
              <GlassPanel className="p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} weight="fill" size={14} className="text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-small text-neutral-dark/80 leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small font-medium text-neutral-dark">{r.name}</p>
                    <p className="text-small text-neutral-dark/50">{r.country}</p>
                  </div>
                  <p className="text-small text-neutral-dark/40">{r.date}</p>
                </div>
              </GlassPanel>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
