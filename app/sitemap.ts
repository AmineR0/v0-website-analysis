import type { MetadataRoute } from "next"
import { guides } from "@/lib/guides"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bacresultat.com"

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl + "/",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...corePages, ...guidePages]
}
