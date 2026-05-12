const elements = [
  {
    name: "Wood",
    hanzi: "木",
    color: "from-emerald-400/80 to-jade/40",
    stones: "Green Aventurine · Malachite · Jade",
    domain: "Growth · Ambition · New ventures",
  },
  {
    name: "Fire",
    hanzi: "火",
    color: "from-rose-400/80 to-orange-500/40",
    stones: "Carnelian · Garnet · Red Jasper",
    domain: "Recognition · Passion · Leadership",
  },
  {
    name: "Earth",
    hanzi: "土",
    color: "from-amber-600/80 to-yellow-700/40",
    stones: "Tiger's Eye · Yellow Jade · Pyrite",
    domain: "Stability · Trust · Property",
  },
  {
    name: "Metal",
    hanzi: "金",
    color: "from-gold-200/80 to-gold-500/40",
    stones: "Citrine · Clear Quartz · Rutilated Quartz",
    domain: "Wealth · Discipline · Precision",
  },
  {
    name: "Water",
    hanzi: "水",
    color: "from-sky-400/80 to-blue-700/40",
    stones: "Aquamarine · Sodalite · Lapis Lazuli",
    domain: "Wisdom · Career flow · Communication",
  },
];

export function FiveElements() {
  return (
    <section className="section-padding relative overflow-hidden bg-obsidian" id="elements">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">五行 · Wǔ Xíng</p>
          <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
            The Five Elements <span className="text-gold-gradient">that govern your chart.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/70">
            Your Bazi is composed of these five forces in unique proportion. Most charts are missing
            one. That deficiency is what we correct — with the precise stone, in the precise sector.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {elements.map((el) => (
            <article
              key={el.name}
              className="vault-card group relative overflow-hidden rounded-sm p-6"
            >
              <div
                className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${el.color} opacity-40 blur-2xl transition-opacity group-hover:opacity-70`}
              />
              <div className="relative">
                <p className="font-hanzi text-5xl text-gold-200/80">{el.hanzi}</p>
                <h3 className="mt-3 font-display text-2xl text-cream">{el.name}</h3>
                <div className="my-4 h-px w-8 bg-gold-400/40" />
                <p className="text-[10px] uppercase tracking-widest text-smoke">Stones</p>
                <p className="mt-1 text-sm leading-snug text-bone/80">{el.stones}</p>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-smoke">Governs</p>
                <p className="mt-1 text-sm leading-snug text-bone/80">{el.domain}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
