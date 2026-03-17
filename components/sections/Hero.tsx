"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, MapPin, Eye, Code2 } from "lucide-react";
import { PERSONAL } from "@/data/personal";
import { heroContainer, heroItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen -mt-32 flex flex-col items-center justify-center text-center relative"
      aria-label="Hero"
    >
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Foto circular */}
        <motion.div variants={heroItem} className="mb-8">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border border-zinc-600 shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-zinc-800">
            <Image
              src="/profile.webp"
              alt={PERSONAL.name}
              fill
              className="object-cover"
              priority
              sizes="328px"
            />
          </div>
        </motion.div>

        {/* Nombres y Títulos */}
        <motion.div variants={heroItem} className="space-y-4 mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            {PERSONAL.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-zinc-300 tracking-wide">
            <span className="text-base md:text-lg text-zinc-500">próximo</span>{" "}
            {PERSONAL.title}
          </h2>
          <h3 className="text-sm md:text-base font-mono uppercase tracking-wider text-zinc-400">
            {PERSONAL.subtitle}
          </h3>
        </motion.div>

        {/* Descripción */}
        <motion.p
          variants={heroItem}
          className="max-w-lg text-lg text-zinc-400 font-light leading-relaxed mb-8 px-4"
        >
          {PERSONAL.description}
        </motion.p>

        {/* Ubicación */}
        <motion.div
          variants={heroItem}
          className="flex items-center gap-2 text-zinc-400 mb-12"
        >
          <MapPin size={16} className="text-zinc-400" />
          <span className="text-sm tracking-wide">{PERSONAL.location}</span>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          variants={heroItem}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href={PERSONAL.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver CV"
            className="group flex items-center gap-2.5 px-6 py-2.5 border-2 border-white bg-white text-black rounded-full font-medium text-sm transition-all hover:bg-transparent hover:text-white hover:border-white"
          >
            <Eye size={16} />
            <span>Ver CV</span>
          </a>

          <a
            href={PERSONAL.github}
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
            href={PERSONAL.linkedin}
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
