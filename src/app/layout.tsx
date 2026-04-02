import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lake Roots Café Market & Bar | Crystal Lake, IL",
  description:
    "Café by day, full-service dinner & cocktails by night, curated market. Three experiences under one roof in Crystal Lake, IL. 4.8★ rated.",
  keywords:
    "Lake Roots, Crystal Lake restaurant, cafe, market, bar, breakfast, lunch, dinner, cocktails",
  openGraph: {
    title: "Lake Roots Café Market & Bar",
    description:
      "Café by day, dinner & cocktails by night, curated market. Crystal Lake, IL.",
    url: "https://lake-roots.vercel.app",
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
      "Café by day, dinner & cocktails by night, curated market. Crystal Lake, IL.",
    images: ["/api/og"],
  },
  metadataBase: new URL("https://lake-roots.vercel.app"),
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
              image: "https://lake-roots.vercel.app/api/og",
              address: {
                "@type": "PostalAddress",
                streetAddress: "475 W Virginia Street",
                addressLocality: "Crystal Lake",
                addressRegion: "IL",
                postalCode: "60014",
                addressCountry: "US",
              },
              telephone: "(815) 893-6240",
              url: "https://lake-roots.vercel.app",
              servesCuisine: ["American", "Café", "Brunch"],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "107",
              },
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
