import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  // Get latest blog posts for dynamic metadata
  const latestPosts = await getAllPosts();

  const blogNames =
    latestPosts.length > 0
      ? latestPosts.map((post) => post.title).join(", ")
      : "technology insights, web development, mobile app development";

  return {
    title: "Blog | Nevaeh Solutions | Technology Insights & Development Trends",
    description:
      "Explore our latest articles on web development, mobile apps, and tech trends. Stay updated with insights from Nevaeh Solutions' development experts.",
    keywords: [
      "technology blog",
      "web development articles",
      "mobile app development insights",
      "software development trends",
      "tech industry updates",
      "coding best practices",
      "South Africa tech scene",
      "developer resources",
      "software engineering blog",
      "digital transformation",
      "UI/UX design articles",
      "business technology",
      "enterprise software insights",
      blogNames,
    ],
    openGraph: {
      title: "Nevaeh Solutions Blog | Technology Insights & Expertise",
      description:
        "Explore our latest thoughts on technology, development trends, and digital innovation.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      type: "website",
      siteName: "Nevaeh Solutions",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_OG_IMAGE_URL}`, // Update with your actual blog cover image
          width: 1200,
          height: 630,
          alt: "Nevaeh Solutions Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nevaeh Solutions Blog | Technology Insights & Expertise",
      description:
        "Explore our latest thoughts on technology, development trends, and digital innovation.",
      images: [`${process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL}`], // Update with your actual blog cover image
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// BlogLayout component
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for the blog
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Nevaeh Solutions Blog",
    description:
      "Insights on technology, development trends, and digital innovation",
    url: process.env.NEXT_PUBLIC_BASE_URL
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/blog`
      : "/blog",
    publisher: {
      "@type": "Organization",
      name: "Nevaeh Solutions (Pty) Ltd",
      logo: {
        "@type": "ImageObject",
        url: process.env.NEXT_PUBLIC_BASE_URL
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`
          : "/images/logo.png",
      },
    },
  };

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      {children}
    </>
  );
}
