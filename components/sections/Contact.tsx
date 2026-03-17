"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useAnimatedSection } from "@/hooks/useAnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "sending" | "sent" | "error";

/* ──────────────────────────────────────────────
   Validation
   ────────────────────────────────────────────── */

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "El nombre es requerido.";
  }

  if (!data.email.trim()) {
    errors.email = "El email es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresá un email válido.";
  }

  if (!data.message.trim()) {
    errors.message = "El mensaje es requerido.";
  } else if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

/* ──────────────────────────────────────────────
   Input Component
   ────────────────────────────────────────────── */

function FormField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-widest text-zinc-400"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-400/80">
          <AlertCircle size={12} strokeWidth={1.5} />
          {error}
        </p>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Contact Section
   ────────────────────────────────────────────── */

export default function Contact() {
  const { ref, isInView } = useAnimatedSection();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const inputStyles =
    "w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors duration-300 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 focus:outline-none";

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xaqppaag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section ref={ref} id="contact" className="py-16" aria-label="Contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        <SectionHeader
          title="Contacto"
          subtitle="Escribime y te contactaré lo antes posible."
        />

        {/* ── Form ─────────────────────────────── */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          noValidate
          className="max-w-lg space-y-6"
        >
          <FormField label="Nombre" id="contact-name" error={errors.name}>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={inputStyles}
            />
          </FormField>

          <FormField label="Email" id="contact-email" error={errors.email}>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={inputStyles}
            />
          </FormField>

          <FormField
            label="Mensaje"
            id="contact-message"
            error={errors.message}
          >
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Contame sobre tu proyecto..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`${inputStyles} resize-none`}
            />
          </FormField>

          {/* ── Submit Button ──────────────────── */}
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="group flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-2.5 text-sm text-zinc-400 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-white disabled:pointer-events-none disabled:opacity-50"
          >
            {status === "sending" && (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border border-zinc-600 border-t-white" />
                <span>Enviando...</span>
              </>
            )}
            {status === "sent" && (
              <>
                <CheckCircle
                  size={16}
                  strokeWidth={1.5}
                  className="text-emerald-400"
                />
                <span className="text-emerald-400">Mensaje enviado</span>
              </>
            )}
            {(status === "idle" || status === "error") && (
              <>
                <Send
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300"
                />
                <span>Enviar mensaje</span>
              </>
            )}
          </button>

          {status === "error" && (
            <p className="flex items-center gap-1 text-xs text-red-400/80">
              <AlertCircle size={12} strokeWidth={1.5} />
              Hubo un error. Intentá de nuevo.
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
