import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy scaffold for Falcon Five website and lead intake forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="This is a legal scaffold for Falcon Five. Replace with attorney-reviewed policy language before production launch."
      />

      <section className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-slate-700 shadow-sm sm:text-base">
        <p>
          Falcon Five may collect contact information submitted through website forms and call tracking
          systems to respond to service requests.
        </p>
        <p className="mt-3">
          Placeholder sections to finalize: data retention, cookie policy, analytics usage, communication
          consent, and deletion request process.
        </p>
      </section>

      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Privacy Policy",
          description: "Privacy policy scaffold page",
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
