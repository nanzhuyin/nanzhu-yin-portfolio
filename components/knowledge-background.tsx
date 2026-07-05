"use client";

import { motion } from "framer-motion";

const nodes = [
  [18, 28],
  [36, 18],
  [58, 30],
  [76, 17],
  [86, 43],
  [68, 62],
  [44, 55],
  [25, 72]
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 6],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [0, 7]
];

export function KnowledgeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent_0_42%,rgba(34,211,238,0.08)_42.2%,transparent_42.8%_100%)]" />
      <motion.svg
        aria-hidden="true"
        className="absolute right-0 top-20 h-[520px] w-[min(58vw,720px)] opacity-70"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 0.72, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.1" />
            <stop offset="55%" stopColor="rgb(34, 211, 238)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="rgb(140, 255, 116)" stopOpacity="0.24" />
          </linearGradient>
        </defs>
        {edges.map(([from, to], index) => {
          const a = nodes[from];
          const b = nodes[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a[0]}
              y1={a[1]}
              x2={b[0]}
              y2={b[1]}
              stroke="url(#edgeGradient)"
              strokeWidth="0.22"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.08 * index, duration: 1.1, ease: "easeInOut" }}
            />
          );
        })}
        {nodes.map(([x, y], index) => (
          <motion.circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={index % 3 === 0 ? 1.15 : 0.72}
            fill={index % 3 === 0 ? "rgb(140, 255, 116)" : "rgb(34, 211, 238)"}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: [0.35, 0.9, 0.45], scale: 1 }}
            transition={{ delay: 0.08 * index, duration: 2.8, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
