"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "./ui/SectionLabel";
import RevealSection from "./ui/RevealSection";
import GlassPanel from "./ui/GlassPanel";
import { Phone, EnvelopeSimple, MapPin, WhatsappLogo, ArrowRight } from "@phosphor-icons/react";

export default function Prenota() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_hp")) return; // honeypot
    // Demo: open mailto
    const nome = data.get("nome") as string;
    const email = data.get("email") as string;
    const checkin = data.get("checkin") as string;
    const checkout = data.get("checkout") as string;
    const ospiti = data.get("ospiti") as string;
    const note = data.get("note") as string;
    const garage = data.get("garage") as string;
    const body = `Nome: ${nome}\nEmail: ${email}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nOspiti: ${ospiti}\nGarage: ${garage ? "Sì" : "No"}\n\nNote: ${note}`;
    window.location.href = `mailto:info@appartamentivelamilano.it?subject=Richiesta disponibilità — Appartamenti Vela Milano&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="prenota" className="section-py bg-secondary">
      <div className="container-brand">
        <div className="max-w-2xl mx-auto">
          <RevealSection className="text-center mb-10">
            <SectionLabel>Contattaci</SectionLabel>
            <h2 className="display-l text-neutral-dark text-balance">
              Pianifica la tua pausa verde
            </h2>
            <p className="body-l text-neutral-dark/70 mt-4">
              Scrivi quello che cerchi — risponderemo entro 24 ore.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <GlassPanel className="p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="heading-h3 text-primary mb-2">Messaggio inviato!</p>
                  <p className="text-small text-neutral-dark/70">Ti risponderemo entro 24 ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot */}
                  <input type="text" name="_hp" className="hidden" tabIndex={-1} aria-hidden />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nome" className="label-micro text-neutral-dark block mb-2">
                        Nome *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Il tuo nome"
                        className="w-full px-4 py-3 bg-white border border-neutral-dark/10 rounded-xs text-body text-neutral-dark placeholder:text-neutral-dark/35 focus:outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label-micro text-neutral-dark block mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tua@email.it"
                        className="w-full px-4 py-3 bg-white border border-neutral-dark/10 rounded-xs text-body text-neutral-dark placeholder:text-neutral-dark/35 focus:outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="checkin" className="label-micro text-neutral-dark block mb-2">
                        Check-in
                      </label>
                      <input
                        id="checkin"
                        name="checkin"
                        type="date"
                        className="w-full px-4 py-3 bg-white border border-neutral-dark/10 rounded-xs text-body text-neutral-dark focus:outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout" className="label-micro text-neutral-dark block mb-2">
                        Check-out
                      </label>
                      <input
                        id="checkout"
                        name="checkout"
                        type="date"
                        className="w-full px-4 py-3 bg-white border border-neutral-dark/10 rounded-xs text-body text-neutral-dark focus:outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ospiti" className="label-micro text-neutral-dark block mb-2">
                      Numero ospiti
                    </label>
                    <select
                      id="ospiti"
                      name="ospiti"
                      className="w-full px-4 py-3 bg-white border border-neutral-dark/10 rounded-xs text-body text-neutral-dark focus:outline-none focus:border-primary transition-colors duration-200"
                    >
                      <option value="">Seleziona</option>
                      <option value="1">1 ospite</option>
                      <option value="2">2 ospiti</option>
                      <option value="3">3 ospiti</option>
                      <option value="4">4 ospiti</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="note" className="label-micro text-neutral-dark block mb-2">
                      Note o richieste
                    </label>
                    <textarea
                      id="note"
                      name="note"
                      rows={4}
                      placeholder="Orario di arrivo previsto, richieste speciali, domande sul garage..."
                      className="w-full px-4 py-3 bg-white border border-neutral-dark/10 rounded-xs text-body text-neutral-dark placeholder:text-neutral-dark/35 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Garage checkbox */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="garage"
                      className="w-4 h-4 rounded accent-primary cursor-pointer"
                    />
                    <span className="text-small text-neutral-dark/80 group-hover:text-neutral-dark transition-colors">
                      Sono interessato al garage privato (prenotabile a parte)
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium py-4 rounded-pill transition-colors duration-200 cursor-pointer text-body"
                  >
                    Invia richiesta
                    <ArrowRight size={18} weight="regular" />
                  </button>
                </form>
              )}
            </GlassPanel>
          </RevealSection>

          {/* Contacts strip */}
          <RevealSection delay={0.2} className="mt-8">
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-small text-neutral-dark/70">
              <a href="tel:+390000000000" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} weight="regular" />
                +39 000 000 0000
              </a>
              <a href="https://wa.me/390000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <WhatsappLogo size={16} weight="regular" />
                WhatsApp
              </a>
              <a href="mailto:info@appartamentivelamilano.it" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <EnvelopeSimple size={16} weight="regular" />
                info@appartamentivelamilano.it
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} weight="regular" />
                Via Vincenzo Vela, 17 · Milano
              </span>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
