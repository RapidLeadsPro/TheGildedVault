const rows = [
  { feature: "Time to receive report", others: "1 – 2 weeks", master: "30 seconds" },
  { feature: "Consultation fee", others: "SGD 500 – 1,000+", master: "SGD 20" },
  { feature: "Algorithmic precision", others: "Human bias", master: "2,800+ formulas" },
  { feature: "Crystal authenticity", others: "Unverified", master: "Grade-A certified" },
  { feature: "Bracelet matched to your chart", others: "Generic recommendations", master: "Bespoke to your missing element" },
  { feature: "Aesthetic for the modern office", others: "Often traditional", master: "Designed for daily wear" },
  { feature: "Re-readings & forecasts", others: "Pay each time", master: "Annual Alignment members included" },
];

export function Comparison() {
  return (
    <section className="section-padding relative overflow-hidden bg-obsidian">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Vault vs. The Old Way</p>
          <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
            Same wisdom. <br />
            <span className="text-gold-gradient">Engineered differently.</span>
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-sm border border-gold-400/20">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-navy-800/40">
            <div className="p-5 text-xs uppercase tracking-widest text-smoke">Feature</div>
            <div className="border-l border-gold-400/10 p-5 text-center text-xs uppercase tracking-widest text-smoke">
              Traditional Masters
            </div>
            <div className="border-l border-gold-400/30 bg-gradient-to-b from-gold-400/10 to-transparent p-5 text-center text-xs uppercase tracking-widest text-gold-200">
              The Gilded Vault
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.4fr_1fr_1fr] border-t border-gold-400/10 ${
                i % 2 === 0 ? "bg-obsidian" : "bg-navy-900/40"
              }`}
            >
              <div className="p-5 text-sm text-bone/85">{row.feature}</div>
              <div className="border-l border-gold-400/10 p-5 text-center text-sm text-bone/55">
                {row.others}
              </div>
              <div className="border-l border-gold-400/30 bg-gradient-to-b from-gold-400/5 to-transparent p-5 text-center text-sm text-gold-200">
                {row.master}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
