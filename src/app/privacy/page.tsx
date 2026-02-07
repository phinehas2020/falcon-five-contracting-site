import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

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
        description="How we handle your information when you use our website or request service."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl space-y-4 text-sm text-neutral-400 sm:text-base">
            <p>
              Falcon Five may collect contact information submitted through
              website forms and call tracking systems to respond to service
              requests.
            </p>
            <p>
              Placeholder sections to finalize: data retention, cookie policy,
              analytics usage, communication consent, and deletion request
              process.
            </p>
          </div>
        </div>
      </section>

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
