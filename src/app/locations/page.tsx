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
import { serviceDirectoryLinks } from "@/lib/site-data";
import { getLocations } from "@/lib/sanity-fetch";

export const metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Falcon Five serves Waco, Hewitt, Bellmead, and nearby communities with emergency plumbing, AC repair, and general contractor services.",
  path: "/locations",
  keywords: [
    "plumber waco tx",
    "ac repair hewitt",
    "bellmead plumbing",
    "service area hvac waco",
  ],
});

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Where We Work"
        description="Emergency dispatch routing across Central Texas. Every community gets the same speed, the same standard, and the same team."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-surface p-6 transition-colors hover:bg-surface-raised sm:p-8"
              >
                <h2 className="text-2xl text-white transition-colors group-hover:text-gold sm:text-3xl">
                  {location.city}
                </h2>
                <p className="mt-1 text-xs font-bold uppercase text-neutral-600">
                  {location.region}
                </p>
                <p className="mt-3 text-sm text-neutral-500">
                  {location.summary}
                </p>
                <p className="mt-4 text-xs text-neutral-600">
                  Nearby: {location.nearby.join(", ")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white sm:text-4xl">Why local routing matters</h2>
          <p className="mt-4 max-w-3xl text-sm text-neutral-400 sm:text-base">
            Service timing is heavily influenced by dispatch distance, call
            patterns, and common outage risks. Waco-area jobs, especially AC
            failures and water leaks, are routed with response time priority over
            non-emergency scheduling.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Plumbing triage first for active leaks and flood-risk incidents.",
              "AC failures in heat events get immediate mechanical and safety checks.",
              "Water heater events are routed when hot-water loss impacts daily operations.",
              "Property access and gate notes reduce on-site delays and reroutes.",
            ].map((item) => (
              <div key={item} className="border border-rule bg-surface p-4 sm:p-5">
                <p className="text-sm text-neutral-300">{item}</p>
              </div>
            ))}
          </div>
          <LinkHub
            className="mt-10"
            title="Explore services tied to each area"
            description="Service pages include emergency checklists, common problems, and FAQs."
            links={serviceDirectoryLinks}
          />
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Service Areas",
          description:
            "Service area coverage for Falcon Five across Waco and surrounding Central Texas communities.",
          path: "/locations",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Locations", item: "/locations" },
        ])}
      />
    </>
  );
}
