import {
  Hero,
  About,
  Stack,
  Projects,
  Education,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
