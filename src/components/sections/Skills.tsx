import React from 'react';

const skillCategories = [
  {
    title: "Languages & Core",
    skills: ["Java", "C++", "Python", "TypeScript", "JavaScript", "System Design"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "NextAuth", "JWT"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "SQL"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Docker", "SST", "GitHub Actions", "Vercel"],
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-purple-200/60 mt-4 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build scalable, full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="group relative p-6 rounded-2xl bg-[#0a0a0a] border border-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(168,85,247,0.15)] hover:border-purple-500/50"
            >
              <h3 className="font-bold text-xl mb-6 text-purple-400">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-purple-950/30 border border-purple-900/50 text-purple-200 text-sm font-medium transition-colors group-hover:border-purple-700/50 hover:!bg-purple-600/30 hover:!text-white hover:!border-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}