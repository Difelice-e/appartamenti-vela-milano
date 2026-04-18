'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bed, Users, WifiHigh, Tree, CookingPot, Drop } from '@phosphor-icons/react/dist/ssr';
import { SectionLabel } from './ui/SectionLabel';
import { EASE_SOFT_OUT } from '@/lib/motion';
import { asset } from '@/lib/asset';

const heroPhoto = {
  src: '/photos/balcone_1.jpg',
  alt: 'Balcone privato con piante — il cuore verde dell\'appartamento',
};

const gallery: { src: string; alt: string }[] = [
  { src: '/photos/soggiorno_1.jpg', alt: 'Soggiorno luminoso con parquet chiaro' },
  { src: '/photos/camere_1.jpg', alt: 'Camera matrimoniale con luce naturale' },
  { src: '/photos/cucina_1.jpg', alt: 'Cucina attrezzata a induzione' },
];

const features = [
  { icon: Bed, label: '3 bilocali matrimoniali' },
  { icon: Users, label: 'Fino a 4 persone' },
  { icon: Tree, label: 'Balcone privato' },
  { icon: CookingPot, label: 'Cucina completa' },
  { icon: Drop, label: 'Bagno privato' },
  { icon: WifiHigh, label: 'WiFi gratuito' },
];

export function GliAppartamenti() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['-4%', reduced ? '-4%' : '8%']);

  return (
    <section ref={ref} id="appartamenti" className="section-py bg-white">
      <div className="container-vela">
        {/* Header row — title left, deck right */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
          className="grid gap-8 lg:grid-cols-12 lg:gap-16 lg:items-end"
        >
          <div className="lg:col-span-7">
            <SectionLabel>Gli appartamenti</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(36px,5vw,64px)] font-medium leading-[1.04] tracking-[-0.015em] text-ink">
              Tre appartamenti,
              <br />
              un <span className="italic text-primary">respiro</span> solo.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body-l text-ink/75">
              Tre bilocali simili e accoglienti. La mattina entra bassa dai vetri grandi,
              il parquet chiaro la rimanda fino al balcone, dove le piante aprono gli occhi
              con te.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="accent-rule" aria-hidden="true" />
              <span className="text-small uppercase tracking-[0.12em] text-accent font-semibold">
                Bilocali · 2–4 ospiti
              </span>
            </div>
          </div>
        </motion.div>

        {/* Hero photo — full width, large, with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE_SOFT_OUT }}
          className="relative mt-12 overflow-hidden rounded-lg aspect-[16/10] md:aspect-[21/9]"
        >
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <Image
              src={asset(heroPhoto.src)}
              alt={heroPhoto.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover scale-[1.08]"
            />
          </motion.div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, transparent 55%, rgba(31,42,36,0.35) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="font-display italic text-white text-h3 md:text-[clamp(22px,2.2vw,28px)] max-w-[520px]">
              Il balcone è il primo, vero ingresso di casa.
            </p>
          </div>
        </motion.div>

        {/* Gallery — 3 large landscape photos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-5 grid gap-5 md:grid-cols-3"
        >
          {gallery.map((p) => (
            <motion.div
              key={p.src}
              variants={{
                hidden: { opacity: 0, y: reduced ? 0 : 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: EASE_SOFT_OUT }}
              className="group relative aspect-[4/3] overflow-hidden rounded-md"
            >
              <Image
                src={asset(p.src)}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.05]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Features + CTA */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: EASE_SOFT_OUT }}
          className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center"
        >
          <ul className="lg:col-span-8 grid grid-cols-2 gap-5 md:grid-cols-3">
            {features.map((f) => (
              <li key={f.label} className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/8">
                  <f.icon size={18} weight="regular" className="text-primary" />
                </span>
                <span className="text-body text-ink/85 pt-2">{f.label}</span>
              </li>
            ))}
          </ul>
          <div className="lg:col-span-4 lg:text-right">
            <a href="#prenota" className="btn-primary">
              Prenota il tuo soggiorno
              <ArrowRight size={18} weight="regular" />
            </a>
            <p className="mt-4 text-small text-ink/60">
              Letti aggiuntivi e culle per bambini su richiesta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
