import type { Variants } from "framer-motion";

/* ──────────────────────────────────────────────
   Shared Variants (About, Stack, Projects, Education, Contact)
   ────────────────────────────────────────────── */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* ──────────────────────────────────────────────
   Hero Variants (entrada inicial, ligeramente diferente)
   ────────────────────────────────────────────── */

export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};
