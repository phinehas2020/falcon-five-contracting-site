import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionCard } from "@/components/section-card";
import {
  buildFaqSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { blogPosts, locations, services, siteConfig } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Emergency Plumbing & AC Repair in Waco, TX",
  description:
    "Falcon Five provides 24/7 emergency plumbing, AC repair, and contractor services in Waco, Hewitt, Bellmead, and surrounding communities.",
  path: "/",
  keywords: [
    "emergency plumber waco",
    "24 hour plumber waco tx",
    "ac repair waco tx",
    "emergency ac repair hewitt tx",
    "hvac bellmead tx",
  ],
});

const homepageFaq = [
  {
    question: "What areas does Falcon Five serve?",
    answer:
      "Falcon Five serves Waco, Hewitt, Bellmead, Woodway, Robinson, Lorena, and nearby Central Texas communities.",
  },
  {
    question: "Are emergency plumbing and AC services available 24/7?",
    answer:
      "Yes. Falcon Five runs 24/7 emergency dispatch for urgent plumbing and cooling failures.",
  },
  {
    question: "What are Falcon Five’s core specialties?",
    answer:
      "Emergency plumbing and emergency air conditioning repair are our primary service pillars, supported by broader contractor services.",
  },
  {
    question: "How do I request immediate service?",
    answer:
      `Call ${siteConfig.phoneDisplay} anytime for rapid emergency intake and dispatch routing.`,
  },
];

const trustSignals = [
  "24/7 emergency dispatch workflow",
  "Licensed, insured contractor operations",
  "Repair-first diagnostics to avoid unnecessary replacements",
  "Local area routing for faster arrival windows",
  "Service documentation for warranty and insurance use",
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Central Texas Emergency Contractor"
        title="Falcon Five: Emergency Plumbing & AC Repair in Waco"
        description="Falcon Five is built for urgent response. We handle water and cooling failures first, then execute lasting repairs for homes and businesses across Waco, Hewitt, Bellmead, and surrounding communities."
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-slate-950">24/7</p>
          <p className="mt-1 text-sm text-slate-600">Emergency response availability</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-slate-950">7+</p>
          <p className="mt-1 text-sm text-slate-600">Primary service communities</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-slate-950">2</p>
          <p className="mt-1 text-sm text-slate-600">Core specialties (plumbing + AC)</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-slate-950">1</p>
          <p className="mt-1 text-sm text-slate-600">Call to start service dispatch</p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Core Services</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-slate-950">{service.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex text-sm font-black text-amber-700 hover:text-amber-600"
              >
                Explore {service.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Why Falcon Five is Built to Rank and Convert">
          <p>
            Top local competitors consistently emphasize rapid dispatch, trust markers, city-specific pages,
            and clear emergency CTAs. Falcon Five’s site architecture mirrors those winning patterns while
            keeping content clearer and more focused on intent-based pages.
          </p>
          <ul className="space-y-2">
            {trustSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <p>
            This scaffold is designed for technical SEO first: crawlable routing, indexable service/location
            clusters, schema coverage, and expandable content hubs.
          </p>
        </SectionCard>

        <SectionCard title="Primary Service Areas">
          <p>
            We prioritize coverage for high-intent search demand around Waco and surrounding communities,
            with dedicated location pages for each target market.
          </p>
          <ul className="space-y-2">
            {locations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="font-semibold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-4"
                >
                  {location.city}, {location.region}
                </Link>
                <span className="text-slate-600"> — {location.summary}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>

      <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Content Hub (SEO Topical Authority)
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700 sm:text-base">
          The Insights section is structured for long-tail intent capture: emergency checklists, repair-vs-
          replace decision guides, and city-specific homeowner education topics.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-black/10 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                {post.targetKeyword}
              </p>
              <h3 className="mt-2 text-lg font-black text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-flex text-sm font-black text-slate-900">
                Read outline
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Homeowner FAQs</h2>
        <div className="mt-4 grid gap-3">
          {homepageFaq.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-black/10 bg-slate-50 p-4">
              <summary className="cursor-pointer text-base font-bold text-slate-900">{faq.question}</summary>
              <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaStrip className="mt-10" />

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Home",
          description:
            "Emergency plumbing, AC repair, and contractor services in Waco, Hewitt, Bellmead, and surrounding cities.",
          path: "/",
        })}
      />
      <JsonLd data={buildFaqSchema(homepageFaq)} />
    </>
  );
}
