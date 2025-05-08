import { MetadataRoute } from "next";
import { servicesData } from "@/constants";
import { getAllPosts, BlogPost } from "@/lib/posts";

// Force static generation for this route
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL from .env
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nevaeh.co.za";

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
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Dynamic case study routes from servicesData
  const caseStudyRoutes = servicesData
    .flatMap((service) => service.caseStudies || [])
    .filter((caseStudy) => caseStudy?.id) // Ensure caseStudy exists and has an id
    .map((caseStudy) => ({
      url: `${baseUrl}/case-study/${caseStudy.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }));

  // Dynamic blog post routes
  const blogRoutes = posts.map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Combine static, case study, and blog routes
  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}