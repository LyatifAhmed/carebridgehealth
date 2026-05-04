import type { MetadataRoute } from "next";

const baseUrl = "https://www.carebridgehealth.co";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/treatment-in-turkey", changeFrequency: "weekly", priority: 0.95 },
  { path: "/treatment-in-istanbul", changeFrequency: "weekly", priority: 0.95 },
  { path: "/treatment-in-antalya", changeFrequency: "weekly", priority: 0.95 },

  { path: "/hair-transplant-turkey", changeFrequency: "weekly", priority: 0.9 },
  { path: "/dental-treatment-turkey", changeFrequency: "weekly", priority: 0.9 },
  { path: "/cosmetic-surgery-turkey", changeFrequency: "weekly", priority: 0.9 },
  { path: "/weight-loss-surgery-turkey", changeFrequency: "weekly", priority: 0.9 },
  { path: "/eye-treatment-turkey", changeFrequency: "weekly", priority: 0.9 },

  {
    path: "/treatment-in-istanbul/womens-health",
    changeFrequency: "weekly",
    priority: 0.85,
  },

  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  {
    path: "/blog/is-treatment-in-turkey-safe-for-uk-patients",
    changeFrequency: "weekly",
    priority: 0.75,
  },
  {
    path: "/blog/istanbul-or-antalya-for-treatment-in-turkey",
    changeFrequency: "weekly",
    priority: 0.75,
  },
  {
    path: "/blog/how-to-choose-a-clinic-in-turkey",
    changeFrequency: "weekly",
    priority: 0.75,
  },

  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/partner-application", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}