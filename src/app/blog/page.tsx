import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { blogPosts } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Falcon Five educational content hub targeting emergency plumbing and HVAC homeowner intent across Waco, Hewitt, and Bellmead.",
  path: "/blog",
  keywords: [
    "waco plumbing tips",
    "ac repair advice waco",
    "hewitt hvac guide",
    "bellmead plumbing checklist",
  ],
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Topical Authority Hub"
        title="Falcon Five Insights"
        description="These pages are structured for organic search growth: each article targets one high-intent keyword cluster and links to the matching service and location pages."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-wide text-amber-700">
              {post.targetKeyword}
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-wide text-white hover:bg-slate-800"
            >
              View Scaffold
            </Link>
          </article>
        ))}
      </section>

      <CtaStrip className="mt-10" />

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Insights",
          description: "Educational content and search-intent blog architecture for Falcon Five.",
          path: "/blog",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Insights", item: "/blog" },
        ])}
      />
    </>
  );
}
