import Image from "next/image";
import Intro from "@/components/intro";
import Navbar from "@/components/Navbar";
import About from "@/components/about";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 mx-auto">
      <Navbar />
      <Intro />
      <About />
      <ProjectsSection />
    </main>
  );
}
