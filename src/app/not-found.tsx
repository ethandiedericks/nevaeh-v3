/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import { ArrowRight, FileQuestion } from "lucide-react";

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle animation state every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* 404 content */}
      <div className="container mx-auto relative z-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* 404 Icon */}
          <motion.div
            className="mx-auto mb-8 relative"
            animate={{
              rotate: isAnimating ? [0, 5, -5, 0] : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-[1.5rem] border border-white/20 bg-black/40 backdrop-blur-sm">
              <FileQuestion size={64} className="text-white" />
            </div>
            <motion.div
              className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center"
              animate={{
                scale: isAnimating ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              404
            </motion.div>
          </motion.div>

          {/* Main headline */}
          <h1 className="hero-headline mb-4">Oops! Page Not Found</h1>

          <p className="hero-sub-headline mb-12">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track to building something amazing.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <GradientButton text="Return to Home" />
            </Link>

            <Link href="/contact">
              <motion.button
                className="inline-flex items-center justify-center px-6 py-3 rounded-[0.938rem] border border-white/30 bg-black/40 text-white hover:bg-black/60 transition-all hover:cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                Contact Support
                <ArrowRight className="ml-2" size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
