import type { Metadata } from "next";
import Link from "next/link";
import { AmbientVideo } from "@/components/ambient-video";

export const metadata: Metadata = {
  title: "The Gilded Master Experience — Private 1-on-1 Consultation",
  description:
    "A 45-minute private session with our resident master, validated by our AI Bazi engine, with a bespoke Grade-A crystal bracelet crafted exclusively for your chart. SGD 500.",
  alternates: { canonical: "/consultations/premium-master" },
};

const includes = [
  { title: "1-on-1 Master Session", detail: "45 minutes, private. In-person at our atelier or via secure video." },
  { title: "Bespoke Grade-A Bracelet", detail: "Hand-strung from museum-grade jade, citrine, or rare elemental of your match." },
  { title: "Lifelong AI Bazi Profile", detail: "Your chart, stored privately, with annual forecast refreshes through 2030." },
  { title: "Auspicious-Date Calendar", detail: "Personal calendar of high-leverage days for your year — career, wealth, travel." },
  { title: "Private Concierge", detail: "Direct WhatsApp line to your master and atelier for one full year." },
];

export default function PremiumMasterPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <AmbientVideo src="/videos/atelier.mp4" opacity={0.45} blend="screen" eager />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/65 via-obsidian/35 to-obsidian" />
        </div>
        <div className="absolute inset-0 -z-10 bg-vault-glow" />
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Gilded Master · 至尊 · SGD 500</p>
            <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
              For when the chart matters <br />
              <span className="text-gold-gradient">more than the price.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
              For founders launching companies, families relocating, executives timing IPOs. A
              private master session, validated by our engine, finished with a bespoke piece you&apos;ll
              wear for decades.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-midnight border-y border-gold-400/10">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="eyebrow">What&apos;s Included</p>
              <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
                Total value <span className="text-gold-gradient">SGD 800</span>
              </h2>
            </div>
            <div className="space-y-4">
              {includes.map((item, i) => (
                <div
                  key={item.title}
                  className="vault-card flex items-start gap-6 rounded-sm p-7"
                >
                  <span className="font-display text-3xl text-gold-300/60 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/contact" className="btn-gold">
                Request Your Session
              </Link>
              <p className="mt-5 text-xs uppercase tracking-widest text-smoke">
                Limited to 8 sessions per month · By application only
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
