import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for Falcon Five website usage and service requests.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="The terms that govern use of this website and our services."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl space-y-4 text-sm text-neutral-400 sm:text-base">
            <p>
              Website content is provided for informational purposes. Service
              availability, response windows, and final pricing are confirmed
              during dispatch and on-site assessment.
            </p>
            <p>
              Placeholder sections to finalize: liability limits, estimates,
              payment terms, warranties, and dispute resolution.
            </p>
          </div>
        </div>
      </section>

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Terms of Service",
          description: "Terms of service page",
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
