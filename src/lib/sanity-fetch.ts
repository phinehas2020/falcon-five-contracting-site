import { client } from "@/sanity/lib/client";
import { type ServiceItem, type LocationItem, type BlogPostItem } from "./site-data";
import { groq } from "next-sanity";

// Re-export static data for fallback or progressive migration
export { siteConfig, navLinks } from "./site-data";

export async function getServices(): Promise<ServiceItem[]> {
    return client.fetch(
        groq`*[_type == "service"]{
      "slug": slug.current,
      name,
      shortDescription,
      fullDescription,
      emergencyChecklist,
      commonProblems,
      relatedKeywords,
      faqs,
      "image": image.asset->url
    }`
    );
}

export async function getLocations(): Promise<LocationItem[]> {
    return client.fetch(
        groq`*[_type == "location"]{
      "slug": slug.current,
      city,
      region,
      summary,
      neighborhoods,
      nearby
    }`
    );
}

export async function getBlogPosts(): Promise<BlogPostItem[]> {
    return client.fetch(
        groq`*[_type == "post"]{
      "slug": slug.current,
      title,
      description,
      targetKeyword,
      outline
    }`
    );
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | null> {
    return client.fetch(
        groq`*[_type == "service" && slug.current == $slug][0]{
      "slug": slug.current,
      name,
      shortDescription,
      fullDescription,
      emergencyChecklist,
      commonProblems,
      relatedKeywords,
      faqs,
      "image": image.asset->url
    }`,
        { slug }
    );
}

export async function getLocationBySlug(slug: string): Promise<LocationItem | null> {
    return client.fetch(
        groq`*[_type == "location" && slug.current == $slug][0]{
      "slug": slug.current,
      city,
      region,
      summary,
      neighborhoods,
      nearby
    }`,
        { slug }
    );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
    return client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
      "slug": slug.current,
      title,
      description,
      targetKeyword,
      outline
    }`,
        { slug }
    );
}
