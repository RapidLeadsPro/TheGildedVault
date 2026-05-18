"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      delay,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "section";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      custom={delay}
    >
      {children}
    </Comp>
  );
}

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: {
      duration: 1.1,
      delay: 0.08 * i,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

export function MaskedWords({
  text,
  className,
  wordClassName,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className ?? ""}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em]">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={wordVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            custom={i}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
