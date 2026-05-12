import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Shop",
    links: [
      { label: "Wealth Crystals", href: "/shop#wealth" },
      { label: "Protection Crystals", href: "/shop#protection" },
      { label: "Love & Harmony", href: "/shop#love" },
      { label: "Five Elements", href: "/shop#elements" },
    ],
  },
  {
    title: "Consultations",
    links: [
      { label: "AI Bazi Report — SGD 20", href: "/consultations/bazi-reading" },
      { label: "Master Experience — SGD 500", href: "/consultations/premium-master" },
      { label: "Feng Shui Audit", href: "/consultations/feng-shui-audit" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Bazi Guide", href: "/learn" },
      { label: "Crystal Meanings", href: "/learn" },
      { label: "Five Elements", href: "/learn" },
      { label: "Auspicious Dates", href: "/learn" },
    ],
  },
  {
    title: "House",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "The AI Advantage", href: "/about#ai" },
      { label: "Authenticity Guarantee", href: "/about#authenticity" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-gold-400/10 bg-obsidian">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div className="container-tight pb-12 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <LogoMark size={48} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-smoke">
              Singapore&apos;s first AI-powered Bazi reading and premium crystal house. Ancient wisdom,
              computed instantly. Bracelets crafted to your exact elemental chart.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-bone/60 hover:text-gold-300"
              >
                Instagram
              </a>
              <span className="h-3 w-px bg-gold-400/20" />
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-bone/60 hover:text-gold-300"
              >
                TikTok
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <p className="eyebrow mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-bone/70 transition-colors hover:text-gold-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-gold-400/10 pt-8 text-xs text-smoke/70 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} The Gilded Vault (梁金藏石). Crafted in Singapore.
          </p>
          <p className="font-hanzi tracking-[0.35em] text-gold-400/60">
            天 · 地 · 人 · 命 · 运
          </p>
        </div>
      </div>
    </footer>
  );
}
