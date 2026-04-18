'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Car, ArrowRight, Shield, Garage as GarageIcon, Key } from '@phosphor-icons/react/dist/ssr';
import { SectionLabel } from './ui/SectionLabel';
import { EASE_SOFT_OUT } from '@/lib/motion';
import { asset } from '@/lib/asset';

const pills = [
  { icon: Shield, label: 'Sicurezza' },
  { icon: GarageIcon, label: 'Ground-level' },
  { icon: Key, label: 'Prenotabile a parte' },
  { icon: Car, label: 'Coperto' },
];

export function Garage() {
  const reduced = useReducedMotion();

  return (
    <section id="garage" className="relative section-py overflow-hidden bg-[#1F2A24]">
      {/* Background photo */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={asset('/photos/parcheggio_1.jpg')}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(31,42,36,0.92) 0%, rgba(31,42,36,0.82) 60%, rgba(31,42,36,0.6) 100%)',
          }}
        />
      </div>

      <div className="container-vela relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: reduced ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease: EASE_SOFT_OUT }}
            className="lg:col-span-7"
          >
            <SectionLabel tone="accent">Garage privato</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(36px,5vw,56px)] font-medium leading-[1.08] tracking-[-0.015em] text-white">
              Lascia l'auto.
              <br />
              Esplora a <span className="italic text-accent">piedi</span>.
            </h2>
            <p className="mt-6 max-w-[560px] text-body-l text-white/75">
              Garage ground-level prenotabile a parte. Arriva in auto, parcheggia sicuro,
              poi muoviti in metro, in bici, a piedi — Milano è a due passi.
            </p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
              }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {pills.map((p) => (
                <motion.li
                  key={p.label}
                  variants={{
                    hidden: { opacity: 0, y: reduced ? 0 : 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: EASE_SOFT_OUT }}
                  className="glass-on-dark inline-flex items-center gap-2 rounded-pill px-4 py-2"
                >
                  <p.icon size={14} weight="regular" className="text-accent" />
                  <span className="text-small text-white/90">{p.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-10">
              <a href="#prenota" className="btn-accent">
                Aggiungi il garage alla prenotazione
                <ArrowRight size={18} weight="regular" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: EASE_SOFT_OUT }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={asset('/photos/parcheggio_1.jpg')}
                alt="Garage privato degli appartamenti Vela, ingresso con auto parcheggiata"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              {/* Accent corner marker */}
              <div
                aria-hidden="true"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-pill bg-ink/70 px-3 py-1.5 text-micro font-semibold uppercase tracking-[0.1em] text-accent backdrop-blur-md"
              >
                Via Vela 17
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
