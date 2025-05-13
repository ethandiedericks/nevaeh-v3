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
      <MobileBlogPage
        featuredArticle={featuredPost}
        latestArticles={latestArticles}
      />
      <div className="min-h-screen hidden md:block">
        <div className="section-spacing">
          <div className="flex flex-col space-y-4 justify-center items-center">
            <h1 className="text-5xl leading-[100%] tracking-[-4]">
              Insights & Expertise
            </h1>
            <p className="text-base leading-[20px]">
              Explore our latest thoughts on technology and development trends.
            </p>
          </div>
          <h2 className="text-[20px] font-thin leading-[20px] tracking-[-4%] text-center mt-10">
            Featured Article
          </h2>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="relative h-[300px] rounded-[30px] overflow-hidden">
              <Image
                src={`${featuredPost?.coverImage}`}
                alt={`${featuredPost?.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-between">
              {/* category and date */}
              <div className="flex flex-row justify-between">
                <span className="border border-white rounded-[0.625rem] p-2 inline-flex items-center justify-center font-thin">
                  {featuredPost?.category}
                </span>
                <span className="inline-flex items-center justify-center font-thin">
                  <CalendarDays className="mr-2" />
                  {featuredPost?.date}
                </span>
              </div>
              <h3 className="text-4xl leading-[100%] tracking-[-4%]">
                {featuredPost?.title}
              </h3>
              <p className="text-base leading-[20px] tracking-[-4%]">
                {featuredPost?.excerpt}
              </p>
              {/* read time and cta */}
              <div className="flex flex-row justify-between">
                <span className="inline-flex items-center justify-center font-thin">
                  <Clock className="mr-2" />
                  {featuredPost?.readTime}
                </span>
                <Link
                  href={`/blog/${featuredPost?.slug}`}
                  aria-label={`Read ${featuredPost?.title}, by ${featuredPost?.author}`}
                >
                  <GradientButton text="Read article" />
                </Link>
              </div>
            </div>
          </div>
          {/* latest articles */}
          <LatestArticles latestArticles={latestArticles} />
        </div>
      </div>
    </>
  );
};

export default Blog;
