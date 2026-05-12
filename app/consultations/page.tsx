import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultations — AI Bazi, Master Sessions & Feng Shui Audits",
  description:
    "Three ways into the Vault: the SGD 20 AI Bazi report, the SGD 500 Gilded Master experience, or a full Feng Shui audit for your home or office.",
  alternates: { canonical: "/consultations" },
};

const tiers = [
  {
    href: "/consultations/bazi-reading",
    name: "AI Bazi Reading",
    price: "SGD 20",
    blurb:
      "Full Four Pillars chart, missing element, wealth sector map, and 2026 forecast. Delivered in 30 seconds.",
    cta: "Begin My Reading",
  },
  {
    href: "/consultations/premium-master",
    name: "Gilded Master Experience",
    price: "SGD 500",
    blurb:
      "Private 45-minute master session, bespoke Grade-A crystal bracelet crafted to your chart, lifelong AI profile.",
    cta: "Request Your Session",
  },
  {
    href: "/consultations/feng-shui-audit",
    name: "Feng Shui Audit",
    price: "From SGD 250",
    blurb:
      "Home, BTO, condo, or commercial space — mapped sector by sector against your Bazi with a placement plan.",
    cta: "Request an Audit",
  },
];

export default function ConsultationsIndex() {
  return (
    <section className="relative pb-24 pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-vault-glow" />
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Consultation Ladder</p>
          <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
            Three doorways into <span className="text-gold-gradient">your chart.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
            Start with the AI report at SGD 20. Most clients begin here and never need more.
            For founders, families, and decisions that can&apos;t be undone — we go deeper.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Link
              key={tier.href}
              href={tier.href}
              className={`vault-card group relative flex flex-col rounded-sm p-8 ${
                i === 0 ? "lg:border-gold-400/40 lg:bg-navy-800/60" : ""
              }`}
            >
              {i === 0 && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-obsidian">
                  Most Popular
                </span>
              )}
              <p className="eyebrow">{tier.price}</p>
              <h3 className="mt-4 font-display text-3xl text-cream">{tier.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-bone/70">{tier.blurb}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold-300 group-hover:text-gold-200">
                {tier.cta} <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
