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

export default async function LocationDetailPage({
  params,
}: LocationDetailPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.region}`}
        title={`Emergency Service in ${location.city}`}
        description={`Falcon Five provides emergency plumbing, air conditioning repair, and contractor support throughout ${location.city}. Calls are triaged by urgency and routed for the fastest possible response.`}
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* Main content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  Coverage in {location.city}
                </h2>
                <p className="mt-4 text-neutral-400">{location.summary}</p>
              </div>

              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  Neighborhoods We Serve
                </h2>
                <ul className="mt-5 space-y-3">
                  {location.neighborhoods.map((neighborhood) => (
                    <li
                      key={neighborhood}
                      className="flex items-start gap-3 text-neutral-400"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  Emergency Response
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "Active leaks and burst pipe containment",
                    "No-cooling and unsafe indoor temperature response",
                    "Main line drain and sewer interruption triage",
                    "Critical plumbing and mechanical repair coordination",
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

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="border border-rule bg-surface-raised p-6 sm:p-8">
                <h2 className="text-xl text-white sm:text-2xl">
                  Available Services
                </h2>
                <ul className="mt-5 space-y-3">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm font-medium text-neutral-400 transition-colors hover:text-gold"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-rule bg-surface-raised p-6 sm:p-8">
                <h2 className="text-xl text-white sm:text-2xl">
                  Nearby Communities
                </h2>
                <p className="mt-4 text-sm text-neutral-400">
                  {location.nearby.join(" / ")}
                </p>
                <Link
                  href="/locations"
                  className="mt-4 inline-flex text-sm font-bold text-gold transition-colors hover:text-gold-bright"
                >
                  All locations
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaStrip
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
          {
            name: `${location.city}, ${location.region}`,
            item: `/locations/${location.slug}`,
          },
        ])}
      />
    </>
  );
}
