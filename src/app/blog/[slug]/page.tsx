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
import { blogPosts, getBlogPostBySlug } from "@/lib/site-data";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
        eyebrow="SEO Content Scaffold"
        title={post.title}
        description={post.description}
      />

      <article className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Primary Keyword Target</h2>
          <p className="mt-3 text-base font-semibold text-amber-700">{post.targetKeyword}</p>

          <h2 className="mt-6 text-2xl font-black text-slate-950">Suggested Outline</h2>
          <ol className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
            {post.outline.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>

          <h2 className="mt-6 text-2xl font-black text-slate-950">Internal Linking Targets</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
            <li>
              Link to <Link href="/services/emergency-plumbing" className="font-bold text-slate-900">Emergency Plumbing</Link>
            </li>
            <li>
              Link to <Link href="/services/air-conditioning-repair" className="font-bold text-slate-900">Air Conditioning Repair</Link>
            </li>
            <li>
              Link to <Link href="/locations/waco-tx" className="font-bold text-slate-900">Waco City Page</Link>
            </li>
          </ul>
        </section>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Production Notes</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Target 1,200–1,800 words per article for topical depth.</li>
              <li>Use custom photos from real jobs when available.</li>
              <li>Embed FAQ sections based on field questions.</li>
              <li>Add clear emergency CTA blocks every 300–400 words.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">More Articles</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {blogPosts
                .filter((entry) => entry.slug !== post.slug)
                .map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      href={`/blog/${entry.slug}`}
                      className="font-semibold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-4"
                    >
                      {entry.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </aside>
      </article>

      <CtaStrip className="mt-10" />

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
