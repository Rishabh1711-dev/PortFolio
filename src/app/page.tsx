import HeroSection from "@/components/sections/HeroSection";
import Skills from "@/components/sections/Skills";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ExpCard1 } from "@/components/sections/ExpCard1";
import { ExpCard2 } from "@/components/sections/ExpCard2";
import { ProjCard1 } from "@/components/sections/proj-card1";
import { ProjCard2 } from "@/components/sections/proj-card2";
import { ProjCard3 } from "@/components/sections/proj-card3";
import { ProjCard4 } from "@/components/sections/projcard4";
import { Leadership } from "@/components/sections/Leadership";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-purple-500/50 hidden md:block" />
      <h2 className="text-purple-400 font-bold tracking-[0.25em] uppercase text-xl sm:text-2xl text-center">
        {children}
      </h2>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-purple-500/50 hidden md:block" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-100 overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* THE BEDROCK: A permanent, subtle 64px structural grid locked to the screen */}
      <div className="fixed inset-0 -z-30 h-full w-full bg-zinc-950 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Hero Spotlight */}
      <Spotlight />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32 md:space-y-44">
        
        <div className="space-y-20">
          <HeroSection />
          <Skills />
        </div>

        {/* SECTION 1: EXPERIENCES */}
        <section id="experiences" className="relative scroll-mt-24">
          
          {/* SECTION ANCHORED GLOW: Locked dead-center behind the Experience cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-80 bg-purple-600/[0.14] blur-[140px] rounded-full pointer-events-none -z-10" />

          <SectionTitle>Experiences</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto place-items-center">
            <ExpCard1 />
            <ExpCard2 />
          </div>
        </section>

        {/* SECTION 2: PROJECTS */}
        <section id="projects" className="relative scroll-mt-24 pb-20">
          
          {/* SECTION ANCHORED GLOW: Swaps to Deep Indigo so the site feels progressive */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-96 bg-indigo-600/[0.14] blur-[150px] rounded-full pointer-events-none -z-10" />

          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto place-items-center">
            <ProjCard1 />
            <ProjCard2 />
            <ProjCard3 />
            <ProjCard4 />
          </div>
        </section>
        <Leadership/>

      </div>
    </main>
  );
}