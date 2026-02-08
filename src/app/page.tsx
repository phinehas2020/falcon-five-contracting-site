import Link from "next/link";

import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import {
  buildFaqSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { getBlogPosts, getLocations, getServices, siteConfig } from "@/lib/sanity-fetch";

export const metadata = buildMetadata({
  title: "Emergency Plumbing & AC Repair in Waco, TX",
  description:
    "Falcon Five provides 24/7 emergency plumbing, AC repair, and contractor services in Waco, Hewitt, Bellmead, and surrounding communities.",
  path: "/",
  keywords: [
    "emergency plumber waco",
    "24 hour plumber waco tx",
    "ac repair waco tx",
    "emergency ac repair hewitt tx",
    "hvac bellmead tx",
  ],
});

const homepageFaq = [
  {
    question: "What areas does Falcon Five serve?",
    answer:
      "We cover Waco, Hewitt, Bellmead, Woodway, Robinson, Lorena, China Spring, and surrounding Central Texas communities. If you're nearby, we'll get to you.",
  },
  {
    question: "Are you really available 24/7?",
    answer:
      "Yes. Emergencies don't check the calendar, and neither do we. Our dispatch line runs around the clock, every single day.",
  },
  {
    question: "What are your core specialties?",
    answer:
      "Emergency plumbing and emergency AC repair are our bread and butter. We also handle water heaters, drains, and general contracting — but emergency response is where we built our reputation.",
  },
  {
    question: "How do I get immediate service?",
    answer: `Call ${siteConfig.phoneDisplay}. That's it. No hold music, no runaround. We triage your call and route the nearest available tech.`,
  },
];

const cityNames = siteConfig.areas;
const marqueeItems = [...cityNames, ...cityNames, ...cityNames, ...cityNames];

export default async function HomePage() {
  const services = await getServices();
  const locations = await getLocations();
  const blogPosts = await getBlogPosts();
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b border-rule">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-main.png"
            alt="Falcon Five Service Van"
            className="h-full w-full object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-36 lg:pt-32">
          <p className="text-sm font-bold uppercase text-gold">
            Waco, TX — 24/7 Emergency
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            Your pipes don&apos;t wait.
            <br />
            <span className="text-gold">Neither do we.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
            Emergency plumbing, AC repair, and contractor services across
            Central Texas. We pick up the phone. Every time.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
              Call Now: {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-neutral-700 px-8 py-4 text-base font-bold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Request Service
            </Link>
          </div>
        </div>

        {/* Faded oversized background text */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 z-0 select-none font-display text-[12rem] leading-none text-white/[0.02] sm:text-[18rem] lg:text-[26rem]"
          aria-hidden="true"
        >
          F5
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section
        className="overflow-hidden border-b border-rule bg-surface-raised py-5"
        aria-label="Service areas"
      >
        <div className="marquee-track">
          {marqueeItems.map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="flex shrink-0 items-center gap-6 px-6 font-display text-2xl text-gold/60 sm:text-3xl"
            >
              {city}
              <span className="text-gold/20" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-rule px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "24/7", label: "Emergency dispatch" },
            { value: "7+", label: "Communities served" },
            { value: "100%", label: "Licensed & insured" },
            { value: "1", label: "Call to get us there" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center sm:py-12">
              <p className="font-display text-4xl text-gold sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="border-b border-rule py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase text-gold">
            What We Do
          </p>
          <h2 className="mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            Built for the jobs
            <br />
            nobody else wants at 2 AM.
          </h2>

          <div className="mt-12 divide-y divide-rule">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-display text-3xl text-neutral-700 transition-colors group-hover:text-gold sm:text-4xl">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl text-white transition-colors group-hover:text-gold sm:text-3xl lg:text-4xl">
                    {service.name}
                  </h3>
                </div>
                <p className="max-w-md text-sm text-neutral-500 sm:text-right sm:text-base">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOLD STATEMENT ─── */}
      <section className="border-b border-rule bg-surface-raised py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl">
                Licensed. Insured.
                <br />
                <span className="text-gold">Relentless.</span>
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-lg text-neutral-400">
                We don&apos;t hand out business cards and hope you remember us.
                We show up when the water&apos;s rising and your AC died in July.
                That&apos;s how you earn a reputation.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 dispatch — no answering machines, no callbacks",
                  "Repair-first diagnostics so you're not buying what you don't need",
                  "Local routing across Waco for faster arrival",
                  "Full documentation for insurance and warranty claims",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <span className="mt-1.5 block size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="border-b border-rule py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase text-gold">Project Gallery</p>
          <h2 className="mt-4 text-4xl text-white sm:text-5xl">Our Work in Action</h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              service.image && (
                <div
                  key={service.slug}
                  className={`group relative overflow-hidden border border-rule transition-all duration-500 hover:border-gold ${i % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                    }`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-sm text-gold">View Project</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="border-b border-rule py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase text-gold">
            Coverage
          </p>
          <h2 className="mt-4 text-4xl text-white sm:text-5xl">
            We own Central Texas.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Dedicated coverage with city-specific dispatch routing.
            Every community we serve gets the same speed and standard.
          </p>

          <div className="mt-12 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-surface p-6 transition-colors hover:bg-surface-raised sm:p-8"
              >
                <h3 className="text-2xl text-white transition-colors group-hover:text-gold sm:text-3xl">
                  {location.city}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase text-neutral-600">
                  {location.region}
                </p>
                <p className="mt-3 text-sm text-neutral-500">
                  {location.summary}
                </p>
              </Link>
            ))}
            <div className="flex items-center justify-center bg-surface-raised p-8">
              <p className="text-center font-display text-2xl text-neutral-600 sm:text-3xl">
                + More areas
                <br />
                <span className="font-sans text-sm font-normal text-neutral-500">
                  coming soon
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS ─── */}
      <section className="border-b border-rule py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase text-gold">
                Insights
              </p>
              <h2 className="mt-4 text-4xl text-white sm:text-5xl">
                Knowledge is leverage.
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-bold text-neutral-400 transition-colors hover:text-gold sm:block"
            >
              View all
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-surface p-6 sm:p-8"
              >
                <p className="text-xs font-bold uppercase text-gold/60">
                  {post.targetKeyword}
                </p>
                <h3 className="mt-3 text-xl text-white transition-colors group-hover:text-gold sm:text-2xl">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-neutral-500">
                  {post.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex text-sm font-bold text-neutral-400 transition-colors hover:text-gold sm:hidden"
          >
            View all articles
          </Link>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="border-b border-rule py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-sm font-bold uppercase text-gold">FAQ</p>
              <h2 className="mt-4 text-4xl text-white sm:text-5xl">
                Got questions?
              </h2>
              <p className="mt-4 text-neutral-400">
                We&apos;d rather you just call us, but here are the ones we hear
                most.
              </p>
            </div>

            <div className="divide-y divide-rule">
              {homepageFaq.map((faq) => (
                <details key={faq.question} className="group py-6 first:pt-0 last:pb-0">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-white">
                    {faq.question}
                    <span className="shrink-0 font-display text-2xl text-neutral-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-xl text-neutral-400">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CtaStrip />

      {/* ─── SCHEMA ─── */}
      <JsonLd
        data={buildWebPageSchema({
          name: "Falcon Five Home",
          description:
            "Emergency plumbing, AC repair, and contractor services in Waco, Hewitt, Bellmead, and surrounding cities.",
          path: "/",
        })}
      />
      <JsonLd data={buildFaqSchema(homepageFaq)} />
    </>
  );
}
