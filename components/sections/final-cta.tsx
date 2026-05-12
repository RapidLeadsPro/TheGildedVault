import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-gold-400/10 bg-obsidian">
      <div className="absolute inset-0 -z-10 bg-vault-glow opacity-80" />
      <div className="absolute inset-0 -z-10 bg-constellation opacity-50" />

      <div className="container-tight section-padding text-center">
        <p className="eyebrow">One Last Thing</p>
        <h2 className="heading-display mx-auto mt-5 max-w-4xl text-4xl text-cream md:text-6xl lg:text-7xl">
          Your element is missing. <br />
          <span className="text-gold-shine">Find out which one.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-bone/75">
          Thirty seconds. Twenty dollars. A complete blueprint of your wealth, career, and
          relationship elements — plus the exact stone that completes your chart.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/consultations/bazi-reading" className="btn-gold">
            Begin My Reading — SGD 20
          </Link>
          <Link href="/shop" className="btn-ghost">
            Browse the House
          </Link>
        </div>

        <p className="mx-auto mt-16 max-w-md font-hanzi text-2xl tracking-[0.3em] text-gold-300/70">
          梁 · 金 · 藏 · 石
        </p>
        <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-smoke">
          Of the Liang house. Of pure gold. Of stones that hold.
        </p>
      </div>
    </section>
  );
}
