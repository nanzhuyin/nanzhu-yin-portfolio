"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { revealTransition, revealVariants, revealViewport } from "@/lib/motion";

export function MotionReveal({
  children,
  className = "",
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={revealViewport}
      variants={revealVariants}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.div>
  );
}
