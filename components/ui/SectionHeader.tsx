import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp} className="space-y-3 mb-12">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="text-sm text-zinc-400">{subtitle}</p>
    </motion.div>
  );
}
