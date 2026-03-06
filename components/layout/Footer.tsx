"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full flex justify-center border-t border-zinc-800/80 py-20 mt-32 bg-zinc-900/10">
      <div className="max-w-5xl w-full px-6 flex flex-col items-center gap-8">
        {/* Name and Title */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">
            Juan Emanuel Olmos
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-400">
            Técnico Analista de Sistemas
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/JuanOlmos43"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group p-3 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white hover:bg-zinc-800 shadow-sm"
          >
            <Github
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-emanuel-olmos-69b55a399/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group p-3 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white hover:bg-zinc-800 shadow-sm"
          >
            <Linkedin
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#contact"
            onClick={handleContactClick}
            aria-label="Contacto"
            className="group p-3 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white hover:bg-zinc-800 shadow-sm"
          >
            <Mail
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col items-center gap-3 mt-8 pt-8 border-t border-zinc-800/60 w-full sm:w-2/3">
          <p className="text-sm font-light tracking-wide text-zinc-400 text-center">
            © {currentYear} Juan Emanuel Olmos. Todos los derechos reservados.
          </p>
          <p className="text-xs font-light text-zinc-500 text-center">
            Desarrollado con Next.js, Tailwind CSS y Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
