"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface EvervaultCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const EvervaultCard = ({
  title,
  description,
  image,
  className,
}: EvervaultCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    setRandomString(generateRandomString(1500));
  }

  return (
    <div
      className={cn(
        "p-[1px] rounded-3xl w-full h-full bg-gradient-to-b from-white/20 to-white/5",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-sm h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />

        <div className="relative z-20 p-6">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

function CardPattern({
  mouseX,
  mouseY,
  randomString,
}: {
  mouseX: any;
  mouseY: any;
  randomString: string;
}) {
  const maskImage = useMotionTemplate`
    radial-gradient(
      250px at ${mouseX}px ${mouseY}px,
      white,
      transparent
    )
  `;

  const style = {
    maskImage,
    WebkitMaskImage: maskImage,
  };

  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
        style={style}
      />

      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-0 break-words whitespace-pre-wrap text-[10px] font-mono font-bold text-white">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length: number) {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      />
    </svg>
  );
};