"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useAnimatedSection } from "@/hooks/useAnimatedSection";
import { mainTech, complementaryTech, type TechItem } from "@/data/stack";
import { SectionHeader } from "@/components/ui/SectionHeader";

/* ──────────────────────────────────────────────
   Stack Container (stagger más rápido para grids)
   ────────────────────────────────────────────── */

const stackContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ──────────────────────────────────────────────
   Tech Card Component
   ────────────────────────────────────────────── */

function TechCard({ name, icon: Icon, hoverColor, hoverBorder }: TechItem) {
  return (
    <motion.div variants={fadeUp}>
      <div
        className={`group flex flex-col items-center gap-3 rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-5 transition-all duration-300 ${hoverBorder || "hover:border-zinc-700"} hover:bg-zinc-800`}
      >
        <Icon
          size={32}
          className={`text-zinc-400 transition-colors duration-300 ${hoverColor || "group-hover:text-white"}`}
        />
        <span
          className={`text-xs font-medium tracking-wide text-zinc-400 transition-colors duration-300 ${hoverColor || "group-hover:text-zinc-300"}`}
        >
          {name}
        </span>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Tech Group Component
   ────────────────────────────────────────────── */

function TechGroup({ label, items }: { label: string; items: TechItem[] }) {
  return (
    <div className="space-y-6">
      <motion.p
        variants={fadeUp}
        className="text-xs font-medium uppercase tracking-widest text-zinc-400"
      >
        {label}
      </motion.p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
        {items.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Stack Section
   ────────────────────────────────────────────── */

export default function Stack() {
  const { ref, isInView } = useAnimatedSection();

  return (
    <section ref={ref} id="stack" className="py-16" aria-label="Tech Stack">
      <motion.div
        variants={stackContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        <SectionHeader
          title="Stack"
          subtitle="Tecnologías con las que he trabajado."
        />

        {/* ── Tech Groups ──────────────────────── */}
        <div className="space-y-12">
          <TechGroup label="Principales" items={mainTech} />
          <TechGroup label="Complementarias" items={complementaryTech} />
        </div>
      </motion.div>
    </section>
  );
}
