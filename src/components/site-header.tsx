import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <div>
          <Link href="/" className="text-lg font-black tracking-tight text-slate-900">
            {siteConfig.businessName}
          </Link>
          <p className="text-xs font-medium text-slate-600">Emergency Plumbing + AC Repair</p>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-1 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-slate-950 shadow-sm transition hover:bg-amber-300"
        >
          Call 24/7: {siteConfig.phoneDisplay}
        </a>
      </div>
    </header>
  );
}

