"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is an AI Bazi reading actually as accurate as a real Feng Shui master?",
    a: "Our engine references over 2,800 classical Bazi formulas — far more than any single master can hold in working memory — and cross-validates the result across the Four Pillars, Zi Wei Dou Shu, and Qi Men Dun Jia methods. It removes human bias and memory drift. For higher-stakes life decisions, you can also upgrade to a 1-on-1 master session that uses the AI report as its starting point.",
  },
  {
    q: "Are the crystals real and ethically sourced?",
    a: "Every stone is Grade-A and ships with a certificate of authenticity. We source from suppliers we have personally vetted, with documentation on mining origin. We do not stock dyed glass, reconstituted stone, or 'fake jade'. Ever.",
  },
  {
    q: "Will the bracelet look traditional or 'too feng shui' for the office?",
    a: "Our entire range is engineered for daily professional wear. Slim profiles, gold-toned spacers, modern clasps. No big plastic beads, no obvious symbols. It reads as fine jewellery first, metaphysical alignment second.",
  },
  {
    q: "What if my chart is missing an element I don't connect with aesthetically?",
    a: "Each missing element has 3–5 stones to choose from across colour palettes. Your report shows all your top matches ranked by elemental potency. You always retain the final aesthetic call.",
  },
  {
    q: "How long until I receive my bracelet?",
    a: "AI Bazi reports are instant. Custom bracelets are hand-strung in our Singapore atelier and ship within 5 business days. Express 'auspicious-date' delivery is available at checkout for SGD 15.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If your AI Bazi report doesn't resonate, full refund within 14 days. Custom bracelets are refundable within 30 days, unworn, in original packaging. We want you delighted, not stuck.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden bg-obsidian">
      <div className="container-tight">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">Considered Questions</p>
            <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
              The things <span className="text-gold-gradient">people actually ask.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-bone/70">
              Still curious? Our concierge replies on WhatsApp within an hour during Singapore
              business hours.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-400/30 px-4 py-2 text-xs uppercase tracking-widest text-gold-200">
              <span className="h-1.5 w-1.5 rounded-full bg-jade animate-pulse" />
              Concierge online
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full rounded-sm border text-left transition-all ${
                    isOpen
                      ? "border-gold-400/40 bg-navy-800/60"
                      : "border-gold-400/10 bg-navy-900/30 hover:border-gold-400/25"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <span className="font-display text-lg text-cream md:text-xl">{f.q}</span>
                    <span
                      className={`shrink-0 text-gold-300 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <PlusIcon />
                    </span>
                  </div>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-bone/75">{f.a}</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
