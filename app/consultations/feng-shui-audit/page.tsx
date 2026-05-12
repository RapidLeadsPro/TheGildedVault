import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Feng Shui Audit Singapore — Home & Office Energy Alignment",
  description:
    "Comprehensive Feng Shui audit for your Singapore home, BTO, condo, or office. AI-mapped wealth and protection sectors, with bespoke crystal placement plan.",
  alternates: { canonical: "/consultations/feng-shui-audit" },
};

export default function FengShuiAuditPage() {
  return (
    <section className="relative pb-24 pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-vault-glow" />
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Home Harmony · 风水 · From SGD 250</p>
          <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
            Your home, <span className="text-gold-gradient">aligned.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
            Personal alignment is only half the work. A Feng Shui audit maps your living and working
            space against your personal Bazi — and tells you exactly which crystal goes where, in
            what sector, for what life outcome.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-gold">
              Request an Audit
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Digital Audit",
              price: "SGD 250",
              body: "Upload floor plan + birth chart. Receive sector-by-sector report + crystal placement guide within 5 days.",
            },
            {
              title: "Home Visit · CBD/East",
              price: "SGD 500",
              body: "On-site walkthrough at your home or BTO. Live compass reading, sector mapping, and personalized recommendations.",
            },
            {
              title: "Commercial Office",
              price: "From SGD 1,500",
              body: "Office, retail, or F&B premises. Includes team Bazi compatibility analysis and lease-date auspicious selection.",
            },
          ].map((item) => (
            <div key={item.title} className="vault-card rounded-sm p-8">
              <p className="eyebrow">{item.price}</p>
              <h3 className="mt-3 font-display text-2xl text-cream">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
