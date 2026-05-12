import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — The Liang House, Computed for 2026",
  description:
    "The Gilded Vault is Singapore's first AI-powered Bazi reading house, blending classical Four Pillars wisdom with proprietary computation and Grade-A crystal craftsmanship.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pb-12 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-vault-glow" />
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Our Story</p>
            <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
              Ancient wisdom, <br />
              <span className="text-gold-gradient">computed for 2026.</span>
            </h1>
            <p className="mt-10 text-lg leading-relaxed text-bone/80">
              The Gilded Vault was founded on a simple observation: classical Bazi readings are
              precise, profound, and often life-changing — but they are also slow, expensive, and
              packaged in a way that intimidates the people who could benefit most.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-bone/80">
              Our founder spent three years quietly building a computation engine that references
              the same classical texts a senior master would — the Four Pillars, Zi Wei Dou Shu, Qi
              Men Dun Jia — and codifies their logic into algorithms. The result is a reading that
              is faster, more thorough, and structurally free of human bias.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-bone/80">
              Then we pair it with the part traditional masters often skip: a beautiful object you
              can wear. Grade-A stones, ethically sourced, hand-strung in Singapore, designed to
              read as fine jewellery first.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-bone/80">
              That&apos;s the Vault. A house. A method. A piece you live with daily.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gold-400/10 bg-midnight" id="ai">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow">The AI Advantage</p>
              <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
                Why an algorithm <span className="text-gold-gradient">beats memory.</span>
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-bone/75">
              <p>
                A senior master can hold roughly 200 classical Bazi formulas in active working
                memory. They are, however, human — subject to fatigue, the last client they saw,
                and confirmation bias around the chart they expect to see.
              </p>
              <p>
                Our engine references over 2,800 classical formulas, computes their interactions
                in milliseconds, and stress-tests every recommendation across three independent
                methods. It is, in effect, a roomful of masters consulting in parallel.
              </p>
              <p>
                The output is not less spiritual — it is more honest. You see the math. You see the
                cross-references. And the recommended stone is the stone you actually need, not the
                stone a master could most conveniently source that week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gold-400/10" id="authenticity">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Authenticity Guarantee</p>
            <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
              If it ships from the Vault, <br />
              <span className="text-gold-gradient">it is real.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
              Every stone is independently certified Grade-A. Every shipment includes a certificate
              of authenticity, the mining origin, and lab-verified properties. If any piece you
              receive fails to pass independent gemological testing, we refund the full order and
              ship a replacement at no cost. Forever. No fine print.
            </p>
            <div className="mt-10">
              <Link href="/consultations/bazi-reading" className="btn-gold">
                Begin My Chart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
