'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';
import { EnvelopeSimple, Phone, WhatsappLogo, MapPin, PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr';
import { SectionLabel } from './ui/SectionLabel';
import { EASE_SOFT_OUT } from '@/lib/motion';

export function Prenota() {
  const reduced = useReducedMotion();

  return (
    <section id="prenota" className="section-py bg-secondary">
      <div className="container-vela">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
          className="mx-auto max-w-[720px] text-center"
        >
          <SectionLabel>Contattaci</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(36px,5vw,56px)] font-normal italic leading-[1.08] tracking-[-0.015em] text-ink">
            Pianifica la tua <span className="text-primary not-italic font-medium">pausa verde</span>.
          </h2>
          <p className="mt-6 text-body-l text-ink/75">
            Scrivici: ti risponderemo con disponibilità, prezzi e dettagli su misura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: EASE_SOFT_OUT, delay: 0.1 }}
          className="mx-auto mt-12 max-w-[820px]"
        >
          <form
            action="mailto:info@appartamentivelamilano.it"
            method="post"
            encType="text/plain"
            className="card-soft rounded-lg p-6 md:p-10"
          >
            {/* Honeypot (hidden) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nome" name="nome" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Check-in" name="checkin" type="date" />
              <Field label="Check-out" name="checkout" type="date" />
              <div className="md:col-span-2">
                <label htmlFor="ospiti" className="block text-small font-medium text-ink/85">Ospiti</label>
                <select
                  id="ospiti"
                  name="ospiti"
                  defaultValue="2"
                  className="mt-2 w-full rounded-xs border border-ink/15 bg-white px-4 py-3 text-body text-ink focus:border-primary focus:outline-none focus:ring-0"
                >
                  <option value="1">1 ospite</option>
                  <option value="2">2 ospiti</option>
                  <option value="3">3 ospiti</option>
                  <option value="4">4 ospiti</option>
                  <option value="5+">5 o più (con letti extra)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="note" className="block text-small font-medium text-ink/85">Note</label>
                <textarea
                  id="note"
                  name="note"
                  rows={4}
                  placeholder="Culle per bambini, fiera specifica, arrivo tardivo..."
                  className="mt-2 w-full rounded-xs border border-ink/15 bg-white px-4 py-3 text-body text-ink focus:border-primary focus:outline-none focus:ring-0"
                />
              </div>
              <label className="md:col-span-2 flex items-start gap-3 rounded-xs bg-primary/[0.04] p-4">
                <input
                  type="checkbox"
                  name="garage"
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <span className="text-body text-ink/85">
                  Mi interessa anche il <strong>garage privato</strong> (prenotabile a parte)
                </span>
              </label>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-small text-ink/60">
                Ti risponderemo in giornata. Nessun reindirizzamento a terze parti.
              </p>
              <button type="submit" className="btn-primary">
                <PaperPlaneTilt size={18} weight="regular" />
                Invia richiesta
              </button>
            </div>
          </form>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: EASE_SOFT_OUT, delay: 0.3 }}
          className="mx-auto mt-10 grid max-w-[820px] gap-3 sm:grid-cols-2 text-small text-ink/75"
        >
          <Contact icon={EnvelopeSimple} label="Email" text="info@appartamentivelamilano.it" />
          <Contact icon={Phone} label="Telefono" text="+39 000 000 0000" />
          <Contact icon={WhatsappLogo} label="WhatsApp" text="+39 000 000 0000" />
          <Contact icon={MapPin} label="Indirizzo" text="Via Vincenzo Vela 17, Milano" />
        </motion.ul>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-small font-medium text-ink/85">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xs border border-ink/15 bg-white px-4 py-3 text-body text-ink focus:border-primary focus:outline-none focus:ring-0"
      />
    </div>
  );
}

function Contact({
  icon: Icon,
  label,
  text,
}: {
  icon: PhosphorIcon;
  label: string;
  text: string;
}) {
  return (
    <li className="card-pill flex items-center gap-3 rounded-md p-4">
      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Icon size={16} weight="regular" className="text-primary" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-micro font-semibold uppercase tracking-[0.08em] text-ink/55">
          {label}
        </div>
        <div className="mt-0.5 truncate text-small text-ink/85">{text}</div>
      </div>
    </li>
  );
}
