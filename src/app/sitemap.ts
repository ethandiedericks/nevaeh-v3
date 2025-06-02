import { getAllPosts, PostData } from "@/lib/posts";
import { MetadataRoute } from "next";

// Force static generation for this route
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL from .env
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.nevaeh.co.za";

  // Fetch all blog posts
  const posts = await getAllPosts();

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/navigation`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Dynamic blog post routes
  const blogRoutes = posts.map((post: PostData) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date
      ? new Date(post.date).toISOString()
      : new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: post.featured ? 0.9 : 0.7,
  }));

  // Combine static, case study, and blog routes
  return [...staticRoutes, ...blogRoutes];
}
