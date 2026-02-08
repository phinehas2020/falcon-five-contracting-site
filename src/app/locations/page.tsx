import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
  buildWebPageSchema,
} from "@/lib/seo";
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
