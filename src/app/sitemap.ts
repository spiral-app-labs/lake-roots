import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lake-roots.vercel.app";
  const pages = ["", "/menu", "/beverages", "/market", "/events", "/our-story"];
  return pages.map((page) => ({
    url: `${base}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}
