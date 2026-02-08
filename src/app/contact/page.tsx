import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-data";
import { ContactForm } from "@/components/contact-form";

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
        title="Get In Touch"
        description="For active emergencies, call us directly. For everything else, fill out the form and we'll get back to you."
      />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl text-white sm:text-3xl">
                Emergency Dispatch
              </h2>
              <p className="mt-4 text-neutral-400">
                For active leaks, no-cooling emergencies, and urgent contractor
                calls, phone dispatch is the fastest path.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-6 inline-flex items-center gap-2 bg-gold px-6 py-3 text-base font-bold text-black transition-colors hover:bg-gold-bright"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Call {siteConfig.phoneDisplay}
              </a>

              <div className="mt-10 space-y-4 border-t border-rule pt-8 text-sm text-neutral-400">
                <div>
                  <p className="text-xs font-bold uppercase text-neutral-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 text-gold transition-colors hover:text-gold-bright"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-neutral-500">
                    Address
                  </p>
                  <p className="mt-1">
                    {siteConfig.primaryAddress.streetAddress},{" "}
                    {siteConfig.primaryAddress.addressLocality},{" "}
                    {siteConfig.primaryAddress.addressRegion}{" "}
                    {siteConfig.primaryAddress.postalCode}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-neutral-500">
                    Coverage
                  </p>
                  <p className="mt-1">{siteConfig.areas.join(", ")}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaStrip />

      <JsonLd
        data={buildWebPageSchema({
          name: "Contact Falcon Five",
          description:
            "Contact page and service request scaffold for Falcon Five.",
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
