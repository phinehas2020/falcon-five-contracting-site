import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn how Falcon Five approaches emergency plumbing, AC repair, and contractor reliability across Central Texas.",
  path: "/about",
  keywords: [
    "about falcon five",
    "waco emergency contractor",
    "local plumbing and hvac company",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for Urgent Action"
        description="Falcon Five exists for one reason: when something breaks, someone needs to show up fast and fix it right. That's the whole pitch."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl text-white sm:text-3xl">
                How We Operate
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Rapid intake triage — we assess severity and safety risk on the first call.",
                  "Local routing — Waco-area dispatch means faster arrival, not a tech driving from three counties away.",
                  "Diagnostics first — we find the problem before we start selling you solutions.",
                  "Clear communication — you know what's happening, what it costs, and when it's done.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-400"
                  >
                    <span className="mt-1.5 block size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white sm:text-3xl">
                What Makes Us Different
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Emergency plumbing and AC are our core — not side gigs we do between remodels.",
                  "City-specific support across Waco, Hewitt, Bellmead, and beyond.",
                  "We carry the licenses, insurance, and documentation your adjuster actually needs.",
                  "No upsells, no scare tactics. Just honest work.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-400"
                  >
                    <span className="mt-1.5 block size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: "About Falcon Five",
          description:
            "Company information and operating principles for Falcon Five emergency and contractor services.",
          path: "/about",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ])}
      />
    </>
  );
}
