"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { PROJECTS, type Project } from "@/data/projects";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useAnimatedSection } from "@/hooks/useAnimatedSection";
import { useScrollLock } from "@/hooks/useScrollLock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { ref, isInView } = useAnimatedSection();

  // Prevenir scroll en body cuando el modal está abierto
  useScrollLock(!!selectedProject);

  return (
    <section ref={ref} id="projects" className="py-24" aria-label="Proyectos">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <SectionHeader
          title="Proyectos"
          subtitle="Algunos de mis proyectos más destacados."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
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
                    sizes="(max-width: 768px) 100vw, 1400px"
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100 border border-white/10"
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
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100 border border-white/10"
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
