import Hero from "@/app/components/Hero"
import Navbar from "./components/Navbar";

export default function Home() {
  return (
     <main className="relative min-h-screen">
      <div className="block absolute inset-0 -z-10 bg-[#131313] sm:bg-[url('/images/heropage-bg.webp')] bg-no-repeat bg-cover bg-top-right"></div>
      <Navbar />
      <Hero />
    </main>
  );
}
