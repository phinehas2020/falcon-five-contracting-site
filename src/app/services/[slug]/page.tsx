import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo";
import { getServiceBySlug, getServices } from "@/lib/sanity-fetch";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "Requested service page was not found.",
      path: `/services/${slug}`,
    });
  }

  return buildMetadata({
    title: `${service.name} in Waco, Hewitt & Bellmead`,
    description: `${service.shortDescription} ${service.fullDescription}`,
    path: `/services/${service.slug}`,
    keywords: service.relatedKeywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const services = await getServices(); // Fetch all services for the sidebar

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={`${service.name} in Waco & Surrounding Areas`}
        description={service.fullDescription}
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* Main content */}
            <div className="space-y-12">
              {service.image && (
                <div className="overflow-hidden border border-rule">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  What We Handle
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.commonProblems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-3 text-neutral-400"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-white sm:text-3xl">
                  Emergency Checklist
                </h2>
                <ol className="mt-5 space-y-3">
                  {service.emergencyChecklist.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 text-neutral-400"
                    >
                      <span className="font-display text-2xl text-gold/40">
                        {i + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl text-white sm:text-3xl">FAQ</h2>
                <div className="mt-5 divide-y divide-rule">
                  {service.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group py-5 first:pt-0 last:pb-0"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-white">
                        {faq.question}
                        <span className="shrink-0 font-display text-xl text-neutral-600 transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 max-w-xl text-sm text-neutral-400">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="border border-rule bg-surface-raised p-6 sm:p-8">
                <h2 className="text-xl text-white sm:text-2xl">
                  More Services
                </h2>
                <ul className="mt-5 space-y-3">
                  {services
                    .filter((entry) => entry.slug !== service.slug)
                    .map((entry) => (
                      <li key={entry.slug}>
                        <Link
                          href={`/services/${entry.slug}`}
                          className="text-sm font-medium text-neutral-400 transition-colors hover:text-gold"
                        >
                          {entry.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: `${service.name} | Falcon Five`,
          description: service.shortDescription,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd
        data={buildServiceSchema({
          name: service.name,
          description: service.fullDescription,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd data={buildFaqSchema(service.faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: service.name, item: `/services/${service.slug}` },
        ])}
      />
    </>
  );
}
