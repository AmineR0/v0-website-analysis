import type { MetadataRoute } from "next"
import { guides } from "@/lib/guides"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bacresultat.com"
  const lastModified = new Date()

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...corePages, ...guidePages]
}
