import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lakerootscl.com"),
  title: "Lake Roots Café Market & Bar | Crystal Lake, IL",
  description: "Café by day, full-service dinner & cocktails by night, curated market — all under one roof. 475 W Virginia St, Crystal Lake, IL. Rated 4.8★ with 107+ reviews.",
  keywords: "Lake Roots, Crystal Lake restaurant, café, bar, market, breakfast, lunch, dinner, cocktails, Crystal Lake IL",
  openGraph: {
    title: "Lake Roots Café Market & Bar",
    description: "Your neighborhood place for everyday moments. Café, Market & Bar — Crystal Lake, IL.",
    url: "https://lakerootscl.com",
    siteName: "Lake Roots Café Market & Bar",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Lake Roots Café Market & Bar — Crystal Lake, IL",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lake Roots Café Market & Bar",
    description: "Café by day, dinner & cocktails by night. Crystal Lake, IL.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Lake Roots Café Market & Bar",
  image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200",
  "@id": "https://lakerootscl.com",
  url: "https://lakerootscl.com",
  telephone: "(815) 893-6240",
  address: {
    "@type": "PostalAddress",
    streetAddress: "475 W Virginia Street",
    addressLocality: "Crystal Lake",
    addressRegion: "IL",
    postalCode: "60014",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.2411,
    longitude: -88.3162,
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
  servesCuisine: ["American", "Café", "Bar"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "107",
    bestRating: "5",
  },
  sameAs: [
    "http://instagram.com/lakerootsco",
    "http://facebook.com/lakerootsco",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
