import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaStrip } from "@/components/cta-strip";
import { LinkHub } from "@/components/link-hub";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import {
  getBlogPostBySlug,
  getBlogPosts,
  getLocations,
  getServices,
} from "@/lib/sanity-fetch";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      description: "Requested article was not found.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.targetKeyword, "falcon five insights"],
  });
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  const blogPosts = await getBlogPosts();
  const services = await getServices();
  const locations = await getLocations();

  if (!post) {
    notFound();
  }

  const keyword = post.targetKeyword.toLowerCase();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "Falcon Five",
    },
    publisher: {
      "@type": "Organization",
      name: "Falcon Five",
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  const localServices = services.filter((service) =>
    service.name.toLowerCase().split(" ").some((word) => word.length > 4 && keyword.includes(word)),
  );

  const localLocations = locations.filter((location) =>
    keyword.includes(location.city.toLowerCase()),
  );

  const serviceLinks = (localServices.length ? localServices : services).slice(0, 3).map((service) => ({
    href: `/services/${service.slug}`,
    label: service.name,
    summary: service.shortDescription,
  }));

  const locationLinks = (localLocations.length ? localLocations : locations).slice(0, 3).map((location) => ({
    href: `/locations/${location.slug}`,
    label: `${location.city}, ${location.region}`,
    summary: location.summary,
  }));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={post.title}
        description={post.description}
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* Main content */}
            <div className="space-y-10">
              <div>
                <p className="text-xs font-bold uppercase text-gold">
                  Primary Keyword
                </p>
                <p className="mt-2 text-lg font-bold text-white">
                  {post.targetKeyword}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  Article context for local homeowners
                </h2>
                <p className="mt-4 text-neutral-400">
                  If this issue is happening today, focus on the two-step rule:
                  reduce immediate risk, then secure accurate job details for
                  dispatch. We use this approach across all service pages so you
                  can be clear about what happened and what help is needed.
                </p>
                <p className="mt-3 text-neutral-400">
                  The outline below follows the same order we use in field
                  dispatch:
                </p>
                <ol className="mt-5 space-y-3">
                  {post.outline.map((line, i) => (
                    <li
                      key={line}
                      className="flex items-start gap-4 text-neutral-400"
                    >
                      <span className="font-display text-2xl text-gold/40">
                        {i + 1}
                      </span>
                      <span className="pt-1">{line}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <LinkHub
                title="Related services to review"
                description="Review these service pages for actionable checklists and city-level availability."
                links={serviceLinks}
              />

              <LinkHub
                title="Related service areas"
                description="If location is part of the issue context, verify response language and nearby communities."
                links={locationLinks}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="border border-rule bg-surface-raised p-6 sm:p-8">
                <h2 className="text-xl text-white sm:text-2xl">
                  More Articles
                </h2>
                <ul className="mt-5 space-y-3">
                  {blogPosts
                    .filter((entry) => entry.slug !== post.slug)
                    .map((entry) => (
                      <li key={entry.slug}>
                        <Link
                          href={`/blog/${entry.slug}`}
                          className="text-sm font-medium text-neutral-400 transition-colors hover:text-gold"
                        >
                          {entry.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: `${post.title} | Falcon Five Insights`,
          description: post.description,
          path: `/blog/${post.slug}`,
        })}
      />
      <JsonLd data={articleSchema} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Insights", item: "/blog" },
          { name: post.title, item: `/blog/${post.slug}` },
        ])}
      />
    </>
  );
}
