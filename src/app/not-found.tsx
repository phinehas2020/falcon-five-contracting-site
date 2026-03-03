import Link from "next/link";

import { locationDirectoryLinks, serviceDirectoryLinks } from "@/lib/site-data";
import { LinkHub } from "@/components/link-hub";

export default function NotFound() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
        <p className="font-display text-8xl text-gold sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist. Head back home or check
          out our services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex bg-gold px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-bright"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="inline-flex border border-neutral-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-gold hover:text-gold"
          >
            Services
          </Link>
        </div>

        <LinkHub
          className="mt-10 border-t border-rule pt-10"
          title="Start from popular pages"
          description="When a URL is wrong, these are the most reliable sections to recover quickly."
          links={locationDirectoryLinks.slice(0, 4)}
        />
        <LinkHub
          className="mt-6"
          title="Or jump by service"
          description="If you came here from a broken service link, reselect from the directory."
          links={serviceDirectoryLinks}
        />
      </div>
    </section>
  );
}
