import type { MetadataRoute } from "next";

import { getBlogPosts, getLocations, getServices, siteConfig } from "@/lib/sanity-fetch";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const [services, locations, blogPosts] = await Promise.all([
    getServices(),
    getLocations(),
    getBlogPosts()
  ]);

  const basePages = staticRoutes.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.75,
  })) satisfies MetadataRoute.Sitemap;

  const servicePages = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationPages = locations.map((location) => ({
    url: `${siteConfig.siteUrl}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...basePages, ...servicePages, ...locationPages, ...blogPages];
}
