"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MaskedWords } from "@/components/reveal";
import { AmbientVideo } from "@/components/ambient-video";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-obsidian"
    >
      {/* Hero ambient video — cinematic bracelet macro */}
      <motion.div className="absolute inset-0 -z-30 overflow-hidden" style={{ y: bgY }}>
        <AmbientVideo src="/videos/hero.mp4" opacity={0.55} blend="screen" eager />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/20 to-obsidian" />
      </motion.div>

      {/* Layered atmosphere */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(201,169,97,0.28), rgba(6,7,13,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 40% 30% at 80% 70%, rgba(74,124,110,0.18), rgba(6,7,13,0) 70%)",
          }}
        />
        <div className="absolute inset-0 bg-constellation opacity-70" />
      </motion.div>

      {/* Slow drifting gold mesh */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(201,169,97,0.16), transparent 40%), radial-gradient(circle at 80% 60%, rgba(230,204,140,0.12), transparent 40%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container-tight relative flex min-h-[100svh] flex-col justify-between pb-20 pt-32 md:pt-36">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-between"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-gold-400/30 bg-navy-800/30 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-200">
              Singapore · Founding Drop 2026
            </span>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.35em] text-smoke md:inline">
            01 / 09 — The Vault
          </span>
        </motion.div>

        {/* Massive editorial wordmark */}
        <motion.div style={{ y: titleY, opacity }} className="relative pt-6 md:pt-0">
          <h1 className="heading-display text-cream">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="block text-[clamp(3.5rem,11vw,12rem)] font-light italic leading-[0.95] tracking-[-0.02em]"
              >
                Your destiny,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
                className="block text-[clamp(3.5rem,11vw,12rem)] font-medium leading-[0.95] tracking-[-0.02em] text-gold-gradient"
              >
                decoded.
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.2 }}
          className="mt-16 grid items-end gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-10"
        >
          {/* Pitch */}
          <div className="max-w-xl">
            <p className="text-base leading-relaxed text-bone/80 md:text-lg">
              Singapore&apos;s first AI-powered Bazi reading and premium crystal house. Ancient
              Four-Pillar wisdom — computed instantly. Bracelets crafted to your exact elemental
              chart.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/consultations/bazi-reading" className="btn-gold">
                <span>Unlock Your Chart · SGD 20</span>
                <ArrowIcon />
              </Link>
              <Link href="/shop" className="btn-ghost">
                Browse the House
              </Link>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-gold-400/15 pt-8">
              <Stat value="30s" label="Report time" />
              <Stat value="SGD 20" label="Not SGD 500" />
              <Stat value="100%" label="Grade-A stones" />
            </div>
          </div>

          {/* Floating chart preview */}
          <motion.div style={{ y: cardY }} className="relative">
            <ChartPreviewCard />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-smoke">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold-400/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-gold-200 md:text-3xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-smoke">{label}</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 5h12m0 0L9 1m4 4L9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartPreviewCard() {
  const pillars = [
    { label: "Year", element: "Wood", tone: "from-jade/70 to-jade/10" },
    { label: "Month", element: "Fire", tone: "from-rose-400/60 to-rose-400/10" },
    { label: "Day", element: "Earth", tone: "from-amber-700/60 to-amber-700/10" },
    { label: "Hour", element: "Metal", tone: "from-gold-300/60 to-gold-300/10" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-gold-400/25 via-gold-400/5 to-transparent blur-3xl" />

      <div className="relative overflow-hidden rounded-sm border border-gold-400/25 bg-gradient-to-b from-navy-800/95 to-navy-900/98 p-7 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)]">
        <CornerOrnament className="left-3 top-3" />
        <CornerOrnament className="right-3 top-3 rotate-90" />
        <CornerOrnament className="bottom-3 left-3 -rotate-90" />
        <CornerOrnament className="bottom-3 right-3 rotate-180" />

        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Sample · Live Bazi Report</p>
            <p className="mt-2 font-display text-lg text-cream">Four Pillars · Chloe T.</p>
          </div>
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold-400/40">
            <Image src="/logo.png" alt="" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {pillars.map((p) => (
            <div
              key={p.label}
              className={`rounded-sm bg-gradient-to-b ${p.tone} p-3 ring-1 ring-white/5`}
            >
              <p className="text-[9px] uppercase tracking-widest text-bone/70">{p.label}</p>
              <p className="mt-2 font-display text-lg text-cream">{p.element}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3 rounded-sm border border-gold-400/15 bg-obsidian/60 p-5">
          <Row label="Primary Element" value="Wood (甲)" />
          <Row label="Missing Element" value="Water — high impact" highlight />
          <Row label="Wealth Sector" value="Northeast · Citrine + Pyrite" />
          <Row label="Career Phase" value="Expansion · 2026 – 2028" />
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gold-400/15 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-smoke">Recommended Bracelet</p>
            <p className="mt-1 font-display text-base text-gold-200">Aquamarine Focus · SGD 180</p>
          </div>
          <span className="rounded-full border border-gold-400/40 px-3 py-1 text-[10px] uppercase tracking-widest text-gold-200">
            98% Match
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs uppercase tracking-widest text-smoke">{label}</span>
      <span className={highlight ? "text-sm font-medium text-gold-200" : "text-sm text-cream"}>
        {value}
      </span>
    </div>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute h-5 w-5 text-gold-400/60 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M2 2v8M2 2h8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// retain export name compatibility
export { MaskedWords };
