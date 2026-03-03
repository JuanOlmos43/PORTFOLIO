"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

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
   Types
   ────────────────────────────────────────────── */

interface ProjectLink {
  label: string;
  href: string;
  icon: typeof Github;
}

interface Project {
  title: string;
  context: string;
  description: string;
  tech: string[];
  image: string;
  video?: string;
  links: ProjectLink[];
}

/* ──────────────────────────────────────────────
   Projects Data
   ────────────────────────────────────────────── */

const projects: Project[] = [
  {
    title: "Sistema Web para Inmobiliaria",
    context: "Proyecto Final — UADER",
    description:
      "Sistema web para gestión de propiedades con análisis funcional, modelado relacional y roles de usuario.",
    tech: ["React", "Next.js", "Nest.js", "Prisma"],
    image: "/projects/inmobiliaria.png",
    video: "/projects/inmobiliaria.mp4",
    links: [{ label: "GitHub", href: "#", icon: Github }],
  },
  {
    title: "Generador de Recibos",
    context: "Freelance",
    description:
      "Aplicación de escritorio para generación automatizada de recibos personalizados.",
    tech: ["C#"],
    image: "/projects/recibo.png",
    links: [],
  },
  // Placeholder para un futuro tercer proyecto:
  // {
  //   title: "Próximo Proyecto",
  //   context: "...",
  //   description: "...",
  //   tech: [],
  //   image: "/projects/placeholder.png",
  //   links: [],
  // },
];

/* ──────────────────────────────────────────────
   Project Card Component
   ────────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleMouseEnter() {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }

  function handleMouseLeave() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <motion.article variants={fadeUp} className="group">
      <div className="overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/20 transition-colors duration-300 hover:border-zinc-700">
        {/* ── Media Preview ─────────────────── */}
        <div
          className="relative aspect-video overflow-hidden bg-zinc-950"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-opacity duration-500 ${
              project.video ? "group-hover:opacity-0" : ""
            }`}
          />

          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </div>

        {/* ── Content ───────────────────────── */}
        <div className="space-y-4 p-6">
          {/* Title & Context */}
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
              {project.context}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-zinc-500">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-800/60 px-2.5 py-0.5 text-[11px] text-zinc-500"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="flex gap-2 pt-2">
              {project.links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-zinc-800 px-4 py-2 text-xs text-zinc-400 transition-all duration-300 hover:border-zinc-600 hover:text-white"
                >
                  <Icon size={14} strokeWidth={1.5} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ──────────────────────────────────────────────
   Projects Section
   ────────────────────────────────────────────── */

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="py-16" aria-label="Projects">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        {/* ── Section Header ───────────────────── */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Proyectos
          </h2>
          <p className="text-sm text-zinc-500">Trabajos destacados.</p>
        </motion.div>

        {/* ── Projects Grid ────────────────────── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
