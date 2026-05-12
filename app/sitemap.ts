import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/shop",
    "/consultations",
    "/consultations/bazi-reading",
    "/consultations/premium-master",
    "/consultations/feng-shui-audit",
    "/learn",
    "/about",
    "/contact",
  ];

  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1.0 : r.startsWith("/consultations/bazi-reading") ? 0.9 : 0.7,
  }));
}
