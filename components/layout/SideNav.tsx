"use client";

import { useEffect, useState, useRef } from "react";

const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Proyectos" },
  { id: "education", label: "Educación" },
  { id: "contact", label: "Contacto" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isClickingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickingRef.current) return;

        let visibleSection = null;
        let maxRatio = 0;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.id;
          }
        }

        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      isClickingRef.current = true;
      setActiveSection(id);

      element.scrollIntoView({ behavior: "smooth" });

      // Liberamos el candado después de la transición esperada de smooth scroll
      setTimeout(() => {
        isClickingRef.current = false;
      }, 800);
    }
  };

  return (
    <nav className="fixed left-12 xl:left-24 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      {/* Aumentamos el gap de 8 a 10 para más espacio vertical */}
      <div className="relative flex flex-col gap-10 py-6">
        {/* Línea vertical sutil */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[34px] bottom-[34px] w-px bg-zinc-600 -z-10" />

        {SECTIONS.map(({ id, label }) => {
          const isActive = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              aria-label={`Ir a la sección ${label}`}
              className="group relative flex items-center justify-center"
            >
              <div
                // Aumentamos los círculos: w-5 h-5
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "bg-white border-white scale-125"
                    : "bg-black border-zinc-700 group-hover:border-zinc-400 group-hover:scale-125"
                }`}
              />

              {/* Tooltip opcional: Aumentamos fuente a text-sm y espaciado */}
              <span className="absolute left-full ml-5 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono text-zinc-400 bg-zinc-800 border border-zinc-600 px-3 py-1.5 rounded pointer-events-none whitespace-nowrap shadow-lg">
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
