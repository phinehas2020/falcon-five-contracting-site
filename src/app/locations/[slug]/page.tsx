import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { getLocationBySlug, locations, services } from "@/lib/site-data";

type LocationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return buildMetadata({
      title: "Location Not Found",
      description: "Requested location page was not found.",
      path: `/locations/${slug}`,
    });
  }

  return buildMetadata({
    title: `${location.city}, ${location.region} Emergency Plumbing & AC Repair`,
    description: `Falcon Five emergency plumbing and AC service coverage for ${location.city}, ${location.region}. ${location.summary}`,
    path: `/locations/${location.slug}`,
    keywords: [
      `emergency plumber ${location.city.toLowerCase()} tx`,
      `ac repair ${location.city.toLowerCase()} tx`,
      `${location.city.toLowerCase()} contractor services`,
    ],
  });
}

export default async function LocationDetailPage({ params }: LocationDetailPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Local Market Page"
        title={`${location.city}, ${location.region} Emergency Service`}
        description={`Falcon Five provides emergency plumbing, air conditioning repair, and broader contractor support throughout ${location.city}. Calls are triaged by urgency and routed for the fastest possible response window.`}
      />

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="space-y-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-2xl font-black text-slate-950">
              Service Coverage in {location.city}
            </h2>
            <p className="mt-3 text-sm text-slate-700 sm:text-base">{location.summary}</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-950">Neighborhood Focus</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
              {location.neighborhoods.map((neighborhood) => (
                <li key={neighborhood}>{neighborhood}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-950">Emergency Response Scope</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
              <li>Active leaks and burst pipe containment</li>
              <li>No-cooling and unsafe indoor temperature response</li>
              <li>Main line drain and sewer interruption triage</li>
              <li>Critical plumbing + mechanical repair coordination</li>
            </ul>
          </div>
        </article>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Available Services</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-semibold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-4"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Nearby Communities</h2>
            <p className="mt-3 text-sm text-slate-700">{location.nearby.join(" • ")}</p>
            <Link
              href="/locations"
              className="mt-4 inline-flex text-sm font-black text-amber-700 hover:text-amber-600"
            >
              Explore all locations
            </Link>
          </section>
        </aside>
      </section>

      <CtaStrip
        className="mt-10"
        title={`Need emergency help in ${location.city}?`}
        description={`Call Falcon Five for 24/7 dispatch coverage in ${location.city}, ${location.region}.`}
      />

      <JsonLd
        data={buildWebPageSchema({
          name: `${location.city}, ${location.region} Service Area | Falcon Five`,
          description: location.summary,
          path: `/locations/${location.slug}`,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Locations", item: "/locations" },
          { name: `${location.city}, ${location.region}`, item: `/locations/${location.slug}` },
        ])}
      />
    </>
  );
}
