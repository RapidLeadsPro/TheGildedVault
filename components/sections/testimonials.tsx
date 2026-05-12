const quotes = [
  {
    quote:
      "I've worn the same generic rose quartz for years. The Vault's AI report told me I was actually missing Water — not Fire. The aquamarine bracelet they crafted has become part of how I show up at work.",
    name: "Chloe T.",
    role: "Marketing Director · CBD",
    element: "Water",
  },
  {
    quote:
      "I've paid five-figure sums to two well-known masters. The Vault gave me a more comprehensive report in 30 seconds — and was right about my 2026 wealth sector. The bracelet is also genuinely museum-grade.",
    name: "David L.",
    role: "Managing Director · Family Office",
    element: "Earth",
  },
  {
    quote:
      "What I love is the transparency. They show you the math behind every recommendation. No mysterious 'because the master said so'. It's how I want to engage with metaphysics in 2026.",
    name: "Aisha R.",
    role: "Product Designer · Telok Ayer",
    element: "Wood",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden border-y border-gold-400/10 bg-midnight">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Founding Members</p>
          <h2 className="heading-display mt-4 text-4xl text-cream md:text-5xl">
            What the first 100 are <span className="text-gold-gradient">saying.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-bone/60">
            We&apos;re in launch phase. These are early reads from our private founding-member
            cohort across Singapore.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="vault-card flex flex-col rounded-sm p-8">
              <Quote />
              <blockquote className="mt-6 text-base leading-relaxed text-bone/85">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between border-t border-gold-400/15 pt-6">
                <div>
                  <p className="font-display text-base text-cream">{q.name}</p>
                  <p className="mt-1 text-xs text-smoke">{q.role}</p>
                </div>
                <span className="rounded-full border border-gold-400/30 px-3 py-1 text-[10px] uppercase tracking-widest text-gold-200">
                  {q.element}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-gold-400/60"
    >
      <path
        d="M10 0v10c0 5.523-4.477 10-10 10v-4c3.314 0 6-2.686 6-6H0V0h10zm18 0v10c0 5.523-4.477 10-10 10v-4c3.314 0 6-2.686 6-6h-6V0h10z"
        fill="currentColor"
      />
    </svg>
  );
}
