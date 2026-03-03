"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, MapPin, ArrowDown, Eye } from "lucide-react";

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
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* ──────────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center text-center"
      aria-label="Hero"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8"
      >
        {/* ── Profile Image ────────────────────── */}
        <motion.div variants={fadeUp}>
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/10">
            <Image
              src="/profile.png"
              alt="Juan Emanuel Olmos"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* ── Name ─────────────────────────────── */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Juan Emanuel Olmos
          </h1>
          <p className="text-lg font-light tracking-wide text-zinc-400">
            Técnico Analista de Sistemas - Licenciatura en Sistemas de Información en formación
          </p>
        </motion.div>

        {/* ── Description ──────────────────────── */}
        <motion.div variants={fadeUp} className="max-w-lg space-y-1">
          <p className="text-sm leading-relaxed text-zinc-500">
            Estudiante avanzado de la Licenciatura en Sistemas de Información.
          </p>
          <p className="text-sm leading-relaxed text-zinc-500">
            Formación en análisis funcional, modelado de datos y desarrollo web.
          </p>
          <p className="text-sm leading-relaxed text-zinc-500">
            Enfoque estructurado y resolución lógica de problemas.
          </p>
        </motion.div>

        {/* ── Location ─────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-1.5 text-zinc-400"
        >
          <MapPin size={20} strokeWidth={1.5} />
          <span className="text-xs tracking-wide">Entre Ríos, Argentina</span>
        </motion.div>

        {/* ── Action & Social Links ─────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="/CV-Analista de Sistemas-Olmos, Juan Emanuel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar CV"
            className="group flex items-center gap-2 rounded-full border-2 border-zinc-800 px-5 py-2.5 text-sm text-zinc-100 transition-all duration-300 hover:border-zinc-600 hover:text-white"
          >
            <Eye
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>Ver CV</span>
          </a>
          <a
            href="https://github.com/JuanOlmos43"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex items-center gap-2 rounded-full border-2 border-zinc-800 px-5 py-2.5 text-sm text-zinc-100 transition-all duration-300 hover:border-zinc-600 hover:text-white"
          >
            <Github
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/juan-emanuel-olmos-69b55a399"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex items-center gap-2 rounded-full border-2 border-zinc-800 px-5 py-2.5 text-sm text-zinc-100 transition-all duration-300 hover:border-zinc-600 hover:text-white"
          >
            <Linkedin
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* ── Scroll Indicator ─────────────────── */}
        <motion.div variants={fadeUp} className="pt-12">
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            className="text-zinc-700 transition-colors duration-300 hover:text-zinc-400"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={20} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
