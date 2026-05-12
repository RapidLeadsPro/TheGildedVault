import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-400/10 bg-obsidian/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="The Gilded Vault home" className="group">
          <LogoMark size={36} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-bone/70 transition-colors hover:text-gold-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/consultations/bazi-reading" className="btn-gold !px-5 !py-2.5 !text-xs">
          Begin Reading
        </Link>
      </div>
    </header>
  );
}
