import type { Variants, Transition } from 'framer-motion';

export const EASE_SOFT_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_SMOOTH_INOUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 },
};

export const reveal: Transition = {
  duration: 0.6,
  ease: EASE_SOFT_OUT,
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const viewportOnce = { once: true, margin: '-10% 0px' };
