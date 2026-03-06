"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, MapPin, Eye, Code2 } from "lucide-react";

/* ──────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
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

export default function Hero() {
  const handleClickProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen -mt-32 flex flex-col items-center justify-center text-center relative"
      aria-label="Hero"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Foto circular */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border border-zinc-600 shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-zinc-800">
            <Image
              src="/profile.png"
              alt="Juan Emanuel Olmos"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Nombres y Títulos */}
        <motion.div variants={itemVariants} className="space-y-4 mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Juan Emanuel Olmos
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-zinc-300 tracking-wide">
            <span className="text-base md:text-lg text-zinc-500">próximo</span>{" "}
            Técnico Analista de Sistemas
          </h2>
          <h3 className="text-sm md:text-base font-mono uppercase tracking-wider text-zinc-400">
            Licenciatura en Sistemas de Información en formación
          </h3>
        </motion.div>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="max-w-lg text-lg text-zinc-400 font-light leading-relaxed mb-8 px-4"
        >
          Analizo, modelo y desarrollo soluciones web con enfoque estructurado.
        </motion.p>

        {/* Ubicación */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-zinc-400 mb-12"
        >
          <MapPin size={16} className="text-zinc-400" />
          <span className="text-sm tracking-wide">Entre Ríos, Argentina</span>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="/CV-Analista de Sistemas-Olmos, Juan Emanuel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver CV"
            className="group flex items-center gap-2.5 px-6 py-2.5 border-2 border-white bg-white text-black rounded-full font-medium text-sm transition-all hover:bg-transparent hover:text-white hover:border-white"
          >
            <Eye size={16} />
            <span>Ver CV</span>
          </a>

          <a
            href="https://github.com/JuanOlmos43"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex items-center gap-2.5 px-6 py-2.5 border-2 border-zinc-600 bg-transparent text-white rounded-full font-medium text-sm transition-all hover:border-zinc-600 hover:bg-zinc-800"
          >
            <Github
              size={16}
              className="text-zinc-400 group-hover:text-white transition-colors"
            />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/juan-emanuel-olmos-69b55a399"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex items-center gap-2.5 px-6 py-2.5 border-2 border-zinc-600 bg-transparent text-white rounded-full font-medium text-sm transition-all hover:border-zinc-600 hover:bg-zinc-800"
          >
            <Linkedin
              size={16}
              className="text-zinc-400 group-hover:text-white transition-colors"
            />
            <span>LinkedIn</span>
          </a>

          <a
            href="#projects"
            onClick={handleClickProjects}
            aria-label="Ver proyectos"
            className="group flex items-center gap-2.5 px-6 py-2.5 border-2 border-zinc-600 bg-transparent text-white rounded-full font-medium text-sm transition-all hover:border-zinc-600 hover:bg-zinc-800"
          >
            <Code2
              size={16}
              className="text-zinc-400 group-hover:text-white transition-colors"
            />
            <span>Ver proyectos</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
