import type { Variants } from "framer-motion";

export const motionTokens = {
  fast: 0.18,
  standard: 0.42,
  scene: 0.68,
  distance: 20,
  stagger: 0.065,
  ease: [0.22, 1, 0.36, 1] as const
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance },
  visible: { opacity: 1, y: 0 }
};

export const revealViewport = { once: true, amount: 0.16 } as const;

export function revealTransition(delay = 0) {
  return {
    duration: motionTokens.standard,
    delay,
    ease: motionTokens.ease
  };
}

export const sceneTransition = {
  duration: motionTokens.scene,
  ease: motionTokens.ease
};
