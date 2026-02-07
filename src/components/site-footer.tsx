import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-black text-white">{siteConfig.businessName}</p>
          <p className="max-w-sm text-sm text-slate-300">
            Emergency plumbing, AC repair, and general contractor services for Waco,
            Hewitt, Bellmead, and surrounding Central Texas areas.
          </p>
          <a href={siteConfig.phoneHref} className="inline-block text-sm font-bold text-amber-300">
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-black uppercase tracking-wide text-white">Pages</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-slate-300">
          <p className="text-sm font-black uppercase tracking-wide text-white">Service Area</p>
          <p>{siteConfig.areas.join(" • ")}</p>
          <p>
            {siteConfig.primaryAddress.streetAddress}, {siteConfig.primaryAddress.addressLocality},{" "}
            {siteConfig.primaryAddress.addressRegion} {siteConfig.primaryAddress.postalCode}
          </p>
          <a
            className="inline-block font-bold text-amber-300"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 text-xs text-slate-400 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
