import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-surface">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl text-gold sm:text-3xl">
            FALCON FIVE
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-neutral-400 md:flex"
        >
          {navLinks
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-gold-bright"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
              clipRule="evenodd"
            />
          </svg>
          {siteConfig.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
