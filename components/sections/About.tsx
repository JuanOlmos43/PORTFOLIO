"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/* ──────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────── */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
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
   About Section
   ────────────────────────────────────────────── */

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60% 0px" });

  return (
    <section ref={ref} id="about" className="py-16" aria-label="Sobre mí">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        {/* ── Section Header ───────────────────── */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Sobre mí
          </h2>
          <p className="text-sm text-zinc-400">Perfil y enfoque profesional.</p>
        </motion.div>

        {/* ── Content ──────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="rounded-xl border border-zinc-600 bg-zinc-800/50 p-6 sm:p-8"
        >
          <p className="text-base text-zinc-300 leading-relaxed">
            Soy un desarrollador orientado al{" "}
            <strong className="font-medium text-white">
              análisis funcional
            </strong>{" "}
            y al <strong className="font-medium text-white">modelado</strong>{" "}
            preciso de sistemas. Mi enfoque se basa en la{" "}
            <strong className="font-medium text-white">
              resolución estructurada
            </strong>{" "}
            de problemas, diseñando arquitecturas claras y escalables.
            Paralelamente, confío plenamente en el valor del{" "}
            <strong className="font-medium text-white">
              trabajo en equipo
            </strong>{" "}
            como el pilar fundamental para construir productos digitales sólidos
            e innovadores.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
