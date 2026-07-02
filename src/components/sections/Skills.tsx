import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";

const skillCategories = [
  {
    title: "Languages & Core",
    skills: [
      "C",
      "Java",
      "C++",
      "Python",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Accernity UI",
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Framer Motion",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "NextAuth",
      "JWT",
      "Gemini API",
      "OpenAI API",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Mongoose",
      "Redis",
      "Firebase",
      "SQL",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "AWS Lambda",
      "AWS S3",
      "AWS EC2",
      "Docker",
      "SST",
      "GitHub Actions",
      "Vercel",
    ],
  },
  {

    title: "Concepts",
    skills: [
      "System Design",
      "Data Structures & Algorithms", "OOPs", "DBMS", "Operating Systems", "Computer Network"
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Purple Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Technical <span className="text-purple-500">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-400">
            Technologies and tools I use to build scalable, performant
            full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
            >
              <h3 className="mb-6 text-xl font-semibold text-purple-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500 hover:text-white"
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