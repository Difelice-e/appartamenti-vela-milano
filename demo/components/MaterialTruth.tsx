"use client";

import Image from "next/image";
import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import GlassPanel from "./ui/GlassPanel";

const materials = [
  {
    src: "/photos/camere_3.jpg",
    alt: "Parquet chiaro in rovere negli appartamenti",
    label: "Parquet chiaro",
    title: "Rovere chiaro, tre appartamenti",
    body: "Il mattino entra attraverso il legno. Il parquet chiaro è il filo che lega ogni stanza — caldo sotto i piedi, luminoso agli occhi.",
  },
  {
    src: "/photos/cucina_1.jpg",
    alt: "Cucina completamente attrezzata con piano induzione",
    label: "Cucina completa",
    title: "Induzione, forno, Nespresso",
    body: "Cucina come a casa, a Milano. Piano induzione, forno, macchina del caffè, tutto l'essenziale per cucinare senza rinunce.",
  },
  {
    src: "/photos/bagni_1.jpg",
    alt: "Bagno con prodotti bio certificati",
    label: "100% Bio",
    title: "Prodotti certificati, inclusi",
    body: "Shampoo, balsamo, bagnoschiuma — tutti bio, inclusi nel soggiorno. Perché il rispetto per te e per l'ambiente non è un optional.",
  },
];

export default function MaterialTruth() {
  return (
    <section id="material-truth" className="section-py bg-secondary">
      <div className="container-brand">
        <RevealSection className="text-center mb-14">
          <SectionLabel>I dettagli fanno la differenza</SectionLabel>
          <h2 className="heading-h2 text-neutral-dark text-balance">
            Non claim. Materia vera.
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((m, i) => (
            <RevealSection key={m.label} delay={i * 0.12} className="flex flex-col">
              <GlassPanel className="flex flex-col h-full overflow-hidden">
                {/* Photo */}
                <div className="relative h-52 flex-shrink-0 overflow-hidden rounded-t-lg">
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Text */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="label-micro text-primary mb-2">{m.label}</p>
                  <h3 className="heading-h3 text-neutral-dark mb-3">{m.title}</h3>
                  <p className="text-small text-neutral-dark/70 leading-relaxed flex-1">{m.body}</p>
                </div>
              </GlassPanel>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
