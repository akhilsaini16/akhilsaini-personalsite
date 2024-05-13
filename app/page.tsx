import Image from "next/image";
import About from "@/components/about";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 mx-auto">
      <Navbar />
      <div className="mt-24 px-12 py-12"> <About /></div>
    </main>
  );
}
