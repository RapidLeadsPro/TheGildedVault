"use client";

import { motion } from "framer-motion";
import { MaskedWords } from "@/components/reveal";

const props = [
  {
    index: "01",
    eyebrow: "The Method",
    title: "Algorithmic, not anecdotal.",
    body: "Senior masters carry roughly 200 Bazi formulas in active memory. Our engine references over 2,800 — cross-validated across the Four Pillars, Zi Wei Dou Shu, and Qi Men Dun Jia. Same depth. No bias. No two-week wait.",
    hanzi: "精算",
    hanziLatin: "Precise calculation",
  },
  {
    index: "02",
    eyebrow: "The Material",
    title: "Grade-A. Certified. Always.",
    body: "Each stone arrives with a certificate of authenticity, the mining origin, and lab-verified gemological properties. We do not stock dyed glass, reconstituted stone, or low-grade fillers. If a piece you receive fails independent testing, we refund and replace forever.",
    hanzi: "真材",
    hanziLatin: "True material",
  },
  {
    index: "03",
    eyebrow: "The Match",
    title: "Crafted to your missing element.",
    body: "Your AI Bazi report identifies which of the five elements your chart lacks. Your bracelet is hand-strung around the precise crystal that supplements that deficiency — within your wealth sector, your career phase, your aesthetic. No generic 'love stone' guesswork.",
    hanzi: "天人合一",
    hanziLatin: "Heaven and human, as one",
  },
];

export function ValueProps() {
  return (
    <section className="section-padding relative overflow-hidden bg-obsidian">
      <div className="container-tight">
        <div className="mb-20 max-w-3xl md:mb-32">
          <p className="eyebrow">The Vault Method</p>
          <h2 className="heading-display mt-6 text-5xl text-cream md:text-7xl lg:text-8xl">
            <MaskedWords text="Three reasons" /> <br />
            <span className="italic text-gold-gradient">
              <MaskedWords text="it works." />
            </span>
          </h2>
        </div>

        <div className="space-y-32 md:space-y-48">
          {props.map((p, i) => (
            <motion.article
              key={p.index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
              transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
              className={`grid items-start gap-10 md:gap-20 ${
                i % 2 === 0
                  ? "md:grid-cols-[0.4fr_1fr_1.2fr]"
                  : "md:grid-cols-[1.2fr_1fr_0.4fr] md:[&>*:last-child]:order-first md:[&>*:first-child]:order-last"
              }`}
            >
              {/* Massive index */}
              <div className="flex flex-col gap-3">
                <span className="font-display text-[clamp(5rem,12vw,11rem)] font-light italic leading-none text-gold-300/30">
                  {p.index}
                </span>
                <p className="eyebrow">{p.eyebrow}</p>
              </div>

              {/* Title */}
              <div>
                <h3 className="heading-display text-4xl text-cream md:text-5xl lg:text-6xl">
                  {p.title}
                </h3>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-12 bg-gold-400/40" />
                  <p className="font-hanzi text-sm tracking-[0.3em] text-gold-300/80">
                    {p.hanzi}
                  </p>
                  <span className="text-xs italic text-smoke">— {p.hanziLatin}</span>
                </div>
              </div>

              {/* Body */}
              <div>
                <p className="text-lg leading-relaxed text-bone/75 md:text-xl">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
