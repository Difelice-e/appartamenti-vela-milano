'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Plant, Train, Storefront } from '@phosphor-icons/react/dist/ssr';
import { SectionLabel } from './ui/SectionLabel';
import { EASE_SOFT_OUT } from '@/lib/motion';

const distances = [
  { icon: Train, label: 'Metro Piola', value: '400 m' },
  { icon: Train, label: 'Stazione Centrale', value: '1.5 km' },
  { icon: Train, label: 'Aeroporto Linate', value: '8 km' },
  { icon: Storefront, label: 'Duomo Milano', value: '3.5 km' },
  { icon: Storefront, label: 'Città Studi', value: '600 m' },
  { icon: Storefront, label: 'Fiera RHO', value: '25 km' },
];

export function GreenPocket() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ['-6%', reduced ? '-6%' : '6%']);

  return (
    <section ref={ref} className="section-py bg-secondary">
      <div className="container-vela">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy + pill quote */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
            className="lg:col-span-6 lg:pt-4"
          >
            <SectionLabel>La nostra zona</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(34px,4.8vw,60px)] leading-[1.06] tracking-[-0.015em] text-ink">
              Il <span className="italic text-primary">green pocket</span>
              <br />
              di Milano.
            </h2>
            <p className="mt-6 text-body-l text-ink/75 max-w-[520px]">
              Via Vincenzo Vela 17, tra Loreto e Piola. In mezzo al traffico milanese,
              un cortile interno dove le piante hanno più anni di noi.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="accent-rule" aria-hidden="true" />
              <span className="text-small uppercase tracking-[0.12em] text-accent font-semibold">
                Piola · Città Studi · NoLo
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, ease: EASE_SOFT_OUT, delay: 0.2 }}
              className="mt-8 flex items-start gap-3 text-ink/75 max-w-[520px]"
            >
              <Plant size={22} weight="regular" className="text-primary mt-0.5 flex-shrink-0" />
              <p className="text-body italic font-display text-ink/80">
                "Quartiere verde, ben collegato — la cucina del Politecnico a un isolato,
                il cortile di casa a respirare tra un caffè e l'altro."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: photo with slow parallax, accent-tinted frame */}
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: EASE_SOFT_OUT }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg md:aspect-[5/4] lg:aspect-[4/5]">
              <motion.div style={{ y: photoY }} className="absolute inset-0">
                <Image
                  src="/photos/balcone_2.jpg"
                  alt="Balcone con piante — angolo verde del cortile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover scale-[1.08]"
                />
              </motion.div>
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
              {/* Accent corner detail */}
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-6 h-12 w-[2px] bg-accent"
              />
            </div>
          </motion.div>
        </div>

        {/* Distances — tighter, iconography per item */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4"
        >
          {distances.map((d) => (
            <motion.li
              key={d.label}
              variants={{
                hidden: { opacity: 0, y: reduced ? 0 : 12, scale: reduced ? 1 : 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: EASE_SOFT_OUT }}
              className="card-pill rounded-md p-5 text-center"
            >
              <d.icon
                size={18}
                weight="regular"
                className="mx-auto mb-3 text-primary"
              />
              <div className="font-display text-h3 font-medium text-ink">{d.value}</div>
              <div className="mt-1 text-small text-ink/65">{d.label}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
