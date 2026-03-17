import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

export interface TechItem {
  name: string;
  icon: IconType;
  hoverColor?: string;
  hoverBorder?: string;
}

export const mainTech: TechItem[] = [
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
    name: "Nest.js",
    icon: SiNestjs,
    hoverColor: "group-hover:text-[#E0234E]",
    hoverBorder: "hover:border-[#E0234E]",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    hoverColor: "group-hover:text-white",
    hoverBorder: "hover:border-white",
  },
];

export const complementaryTech: TechItem[] = [
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
    name: "C#",
    icon: TbBrandCSharp,
    hoverColor: "group-hover:text-[#68217A]",
    hoverBorder: "hover:border-[#68217A]",
  },
];
