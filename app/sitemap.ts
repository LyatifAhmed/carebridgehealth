import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carebridgehealth.co";
  const now = new Date();

  return [
    // CORE
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // DESTINATIONS (MOST IMPORTANT SEO PAGES)
    {
      url: `${baseUrl}/treatment-in-istanbul`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/treatment-in-antalya`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // TREATMENT SEO PAGE (VERY IMPORTANT)
    {
      url: `${baseUrl}/treatment-in-istanbul/womens-health`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // SUPPORTING PAGES
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/partner-application`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // LEGAL
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}