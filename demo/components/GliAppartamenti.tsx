"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import { Bathtub, WifiHigh, ChefHat, Door, Baby, Car } from "@phosphor-icons/react";

const mosaicPhotos = [
  { src: "/photos/balcone_1.jpg", alt: "Balcone spaziosa con vista verde", className: "col-span-2 row-span-2" },
  { src: "/photos/camere_1.jpg", alt: "Camera matrimoniale con parquet chiaro" },
  { src: "/photos/camere_2.jpg", alt: "Camera con finestre grandi e luce naturale" },
  { src: "/photos/soggiorno_1.jpg", alt: "Salone luminoso" },
  { src: "/photos/cucina_1.jpg", alt: "Cucina attrezzata con piano induzione" },
  { src: "/photos/bagni_1.jpg", alt: "Bagno privato con prodotti bio" },
];

const features = [
  { icon: Door, label: "3 bilocali" },
  { icon: Baby, label: "Fino a 4 ospiti" },
  { icon: Bathtub, label: "Bagno privato" },
  { icon: ChefHat, label: "Cucina completa" },
  { icon: WifiHigh, label: "WiFi gratuito" },
  { icon: Car, label: "Garage disponibile" },
];

export default function GliAppartamenti() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="gli-appartamenti" className="section-py bg-white">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo mosaic */}
          <motion.div
            className="grid grid-cols-3 grid-rows-3 gap-2 h-[480px] lg:h-[560px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6 }}
          >
            {mosaicPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                className={`relative overflow-hidden rounded-md ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.5,
                  delay: prefersReducedMotion ? 0 : i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Text content */}
          <RevealSection direction="right">
            <SectionLabel>Gli appartamenti</SectionLabel>
            <h2 className="heading-h2 text-neutral-dark mb-5 text-balance">
              Tre appartamenti,<br />un respiro solo
            </h2>
            <p className="body-l text-neutral-dark/75 mb-8">
              Non tre stanze d&apos;albergo, ma tre appartamenti veri — con parquet chiaro,
              balconi che si aprono sul verde, cucine per sentirsi a casa e luce che entra
              larga la mattina. Simili nell&apos;anima, ciascuno con la sua personalità.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-small text-neutral-dark/80">
                  <f.icon size={18} weight="regular" className="text-primary flex-shrink-0" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#prenota"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3.5 rounded-pill transition-colors duration-200 cursor-pointer text-small"
              >
                Prenota il tuo soggiorno
              </a>
              <a
                href="#prenota"
                className="inline-flex items-center justify-center border border-primary/30 hover:border-primary text-primary font-medium px-6 py-3.5 rounded-pill transition-colors duration-200 cursor-pointer text-small"
              >
                Chiedi disponibilità
              </a>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
