import { Metadata } from "next";
import { getPostBySlug } from "@/lib/posts";
import Script from "next/script";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

// Enhance metadata generation with structured data preparation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Nevaeh Solutions Blog",
      description: "The requested blog post could not be found.",
    };
  }

  const postUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`
    : `/blog/${slug}`;
  const formattedDate = new Date(post.date).toISOString();

  return {
    title: `${post.title} - Nevaeh Solutions Blog`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      post.category,
      "Nevaeh Solutions",
      "software development",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: postUrl,
      images: [
        {
          url: post.coverImage,
          alt: post.title,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: formattedDate,
      modifiedTime: formattedDate,
      authors: [post.author],
      tags: post.tags,
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: "@NevaehSolutions", // Replace with your actual Twitter handle
    },
    alternates: {
      canonical: postUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostLayout({ children, params }: Props) {
  // If params is Promise, await it
  const resolvedParams = await params;

  // Use resolvedParams.slug
  return (
    <>
      <BlogPostStructuredData slug={resolvedParams.slug} />
      {children}
    </>
  );
}

// Separated structured data component to handle async data fetching
async function BlogPostStructuredData({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post) {
    return null;
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const formattedDate = new Date(post.date).toISOString();
  const logoUrl = `${baseUrl}/images/logo.png`; // Update with your actual logo path

  // Create JSON-LD structured data for blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: formattedDate,
    dateModified: formattedDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Nevaeh Solutions (Pty) Ltd",
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <Script
      id="blog-post-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
