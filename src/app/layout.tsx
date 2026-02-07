import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";

import "./globals.css";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildLocalBusinessSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-data";

const headingFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const baseMetadata = buildMetadata({
  title: "Falcon Five | Emergency Plumbing & AC Repair in Waco, TX",
  description:
    "Falcon Five delivers 24/7 emergency plumbing, AC repair, and contractor services across Waco, Hewitt, Bellmead, and nearby Central Texas communities.",
  path: "/",
  keywords: [
    "emergency plumber waco tx",
    "ac repair waco tx",
    "24 hour plumber hewitt",
    "hvac bellmead",
    "contractor waco tx",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Falcon Five | Emergency Plumbing & AC Repair in Waco, TX",
    template: "%s | Falcon Five",
  },
  category: "Home Services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-surface text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <main id="main-content">{children}</main>

        <SiteFooter />

        <JsonLd data={buildLocalBusinessSchema()} />
      </body>
    </html>
  );
}
