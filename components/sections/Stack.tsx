"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

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
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */

interface TechItem {
  name: string;
  icon: IconType;
  hoverColor?: string;
  hoverBorder?: string;
}

/* ──────────────────────────────────────────────
   Tech Data
   ────────────────────────────────────────────── */

const mainTech: TechItem[] = [
  {
    name: "React",
    icon: SiReact,
    hoverColor: "group-hover:text-[#61DAFB]",
    hoverBorder: "hover:border-[#61DAFB]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    hoverColor: "group-hover:text-white",
    hoverBorder: "hover:border-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    hoverColor: "group-hover:text-[#3178C6]",
    hoverBorder: "hover:border-[#3178C6]",
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    hoverColor: "group-hover:text-[#E0234E]",
    hoverBorder: "hover:border-[#E0234E]",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    hoverColor: "group-hover:text-white",
    hoverBorder: "hover:border-white",
  },
];

const complementaryTech: TechItem[] = [
  {
    name: "SQL Server",
    icon: DiMsqlServer,
    hoverColor: "group-hover:text-[#CC292B]",
    hoverBorder: "hover:border-[#CC292B]",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    hoverColor: "group-hover:text-[#3ECF8E]",
    hoverBorder: "hover:border-[#3ECF8E]",
  },
  {
    name: "Git",
    icon: SiGit,
    hoverColor: "group-hover:text-[#F05032]",
    hoverBorder: "hover:border-[#F05032]",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    hoverColor: "group-hover:text-white",
    hoverBorder: "hover:border-white",
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    hoverColor: "group-hover:text-[#68217A]",
    hoverBorder: "hover:border-[#68217A]",
  },
];

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
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60% 0px" });

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
          <p className="text-sm text-zinc-400">
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
