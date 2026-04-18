'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { EASE_SOFT_OUT } from '@/lib/motion';

const items = [
  {
    photo: '/photos/camere_3.jpg',
    alt: 'Parquet chiaro nella camera',
    title: 'Parquet chiaro',
    body: 'Rovere chiaro in tutti e tre gli appartamenti. La mattina entra dai vetri e scorre fino al balcone.',
  },
  {
    photo: '/photos/cucina_2.jpg',
    alt: 'Cucina con piano a induzione',
    title: 'Cucina completa',
    body: 'Piano a induzione, forno, macchina del caffè. Cucina come a casa — anche a Milano, anche in trasferta.',
  },
  {
    photo: '/photos/colazione_1.jpg',
    alt: 'Colazione servita su tavolo in vetro con cornetti e caffè',
    title: 'Colazione pensata',
    body: 'Cornetti, caffè, succo, biscotti e piccoli piaceri sul tavolo di vetro. Perché la prima cosa della giornata merita un gesto.',
  },
];

export function MaterialTruth() {
  const reduced = useReducedMotion();

  return (
    <section className="section-py bg-secondary">
      <div className="container-vela">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
          className="max-w-[720px]"
        >
          <SectionLabel>Materia e cura</SectionLabel>
          <h2 className="mt-4 font-display text-h1 font-medium leading-[1.1] tracking-[-0.012em] text-ink">
            I dettagli che <span className="italic text-primary">abitano</span> con te.
          </h2>
          <p className="mt-6 text-body-l text-ink/75">
            Non "comfort generico". Materiali e scelte specifiche, pensate per chi resta
            qualche notte o qualche settimana.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5"
        >
          {items.map((item) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: reduced ? 0 : 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
              className="card-soft group overflow-hidden rounded-md transition-shadow duration-[400ms] hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-h2 font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-body text-ink/75">{item.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
