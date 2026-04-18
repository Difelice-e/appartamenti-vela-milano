"use client";

import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import { Buildings, TrainSimple, Airplane, WifiHigh, Coffee, Car, Clock } from "@phosphor-icons/react";

const distances = [
  { icon: Buildings, label: "Rho Fiera Milano", value: "25 km" },
  { icon: Buildings, label: "MiCo Milano Congressi", value: "6 km" },
  { icon: TrainSimple, label: "Stazione Centrale", value: "1.5 km" },
  { icon: Airplane, label: "Aeroporto Linate", value: "8 km" },
];

const businessFeatures = [
  { icon: WifiHigh, label: "WiFi veloce" },
  { icon: Coffee, label: "Cucina autonoma" },
  { icon: Clock, label: "Check-in tardivo" },
  { icon: Car, label: "Garage privato" },
];

export default function BusinessFiere() {
  return (
    <section id="business" className="section-py bg-secondary">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <RevealSection>
            <SectionLabel>Per chi viene per lavoro</SectionLabel>
            <h2 className="heading-h2 text-neutral-dark mb-5 text-balance">
              Base perfetta per fiere e trasferte
            </h2>
            <p className="body-l text-neutral-dark/75 mb-8">
              A Milano per il lavoro? Gli appartamenti Vela sono la base ideale per
              professionisti in trasferta, visitatori alle fiere e digital nomad.
              Cucina propria, WiFi, check-in flessibile — tutto quello che serve per
              lavorare e vivere senza compromessi.
            </p>

            {/* Business feature grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {businessFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 p-3 bg-white rounded-md text-small text-neutral-dark/80"
                >
                  <f.icon size={18} weight="regular" className="text-primary flex-shrink-0" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#prenota"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-medium px-7 py-4 rounded-pill transition-colors duration-200 cursor-pointer text-small"
            >
              Chiedi un preventivo business
            </a>
          </RevealSection>

          {/* Distances */}
          <RevealSection direction="right">
            <div className="space-y-3">
              <p className="label-micro text-primary mb-6">Distanze chiave</p>
              {distances.map((d, i) => (
                <RevealSection key={d.label} delay={0.1 + i * 0.08}>
                  <div className="flex items-center justify-between py-4 border-b border-neutral-dark/8">
                    <div className="flex items-center gap-3">
                      <d.icon size={18} weight="regular" className="text-primary" />
                      <span className="text-body text-neutral-dark">{d.label}</span>
                    </div>
                    <span className="font-semibold text-primary text-body">{d.value}</span>
                  </div>
                </RevealSection>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
