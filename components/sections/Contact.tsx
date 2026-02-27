"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

/* ──────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────── */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

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
        className="block text-xs font-medium uppercase tracking-widest text-zinc-500"
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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const inputStyles =
    "w-full rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors duration-300 focus:border-zinc-600 focus:outline-none";

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

    // Simulate sending — replace with actual API call when backend is ready
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32"
      aria-label="Contact"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-16"
      >
        {/* ── Section Header ───────────────────── */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Contacto
          </h2>
          <p className="text-sm text-zinc-500">
            ¿Tenés un proyecto o una idea? Escribime.
          </p>
        </motion.div>

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
            className="group flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:border-zinc-600 hover:text-white disabled:pointer-events-none disabled:opacity-50"
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
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
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
