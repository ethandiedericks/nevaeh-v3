import { getPostBySlug, getAllPosts, PostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { CalendarDays, Clock, User } from "lucide-react";
import { SocialShare } from "@/components/blog/SocialShare";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Card } from "@/components/blog/Card";

type Props = {
  params: Promise<{ slug: string }>; // Type as Promise for async params (Next.js 15+)
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: PostData) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // Await params explicitly
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`;

  return {
    title: `${post.title} - Nevaeh Solutions Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: url,
      images: [{ url: post.coverImage, alt: post.title }],
      publishedTime: post.date,
      tags: post.tags,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Render individual blog post
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // Await params explicitly
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  // Get related posts based on category or tags
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 3);

  const postUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`;

  return (
    <div className="min-h-screen">
      <div className="section-spacing">
        <article className="article-card">
          <header className="space-y-4">
            <div className="relative h-64 md:h-96 w-full mb-6 rounded-[30px] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            <div className="mb-4">
              <span className="category-tag gradient-border">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-6 text-white tracking-[-4%] leading-[100%]">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 flex-wrap">
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
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
            </div>

            <Card className="mb-6">
              <SocialShare
                title={post.title}
                url={postUrl}
                excerpt={post.excerpt}
              />
            </Card>
          </header>

          <div className="prose">
            <MDXRemote source={post.content} />
          </div>

          <div className="share-section">
            <h3>Like this article? Share it!</h3>
            <SocialShare
              title={post.title}
              url={postUrl}
              excerpt={post.excerpt}
            />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <RelatedPosts posts={relatedPosts} />
          </section>
        )}
      </div>
    </div>
  );
}
