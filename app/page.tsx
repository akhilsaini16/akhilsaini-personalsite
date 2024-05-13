import Image from "next/image";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 container mx-auto px-12 py-12">
      <About />
    </main>
  );
}
