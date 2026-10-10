import type { MetadataRoute } from "next";
import { SEED_BLOG_ARTICLES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://doraglobalresearch.com";
  const currentDate = new Date().toISOString();

  const coreRoutes = [
    "",
    "/services",
    "/services/primary-research",
    "/services/qualitative-research",
    "/services/quantitative-research",
    "/services/language-solutions",
    "/services/translation",
    "/services/on-site-interpretation",
    "/services/remote-interpretation",
    "/services/transcription",
    "/services/in-language-coding",
    "/services/survey-localization",
    "/industries",
    "/industries/automotives",
    "/industries/energy-utilities",
    "/industries/banking-finance",
    "/industries/food-beverage",
    "/industries/transportation",
    "/industries/media-entertainment",
    "/about",
    "/locations",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = SEED_BLOG_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...blogRoutes];
}
