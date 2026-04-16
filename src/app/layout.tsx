import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT, IMAGE_ASSETS, LINKS, SITE_CONFIG } from "@/lib/data";

const canonicalUrl = SITE_CONFIG.businessUrl;
const metadataBaseUrl = new URL(SITE_CONFIG.siteUrl);

export const metadata: Metadata = {
  title: "Lake Roots Café Market & Bar | Crystal Lake, IL",
  description:
    "Your neighborhood place for everyday moments in Crystal Lake, with breakfast and lunch, dinner and cocktails, and a community-driven market under one roof.",
  alternates: {
    canonical: canonicalUrl,
  },
  keywords:
    "Lake Roots, Crystal Lake restaurant, cafe, market, bar, breakfast, lunch, dinner, cocktails",
  openGraph: {
    title: "Lake Roots Café Market & Bar",
    description:
      "Your neighborhood place for everyday moments in Crystal Lake.",
    url: canonicalUrl,
    siteName: "Lake Roots Café Market & Bar",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Lake Roots Café Market & Bar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lake Roots Café Market & Bar",
    description:
      "Your neighborhood place for everyday moments in Crystal Lake.",
    images: ["/api/og"],
  },
  metadataBase: metadataBaseUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Lake Roots Café Market & Bar",
              image: IMAGE_ASSETS.hero,
              address: {
                "@type": "PostalAddress",
                streetAddress: CONTACT.addressLine1,
                addressLocality: "Crystal Lake",
                addressRegion: "IL",
                postalCode: "60014",
                addressCountry: "US",
              },
              slogan: "Your neighborhood place for everyday moments.",
              telephone: CONTACT.phoneDisplay,
              url: canonicalUrl,
              mainEntityOfPage: canonicalUrl,
              servesCuisine: ["American", "Café", "Brunch"],
              priceRange: "$$",
              acceptsReservations: "False",
              sameAs: [LINKS.instagram, LINKS.facebook, SITE_CONFIG.businessUrl],
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "07:00", closes: "15:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "07:00", closes: "21:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "07:00", closes: "21:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "07:00", closes: "23:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "00:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "00:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "20:00" },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
