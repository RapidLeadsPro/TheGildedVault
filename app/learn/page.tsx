import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn — Bazi, Crystals & Feng Shui for the Modern Reader",
  description:
    "Plain-English guides to Bazi reading, the five elements, crystal meanings, and Feng Shui for Singapore homes and offices.",
  alternates: { canonical: "/learn" },
};

const pillars = [
  { title: "Bazi & The Four Pillars", desc: "How your birth chart actually works — and how to read your own." },
  { title: "Crystal Meanings A–Z", desc: "Every stone in the Vault, with origin, properties, and elemental fit." },
  { title: "The Five Elements", desc: "Wood, Fire, Earth, Metal, Water — what they govern, how they balance." },
  { title: "Feng Shui for SG Homes", desc: "Practical, BTO-friendly tips. No incense required." },
  { title: "Seasonal & Auspicious Dates", desc: "Li Chun, Tai Sui, and the year's high-leverage days." },
];

export default function LearnPage() {
  return (
    <section className="relative pb-24 pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-vault-glow" />
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Field Notes from the Vault</p>
          <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
            Bazi & crystals, <br />
            <span className="text-gold-gradient">honestly explained.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
            We publish what we actually know — no mystic hand-waving, no jargon for the sake of it.
            Library opens with our launch in February 2026.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="vault-card rounded-sm p-7">
              <h3 className="font-display text-xl text-cream">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/70">{p.desc}</p>
              <span className="mt-6 inline-block text-xs uppercase tracking-widest text-gold-300/70">
                Coming February 2026
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/consultations/bazi-reading" className="btn-gold">
            Skip the reading, run my chart
          </Link>
        </div>
      </div>
    </section>
  );
}
