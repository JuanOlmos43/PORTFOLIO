"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

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
   Education Section
   ────────────────────────────────────────────── */

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60% 0px" });

  return (
    <section ref={ref} id="education" className="py-16" aria-label="Education">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        {/* ── Section Header ───────────────────── */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Formación
          </h2>
          <p className="text-sm text-zinc-400">Recorrido académico.</p>
        </motion.div>

        {/* ── Timeline ─────────────────────────── */}
        <div className="relative space-y-4">
          {/* Vertical line */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-zinc-800/60" />

          {/* Primary */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-start gap-6 pl-8"
          >
            <div className="absolute left-0 top-[50%] -translate-y-1/2 rounded-full h-2 w-2 bg-white" />
            <div className="flex flex-1 items-center gap-4 rounded-lg border border-zinc-600 bg-zinc-800 p-6 transition-colors duration-300 hover:border-zinc-700">
              <GraduationCap
                size={25}
                strokeWidth={1.5}
                className="shrink-0 text-zinc-300"
              />
              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-white">
                  Licenciatura en Sistemas de Información
                </p>
                <p className="mt-0.5 text-sm text-zinc-400">UADER</p>
              </div>
              <span className="shrink-0 rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
                60% - En curso
              </span>
            </div>
          </motion.div>

          {/* Secondary */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-start gap-6 pl-8"
          >
            <div className="absolute left-0 top-[50%] -translate-y-1/2 rounded-full h-1.5 w-1.5 bg-zinc-500" />
            <div className="flex flex-1 items-center gap-4 rounded-lg border border-zinc-600 bg-zinc-800 px-6 py-5 transition-colors duration-300 hover:border-zinc-700">
              <BookOpen
                size={20}
                strokeWidth={1.5}
                className="shrink-0 text-zinc-400"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-300">
                  Técnico Analista de Sistemas
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">UADER</p>
              </div>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="shrink-0 rounded-full border border-white/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white"
              >
                96% - Finalizando
              </motion.span>
            </div>
          </motion.div>

          {/* Tertiary */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-start gap-6 pl-8"
          >
            <div className="absolute left-0 top-[50%] -translate-y-1/2 rounded-full h-1.5 w-1.5 bg-zinc-700" />
            <div className="flex flex-1 items-center gap-4 rounded-lg border border-zinc-600 bg-transparent px-6 py-4 transition-colors duration-300 hover:border-zinc-700">
              <School
                size={20}
                strokeWidth={1.5}
                className="shrink-0 text-zinc-400"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-zinc-400">
                  Técnico Electrónico
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">E.E.T. N°1</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
