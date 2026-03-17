import Image from "next/image";
import { Github, Eye } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: () => void;
}) {
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-xl border border-zinc-600 bg-zinc-900 transition-all duration-300 hover:border-zinc-500">
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
          sizes="(max-width: 768px) 100vw, 450px"
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
