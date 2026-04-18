"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const offsets = {
    up: { y: 24, x: 0 },
    left: { y: 0, x: -24 },
    right: { y: 0, x: 24 },
    none: { y: 0, x: 0 },
  };

  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, ...offsets[direction] };

  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
