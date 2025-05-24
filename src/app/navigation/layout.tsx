import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map | Nevaeh Solutions",
  description:
    "Complete sitemap of Nevaeh Solutions website. Navigate through all pages including services, blog articles, pricing, and more. Find everything you need about our software development services.",
  keywords: [
    "sitemap",
    "website navigation",
    "page directory",
    "Nevaeh Solutions pages",
    "software development services",
    "web development blog",
    "mobile app development",
    "landing page design",
    "custom software solutions",
    "South Africa development company",
    "website structure",
    "site navigation",
    "development blog articles",
    "pricing information",
    "contact information",
    "about us",
    "FAQ",
    "web applications",
    "mobile applications",
  ],
  openGraph: {
    title: "Nevaeh Solutions | Complete Website Sitemap & Navigation",
    description:
      "Explore all pages and resources available on Nevaeh Solutions website. Find services, blog articles, pricing, and contact information easily.",
    url: `${process.env.NEXT_PUBLIC_OG_IMAGE_URL}`,
    type: "website",
  },
  twitter: {
    title: "Nevaeh Solutions | Website Sitemap & Navigation Guide",
    description:
      "Complete directory of all Nevaeh Solutions pages including development services, blog articles, and business information.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/navigation`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
