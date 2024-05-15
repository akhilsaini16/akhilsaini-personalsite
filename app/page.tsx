import Image from "next/image";
import Intro from "@/components/intro";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 mx-auto"
    // style={{
    //   backgroundImage: 'radial-gradient(100% 100% at 50% 50%, #020617, #DD335C',
    //   // height: '80vh'
    // }}
    >
      <Navbar />
      {/* <div
        style={{
          backgroundImage: 'radial-gradient(100% 100% at 0% 50%, #020617 50%, #DD335C',
          height: '80vh'
        }}
      ><Intro /></div> */}
      <Intro />
      {/* <Intro /> */}
      <About />
      <ProjectsSection />
    </main>
  );
}
