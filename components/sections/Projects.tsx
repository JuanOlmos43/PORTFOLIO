"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { Github, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

/* ──────────────────────────────────────────────
   Types & Data
   ────────────────────────────────────────────── */

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  images?: string[];
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Sistema Web para Inmobiliaria",
    description:
      "Solución integral que resuelve la gestión de propiedades y clientes. Estructura el flujo de ventas y alquileres mediante perfiles de usuario, optimizando los tiempos y visibilidad de la información.",
    tech: ["React", "Next.js", "Nest.js", "Prisma"],
    image: "/projects/inmohogar-1.png",
    images: [
      "/projects/inmohogar-1.png",
      "/projects/inmohogar-2.png",
      "/projects/inmohogar-3.png",
      "/projects/inmohogar-4.png",
      "/projects/inmohogar-5.png",
      "/projects/inmohogar-6.png",
      "/projects/inmohogar-7.png",
    ],
    githubUrl: "https://github.com/JuanOlmos43", // Mock link
  },
  {
    title: "Sistema de Generación de Recibos",
    description:
      "Aplicación de escritorio enfocada en automatizar y dar formato formal a la emisión y guardado de recibos de pago. Elimina errores manuales y agiliza el registro administrativo.",
    tech: ["C#"],
    image: "/projects/app-recibo.png",
    images: ["/projects/app-recibo.png", "/projects/recibo.png"],
  },
];

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
   Component
   ────────────────────────────────────────────── */

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60% 0px" });

  // Prevenir scroll en body cuando el modal está abierto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section ref={ref} id="projects" className="py-24" aria-label="Proyectos">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="space-y-3 mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Proyectos
          </h2>
          <p className="text-sm text-zinc-400">
            Algunos de mis proyectos más destacados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <ProjectCard
                project={project}
                onOpenModal={() => {
                  if (project.images && project.images.length > 0) {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal de video grande o galería */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full max-w-[1400px] max-h-[70vh] bg-zinc-800 rounded-xl overflow-hidden border border-zinc-600 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors shadow-xl border border-white/10"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black group/gallery">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    quality={100}
                    unoptimized
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) =>
                            prev === 0
                              ? selectedProject.images!.length - 1
                              : prev - 1,
                          );
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors opacity-0 group-hover/gallery:opacity-100 border border-white/10"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) =>
                            prev === selectedProject.images!.length - 1
                              ? 0
                              : prev + 1,
                          );
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors opacity-0 group-hover/gallery:opacity-100 border border-white/10"
                      >
                        <ChevronRight size={24} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                        {currentImageIndex + 1} /{" "}
                        {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: () => void;
}) {
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-xl border border-zinc-600 bg-zinc-900 transition-all duration-300 hover:border-zinc-600">
      {/* Media Box */}
      <div
        className={`relative aspect-video overflow-hidden bg-zinc-800 border-b border-zinc-600 ${
          project.images && project.images.length > 0 ? "cursor-pointer" : ""
        }`}
        onClick={
          project.images && project.images.length > 0 ? onOpenModal : undefined
        }
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Eye Icon Overlay sutil integrado en el hover */}
        {project.images && project.images.length > 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/70 text-white opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 backdrop-blur-sm border border-white/10">
              <Eye size={20} />
            </div>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div>
          <h3 className="text-lg font-medium text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags de tecnología integrados sutilmente */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-600 text-xs font-mono text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Botones/Links de acción minimalistas */}
        {project.githubUrl && (
          <div className="pt-4 mt-2 flex items-center justify-between border-t border-zinc-600">
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                aria-label={`Código de ${project.title}`}
              >
                <Github size={16} />
                <span>Código</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
