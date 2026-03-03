import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { LinkHub } from "@/components/link-hub";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { serviceDirectoryLinks } from "@/lib/site-data";

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
        description="How requests, dispatch, estimates, and service outcomes are managed."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="space-y-5 max-w-3xl text-sm text-neutral-400 sm:text-base">
            <p>
              These terms apply to use of this site and all service requests made
              through call, form, or message.
            </p>
            <p>
              Falcon Five confirms scope, safety risk, and estimated timing after
              intake. Emergency conditions are handled with higher urgency, while
              routine appointments may be scheduled when required permits,
              accessibility, and coordination are confirmed.
            </p>
            <p>
              Content on the site is educational and operational; service
              availability, pricing, and final execution details are validated at
              dispatch and confirmed with the property owner or authorized
              representative.
            </p>
          </div>

          <div className="mt-10 max-w-3xl space-y-6 text-sm text-neutral-400 sm:text-base">
            <h2 className="text-2xl text-white">Service Scope and Liability</h2>
            <ul className="space-y-4">
              {[
                "Scope is defined before diagnostic and repair actions begin.",
                "If conditions change during service, revised scope and cost impact are explained before continuation.",
                "Emergency repairs may use temporary containment actions to reduce damage before full remediation.",
                "Warranty terms are shared in writing whenever material or major replacement work is agreed.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 block size-1.5 shrink-0 bg-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <LinkHub
              title="Services Mentioned in These Terms"
              description="Review what’s covered in each major service category before scheduling."
              links={serviceDirectoryLinks}
            />
          </div>
        </div>
      </section>

      <CtaStrip />

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
