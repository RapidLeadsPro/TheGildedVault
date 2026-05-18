"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo-mark";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-400/15 bg-obsidian/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="The Gilded Vault home" className="group">
          <LogoMark size={36} />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-xs font-medium uppercase tracking-[0.22em] text-bone/70 transition-colors hover:text-gold-200"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/consultations/bazi-reading"
            className="btn-gold !px-5 !py-2.5 !text-[10px]"
          >
            Begin Reading
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/30 text-gold-200 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <nav className="border-t border-gold-400/15 bg-obsidian/95 backdrop-blur-xl">
            <ul className="container-tight flex flex-col gap-1 py-6">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl text-cream hover:text-gold-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
