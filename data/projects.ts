export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  images?: string[];
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Sistema Web para Inmobiliaria",
    description:
      "Solución integral que resuelve la gestión de propiedades y clientes. Estructura el flujo de ventas y alquileres mediante perfiles de usuario, optimizando los tiempos y visibilidad de la información.",
    tech: ["React", "Next.js", "Nest.js", "Prisma"],
    image: "/projects/inmohogar-1.webp",
    images: [
      "/projects/inmohogar-1.webp",
      "/projects/inmohogar-2.webp",
      "/projects/inmohogar-3.webp",
      "/projects/inmohogar-4.webp",
      "/projects/inmohogar-5.webp",
      "/projects/inmohogar-6.webp",
      "/projects/inmohogar-7.webp",
    ],
    githubUrl: "https://github.com/JuanOlmos43",
  },
  {
    title: "Sistema de Generación de Recibos",
    description:
      "Aplicación de escritorio enfocada en automatizar y dar formato formal a la emisión y guardado de recibos de pago. Elimina errores manuales y agiliza el registro administrativo.",
    tech: ["C#"],
    image: "/projects/app-recibo.webp",
    images: ["/projects/app-recibo.webp", "/projects/recibo.webp"],
  },
];
