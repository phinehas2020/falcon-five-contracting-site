import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contractor Services",
  description:
    "Explore Falcon Five service lines: emergency plumbing, air conditioning repair, drain and sewer, water heater service, and general contractor solutions.",
  path: "/services",
  keywords: [
    "emergency plumbing waco",
    "ac repair waco",
    "water heater repair waco",
    "drain cleaning waco tx",
    "general contractor waco",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Directory"
        title="Falcon Five Services"
        description="This SEO scaffold separates each service into its own intent-focused landing page so each page can target stronger local search queries and conversion actions."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">{service.name}</h2>
            <p className="mt-2 text-sm text-slate-700">{service.shortDescription}</p>

            <h3 className="mt-4 text-sm font-black uppercase tracking-wide text-amber-700">
              Common Problems
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {service.commonProblems.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link
              href={`/services/${service.slug}`}
              className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-wide text-white hover:bg-slate-800"
            >
              View Service Page
            </Link>
          </article>
        ))}
      </section>

      <CtaStrip className="mt-10" />

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Services",
          description: "Service directory for Falcon Five emergency and contractor services.",
          path: "/services",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ])}
      />
    </>
  );
}
