const props = [
  {
    eyebrow: "01 · Method",
    title: "AI processes thousands of Bazi formulas — instantly.",
    body: "Traditional masters reference dozens of formulas in their head. Our proprietary engine cross-references every classical text, including Zi Wei Dou Shu, Qi Men Dun Jia, and the Four Pillars — in 30 seconds. Same depth. No human bias. No two-week wait.",
  },
  {
    eyebrow: "02 · Material",
    title: "Grade-A stones, ethically sourced. Certificate included.",
    body: "Every bracelet is hand-strung from certified Grade-A jade, high-clarity citrine, raw amethyst, and select rare elementals. Each piece ships with provenance documentation. We do not stock dyed glass or low-grade fillers. Ever.",
  },
  {
    eyebrow: "03 · Match",
    title: "Crafted to your exact elemental deficiency.",
    body: "Your AI Bazi report identifies what you're missing — Water, Wood, Fire, Earth, or Metal. We then craft a bracelet around the precise crystal that supplements your chart, your wealth sector, and your current life phase. No generic 'love stone' guesswork.",
  },
];

export function ValueProps() {
  return (
    <section className="section-padding relative overflow-hidden bg-obsidian">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Vault Method</p>
          <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
            Three reasons it works <span className="text-gold-gradient">where others guess.</span>
          </h2>
          <div className="mx-auto mt-6 gold-line" />
        </div>

        <div className="mt-20 space-y-12 md:space-y-0 md:divide-y md:divide-gold-400/10">
          {props.map((p, i) => (
            <div
              key={p.eyebrow}
              className="grid items-start gap-8 py-12 md:grid-cols-[1fr_1.6fr] md:gap-16"
            >
              <div>
                <p className="eyebrow">{p.eyebrow}</p>
                <h3 className="heading-display mt-4 text-2xl text-cream md:text-3xl">
                  {p.title}
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-lg leading-relaxed text-bone/75">{p.body}</p>
                <div className="h-px w-12 bg-gold-400/40" />
                <p className="font-display text-sm text-gold-300/80">
                  {["精算 · Precise calculation", "真材 · True material", "天人合一 · In harmony"][i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
