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
        className="hidden md:block absolute object-cover w-full"
        alt="Header Background"
      />
      <img
        src="/images/mobile-header-bg.png"
        className="md:hidden block object-cover absolute w-full "
        alt="Header Background"
      />{" "}
      <Header navLink="/auth/" navText="sign in" />
      <div className="relative">
        <Hero />
        <div className="mx-auto w-11/12">
          <HowItWorks />
          <WhatWeDo />
          <Goals />
        </div>
      </div>
      <Footer />
    </main>
  );
}
