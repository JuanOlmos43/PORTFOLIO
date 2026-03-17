"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useAnimatedSection } from "@/hooks/useAnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

/* ──────────────────────────────────────────────
   About Section
   ────────────────────────────────────────────── */

export default function About() {
  const { ref, isInView } = useAnimatedSection();

  return (
    <section ref={ref} id="about" className="py-16" aria-label="Sobre mí">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        <SectionHeader
          title="Sobre mí"
          subtitle="Perfil y enfoque profesional."
        />

        {/* ── Content ──────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="rounded-xl border border-zinc-600 bg-zinc-800/50 p-6 sm:p-8"
        >
          <p className="text-base text-zinc-300 leading-relaxed">
            Soy un desarrollador orientado al{" "}
            <strong className="font-medium text-white">
              análisis funcional
            </strong>{" "}
            y al <strong className="font-medium text-white">modelado</strong>{" "}
            preciso de sistemas. Mi enfoque se basa en la{" "}
            <strong className="font-medium text-white">
              resolución estructurada
            </strong>{" "}
            de problemas, diseñando arquitecturas claras y escalables.
            Paralelamente, confío plenamente en el valor del{" "}
            <strong className="font-medium text-white">
              trabajo en equipo
            </strong>{" "}
            como el pilar fundamental para construir productos digitales sólidos
            e innovadores.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
