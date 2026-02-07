import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of service scaffold for Falcon Five website usage and service requests.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="This is a legal scaffold for Falcon Five. Replace with attorney-reviewed terms before launch."
      />

      <section className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-slate-700 shadow-sm sm:text-base">
        <p>
          Website content is provided for informational purposes. Service availability, response windows,
          and final pricing are confirmed during dispatch and on-site assessment.
        </p>
        <p className="mt-3">
          Placeholder sections to finalize: liability limits, estimates, payment terms, warranties, and
          dispute resolution.
        </p>
      </section>

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Terms of Service",
          description: "Terms scaffold page",
          path: "/terms",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Terms of Service", item: "/terms" },
        ])}
      />
    </>
  );
}
