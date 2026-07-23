import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Experiences from "@/components/main/Experiences";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-6 md:gap-12">
        <Hero />
        <Projects />
        <Experiences />
        <Skills />
      </div>
    </main>
  );
}
