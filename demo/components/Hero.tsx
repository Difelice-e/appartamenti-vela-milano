"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import BookingBadge from "./ui/BookingBadge";

const softOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

function heroTransition(delay: number, reduced: boolean) {
  return {
    duration: reduced ? 0.2 : 0.9,
    delay: reduced ? 0 : delay,
    ease: softOut,
  };
}

function heroInitial(reduced: boolean) {
  return reduced ? { opacity: 0 } : { opacity: 0, y: 24 };
}

const heroAnimate = { opacity: 1, y: 0 };

export default function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "12%"]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", minHeight: 600 }}
      aria-label="Hero — Appartamenti Vela Milano"
    >
      {/* Background photo with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/photos/esterno_1.jpg"
          alt="Esterno Appartamenti Vela Milano, vista sulla zona verde di Loreto"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/30 via-neutral-dark/10 to-neutral-dark/50" />
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-brand">
          <div className="max-w-xl">
            <motion.div
              initial={heroInitial(prefersReducedMotion)}
              animate={heroAnimate}
              transition={heroTransition(0, prefersReducedMotion)}
            >
              <BookingBadge dark className="mb-6" />
            </motion.div>

            <motion.h1
              initial={heroInitial(prefersReducedMotion)}
              animate={heroAnimate}
              transition={heroTransition(0.15, prefersReducedMotion)}
              className="display-xl text-white mb-4 text-balance"
            >
              Un&apos;oasi verde nel cuore di Milano
            </motion.h1>

            <motion.p
              initial={heroInitial(prefersReducedMotion)}
              animate={heroAnimate}
              transition={heroTransition(0.3, prefersReducedMotion)}
              className="body-l text-white/80 mb-8"
            >
              Tre appartamenti luminosi a 400m dalla metro Piola.<br />
              Balconi, cucine complete, garage privato, host presente.
            </motion.p>

            <motion.div
              initial={heroInitial(prefersReducedMotion)}
              animate={heroAnimate}
              transition={heroTransition(0.45, prefersReducedMotion)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#prenota"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-medium px-7 py-4 rounded-pill transition-colors duration-200 cursor-pointer text-body"
              >
                Chiedi disponibilità
              </a>
              <a
                href="#gli-appartamenti"
                className="inline-flex items-center justify-center glass-on-photo text-white font-medium px-7 py-4 rounded-pill transition-all duration-200 cursor-pointer text-body hover:bg-white/20"
              >
                Scopri gli appartamenti
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-12 bg-white/40"
          animate={prefersReducedMotion ? {} : { scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
