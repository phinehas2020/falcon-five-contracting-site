import Link from "next/link";

import {
  blogDirectoryLinks,
  locationDirectoryLinks,
  navLinks,
  serviceDirectoryLinks,
  siteConfig,
} from "@/lib/site-data";
import { LinkHub } from "@/components/link-hub";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Top: Logo and tagline */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-3xl text-gold">FALCON FIVE</p>
            <p className="mt-3 text-sm text-neutral-500">
              Emergency plumbing, AC repair, and contractor services across
              Waco, Hewitt, Bellmead, and Central Texas. Available 24/7.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-4 inline-flex text-lg font-bold text-gold transition-colors hover:text-gold-bright"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-xs font-bold uppercase text-neutral-500">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {navLinks
                  .filter((item) => item.href !== "/")
                  .map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-neutral-400 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase text-neutral-500">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-400">
                <li>{siteConfig.phoneDisplay}</li>
                <li>
                  <a
                    className="transition-colors hover:text-gold"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  {siteConfig.primaryAddress.streetAddress}
                  <br />
                  {siteConfig.primaryAddress.addressLocality},{" "}
                  {siteConfig.primaryAddress.addressRegion}{" "}
                  {siteConfig.primaryAddress.postalCode}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-rule pt-10 md:grid-cols-2">
          <LinkHub
            title="Services"
            description="Fast links to the pages with the most emergency intent."
            links={serviceDirectoryLinks.map((service) => ({
              ...service,
              summary: service.summary.split(".")[0],
            }))}
          />
          <LinkHub
            title="Service Areas"
            description="Primary communities we currently prioritize in dispatch coverage."
            links={locationDirectoryLinks.slice(0, 3).map((location) => ({
              ...location,
              summary: location.summary,
            }))}
          />
        </div>

        <div className="mt-6 border-t border-rule pt-6">
          <LinkHub
            title="Insights"
            description="Local emergency guides and service explanations."
            links={blogDirectoryLinks.slice(0, 4)}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-neutral-600 sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-neutral-400">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-neutral-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
