"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionVariants = {
  up:    { y: 30, x: 0 },
  down:  { y: -30, x: 0 },
  left:  { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // useInView fires reliably post-hydration, avoiding the whileInView race condition
  // where IntersectionObserver callbacks can arrive before Framer Motion is ready
  // in Next.js App Router's SSR hydration cycle.
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [isInView, controls]);

  const { x, y } = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={controls}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
