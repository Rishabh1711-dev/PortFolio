import React from "react";

export function Leadership() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      
      {/* 1. THE BIG FLEX: LeetCode (Col Span 1) */}
      <div className="md:col-span-1 group relative p-6 rounded-2xl bg-gradient-to-b from-amber-500/[0.08] to-zinc-950/60 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between min-h-[14rem]">
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent group-hover:via-amber-400 transition-all duration-500" />
        
        <div className="flex justify-between items-start">
          <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Problem Solving
          </span>
          <svg className="w-5 h-5 text-amber-500/50 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 17l6-6-6-6M12 19h8" /></svg>
        </div>

        <div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-amber-400 tracking-tight mt-4 mb-1">
            800+
          </h3>
          <p className="text-sm font-medium text-slate-200">DSA Problems Solved</p>
          <p className="text-xs text-slate-400 mt-1">Demonstrated heavy algorithmic resilience on LeetCode.</p>
        </div>
      </div>

      {/* 2. THE HEAVY ROLE: TNP Cell (Col Span 2) */}
      <div className="md:col-span-2 group relative p-6 rounded-2xl bg-gradient-to-b from-purple-500/[0.08] to-zinc-950/60 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between min-h-[14rem]">
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:via-purple-400 transition-all duration-500" />

        <div className="flex justify-between items-start">
          <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Core Leadership
          </span>
          <svg className="w-5 h-5 text-purple-500/50 group-hover:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5z"/></svg>
        </div>

        <div className="mt-4 sm:mt-0">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Training & Placement Cell (TNP)</h3>
          <p className="text-sm text-purple-200/80 font-medium mb-2">Core Committee Member</p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
            Spearheading corporate outreach, managing sensitive placement communications, and coordinating institute-wide recruitment drives for the graduating batch.
          </p>
        </div>
      </div>

      {/* 3. SUPPORTING: Hackathons (Col Span 1) */}
      <div className="md:col-span-1 group relative p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-200 mb-1">Hackathons & Contests</h4>
          <p className="text-xs text-slate-400 leading-relaxed">Strengthened rapid prototyping and execution under strict 24-hour development deadlines.</p>
        </div>
      </div>

      {/* 4. SUPPORTING: Hostel Comm (Col Span 1) */}
      <div className="md:col-span-1 group relative p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-200 mb-1">Hostel Committee</h4>
          <p className="text-xs text-slate-400 leading-relaxed">Managed operational logistics, budgets, and ground execution for large-scale student events.</p>
        </div>
      </div>

      {/* 5. SUPPORTING: Sports (Col Span 1) */}
      <div className="md:col-span-1 group relative p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-200 mb-1">Intra-NIT Sports</h4>
          <p className="text-xs text-slate-400 leading-relaxed">Institute representative. Cultivated high-pressure performance and squad discipline.</p>
        </div>
      </div>

    </div>
  );
}