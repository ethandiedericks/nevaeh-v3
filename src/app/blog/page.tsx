import Image from "next/image";
import Link from "next/link";

import { getFeaturedPost, getLatestArticles } from "@/lib/posts";
import { CalendarDays, Clock } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import LatestArticles from "@/components/blog/LatestArticles";
import { MobileBlogPage } from "@/components/blog/MobileBlogPage";

const Blog = () => {
  const featuredPost = getFeaturedPost();
  const latestArticles = getLatestArticles(6);

  if (!featuredPost) return null;

  return (
    <>
      {/* Mobile View */}
      <MobileBlogPage
        featuredArticle={featuredPost}
        latestArticles={latestArticles}
      />

      {/* Desktop View */}
      <div className="hidden md:block min-h-screen">
        <div className="section-spacing space-y-12">
          {/* Intro Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-5xl leading-[100%] tracking-[-4%]">
              Insights & Expertise
            </h1>
            <p className="text-base leading-[20px]">
              Explore our latest thoughts on technology and development trends.
            </p>
          </div>

          {/* Featured Article Section */}
          <div className="space-y-8">
            <h2 className="text-[20px] font-thin leading-[20px] tracking-[-4%] text-center">
              Featured Article
            </h2>

            <div className="grid grid-cols-2 gap-12">
              {/* Image */}
              <div className="relative h-[300px] rounded-[30px] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between space-y-6">
                <div className="flex justify-between items-center">
                  <span className="border border-white rounded-lg px-3 py-1 text-sm font-thin">
                    {featuredPost.category}
                  </span>
                  <span className="inline-flex items-center text-sm font-thin">
                    <CalendarDays className="mr-2" />
                    {featuredPost.date}
                  </span>
                </div>

                <h3 className="text-4xl leading-[100%] tracking-[-4%]">
                  {featuredPost.title}
                </h3>

                <p className="text-base leading-[20px] tracking-[-4%]">
                  {featuredPost.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center text-sm font-thin">
                    <Clock className="mr-2" />
                    {featuredPost.readTime}
                  </span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    aria-label={`Read ${featuredPost.title}, by ${featuredPost.author}`}
                  >
                    <GradientButton text="Read article" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Articles Section */}
          <LatestArticles latestArticles={latestArticles} />
        </div>
      </div>
    </>
  );
};

export default Blog;
