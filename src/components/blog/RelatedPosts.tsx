import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { PostData } from "@/lib/posts";

interface RelatedPostsProps {
  posts: PostData[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            aria-label={`Read ${post.title}, by Nevaeh Solutions`}
            className="block"
          >
            <div className="relative p-6 w-full h-[18.75rem] overflow-hidden rounded-[30px] latest-articles-gradient-card">
              <div className="">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="w-full object-cover z-0 opacity-25"
                />
              </div>

              {/* Content structure with fixed heights to ensure alignment */}
              <div className="absolute inset-x-6 bottom-6 z-20 flex flex-col ">
                {/* Top row: Category and read time - fixed height */}
                <div className="flex flex-row justify-between h-8">
                  <span className="border border-white rounded-full py-1 px-3 inline-flex items-center justify-center text-sm font-thin">
                    {post?.category}
                  </span>
                  <span className="inline-flex items-center justify-center font-thin text-sm">
                    <Clock size={20} className="mr-2" />
                    {post?.readTime}
                  </span>
                </div>

                {/* Title - fixed height with line clamping */}
                <h3 className="text-base leading-[100%] tracking-[-4%] font-medium h-12 line-clamp-2 mt-2">
                  {post.title}
                </h3>

                {/* Excerpt - fixed height with line clamping */}
                <p className="text-sm leading-4 tracking-[-4%] font-thin h-12 line-clamp-3 mt-2">
                  {post.excerpt}
                </p>

                {/* Bottom row: Date - fixed position at bottom */}
                <div className="flex flex-row justify-between mt-2">
                  <span className="inline-flex items-center justify-center text-sm font-thin">
                    {post?.date}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">
          No related posts found.
        </p>
      )}
    </div>
  );
}
