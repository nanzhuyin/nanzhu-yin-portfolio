"use client";

import { motion, useReducedMotion } from "framer-motion";
import { sceneTransition } from "@/lib/motion";

const points = [
  [8, 62],
  [25, 34],
  [45, 46],
  [62, 18],
  [82, 32],
  [94, 9]
];

export function KnowledgeBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-y-0 right-[9%] w-px bg-[rgb(var(--line)/0.07)]" />
      <div className="absolute right-[9%] top-[14%] h-px w-[54%] bg-[rgb(var(--line)/0.07)]" />
      <div className="absolute right-[9%] top-[14%] h-[58%] w-[54%] border border-[rgb(var(--line)/0.055)]" />
      <motion.svg
        className="absolute right-[-7rem] top-28 h-[38rem] w-[min(60rem,68vw)] opacity-55"
        viewBox="0 0 100 80"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={sceneTransition}
      >
        <motion.polyline
          points={points.map(([x, y]) => `${x},${y}`).join(" ")}
          fill="none"
          stroke="rgb(var(--accent))"
          strokeOpacity="0.34"
          strokeWidth="0.16"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...sceneTransition, delay: 0.18 }}
        />
        {points.map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={index === 3 ? 0.82 : 0.42} fill="rgb(var(--accent))" opacity={index === 3 ? 0.88 : 0.5} />
        ))}
      </motion.svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--bg))]" />
    </div>
  );
}
