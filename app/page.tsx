import Image from "next/image";
import Intro from "@/components/intro";
import Navbar from "@/components/Navbar";
import About from "@/components/about";
import ProjectsSection from "@/components/ProjectsSection";
import MountainView from "@/components/mountainview";
import Temp from "@/components/tempStarter";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col mx-auto bg-[#06141D]"
//     >
//       <Navbar />
//       <MountainView />
//       <Intro />
//       <About />
//       <ProjectsSection />
//     </main>
//   );
// }
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-auto bg-[#06141D]">
      <Navbar />
      <Temp />
      {/* <section id="MountainView" className="h-screen">
        <MountainView />
      </section> */}
      {/* <section id="Intro" className="sh-screen">
        <Intro />
      </section> */}
      <section id="About">
        <About />
      </section>
      <section id="ProjectsSection">
        <ProjectsSection />
      </section>
    </main>
  );
}