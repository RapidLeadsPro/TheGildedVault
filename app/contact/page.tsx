import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Concierge & Atelier",
  description: "Speak to the Vault. Concierge via WhatsApp, atelier appointments, and press enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative pb-24 pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-vault-glow" />
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Speak to the Vault</p>
          <h1 className="heading-display mt-6 text-5xl text-cream md:text-7xl">
            We answer <span className="text-gold-gradient">in person.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-bone/75">
            Our concierge replies within one hour during Singapore business hours, often sooner.
            For master sessions and audits, we recommend a brief intake call first.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-2">
          <a
            href="mailto:vault@thegildedvault.sg"
            className="vault-card group flex flex-col items-center rounded-sm p-10 text-center"
          >
            <p className="eyebrow">Email</p>
            <p className="mt-4 font-display text-2xl text-cream group-hover:text-gold-200">
              vault@thegildedvault.sg
            </p>
            <p className="mt-3 text-sm text-bone/65">Press, partnerships, and bookings.</p>
          </a>

          <a
            href="https://wa.me/6500000000"
            target="_blank"
            rel="noreferrer"
            className="vault-card group flex flex-col items-center rounded-sm p-10 text-center"
          >
            <p className="eyebrow">WhatsApp Concierge</p>
            <p className="mt-4 font-display text-2xl text-cream group-hover:text-gold-200">
              +65 0000 0000
            </p>
            <p className="mt-3 text-sm text-bone/65">Daily, 9am – 9pm SGT.</p>
          </a>
        </div>

        <p className="mt-16 text-center text-xs uppercase tracking-widest text-smoke">
          Atelier by appointment · Tanjong Pagar, Singapore
        </p>
      </div>
    </section>
  );
}
