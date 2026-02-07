# Falcon Five Website Scaffold (SEO-First)

This repository contains a production-ready **Next.js App Router scaffold** for a local service contractor:
- Emergency Plumbing
- Emergency Air Conditioning Repair
- General Contractor Services

Primary target markets:
- Waco, TX
- Hewitt, TX
- Bellmead, TX (user-entered as "Belmade")
- Surrounding Central Texas communities

---

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Structured data (JSON-LD)
- Dynamic SEO routes (`sitemap.xml`, `robots.txt`, Open Graph image)

---

## What’s Scaffolded

### Site Architecture

- `/` Home
- `/services`
- `/services/[slug]` (all core services generated from data)
- `/locations`
- `/locations/[slug]` (city landing pages)
- `/blog`
- `/blog/[slug]` (SEO article scaffolds)
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `not-found`

### Technical SEO

- Canonical URLs on all pages
- Route-level metadata and keywords
- Open Graph + Twitter metadata
- LocalBusiness + Service + FAQ + Breadcrumb schema
- Auto-generated `sitemap.xml`
- Auto-generated `robots.txt`
- Generated social card via `opengraph-image`

### Content Model

All service pages, city pages, and blog pages are data-driven from:
- `src/lib/site-data.ts`

This makes future scaling easy (new cities/services = add one data object).

---

## Local Development

```bash
pnpm install
pnpm dev
```

Build and lint:

```bash
pnpm lint
pnpm build
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and update values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PHONE_DISPLAY`
- `NEXT_PUBLIC_PHONE_HREF`
- `NEXT_PUBLIC_EMAIL`
- address fields

---

## Competitor Signals Used for Structure

Research focused on pages currently ranking for emergency plumbing and AC intent in Waco/Hewitt market. Common winning patterns found:

1. 24/7 urgency language in title/meta/H1
2. Highly visible call CTA above fold
3. City-specific pages and service-area clusters
4. Trust signals: licensed/insured, years in business, reviews
5. FAQ and “what to do now” emergency content blocks

This scaffold mirrors those patterns while keeping cleaner content hierarchy and stronger internal linking.

---

## Recommended Next Phase (Design + Growth)

1. Apply final visual design system (Claude Opus pass)
2. Add real NAP details and verified license numbers
3. Replace blog scaffolds with fully written articles
4. Connect contact form to CRM + call tracking
5. Add Google Business Profile link, review embeds, and photos
6. Launch local backlinks + citations campaign

