import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/layout/SideNav";
import { Footer } from "@/components/layout/Footer";

/* ──────────────────────────────────────────────
   Fonts
   ────────────────────────────────────────────── */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ──────────────────────────────────────────────
   Metadata
   ────────────────────────────────────────────── */

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juan Emanuel Olmos — Analista de Sistemas",
    template: "%s | Juan Emanuel Olmos",
  },
  description:
    "Portfolio de Juan Emanuel Olmos. Analista de Sistemas en formación, especializado en React, Next.js y TypeScript. Entre Ríos, Argentina.",
  keywords: [
    "analista de sistemas",
    "desarrollador web",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "argentina",
  ],
  authors: [{ name: "Juan Emanuel Olmos" }],
  openGraph: {
    title: "Juan Emanuel Olmos — Analista de Sistemas",
    description:
      "Portfolio profesional. Analista de Sistemas especializado en React, Next.js y TypeScript.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Emanuel Olmos — Analista de Sistemas",
    description:
      "Portfolio profesional. Analista de Sistemas especializado en React, Next.js y TypeScript.",
  },
};

/* ──────────────────────────────────────────────
   Root Layout
   ────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-white antialiased">
        <SideNav />
        <main className="mx-auto max-w-4xl px-6 pt-32 pb-16 flex flex-col gap-y-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
