"use client";

import Link from "next/link";
import { TextGenerateEffectDemo } from "./text-gen";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20 px-6">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Subtitle */}
        <p className="text-purple-400 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-8 flex items-center justify-center gap-3">
          <span className="hidden md:block w-12 h-[1px] bg-purple-500/50"></span>
          Full Stack Developer • AI Enthusiast • DEVOPS • TNP Coordinator
          <span className="hidden md:block w-12 h-[1px] bg-purple-500/50"></span>
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
            Rishabh Bhardwaj
          </span>
        </h1>

        {/* Text Generation Effect */}
        <div className="max-w-2xl mx-auto mb-10">
          <TextGenerateEffectDemo />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://drive.google.com/file/d/1LLMJymgGHn6kPxpMSWbF02hSVjySe8sq/view?usp=sharing"
            className="px-8 py-4 rounded-xl bg-purple-600 text-white font-semibold hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
          >
            View Resume
          </a>

          <a
            href="https://github.com/Rishabh1711-dev"
            className="px-8 py-4 rounded-xl bg-[#0a0a0a] border border-purple-500/50 text-purple-400 font-semibold hover:bg-purple-900/20 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1"
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/rishabh-bhardwaj-a875252a8"
            className="px-8 py-4 rounded-xl bg-[#0a0a0a] border border-white/10 text-gray-300 font-semibold hover:text-white hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
          >
            LinkedIn
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { value: "800+", label: "DSA Problems" },
            { value: "4+", label: "Production Projects" },
            { value: "2", label: "Internships" },
            { value: "AWS", label: "Cloud Deployed" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-[#0a0a0a] border border-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(168,85,247,0.15)] hover:border-purple-500/50 flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-purple-200/60 text-sm font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}