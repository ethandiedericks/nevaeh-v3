"use client";

import React, { useState } from "react";
import { PostData } from "@/lib/posts";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";

const LatestArticles = ({ latestArticles }: { latestArticles: PostData[] }) => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "web-development", label: "Web Development" },
    { id: "mobile-development", label: "Mobile Development" },
    { id: "backend-development", label: "Backend Development" },
    { id: "ui-ux-design", label: "UI/UX Design" },
  ];

  // Filter logic based on active tab
  const filteredArticles =
    activeTab === "all"
      ? latestArticles
      : latestArticles.filter(
          (article) =>
            article.category.toLowerCase().replace(/\s+/g, "-") === activeTab
        );

  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="inline-flex justify-center items-center">
          <h3 className="text-xl font-thin leading-[20px] tracking-[-4%]">
            Latest Articles
          </h3>
        </div>

        <div className="flex justify-center gap-4 w-full max-w-4xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-1 py-1 rounded-[0.625rem] transition-all relative hover:cursor-pointer ${
                activeTab === tab.id
                  ? "bg-transparent border border-gray-600"
                  : "bg-transparent border border-gray-600"
              }`}
            >
              <div
                className={`w-full relative ${
                  activeTab === tab.id ? "" : "bg-transparent"
                }`}
              >
                {activeTab === tab.id && (
                  <div className="absolute inset-0 btn-grad rounded-[0.625rem]"></div>
                )}
                <div className="px-2 py-1 relative z-20 font-thin text-base">
                  {tab.label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              aria-label={`Read ${article.title}, by Nevaeh Solutions`}
              className="block"
            >
              <div
                key={article.id}
                className="relative p-6 w-[21.563rem] h-[18.75rem] overflow-hidden rounded-[30px] latest-articles-gradient-card"
              >
                <div className="">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="100vw"
                    className="w-full object-cover z-0 opacity-25"
                  />
                </div>

                {/* Content over image - Now positioned at the bottom */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-2">
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
                    The Power of API Development with C# for Your Business
                  </h3>
                  <p className="text-sm leading-4 tracking-[-4%] font-thin">
                    APIs power modern applications—discover how C# API
                    development can elevate your software solutions.
                  </p>
                  <div className="flex flex-row justify-between">
                    <span className="inline-flex items-center justify-center text-sm font-thin">
                      {article?.date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No articles found.
          </p>
        )}
      </div>
    </div>
  );
};

export default LatestArticles;
