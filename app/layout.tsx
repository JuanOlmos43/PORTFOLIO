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

export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"),
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
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Juan Olmos",
    description:
      "Frontend developer portfolio. Built with Next.js, TypeScript, and Tailwind CSS.",
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
