import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { getBlogPosts } from "@/lib/sanity-fetch";

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

export default async function BlogIndexPage() {
  const blogPosts = await getBlogPosts();
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Knowledge Is Leverage"
        description="Emergency checklists, repair-vs-replace guides, and homeowner education from the field. Know more, spend less."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-surface p-6 sm:p-8"
              >
                <p className="text-xs font-bold uppercase text-gold/60">
                  {post.targetKeyword}
                </p>
                <h2 className="mt-3 text-xl text-white transition-colors group-hover:text-gold sm:text-2xl">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-sm text-neutral-500">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex text-sm font-bold text-neutral-400 transition-colors hover:text-gold"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Insights",
          description:
            "Educational content and search-intent blog architecture for Falcon Five.",
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
