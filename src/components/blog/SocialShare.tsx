"use client";

import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
  excerpt: string;
}

export function SocialShare({ title, url, excerpt }: SocialShareProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const encodedExcerpt = encodeURIComponent(excerpt);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <span className="text-sm tracking-[-4%] leading-[20px]">Share:</span>
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-white transition hover:bg-white hover:text-black"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} className="text-gray-300" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-white transition hover:bg-white hover:text-black"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} className="text-gray-300" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedExcerpt}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-white transition hover:bg-white hover:text-black"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} className="text-gray-300" />
        </a>
        <button
          onClick={copyToClipboard}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-white transition hover:bg-white hover:text-black"
          aria-label="Copy link"
        >
          <Link2 size={18} className="text-gray-300" />
        </button>
      </div>
    </div>
  );
}
