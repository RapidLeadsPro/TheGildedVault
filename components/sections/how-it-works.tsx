const steps = [
  {
    num: "I",
    title: "Submit your birth details",
    body: "Birth date, time, and location. Encrypted, never shared, never resold. We need precision down to the hour for accurate pillar calculation.",
    time: "20 seconds",
  },
  {
    num: "II",
    title: "AI computes your Four Pillars",
    body: "Our engine references over 2,800 classical Bazi formulas, identifies your dominant and deficient elements, maps your wealth and career sectors, and surfaces your 2026 forecast.",
    time: "30 seconds",
  },
  {
    num: "III",
    title: "Receive your full report + match",
    body: "Comprehensive PDF + interactive web view. Includes your three recommended crystals, ranked by element fit. SGD 20 credit applies instantly to your custom bracelet.",
    time: "Instant",
  },
  {
    num: "IV",
    title: "We craft your bracelet to chart",
    body: "Each piece is hand-strung in our Singapore atelier using Grade-A stones matched to your deficiency. Certificate of authenticity included. Shipped within 5 business days.",
    time: "5 days",
  },
];

export function HowItWorks() {
  return (
    <section
      className="section-padding relative overflow-hidden border-y border-gold-400/10 bg-midnight"
      id="how-it-works"
    >
      <div className="absolute inset-0 -z-10 bg-vault-glow opacity-60" />

      <div className="container-tight">
        <div className="grid items-end gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow">The Process</p>
            <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl lg:text-6xl">
              Four pillars. <br />
              <span className="text-gold-gradient">Four steps.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-bone/70">
            From birth chart to bracelet — every step engineered for precision, privacy, and the
            kind of finish you expect from a luxury house.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.num} className="vault-card group relative overflow-hidden rounded-sm p-7">
              {/* connector line for desktop */}
              {i < steps.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gold-400/30 lg:block" />
              )}

              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-gold-300/80">{s.num}</span>
                <span className="rounded-full border border-gold-400/30 px-3 py-1 text-[10px] uppercase tracking-widest text-gold-200">
                  {s.time}
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl text-cream">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
