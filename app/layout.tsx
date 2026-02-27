import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Portfolio — Juan Olmos",
  description:
    "Frontend developer portfolio. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["portfolio", "frontend", "developer", "next.js", "react"],
  authors: [{ name: "Juan Olmos" }],
  openGraph: {
    title: "Portfolio — Juan Olmos",
    description:
      "Frontend developer portfolio. Built with Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
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
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
