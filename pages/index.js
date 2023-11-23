import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeDo from "@/components/WhatWeDo";
import Goals from "@/components/Goals";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FDD8DC] min-h-screen relative">
      <img
        src="/images/header-bg.png"
        className="absolute bg-cover "
        alt="Header Background"
      />
      <Header />

      <div className="mx-auto w-11/12 relative">
        <Hero />
        <HowItWorks />
        <WhatWeDo />
        <Goals />
      </div>
      <Footer />
    </main>
  );
}
