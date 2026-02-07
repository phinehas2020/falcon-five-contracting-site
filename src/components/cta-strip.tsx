import Link from "next/link";

import { siteConfig } from "@/lib/site-data";

type CtaStripProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function CtaStrip({
  title = "Need emergency help right now?",
  description = "Call Falcon Five for 24/7 emergency plumbing and AC dispatch across Greater Waco. No hold music. No runaround.",
  className = "",
}: CtaStripProps) {
  return (
    <section className={`bg-surface-raised ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-neutral-400">{description}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-base font-bold text-black transition-colors hover:bg-gold-bright"
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
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-neutral-700 px-8 py-4 text-base font-bold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
