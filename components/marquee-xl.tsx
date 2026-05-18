"use client";

import { motion } from "framer-motion";

const phrases = [
  { word: "Bespoke", italic: true },
  { word: "·" },
  { word: "Algorithmic" },
  { word: "·" },
  { word: "Grade-A", italic: true },
  { word: "·" },
  { word: "Crafted in SG" },
  { word: "·" },
  { word: "Bazi-matched", italic: true },
  { word: "·" },
  { word: "梁金藏石", hanzi: true },
  { word: "·" },
];

export function MarqueeXL() {
  return (
    <div className="relative overflow-hidden border-y border-gold-400/15 bg-obsidian py-10 md:py-14">
      <motion.div
        className="flex shrink-0 items-center gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...phrases, ...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className={`font-display text-5xl leading-none md:text-7xl lg:text-8xl ${
              p.italic ? "italic text-gold-200" : "text-cream"
            } ${p.hanzi ? "font-hanzi tracking-[0.15em] text-gold-gradient" : ""}`}
          >
            {p.word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
