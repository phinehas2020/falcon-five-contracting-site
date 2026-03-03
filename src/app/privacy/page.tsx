import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { LinkHub } from "@/components/link-hub";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { locationDirectoryLinks } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the Falcon Five website and service request forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we handle your information when you request service in Central Texas."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="space-y-5 max-w-3xl text-sm text-neutral-400 sm:text-base">
            <p>
              Falcon Five collects contact information you submit through forms or
              call workflows so the dispatch team can route and respond to
              emergencies quickly.
            </p>
            <p>
              We store service-request details only as needed for operations,
              dispatch coordination, invoicing, and follow-up. We do not sell
              your data to third parties.
            </p>
            <p>
              If your submission includes photos or notes from a home, those
              records support diagnostics and job documentation. You can request
              updates or corrections in writing.
            </p>
          </div>

          <div className="mt-10 max-w-3xl space-y-5 text-sm text-neutral-400 sm:text-base">
            <h2 className="text-2xl text-white sm:text-3xl">
              Data Handling and Safety
            </h2>
            <ul className="space-y-4">
              {[
                "Contact and service-intent data is used for routing and response planning.",
                "Data retention follows operational need and legal requirements.",
                "Call recordings or notes are kept for quality and safety review.",
                "You can request deletion of non-essential data after resolution.",
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
              title="Privacy-relevant support pages"
              description="These pages help you prepare service details before submitting forms or calling for dispatch."
              links={locationDirectoryLinks.slice(0, 5)}
            />
          </div>
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Privacy Policy",
          description: "Privacy policy page",
          path: "/privacy",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Privacy Policy", item: "/privacy" },
        ])}
      />
    </>
  );
}
