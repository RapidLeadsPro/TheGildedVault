"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const wordmarkX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.25, 0.1]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-gold-400/10 bg-obsidian"
    >
      <div className="absolute inset-0 -z-10 bg-vault-glow opacity-80" />
      <div className="absolute inset-0 -z-10 bg-constellation opacity-50" />

      <div className="container-tight section-padding text-center">
        <p className="eyebrow">One Last Thing</p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="heading-display mx-auto mt-8 max-w-5xl text-5xl text-cream md:text-7xl lg:text-8xl"
        >
          Your element is missing. <br />
          <span className="italic text-gold-shine">Find out which one.</span>
        </motion.h2>
        <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-bone/75 md:text-xl">
          Thirty seconds. Twenty dollars. A complete blueprint of your wealth, career, and
          relationship elements — plus the exact stone that completes your chart.
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/consultations/bazi-reading" className="btn-gold">
            Begin My Reading — SGD 20
          </Link>
          <Link href="/shop" className="btn-ghost">
            Browse the House
          </Link>
        </div>
      </div>

      {/* Giant wordmark */}
      <motion.div
        style={{ x: wordmarkX, opacity: wordmarkOpacity }}
        className="pointer-events-none relative -mt-4 select-none overflow-hidden whitespace-nowrap pb-12"
      >
        <span className="block font-display text-[18vw] font-light italic leading-[0.85] text-gold-gradient">
          The Gilded Vault
        </span>
      </motion.div>

      <div className="container-tight pb-16 text-center">
        <p className="mx-auto max-w-md font-hanzi text-2xl tracking-[0.3em] text-gold-300/60">
          梁 · 金 · 藏 · 石
        </p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-smoke">
          Of the Liang house. Of pure gold. Of stones that hold.
        </p>
      </div>
    </section>
  );
}
