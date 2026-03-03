"use client";

import { useRef, type ComponentType, type SVGProps } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Atom,
  Triangle,
  Braces,
  Box,
  Hexagon,
  Database,
  Zap,
  GitBranch,
  Github,
  Hash,
  type LucideProps,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────── */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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
   Types
   ────────────────────────────────────────────── */

interface TechItem {
  name: string;
  icon: ComponentType<LucideProps> | ComponentType<SVGProps<SVGSVGElement>>;
}

/* ──────────────────────────────────────────────
   Tech Data
   ────────────────────────────────────────────── */

const mainTech: TechItem[] = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "TypeScript", icon: Braces },
  { name: "Nest.js", icon: Box },
  { name: "Prisma", icon: Hexagon },
];

const complementaryTech: TechItem[] = [
  { name: "SQL Server", icon: Database },
  { name: "Supabase", icon: Zap },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "C#", icon: Hash },
];

/* ──────────────────────────────────────────────
   Tech Card Component
   ────────────────────────────────────────────── */

function TechCard({ name, icon: Icon }: TechItem) {
  return (
    <motion.div variants={fadeUp}>
      <div className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800/50 bg-zinc-900/30 px-6 py-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60">
        <Icon
          width={22}
          height={22}
          strokeWidth={1.5}
          className="text-zinc-400 transition-colors duration-300 group-hover:text-white"
        />
        <span className="text-xs font-medium tracking-wide text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
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
        className="text-xs font-medium uppercase tracking-widest text-zinc-600"
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
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="stack" className="py-16" aria-label="Tech Stack">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        {/* ── Section Header ───────────────────── */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Stack
          </h2>
          <p className="text-sm text-zinc-500">
            Tecnologías con las que trabajo.
          </p>
        </motion.div>

        {/* ── Tech Groups ──────────────────────── */}
        <div className="space-y-12">
          <TechGroup label="Principales" items={mainTech} />
          <TechGroup label="Complementarias" items={complementaryTech} />
        </div>
      </motion.div>
    </section>
  );
}
