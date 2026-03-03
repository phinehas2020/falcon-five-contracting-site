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
import {
  getLocationBySlug,
  getLocations,
  getServices,
} from "@/lib/sanity-fetch";

type LocationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);

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
  const location = await getLocationBySlug(slug);
  const locations = await getLocations();
  const services = await getServices();

  if (!location) {
    notFound();
  }

  const nearbyLinks = locations
    .filter((entry) => location.nearby.includes(entry.city))
    .filter((entry) => entry.slug !== location.slug)
    .map((entry) => ({
      href: `/locations/${entry.slug}`,
      label: `${entry.city}, ${entry.region}`,
      summary: entry.summary,
    }));

  const nearbyFallback = nearbyLinks.length
    ? nearbyLinks
    : locations
        .filter((entry) => entry.slug !== location.slug)
        .slice(0, 3)
        .map((entry) => ({
          href: `/locations/${entry.slug}`,
          label: `${entry.city}, ${entry.region}`,
          summary: entry.summary,
        }));

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
                <p className="mt-4 text-sm text-neutral-400">
                  This page uses city-specific routing language and local guidance
                  so you can confirm if your property and issue match our normal
                  emergency response pattern.
                </p>
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
                      <span
                        className="mt-1.5 block size-1.5 shrink-0 bg-gold"
                        aria-hidden="true"
                      />
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  Emergency Response Checklist
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "Confirm property access and parking notes before technician dispatch.",
                    "Document whether a hot-water shortage or no-cooling issue is affecting tenants.",
                    "Keep utility shutoff and breaker access points visible.",
                    "Call and provide photos only if it is safe to do so.",
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
                <ul className="mt-5 space-y-3">
                  {nearbyFallback.map((entry) => (
                    <li key={entry.href}>
                      <Link
                        href={entry.href}
                        className="text-sm text-neutral-400 transition-colors hover:text-gold"
                      >
                        {entry.label}
                      </Link>
                    </li>
                  ))}
                </ul>
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
