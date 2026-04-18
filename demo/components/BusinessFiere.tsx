'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, WifiHigh, Clock, CookingPot, Train, ArrowRight, Car, Airplane, Buildings } from '@phosphor-icons/react/dist/ssr';
import { SectionLabel } from './ui/SectionLabel';
import { EASE_SOFT_OUT } from '@/lib/motion';

const distances = [
  { icon: Buildings, label: 'Rho Fiera', value: '25 km' },
  { icon: Buildings, label: 'MiCo Milano', value: '6 km' },
  { icon: Train, label: 'Stazione Centrale', value: '1.5 km' },
  { icon: Airplane, label: 'Aeroporto Linate', value: '8 km' },
];

const features = [
  { icon: Briefcase, label: 'Desk & area living' },
  { icon: WifiHigh, label: 'WiFi veloce' },
  { icon: Clock, label: 'Check-in fino a mezzanotte' },
  { icon: CookingPot, label: 'Cucina autonoma' },
  { icon: Car, label: 'Garage privato' },
];

export function BusinessFiere() {
  const reduced = useReducedMotion();

  return (
    <section id="business" className="section-py bg-secondary">
      <div className="container-vela">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: reduced ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease: EASE_SOFT_OUT }}
            className="lg:col-span-5"
          >
            <SectionLabel>Per chi viene per lavoro</SectionLabel>
            <h2 className="mt-4 font-display text-h1 font-medium leading-[1.1] tracking-[-0.012em] text-ink">
              Base per <span className="italic text-primary">fiere</span>,
              trasferte e co-working.
            </h2>
            <p className="mt-6 text-body-l text-ink/75">
              Collegamenti veloci, cucina autonoma, silenzio quando serve concentrazione.
              La proprietaria parla più lingue — utile quando l'agenda è già complicata.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f.label} className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <f.icon size={16} weight="regular" className="text-primary" />
                  </span>
                  <span className="text-body text-ink/85">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a href="#prenota" className="btn-primary">
                Chiedi un preventivo business
                <ArrowRight size={18} weight="regular" />
              </a>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="lg:col-span-7 grid grid-cols-2 gap-4 content-start"
          >
            {distances.map((d) => (
              <motion.li
                key={d.label}
                variants={{
                  hidden: { opacity: 0, y: reduced ? 0 : 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
                className="card-soft rounded-md p-7"
              >
                <d.icon size={22} weight="regular" className="text-primary" />
                <div className="mt-5 font-display text-[clamp(28px,3.5vw,40px)] font-medium leading-none text-ink">
                  {d.value}
                </div>
                <div className="mt-2 text-small text-ink/65">{d.label}</div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
