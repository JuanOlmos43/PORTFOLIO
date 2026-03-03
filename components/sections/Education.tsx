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
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* ──────────────────────────────────────────────
   Education Data
   ────────────────────────────────────────────── */

const education = [
  {
    tier: "primary" as const,
    title: "Licenciatura en Sistemas de Información",
    institution: "UADER",
    status: "60% - En curso",
    icon: GraduationCap,
  },
  {
    tier: "secondary" as const,
    title: "Técnico Analista de Sistemas",
    institution: "UADER",
    status: "96%",
    icon: BookOpen,
  },
  {
    tier: "tertiary" as const,
    title: "Técnico Electrónico",
    institution: "E.E.T. N°1",
    status: null,
    icon: School,
  },
];

/* ──────────────────────────────────────────────
   Tier Styles
   ────────────────────────────────────────────── */

const tierStyles = {
  primary: {
    wrapper: "border-zinc-700/60 bg-zinc-900/40",
    title: "text-base font-semibold text-white",
    institution: "text-sm text-zinc-400",
    icon: "text-zinc-300",
    dot: "h-2 w-2 bg-white",
    padding: "p-6",
  },
  secondary: {
    wrapper: "border-zinc-800/40 bg-zinc-900/20",
    title: "text-sm font-medium text-zinc-300",
    institution: "text-xs text-zinc-500",
    icon: "text-zinc-500",
    dot: "h-1.5 w-1.5 bg-zinc-500",
    padding: "px-6 py-5",
  },
  tertiary: {
    wrapper: "border-zinc-800/30 bg-transparent",
    title: "text-xs font-medium text-zinc-500",
    institution: "text-xs text-zinc-600",
    icon: "text-zinc-600",
    dot: "h-1.5 w-1.5 bg-zinc-700",
    padding: "px-6 py-4",
  },
};

/* ──────────────────────────────────────────────
   Education Section
   ────────────────────────────────────────────── */

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <p className="text-sm text-zinc-500">Recorrido académico.</p>
        </motion.div>

        {/* ── Timeline ─────────────────────────── */}
        <div className="relative space-y-4">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-zinc-800/60" />

          {education.map(({ tier, title, institution, status, icon: Icon }) => {
            const styles = tierStyles[tier];

            return (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative flex items-start gap-6 pl-8"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-[50%] -translate-y-1/2 rounded-full ${styles.dot}`}
                />

                {/* Card */}
                <div
                  className={`flex flex-1 items-center gap-4 rounded-lg border ${styles.wrapper} ${styles.padding} transition-colors duration-300 hover:border-zinc-700`}
                >
                  <Icon
                    size={tier === "primary" ? 20 : 16}
                    strokeWidth={1.5}
                    className={`shrink-0 ${styles.icon}`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className={styles.title}>{title}</p>
                    <p className={`mt-0.5 ${styles.institution}`}>
                      {institution}
                    </p>
                  </div>

                  {status && (
                    <span className="shrink-0 rounded-full border border-zinc-700 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                      {status}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
