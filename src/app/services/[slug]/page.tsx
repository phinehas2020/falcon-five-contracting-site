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
import { getServiceBySlug, services } from "@/lib/site-data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Service Detail"
        title={`${service.name} in Waco & Surrounding Areas`}
        description={service.fullDescription}
      />

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="space-y-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-2xl font-black text-slate-950">What We Handle</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
              {service.commonProblems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-950">Emergency Checklist</h2>
            <ol className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
              {service.emergencyChecklist.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-950">FAQ</h2>
            <div className="mt-3 space-y-3">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-black/10 bg-slate-50 p-4">
                  <summary className="cursor-pointer text-base font-bold text-slate-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Target Keywords</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {service.relatedKeywords.map((keyword) => (
                <li key={keyword} className="rounded-lg bg-slate-100 px-3 py-2">
                  {keyword}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Explore More Services</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {services
                .filter((entry) => entry.slug !== service.slug)
                .map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      href={`/services/${entry.slug}`}
                      className="font-semibold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-4"
                    >
                      {entry.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </aside>
      </section>

      <CtaStrip className="mt-10" />

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
