import type { MetadataRoute } from "next";
import { posts } from "./blog/[slug]/posts";

const baseUrl = "https://www.carebridgehealth.co";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },

  { path: "/treatment-in-turkey", changeFrequency: "weekly", priority: 0.95 },

  { path: "/rhinoplasty-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/revision-rhinoplasty-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/liposuction-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/tummy-tuck-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/breast-augmentation-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/breast-lift-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/facelift-turkey", changeFrequency: "weekly", priority: 0.85 },

  { path: "/hysterectomy-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/myomectomy-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/urinary-incontinence-surgery-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/labiaplasty-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/genital-aesthetic-surgery-turkey", changeFrequency: "weekly", priority: 0.85 },

  { path: "/laser-eye-surgery-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/lasik-eye-surgery-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/cataract-surgery-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/lens-replacement-surgery-turkey", changeFrequency: "weekly", priority: 0.85 },

  { path: "/hair-transplant-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/hair-transplant-cost-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/fue-hair-transplant-turkey", changeFrequency: "weekly", priority: 0.85 },

  { path: "/dental-treatment-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/dental-implants-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/dental-implants-cost-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/veneers-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/dental-veneers-cost-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/hollywood-smile-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/hollywood-smile-cost-turkey", changeFrequency: "weekly", priority: 0.85 },

  { path: "/weight-loss-surgery-turkey", changeFrequency: "weekly", priority: 0.85 },
  { path: "/gastric-sleeve-cost-turkey", changeFrequency: "weekly", priority: 0.85 },

  { path: "/eye-treatment-turkey", changeFrequency: "weekly", priority: 0.85 },

  { path: "/treatment-in-istanbul", changeFrequency: "weekly", priority: 0.9 },
  { path: "/treatment-in-antalya", changeFrequency: "weekly", priority: 0.9 },
  { path: "/treatment-in-istanbul/womens-health", changeFrequency: "weekly", priority: 0.85 },

  { path: "/how-treatment-in-turkey-works", changeFrequency: "weekly", priority: 0.8 },

  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },

  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/partner-application", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticUrls, ...blogUrls];
}