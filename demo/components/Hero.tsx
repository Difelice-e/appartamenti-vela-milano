'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { EASE_SOFT_OUT } from '@/lib/motion';

export function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '14%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.4]);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-8%']);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background photo with parallax.
          Overscanned by 18% so the 14% parallax shift never reveals empty space. */}
      <motion.div
        style={{ y: parallaxY, top: '-18%', height: '118%' }}
        className="absolute inset-x-0 -z-10"
      >
        <Image
          src="/photos/camere_2.jpg"
          alt="Camera matrimoniale degli appartamenti Vela, tende verdi e luce naturale"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Darker overlay top → lighter at bottom, tuned so nav stays legible and
            the glass card keeps its green-cream glow. */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(31,42,36,0.55) 0%, rgba(31,42,36,0.28) 35%, rgba(31,42,36,0.12) 65%, rgba(246,244,236,0.22) 100%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="container-hero relative z-10 pt-[120px] pb-20 lg:pt-[140px] lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
          }}
          className="max-w-[820px]"
          style={{ y: cardY }}
        >
          {/* Eyebrow — small accent mark, not a review badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: reduced ? 0 : 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
            className="mb-6 inline-flex items-center gap-3 text-white/90"
          >
            <span className="accent-rule" aria-hidden="true" />
            <span className="text-micro font-semibold uppercase tracking-[0.14em]">
              Appartamenti Vela · Milano
            </span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: reduced ? 0 : 28 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: EASE_SOFT_OUT }}
          >
            <div className="glass-on-photo block rounded-xl p-7 md:p-12 lg:max-w-[780px]">
              <h1 className="font-display italic font-normal text-[clamp(44px,7vw,80px)] leading-[1.03] tracking-[-0.022em] text-ink">
                Un'oasi <span className="text-primary not-italic font-medium">verde</span>
                <br className="hidden md:block" />
                nel cuore di <span className="relative whitespace-nowrap">
                  Milano
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-accent/70"
                    style={{ transform: 'skewX(-6deg)' }}
                  />
                </span>.
              </h1>

              <p className="mt-6 max-w-[560px] text-body-l text-ink/85">
                Tre appartamenti luminosi, parquet chiaro e balconi con piante.
                A <strong className="font-medium text-ink">400 m</strong> dalla metro Piola —
                perché la città si abita meglio quando respira.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#prenota" className="btn-primary">
                  Chiedi disponibilità
                  <ArrowRight size={18} weight="regular" />
                </a>
                <a href="#appartamenti" className="btn-ghost">
                  Scopri il luogo
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: reduced ? 0 : 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: EASE_SOFT_OUT }}
            className="mt-10 hidden md:flex items-center gap-3 text-white/80"
          >
            <motion.span
              animate={reduced ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <ArrowDown size={16} weight="regular" />
            </motion.span>
            <span className="text-small tracking-wide">Scorri per abitare il verde</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
