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
                    <span
                      className="mt-1.5 block size-1.5 shrink-0 bg-gold"
                      aria-hidden="true"
                    />
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
                    <span
                      className="mt-1.5 block size-1.5 shrink-0 bg-gold"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div>
            <h2 className="text-2xl text-white sm:text-3xl">
              Local-first service model
            </h2>
            <p className="mt-4 max-w-3xl text-neutral-400">
              The way Falcon Five works is shaped by Central Texas demand cycles:
              heat spikes in summer, freezes from rapid temperature swings, and
              aging home infrastructure in established neighborhoods. We build the
              same playbook for every city we cover, but every dispatch can look
              different by property type and urgency.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border border-rule bg-surface p-6 sm:p-8">
              <h3 className="text-xl text-white sm:text-2xl">Service Priorities</h3>
              <ul className="mt-5 space-y-3 text-sm text-neutral-400">
                {[
                  "Fast intake triage before recommendations or pricing talk.",
                  "Issue containment for water, safety, and temperature risk first.",
                  "Clear sequencing from diagnosis to closeout, with documentation.",
                  "Follow-up guidance so maintenance lowers recurrence.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 block size-1.5 shrink-0 bg-gold"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-rule bg-surface p-6 sm:p-8">
              <h3 className="text-xl text-white sm:text-2xl">What “Done” Means</h3>
              <p className="mt-4 text-sm text-neutral-400">
                A job is done when the home is safe, the immediate issue is
                stabilized, and the next decision is clear. Whether it&apos;s Waco in
                summer heat or Bellmead in shoulder-season emergencies, we keep
                the same priorities: reduce risk, keep costs predictable, and keep
                communication clear.
              </p>
              <p className="mt-3 text-sm text-neutral-400">
                If you are reading this from another city, we still use the same
                team structure, but some service windows and response paths differ.
                Use local area pages to verify routing and scope notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LinkHub
        title="Explore Service Areas We Cover"
        description="Use these pages to verify emergency lead times, local scope, and city-specific details before contacting dispatch."
        links={locationDirectoryLinks.slice(0, 5)}
      />

      <LinkHub
        title="Choose Your Required Service"
        description="Each service page includes common scenarios, emergency checklists, FAQs, and related city guidance."
        links={serviceDirectoryLinks}
      />

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
