import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { FaProjectDiagram, FaDatabase, FaTasks } from "react-icons/fa";

export interface TechItem {
  name: string;
  icon: IconType;
  hoverColor?: string;
  hoverBorder?: string;
}

export interface TechGroupType {
  label: string;
  items: TechItem[];
}

export const techGroups: TechGroupType[] = [
  {
    label: "Frontend & Interfaz",
    items: [
      {
        name: "React",
        icon: SiReact,
        hoverColor: "group-hover:text-[#61DAFB]",
        hoverBorder: "hover:border-[#61DAFB]",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        hoverColor: "group-hover:text-white",
        hoverBorder: "hover:border-white",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        hoverColor: "group-hover:text-[#3178C6]",
        hoverBorder: "hover:border-[#3178C6]",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        hoverColor: "group-hover:text-[#E34F26]",
        hoverBorder: "hover:border-[#E34F26]",
      },
      {
        name: "CSS3",
        icon: SiCss,
        hoverColor: "group-hover:text-[#1572B6]",
        hoverBorder: "hover:border-[#1572B6]",
      },
    ],
  },
  {
    label: "Backend & Lógica",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        hoverColor: "group-hover:text-[#339933]",
        hoverBorder: "hover:border-[#339933]",
      },
      {
        name: "Nest.js",
        icon: SiNestjs,
        hoverColor: "group-hover:text-[#E0234E]",
        hoverBorder: "hover:border-[#E0234E]",
      },
      {
        name: "C#",
        icon: TbBrandCSharp,
        hoverColor: "group-hover:text-[#68217A]",
        hoverBorder: "hover:border-[#68217A]",
      },
      {
        name: "Python",
        icon: SiPython,
        hoverColor: "group-hover:text-[#3776AB]",
        hoverBorder: "hover:border-[#3776AB]",
      },
    ],
  },
  {
    label: "Datos & Persistencia",
    items: [
      {
        name: "SQL Server",
        icon: DiMsqlServer,
        hoverColor: "group-hover:text-[#CC292B]",
        hoverBorder: "hover:border-[#CC292B]",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        hoverColor: "group-hover:text-[#3ECF8E]",
        hoverBorder: "hover:border-[#3ECF8E]",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        hoverColor: "group-hover:text-white",
        hoverBorder: "hover:border-white",
      },
    ],
  },
  {
    label: "Herramientas & Metodología",
    items: [
      {
        name: "Git",
        icon: SiGit,
        hoverColor: "group-hover:text-[#F05032]",
        hoverBorder: "hover:border-[#F05032]",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        hoverColor: "group-hover:text-white",
        hoverBorder: "hover:border-white",
      },
      {
        name: "Modelado UML",
        icon: FaProjectDiagram,
        hoverColor: "group-hover:text-[#FFA500]",
        hoverBorder: "hover:border-[#FFA500]",
      },
      {
        name: "Modelado ER",
        icon: FaDatabase,
        hoverColor: "group-hover:text-[#4B8BBE]",
        hoverBorder: "hover:border-[#4B8BBE]",
      },
      {
        name: "Metodologías Ágiles",
        icon: FaTasks,
        hoverColor: "group-hover:text-[#2563EB]",
        hoverBorder: "hover:border-[#2563EB]",
      },
    ],
  },
];
