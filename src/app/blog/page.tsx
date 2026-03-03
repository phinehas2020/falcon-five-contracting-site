import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { LinkHub } from "@/components/link-hub";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import {
  locationDirectoryLinks,
  serviceDirectoryLinks,
} from "@/lib/site-data";
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
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase text-gold">
                Top priorities
              </p>
              <h2 className="mt-4 text-3xl text-white sm:text-4xl">
                What homeowners should know first
              </h2>
              <p className="mt-4 max-w-xl text-neutral-400">
                Central Texas emergencies are usually a sequence: identify risk,
                reduce exposure, and then call for dispatch with the right facts.
                These articles focus on practical actions, not generic advice.
              </p>
              <div className="mt-8 space-y-3 text-sm text-neutral-400">
                {[
                  "How to describe symptoms so technicians arrive preloaded with the right parts.",
                  "What to do before first arrival for leak and heating/cooling emergencies.",
                  "When replacement is usually a better choice than repeated repair.",
                ].map((item) => (
                  <p key={item} className="leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
            <LinkHub
              title="Start by matching your city"
              description="If you are in one of these service areas, cross-check local context first."
              links={locationDirectoryLinks.slice(0, 4)}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase text-gold">
                Latest articles
              </p>
              <h2 className="mt-4 text-4xl text-white sm:text-5xl">
                Read. Decide. Protect your home.
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-bold text-neutral-400 transition-colors hover:text-gold sm:block"
            >
              Browse services
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-surface p-6 sm:p-8"
              >
                <p className="text-xs font-bold uppercase text-gold/60">
                  {post.targetKeyword}
                </p>
                <h3 className="mt-3 text-xl text-white transition-colors group-hover:text-gold sm:text-2xl">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-neutral-500">
                  {post.description}
                </p>
              </article>
            ))}
          </div>

          <LinkHub
            className="mt-10"
            title="Need to move beyond reading?"
            description="Explore service-specific pages for checklists, dispatch details, and FAQs."
            links={serviceDirectoryLinks}
          />
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
