"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import { HandHeart, Clock, Translate, CheckCircle } from "@phosphor-icons/react";

const details = [
  { icon: Clock, text: "Check-in 12:00 – 23:59, anche oltre su richiesta" },
  { icon: CheckCircle, text: "Check-out entro le 10:00" },
  { icon: Translate, text: "Host multilingue — italiano, inglese e altre lingue" },
  { icon: HandHeart, text: "Presenza autentica, non servizio anonimo" },
];

export default function Ospitalita() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="ospitalita" className="section-py bg-white">
      <div className="container-brand">
        <div className="max-w-2xl mx-auto text-center">
          <RevealSection>
            <SectionLabel>La tua host</SectionLabel>

            {/* Large icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <HandHeart size={40} weight="regular" className="text-primary" />
              </div>
            </motion.div>

            <h2 className="heading-h2 text-neutral-dark mb-5 text-balance">
              Presente fino a mezzanotte
            </h2>
            <p className="body-l text-neutral-dark/75 mb-10 text-balance">
              Il check-in tardivo non è un problema, è parte della nostra ospitalità.
              Arriviamo dopo una serata, dopo il treno delle 23 — ti aspettiamo.
            </p>
          </RevealSection>

          {/* Detail list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {details.map((d, i) => (
              <RevealSection key={d.text} delay={i * 0.1}>
                <div className="flex items-start gap-3 p-4 rounded-md bg-secondary">
                  <d.icon size={20} weight="regular" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-small text-neutral-dark/80">{d.text}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
