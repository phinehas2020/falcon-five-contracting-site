import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Request emergency plumbing, AC repair, or contractor service from Falcon Five in Waco, Hewitt, Bellmead, and surrounding areas.",
  path: "/contact",
  keywords: [
    "contact emergency plumber waco",
    "ac repair service request waco",
    "falcon five phone number",
  ],
});

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Falcon Five Contact",
    description: "Contact and service request page for Falcon Five",
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.businessName,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
    },
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Service"
        description="Use this page as the primary conversion endpoint for calls and form submissions. Keep phone CTA visible and prioritize emergency intake details in the form."
      />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Emergency Dispatch</h2>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            For active leaks, no-cooling emergencies, and urgent contractor calls, use phone dispatch for
            fastest triage.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-5 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-amber-300"
          >
            Call {siteConfig.phoneDisplay}
          </a>

          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p>
              <span className="font-bold">Email:</span> {siteConfig.email}
            </p>
            <p>
              <span className="font-bold">Address:</span> {siteConfig.primaryAddress.streetAddress},{" "}
              {siteConfig.primaryAddress.addressLocality}, {siteConfig.primaryAddress.addressRegion}{" "}
              {siteConfig.primaryAddress.postalCode}
            </p>
            <p>
              <span className="font-bold">Coverage:</span> {siteConfig.areas.join(", ")}
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Service Request Form (Scaffold)</h2>
          <p className="mt-3 text-sm text-slate-700">
            This form is intentionally scaffolded for your next design/implementation pass. It currently
            represents field structure and conversion flow, without backend submission wiring.
          </p>

          <form className="mt-5 grid gap-4" action="#" method="post">
            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                className="h-11 rounded-lg border border-black/15 bg-white px-3 text-sm"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="(254) 555-0105"
                className="h-11 rounded-lg border border-black/15 bg-white px-3 text-sm"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Service Type
              <select name="serviceType" className="h-11 rounded-lg border border-black/15 bg-white px-3 text-sm">
                <option>Emergency Plumbing</option>
                <option>Air Conditioning Repair</option>
                <option>Water Heater Service</option>
                <option>Drain & Sewer Service</option>
                <option>General Contractor Service</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Service City
              <select name="city" className="h-11 rounded-lg border border-black/15 bg-white px-3 text-sm">
                {siteConfig.areas.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              What’s happening?
              <textarea
                name="message"
                rows={4}
                placeholder="Describe the issue, urgency, and best callback time."
                className="rounded-lg border border-black/15 bg-white px-3 py-2 text-sm"
              />
            </label>

            <button
              type="submit"
              className="h-11 rounded-full bg-slate-950 text-sm font-black uppercase tracking-wide text-white hover:bg-slate-800"
            >
              Submit Request (UI Scaffold)
            </button>
          </form>
        </article>
      </section>

      <CtaStrip className="mt-10" />

      <JsonLd
        data={buildWebPageSchema({
          name: "Contact Falcon Five",
          description: "Contact page and service request scaffold for Falcon Five.",
          path: "/contact",
        })}
      />
      <JsonLd data={contactSchema} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ])}
      />
    </>
  );
}
