'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { HandHeart, Translate, ChatCircleDots, Clock } from '@phosphor-icons/react/dist/ssr';
import { SectionLabel } from './ui/SectionLabel';
import { EASE_SOFT_OUT } from '@/lib/motion';
import { asset } from '@/lib/asset';

const cards = [
  {
    icon: Translate,
    title: 'Italiano, English, Français',
    body: 'Parlo più lingue — quando sei in viaggio, l\'ospitalità deve capire e farsi capire.',
  },
  {
    icon: ChatCircleDots,
    title: 'Rispondo in giornata',
    body: 'WhatsApp, email, telefono. Prima, durante e dopo il soggiorno — una risposta vera, non un form.',
  },
  {
    icon: Clock,
    title: 'Check-in fino a mezzanotte',
    body: 'Voli in ritardo, arrivi tardi, treni saltati: ti aspetto. Senza formule, senza chiavi cieche.',
  },
];

export function Ospitalita() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', reduced ? '-8%' : '8%']);

  return (
    <section ref={ref} className="relative section-py overflow-hidden bg-[#1F2A24]">
      {/* Atmospheric dark-green background with subtle plant photo + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[8%] h-[116%] opacity-25">
        <Image
          src={asset('/photos/balcone_1.jpg')}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,42,36,0.92) 0%, rgba(31,42,36,0.78) 50%, rgba(31,42,36,0.92) 100%)',
        }}
      />

      <div className="container-vela relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: EASE_SOFT_OUT }}
          className="mx-auto max-w-[860px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease: EASE_SOFT_OUT }}
            className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/15"
          >
            <HandHeart size={36} weight="regular" className="text-accent" />
          </motion.div>

          <SectionLabel tone="accent">La tua host</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(36px,5vw,64px)] font-normal italic leading-[1.06] tracking-[-0.018em] text-white">
            Parliamo la tua
            <br />
            <span className="text-accent not-italic font-medium">lingua</span>.
          </h2>
          <p className="mt-8 text-body-l text-white/75 max-w-[620px] mx-auto">
            Non una reception. Una persona che conosce il quartiere, risponde ai messaggi,
            aspetta quando serve. L'ospitalità milanese fatta di attenzioni vere.
          </p>
        </motion.div>

        {/* Glass cards on dark — THIS is the wow moment */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.li
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: reduced ? 0 : 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: EASE_SOFT_OUT }}
              className="glass-on-dark rounded-lg p-7 md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/40">
                <c.icon size={20} weight="regular" className="text-accent" />
              </span>
              <h3 className="mt-6 font-display text-h2 font-medium text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-body text-white/75">{c.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
