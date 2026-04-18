"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import { MapPin, TrainSimple, Airplane, Buildings } from "@phosphor-icons/react";

const distances = [
  { icon: TrainSimple, label: "Metro Piola", value: "400 m" },
  { icon: TrainSimple, label: "Stazione Centrale", value: "1.5 km" },
  { icon: Airplane, label: "Aeroporto Linate", value: "8 km" },
  { icon: MapPin, label: "Duomo", value: "3.5 km" },
  { icon: Buildings, label: "Rho Fiera", value: "25 km" },
  { icon: TrainSimple, label: "Lambrate FS", value: "18 min" },
];

export default function GreenPocket() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="green-pocket" className="section-py bg-secondary">
      <div className="container-brand">
        <div className="max-w-2xl mx-auto text-center">
          <RevealSection>
            <SectionLabel>La nostra zona</SectionLabel>
            <h2 className="heading-h2 text-neutral-dark mb-5 text-balance">
              Il green pocket di Milano
            </h2>
            <p className="body-l text-neutral-dark/75 mb-12 text-balance">
              Via Vincenzo Vela, 17 · Loreto / Piola / Città Studi.<br />
              Una zona residenziale, silenziosa e verde — a due passi dalla frenesia milanese.
            </p>
          </RevealSection>

          {/* Distance pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {distances.map((d, i) => (
              <motion.div
                key={d.label}
                className="flex items-center gap-2 glass px-4 py-2.5 rounded-pill text-small text-neutral-dark"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.4,
                  delay: prefersReducedMotion ? 0 : i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <d.icon size={14} weight="regular" className="text-primary flex-shrink-0" />
                <span className="font-medium">{d.label}</span>
                <span className="text-neutral-dark/50">·</span>
                <span className="text-primary font-semibold">{d.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
