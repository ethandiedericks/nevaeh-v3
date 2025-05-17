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
    <motion.div className="h-full">
      <motion.div
        className={`relative h-full flex flex-col rounded-[10px] justify-between  overflow-hidden p-4 sm:p-6 ${
          isValueHovered ? "gradient-border-hover" : "gradient-border"
        }`}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
          boxShadow: "4px 4px 15px 0px rgb(82, 200, 148, 0.2)",
        }}
        onHoverStart={() => setIsValueHovered(true)}
        onHoverEnd={() => setIsValueHovered(false)}
      >
        <motion.div className="space-y-3">
          <motion.div className="relative max-w-fit mx-auto sm:mx-0">
            {/* Glow effect */}
            <div className="absolute inset-0 icon-glow"></div>
            {/* Icon with a higher z-index to appear above the glow */}
            <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
              {icon}
            </div>
          </motion.div>
          <motion.div className="text-center md:text-left">
            <h2 className="text-base text-white text-bold leading-[20px] tracking-[-4%]">
              {title}
            </h2>
          </motion.div>
          <motion.div className="flex-1 text-center md:text-left text-[15px] md:text-base text-white font-thin leading-[20px] tracking-[-4%]">
            <p>{description}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
