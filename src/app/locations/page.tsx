import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { locations } from "@/lib/site-data";

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

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Falcon Five Service Areas"
        description="Each city page is structured to target local-intent searches and give customers clear, city-specific context for emergency dispatch coverage."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {locations.map((location) => (
          <article key={location.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">
              {location.city}, {location.region}
            </h2>
            <p className="mt-2 text-sm text-slate-700">{location.summary}</p>

            <h3 className="mt-4 text-xs font-black uppercase tracking-wide text-amber-700">Nearby</h3>
            <p className="mt-2 text-sm text-slate-600">{location.nearby.join(" • ")}</p>

            <Link
              href={`/locations/${location.slug}`}
              className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-wide text-white hover:bg-slate-800"
            >
              View {location.city} Page
            </Link>
          </article>
        ))}
      </section>

      <CtaStrip className="mt-10" />

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
