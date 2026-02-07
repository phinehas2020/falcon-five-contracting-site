import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const absoluteUrl = (path: string): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.siteUrl).toString();
};

export const buildMetadata = ({
  title,
  description,
  path,
  keywords = [],
}: SeoInput): Metadata => {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl("/opengraph-image.png");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.businessName,
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.businessName} emergency contractor in Central Texas`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
};

const areaServed = siteConfig.areas.map((area) => ({
  "@type": "City",
  name: area,
}));

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: siteConfig.businessName,
  legalName: siteConfig.legalName,
  image: absoluteUrl("/opengraph-image.png"),
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...siteConfig.primaryAddress,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Emergency and scheduled service offerings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Plumbing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Conditioning Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Contractor Services",
        },
      },
    ],
  },
});

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; item: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((entry, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: entry.name,
    item: absoluteUrl(entry.item),
  })),
});

export const buildFaqSchema = (
  faqs: Array<{ question: string; answer: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const buildServiceSchema = (input: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: input.name,
  name: `${input.name} | ${siteConfig.businessName}`,
  description: input.description,
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
  },
  areaServed,
  url: absoluteUrl(input.path),
});

export const buildWebPageSchema = (input: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: input.name,
  description: input.description,
  url: absoluteUrl(input.path),
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
  },
});
