"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ValueProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ValueCard: React.FC<ValueProps> = ({
  icon,
  title,
  description,
}) => {
  const [isValueHovered, setIsValueHovered] = useState(false);
  return (
    <motion.article
      className="h-full"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
        boxShadow: "4px 4px 15px 0px rgb(82, 200, 148, 0.2)",
      }}
      onMouseEnter={() => setIsValueHovered(true)}
      onMouseLeave={() => setIsValueHovered(false)}
    >
      <motion.div
        className={`relative h-full flex flex-col rounded-[10px] justify-between overflow-hidden p-4 sm:p-6 ${isValueHovered ? "gradient-border-hover" : "gradient-border"}`}
      >
        <div className="space-y-3">
          <div className="relative max-w-fit mx-auto sm:mx-0">
            <div className="absolute inset-0 icon-glow"></div>
            <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
              {icon}
            </div>
          </div>
          <header className="text-center md:text-left">
            <h3 className="md:text-base md:text-white md:text-bold md:leading-[20px] md:tracking-[-4%] mobile-card-title">
              {title}
            </h3>
          </header>
          <p className="flex-1 text-center md:text-left text-[15px] md:text-base text-white font-thin leading-[20px] tracking-[-4%]">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
};
