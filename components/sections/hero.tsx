import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-obsidian pb-20 pt-32 md:pt-40">
      {/* layered background */}
      <div className="absolute inset-0 -z-10 bg-vault-glow" />
      <div className="absolute inset-0 -z-10 bg-constellation opacity-70" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[60vh] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,169,97,0.25), rgba(6,7,13,0) 70%)",
        }}
      />

      <div className="container-tight">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* COPY */}
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-400/30 bg-navy-800/40 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-200">
                Singapore · Now Open
              </span>
            </div>

            <h1 className="heading-display text-5xl text-cream md:text-6xl lg:text-7xl">
              Your destiny,
              <br />
              <span className="text-gold-shine">decoded in 30 seconds.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/75">
              Ancient Bazi wisdom, computed instantly. Get your full elemental chart — career, wealth, relationships — and a crystal bracelet crafted to your exact chart. No master fees. No two-week wait.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/consultations/bazi-reading" className="btn-gold">
                <span>Unlock Your Chart · SGD 20</span>
                <ArrowIcon />
              </Link>
              <Link href="/shop" className="btn-ghost">
                Browse Bracelets
              </Link>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-gold-400/15 pt-8">
              <Stat value="30s" label="Report time" />
              <Stat value="SGD 20" label="Not SGD 500+" />
              <Stat value="100%" label="Grade-A stones" />
            </div>
          </div>

          {/* CARD */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <ChartPreviewCard />
          </div>
        </div>

        <Marquee />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-gold-200 md:text-3xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-smoke">{label}</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartPreviewCard() {
  const pillars = [
    { label: "Year", element: "Wood", tone: "from-jade/70 to-jade/30" },
    { label: "Month", element: "Fire", tone: "from-red-400/60 to-red-400/10" },
    { label: "Day", element: "Earth", tone: "from-amber-700/60 to-amber-700/10" },
    { label: "Hour", element: "Metal", tone: "from-gold-300/60 to-gold-300/10" },
  ];

  return (
    <div className="relative">
      {/* glowing aura */}
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-gold-400/20 via-gold-400/5 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-sm border border-gold-400/25 bg-gradient-to-b from-navy-800/80 to-navy-900/95 p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* corner ornaments */}
        <CornerOrnament className="left-3 top-3" />
        <CornerOrnament className="right-3 top-3 rotate-90" />
        <CornerOrnament className="bottom-3 left-3 -rotate-90" />
        <CornerOrnament className="bottom-3 right-3 rotate-180" />

        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Sample · Bazi Report</p>
            <p className="mt-2 font-display text-lg text-cream">Four Pillars · Chloe T.</p>
          </div>
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold-400/40">
            <Image src="/logo.png" alt="" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {pillars.map((p) => (
            <div
              key={p.label}
              className={`rounded-sm bg-gradient-to-b ${p.tone} p-3 ring-1 ring-white/5`}
            >
              <p className="text-[9px] uppercase tracking-widest text-bone/70">{p.label}</p>
              <p className="mt-2 font-display text-lg text-cream">{p.element}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3 rounded-sm border border-gold-400/15 bg-obsidian/60 p-5">
          <Row label="Primary Element" value="Wood (甲)" />
          <Row label="Missing Element" value="Water — high impact" highlight />
          <Row label="Wealth Sector" value="Northeast · Citrine + Pyrite" />
          <Row label="Career Phase" value="Expansion · 2026 – 2028" />
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gold-400/15 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-smoke">Recommended Bracelet</p>
            <p className="mt-1 font-display text-base text-gold-200">Aquamarine Focus · SGD 180</p>
          </div>
          <span className="rounded-full border border-gold-400/40 px-3 py-1 text-[10px] uppercase tracking-widest text-gold-200">
            98% Match
          </span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs uppercase tracking-widest text-smoke">{label}</span>
      <span className={highlight ? "text-sm font-medium text-gold-200" : "text-sm text-cream"}>
        {value}
      </span>
    </div>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute h-5 w-5 text-gold-400/60 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M2 2v8M2 2h8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function Marquee() {
  const items = [
    "As featured in upcoming · CNA Lifestyle",
    "Verified Grade-A stones",
    "AI-Powered Bazi · since 2026",
    "Ethically sourced",
    "Free SG shipping",
    "Crafted to your chart",
  ];
  return (
    <div className="mt-20 overflow-hidden border-y border-gold-400/10 py-5">
      <div className="flex animate-shimmer flex-nowrap items-center gap-12 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-bone/40">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="h-1 w-1 rounded-full bg-gold-400/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
