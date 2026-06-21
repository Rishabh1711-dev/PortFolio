"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I'm a B.Tech Electrical Engineering undergrad at NIT Manipur who builds scalable, full-stack platforms with real AI woven in — not bolted on. From an ATS resume analyzer to an anonymous feedback app and an AI-driven learning ecosystem, I focus on clean architecture, solid system design, and shipping things that actually work at scale. Backed by internships at Tata Group and Central Coalfields Limited, 800+ DSA problems solved, and a stack spanning React, Next.js, Node.js, and AWS.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
