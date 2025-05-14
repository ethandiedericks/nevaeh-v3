"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PostData } from "@/lib/posts";
import { CalendarDays, Clock } from "lucide-react";
import GradientButton from "../GradientButton";
import SelectMenu from "./SelectMenu";

export const MobileBlogPage = ({
  latestArticles,
  featuredArticle,
}: {
  latestArticles: PostData[];
  featuredArticle: PostData;
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter articles based on the selected category
  const filteredArticles =
    activeCategory === "All"
      ? latestArticles
      : latestArticles.filter((article) => article.category === activeCategory);

  // Handle category change from the SelectMenu
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="md:hidden">
      <div className="section-spacing">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[32px] font-thin tracking-[-4%] leading-[100%]">
              Insights & Expertise
            </h1>
            <p className="text-base font-thin tracking-[-4%] leading-[20px]">
              Explore our latest thoughts on technology and development trends.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-thin leading-[20px] tracking-[-4%]">
              Featured Article
            </h2>

            <Image
              src={featuredArticle.coverImage}
              alt={featuredArticle.title}
              width={353.09}
              height={201}
              className="w-full rounded-[30px]"
            />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between">
                  <span className="border border-white rounded-[0.625rem] p-2 inline-flex items-center justify-center font-thin">
                    {featuredArticle?.category}
                  </span>
                  <span className="inline-flex items-center justify-center font-thin">
                    <CalendarDays className="mr-2" />
                    {featuredArticle?.date}
                  </span>
                </div>
                <h3 className="text-2xl font-thin tracking-[-4%] leading-[100%]">
                  {featuredArticle.title}
                </h3>
                <p className="text-base font-thin tracking-[-4%] leading-[20px]">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-row justify-between">
                  <span className="inline-flex items-center justify-center font-thin">
                    <Clock className="mr-2" />
                    {featuredArticle?.readTime}
                  </span>
                  <Link
                    href={`/blog/${featuredArticle?.slug}`}
                    aria-label={`Read ${featuredArticle?.title}, by ${featuredArticle?.author}`}
                  >
                    <GradientButton text="Read article" />
                  </Link>
                </div>
              </div>

              <SelectMenu onCategoryChange={handleCategoryChange} />

              {/* Latest Articles Section */}
              <div className="mt-6">
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredArticles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/blog/${article.slug}`}
                        aria-label={`Read ${article.title}, by Nevaeh Solutions`}
                        className="block"
                      >
                        <div className="relative p-4 w-full h-[18rem] overflow-hidden rounded-[20px] latest-articles-gradient-card">
                          <Image
                            src={article.coverImage}
                            alt={article.title}
                            fill
                            sizes="100vw"
                            className="w-full object-cover z-0 opacity-25"
                          />

                          {/* Content over image */}
                          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-2">
                            <div className="flex flex-row justify-between">
                              <span className="border border-white rounded-full py-1 px-3 inline-flex items-center justify-center text-sm font-thin">
                                {article?.category}
                              </span>
                              <span className="inline-flex items-center justify-center font-thin text-sm">
                                <Clock size={20} className="mr-2" />
                                {article?.readTime}
                              </span>
                            </div>
                            <h3 className="text-base leading-[100%] tracking-[-4%] font-medium">
                              {article.title}
                            </h3>
                            <p className="text-sm leading-4 tracking-[-4%] font-thin">
                              {article.excerpt}
                            </p>
                            <div className="flex flex-row justify-between">
                              <span className="inline-flex items-center justify-center text-sm font-thin">
                                {article?.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 mt-4">
                    No articles found in this category.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
