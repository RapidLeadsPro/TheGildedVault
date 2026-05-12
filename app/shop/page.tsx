import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop Crystal Bracelets Singapore — Grade-A Stones",
  description:
    "Premium hand-strung crystal bracelets for wealth, protection, love, and elemental balance. Every piece is Grade-A certified, ethically sourced, and matched to your Bazi.",
  alternates: { canonical: "/shop" },
};

const collections = [
  {
    id: "wealth",
    name: "Wealth & Prosperity",
    hanzi: "财",
    stones: "Citrine · Pyrite · Yellow Tiger's Eye",
    intent: "For activating the Northeast wealth sector and attracting career advancement.",
    from: "SGD 180",
    gradient: "from-gold-200/40 via-gold-400/20 to-transparent",
  },
  {
    id: "protection",
    name: "Protection & Shielding",
    hanzi: "护",
    stones: "Black Tourmaline · Obsidian · Smoky Quartz",
    intent: "Deflects negative workplace energy. Recommended during Tai Sui or Ghost Month.",
    from: "SGD 165",
    gradient: "from-slate-400/40 via-slate-700/20 to-transparent",
  },
  {
    id: "love",
    name: "Love & Harmony",
    hanzi: "爱",
    stones: "Rose Quartz · Rhodonite · Strawberry Quartz",
    intent: "Activates the Southwest relationship sector and softens interpersonal friction.",
    from: "SGD 160",
    gradient: "from-rose-300/40 via-pink-400/20 to-transparent",
  },
  {
    id: "elements",
    name: "Five Elements",
    hanzi: "五行",
    stones: "Custom · matched to your Bazi deficiency",
    intent: "Hand-strung after your AI Bazi report. Your missing element, made wearable.",
    from: "SGD 220",
    gradient: "from-emerald-300/30 via-jade/20 to-transparent",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="relative pb-12 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-vault-glow" />
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Vault Collection</p>
            <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
              Grade-A stones. <br />
              <span className="text-gold-gradient">Cut for the modern wrist.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
              Every bracelet in the Vault is hand-strung in our Singapore atelier from certified
              stones. Each ships with provenance documentation and an auspicious-date
              recommendation for first wear.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold-400/30 px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-jade animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-gold-200">
                Tip: Run your AI Bazi report first to see your matched pieces
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((c) => (
              <article
                key={c.id}
                id={c.id}
                className="vault-card group relative overflow-hidden rounded-sm p-10"
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-gradient-to-br ${c.gradient} blur-3xl transition-opacity group-hover:opacity-100 opacity-70`}
                />
                <div className="relative">
                  <div className="flex items-baseline justify-between">
                    <span className="font-hanzi text-6xl text-gold-300/80">{c.hanzi}</span>
                    <span className="text-xs uppercase tracking-widest text-gold-200">
                      From {c.from}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-3xl text-cream md:text-4xl">{c.name}</h2>
                  <p className="mt-4 text-sm uppercase tracking-widest text-smoke">{c.stones}</p>
                  <p className="mt-6 text-base leading-relaxed text-bone/75">{c.intent}</p>
                  <div className="mt-10 flex items-center gap-4">
                    <span className="btn-ghost cursor-not-allowed opacity-70">
                      Coming Soon · Founding Drop
                    </span>
                    <Link
                      href="/consultations/bazi-reading"
                      className="text-xs font-medium uppercase tracking-widest text-gold-300 hover:text-gold-100"
                    >
                      Match to my chart →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-smoke">
            The founding drop ships February 2026, in time for Lunar New Year. Reserve your
            chart-matched bracelet by booking your AI Bazi reading today — your SGD 20 becomes a
            credit toward the bracelet.
          </p>
        </div>
      </section>
    </>
  );
}
