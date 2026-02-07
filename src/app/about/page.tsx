import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn how Falcon Five approaches emergency plumbing, AC repair, and contractor reliability across Central Texas.",
  path: "/about",
  keywords: [
    "about falcon five",
    "waco emergency contractor",
    "local plumbing and hvac company",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Falcon Five"
        description="Falcon Five is structured around one promise: urgent problems get urgent action. We prioritize emergency plumbing and emergency AC repair, supported by broader contractor services that keep properties safe and operational."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Our Operating Model</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 sm:text-base">
            <li>Rapid intake triage for emergency severity and safety risk.</li>
            <li>Local service routing for Waco-area dispatch speed.</li>
            <li>Diagnostics-first execution before costly replacements.</li>
            <li>Clear scope and communication for every phase of work.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">What Makes Falcon Five Different</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 sm:text-base">
            <li>Primary focus on emergency plumbing and AC response.</li>
            <li>City-specific support across Waco, Hewitt, and Bellmead.</li>
            <li>Expandability for broader general contractor projects.</li>
            <li>SEO-first digital structure designed for sustained ranking growth.</li>
          </ul>
        </article>
      </section>

      <CtaStrip className="mt-10" />

      <JsonLd
        data={buildWebPageSchema({
          name: "About Falcon Five",
          description:
            "Company information and operating principles for Falcon Five emergency and contractor services.",
          path: "/about",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ])}
      />
    </>
  );
}
