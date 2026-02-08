import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/sanity-fetch";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug }));
}

params,
}: BlogDetailPageProps): Promise < Metadata > {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if(!post) {
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
  const blogPosts = await getBlogPosts(); // Fetch all posts for sidebar

  if (!post) {
    notFound();
  }

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

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={post.title}
        description={post.description}
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
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
                  Article Outline
                </h2>
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

              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  Internal Links
                </h2>
                <ul className="mt-5 space-y-3">
                  <li>
                    <Link
                      href="/services/emergency-plumbing"
                      className="text-sm font-medium text-neutral-400 transition-colors hover:text-gold"
                    >
                      Emergency Plumbing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/air-conditioning-repair"
                      className="text-sm font-medium text-neutral-400 transition-colors hover:text-gold"
                    >
                      Air Conditioning Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/waco-tx"
                      className="text-sm font-medium text-neutral-400 transition-colors hover:text-gold"
                    >
                      Waco, TX Service Area
                    </Link>
                  </li>
                </ul>
              </div>
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
