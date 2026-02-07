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
        eyebrow="Services"
        title="What We Do"
        description="Emergency plumbing, AC repair, water heaters, drains, and general contracting. Every service built around one thing: getting there fast and fixing it right."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="divide-y divide-rule">
            {services.map((service, index) => (
              <article key={service.slug} className="py-10 sm:py-14">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                  <div className="lg:flex-1">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-neutral-700">
                        0{index + 1}
                      </span>
                      <h2 className="text-3xl text-white sm:text-4xl">
                        {service.name}
                      </h2>
                    </div>
                    <p className="mt-4 max-w-xl text-neutral-400">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="lg:w-80">
                    <p className="text-xs font-bold uppercase text-gold">
                      Common Problems
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.commonProblems.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-neutral-400"
                        >
                          <span className="mt-1.5 block size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex bg-surface-raised px-5 py-2.5 text-sm font-bold text-white transition-colors hover:text-gold"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Services",
          description:
            "Service directory for Falcon Five emergency and contractor services.",
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
