"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "I",
    title: "Submit your birth details",
    body: "Date, time, and city. Encrypted at rest, never shared, never resold. Precision down to the hour is required for accurate pillar calculation.",
    time: "20 seconds",
  },
  {
    num: "II",
    title: "AI computes your Four Pillars",
    body: "Our engine cross-references over 2,800 classical Bazi formulas, identifies your dominant and deficient elements, and maps your wealth and career sectors.",
    time: "30 seconds",
  },
  {
    num: "III",
    title: "Receive your full report",
    body: "Comprehensive PDF and interactive web view. Three ranked crystal recommendations. SGD 20 credit auto-applies to your bracelet.",
    time: "Instant",
  },
  {
    num: "IV",
    title: "We craft your bracelet",
    body: "Hand-strung in our Singapore atelier from Grade-A stones matched to your deficiency. Certificate included. Shipped within five business days.",
    time: "5 days",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-gold-400/10 bg-midnight"
      id="how-it-works"
    >
      <div className="absolute inset-0 -z-10 bg-vault-glow opacity-60" />

      <div className="container-tight section-padding">
        <div className="grid items-end gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow">The Process</p>
            <h2 className="heading-display mt-6 text-5xl text-cream md:text-7xl lg:text-8xl">
              Four pillars. <br />
              <span className="italic text-gold-gradient">Four steps.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-bone/70 md:text-lg">
            From birth chart to bracelet — every step engineered for precision, privacy, and the
            kind of finish you&apos;d expect from a luxury house.
          </p>
        </div>

        {/* Progress rail */}
        <div className="relative mt-24 hidden md:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold-400/15" />
          <motion.div
            style={{ height: progress }}
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold-400 to-gold-200"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
              className={`relative mb-32 grid grid-cols-2 items-center gap-16 last:mb-0 ${
                i % 2 === 0 ? "" : "[&>*:first-child]:order-2"
              }`}
            >
              <div className={`relative ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                <span className="font-display text-[clamp(6rem,14vw,14rem)] font-light italic leading-none text-gold-300/25">
                  {s.num}
                </span>
              </div>

              <div className={`relative ${i % 2 === 0 ? "" : "text-right"}`}>
                <span
                  className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gold-400 ring-4 ring-midnight ${
                    i % 2 === 0 ? "-left-[5.05rem]" : "-right-[5.05rem]"
                  }`}
                />
                <p className="eyebrow">{s.time}</p>
                <h3 className="mt-4 font-display text-3xl text-cream md:text-4xl lg:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/70 md:text-lg">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile stack */}
        <div className="mt-16 space-y-12 md:hidden">
          {steps.map((s) => (
            <div key={s.num} className="vault-card rounded-sm p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl italic text-gold-300/60">{s.num}</span>
                <span className="rounded-full border border-gold-400/30 px-3 py-1 text-[10px] uppercase tracking-widest text-gold-200">
                  {s.time}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
