import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import { getPostBySlug } from "@/lib/posts";
import { Separator } from "./Separator";
import { SocialShare } from "./SocialShare";
import CheckItem from "./CheckItem";

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Nevaeh Solutions Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
      images: [post.coverImage || "/placeholder.svg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    },
  };
}

// Generate static params for dynamic routes (optional, for static generation)
export async function generateStaticParams() {
  const { getAllPosts } = await import("@/lib/posts");
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound(); // Redirect to 404 if post not found
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0c1b] to-[#001e05] text-white">
      <article className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        {/* Post Metadata */}
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center">
              <CalendarDays size={16} className="mr-1" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
            <span>Nevaeh Solutions</span>
          </div>
          <div className="mt-4">
            <SocialShare
              title={post.title}
              url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
              excerpt={post.excerpt}
            />
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Intro Paragraph */}
          <p className="text-gray-300 mb-8">
            In the interconnected digital era, Application Programming
            Interfaces (APIs) serve as the backbone of modern applications,
            enabling secure and efficient data exchange between systems. At
            Nevaeh Solutions, we leverage C# and .NET to deliver robust,
            high-performance APIs tailored to your business needs.
          </p>

          {/* Why Choose Section */}
          <h2 className="text-2xl font-bold mb-4">
            Why Choose C# for API Development?
          </h2>
          <div className="space-y-4 mb-8">
            <CheckItem
              title="Superior Performance and Scalability"
              description="Built on .NET, our APIs efficiently manage high traffic volumes and expansive datasets, ensuring seamless operation as your business grows."
            />
            <CheckItem
              title="Advanced Security"
              description="C# offers robust authentication and encryption capabilities, making it an ideal choice for enterprise-grade applications requiring data protection."
            />
            <CheckItem
              title="Effortless Integration"
              description="Our APIs integrate seamlessly with your web applications, mobile platforms, and third-party services, fostering a cohesive ecosystem."
            />
          </div>

          <Separator className="my-8" />

          {/* Tailored API Solutions Section */}
          <h2 className="text-2xl font-bold mb-4">Tailored API Solutions</h2>
          <p className="text-gray-300 mb-8">
            At Nevaeh Solutions, we specialize in crafting custom APIs that
            address your specific requirements—whether it’s secure data
            exchange, real-time processing, or third-party integrations.
          </p>

          <Separator className="my-8" />

          {/* Conclusion Section */}
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-gray-300 mb-8">
            For businesses seeking a scalable, high-performance API, Nevaeh
            Solutions offers bespoke solutions designed to empower your
            operations. Contact us today to explore how we can transform your
            connectivity and drive success.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">
            Like this article? Share it!
          </h3>
          <SocialShare
            title={post.title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
            excerpt={post.excerpt}
          />
        </div>
      </article>
    </div>
  );
}
