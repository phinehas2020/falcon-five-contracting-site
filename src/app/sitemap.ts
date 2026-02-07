import type { MetadataRoute } from "next";

import { blogPosts, locations, services, siteConfig } from "@/lib/site-data";

const staticRoutes = [
  "",
  "/services",
  "/locations",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const basePages = staticRoutes.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.75,
  })) satisfies MetadataRoute.Sitemap;

  const servicePages = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  })) satisfies MetadataRoute.Sitemap;

  const locationPages = locations.map((location) => ({
    url: `${siteConfig.siteUrl}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  })) satisfies MetadataRoute.Sitemap;

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  })) satisfies MetadataRoute.Sitemap;

  return [...basePages, ...servicePages, ...locationPages, ...blogPages];
}
