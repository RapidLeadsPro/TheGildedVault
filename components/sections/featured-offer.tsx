"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FeaturedOffer() {
  return (
    <section className="section-padding relative overflow-hidden border-y border-gold-400/10 bg-midnight">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,97,0.20), rgba(6,7,13,0) 70%)",
        }}
      />

      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto max-w-6xl rounded-sm border border-gold-400/30 bg-gradient-to-b from-navy-900 to-obsidian p-10 md:p-20"
        >
          <div className="grid items-center gap-14 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">The Destiny Decoded Offer</p>
              <h2 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
                A <span className="italic text-bone/40 line-through">SGD 500</span> reading.<br />
                For{" "}
                <span className="italic text-gold-gradient">SGD 20</span>.
              </h2>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-bone/75 md:text-lg">
                The full AI Bazi report — career arc, wealth sectors, missing element, three crystal
                matches, 2026 forecast — delivered in 30 seconds. Your SGD 20 becomes a credit on
                any custom bracelet.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link href="/consultations/bazi-reading" className="btn-gold">
                  Begin My Reading
                </Link>
                <Link href="/learn" className="btn-ghost">
                  See Sample Report
                </Link>
              </div>

              <p className="mt-8 text-xs uppercase tracking-widest text-smoke">
                No subscription. No upsell wall. 100% refund if you&apos;re not in love.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-gold-400/15 via-gold-400/5 to-transparent blur-2xl" />
              <div className="rounded-sm border border-gold-400/25 bg-obsidian/80 p-8">
                <p className="text-[10px] uppercase tracking-widest text-gold-200">What you get</p>
                <ul className="mt-6 space-y-4">
                  <Item value="SGD 150" item="Comprehensive AI Bazi Report" />
                  <Item value="SGD 50" item="Personalized Crystal Match" />
                  <Item value="SGD 20" item="Bracelet Credit (auto-applied)" />
                  <Item value="Free" item="2026 Forecast Calendar" />
                </ul>
                <div className="my-6 divider-gold" />
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-bone/70">Total value</span>
                  <span className="font-display text-lg text-bone/50 line-through">SGD 220</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-sm uppercase tracking-widest text-gold-200">You pay</span>
                  <span className="font-display text-5xl text-gold-gradient">SGD 20</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Item({ value, item }: { value: string; item: string }) {
  return (
    <li className="flex items-center justify-between border-b border-gold-400/10 pb-3 last:border-0">
      <span className="flex items-center gap-3 text-sm text-bone/85">
        <CheckIcon /> {item}
      </span>
      <span className="text-xs uppercase tracking-widest text-gold-300/80">{value}</span>
    </li>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-gold-300">
      <path
        d="M2 7.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
