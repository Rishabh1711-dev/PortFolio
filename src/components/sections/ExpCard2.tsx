import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function ExpCard2() {
  return (
    <a 
      href="https://drive.google.com/file/d/1LLMJymgGHn6kPxpMSWbF02hSVjySe8sq/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col items-start max-w-sm mx-auto p-6 min-h-[26rem] w-full rounded-2xl bg-zinc-950/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 cursor-pointer"
    >
      {/* Subtle ambient glass sheen */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Sleek 'Open Link' arrow */}
      <div className="absolute top-4 right-4 z-20 transition-all duration-300 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-white">
          <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
        </svg>
      </div>

      {/* Muted blueprint corners */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white/20 group-hover:text-white/40 transition-colors duration-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/20 group-hover:text-white/40 transition-colors duration-300" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white/20 group-hover:text-white/40 transition-colors duration-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/20 group-hover:text-white/40 transition-colors duration-300" />

      {/* FIXED: Stripped pointer-events-none off this container */}
      <div className="w-full h-full flex flex-col justify-between z-10">
        <EvervaultCard
          title="Central Coalfields Limited (CCL)– Software Engineering & Problem Solving Intern"
          description="Goverment Internship - Engineered a scalable MERN-stack college portal with responsive interfaces, API integrations, and optimized database operations."
          image="https://res.cloudinary.com/dtwjc8gng/image/upload/v1782028422/Screenshot_2026-06-21_132111_patrhy.png" 
        />
      </div>
    </a>
  );
}