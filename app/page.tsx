import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Team from "@/components/Team";
import ValuesStrip from "@/components/ValueStrip";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#020c1b] text-[#e8f4ff] overflow-x-hidden">
      <Navbar/>
      <Hero/>
      {/* <ValuesStrip/> */}
      <Services/>
      <About/>
      <CoreValues/>
      <Team/>
      <CTA/>

      <Footer/>

    </main>
    
  );
}
