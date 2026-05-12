import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Noto_Serif_SC } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const hanzi = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanzi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "bazi reading singapore",
    "crystal bracelet singapore",
    "feng shui consultant singapore",
    "ai bazi report",
    "jade bracelet singapore",
    "crystals for wealth",
    "five elements feng shui",
    "personalized crystal matching",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/logo.png", width: 1408, height: 768, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06070D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}#org`,
    name: site.name,
    alternateName: "梁金藏石",
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressRegion: "Singapore",
    },
    areaServed: { "@type": "Country", name: "Singapore" },
    priceRange: "SGD 20 – SGD 800+",
    sameAs: [site.social.instagram, site.social.tiktok],
  };

  return (
    <html lang="en-SG" className={`${display.variable} ${sans.variable} ${hanzi.variable}`}>
      <body className="font-sans">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </body>
    </html>
  );
}
