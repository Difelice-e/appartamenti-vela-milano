'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quotes } from '@phosphor-icons/react/dist/ssr';
import { SectionLabel } from './ui/SectionLabel';
import { BookingBadge } from './ui/BookingBadge';
import { EASE_SOFT_OUT } from '@/lib/motion';

const reviews = [
  {
    quote:
      'Appartamento luminosissimo, tutto come descritto. L\'host ci ha aspettati dopo mezzanotte senza problemi.',
    name: 'Marco R.',
    country: 'Italia',
    date: 'Feb 2026',
  },
  {
    quote:
      'Clean, bright and perfectly located. The private garage was a game changer for our stay.',
    name: 'Sarah T.',
    country: 'UK',
    date: 'Jan 2026',
  },
  {
    quote:
      'Cuisine équipée impeccable, linge de maison de qualité. Hôte très réactif, très pro.',
    name: 'Claire M.',
    country: 'France',
    date: 'Mar 2026',
  },
];

export function Recensioni() {
  const reduced = useReducedMotion();

  return (
    <section className="section-py bg-white">
      <div className="container-vela">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-[560px]">
            <SectionLabel>Voci degli ospiti</SectionLabel>
            <h2 className="mt-4 font-display text-h1 font-medium leading-[1.1] tracking-[-0.012em] text-ink">
              <span className="italic text-primary">9.2</span> su 678 recensioni.
            </h2>
          </div>
          <BookingBadge label="Superbo" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {reviews.map((r) => (
            <motion.article
              key={r.name}
              variants={{
                hidden: { opacity: 0, x: reduced ? 0 : 20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
              className="card-soft flex flex-col rounded-md p-7 transition-transform duration-[400ms] hover:-translate-y-1"
            >
              <Quotes size={24} weight="fill" className="text-accent" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} weight="fill" className="text-accent" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-body text-ink/85">"{r.quote}"</p>
              <footer className="mt-7 border-t border-ink/10 pt-4 text-small text-ink/65">
                <span className="font-medium text-ink">{r.name}</span>
                <span className="mx-2 text-ink/30">·</span>
                {r.country}
                <span className="mx-2 text-ink/30">·</span>
                {r.date}
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
