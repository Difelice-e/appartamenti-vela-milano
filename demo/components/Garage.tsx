"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import { Car, ArrowRight } from "@phosphor-icons/react";

const features = ["Sicurezza", "Ground-level", "Coperto", "Prenotabile a parte"];

export default function Garage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="garage"
      className="section-py"
      style={{ backgroundColor: "var(--color-neutral-dark)" }}
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Icon / visual */}
          <RevealSection direction="left">
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-40 h-40 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Car size={64} weight="thin" className="text-accent" />
              </div>
            </motion.div>
          </RevealSection>

          {/* Text */}
          <RevealSection direction="right">
            <SectionLabel light>Garage privato</SectionLabel>
            <h2 className="heading-h2 text-white mb-5 text-balance">
              Lascia l&apos;auto.<br />Esplora a piedi.
            </h2>
            <p className="body-l mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Garage ground-level prenotabile a parte. Arriva in auto, parcheggia sicuro,
              poi muoviti in metro, in bici, a piedi — Milano è a due passi.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((f, i) => (
                <motion.span
                  key={f}
                  className="text-small px-4 py-1.5 rounded-pill border border-white/20 text-white/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.3 + i * 0.08,
                    duration: 0.4,
                  }}
                >
                  {f}
                </motion.span>
              ))}
            </div>

            <a
              href="#prenota"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-neutral-dark font-medium px-6 py-3.5 rounded-pill transition-colors duration-200 cursor-pointer text-small"
            >
              Aggiungi il garage alla prenotazione
              <ArrowRight size={16} weight="regular" />
            </a>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
