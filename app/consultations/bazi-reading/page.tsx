import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedOffer } from "@/components/sections/featured-offer";
import { FiveElements } from "@/components/sections/elements";
import { FAQ } from "@/components/sections/faq";
import { AmbientVideo } from "@/components/ambient-video";

export const metadata: Metadata = {
  title: "AI Bazi Reading Singapore — SGD 20, Instant Report",
  description:
    "Singapore's only AI-powered Bazi reading. Full Four Pillars analysis, missing element identification, wealth sector mapping, and 2026 forecast — delivered in 30 seconds for SGD 20.",
  alternates: { canonical: "/consultations/bazi-reading" },
};

export default function BaziReadingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pb-12 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <AmbientVideo src="/videos/bazi.mp4" opacity={0.4} blend="screen" eager />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
        </div>
        <div className="absolute inset-0 -z-10 bg-vault-glow" />
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">AI Bazi Reading · 八字 · SGD 20</p>
            <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
              The full master&apos;s reading. <br />
              <span className="text-gold-gradient">In thirty seconds.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
              A SGD 500 traditional consultation, computed by our proprietary AI engine. Same depth.
              Same precision. None of the wait, the bias, or the markup.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#begin" className="btn-gold">
                Begin My Reading
              </Link>
              <Link href="#what-you-get" className="btn-ghost">
                See What&apos;s Inside
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="what-you-get">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Four Pillars Chart", body: "Year, month, day, and hour pillars with full heavenly stem and earthly branch breakdown." },
              { title: "Missing Element Diagnosis", body: "Pinpoints the elemental deficiency depressing your luck — and what to do about it." },
              { title: "Wealth Sector Map", body: "Your favourable directions, lucky numbers, and the crystal that activates each sector." },
              { title: "2026 Annual Forecast", body: "Month-by-month read of your career, wealth, relationships, and health for the year ahead." },
            ].map((item) => (
              <div key={item.title} className="vault-card rounded-sm p-7">
                <h3 className="font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="begin">
        <FeaturedOffer />
      </div>

      <FiveElements />
      <FAQ />
    </>
  );
}
