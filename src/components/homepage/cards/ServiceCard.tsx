"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isServiceHovered, setIsServiceHovered] = useState(false);

  return (
    <motion.article
      className="h-full"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
        boxShadow: "4px 4px 15px 0px rgb(82, 200, 148, 0.2)",
      }}
      onMouseEnter={() => setIsServiceHovered(true)}
      onMouseLeave={() => setIsServiceHovered(false)}
    >
      <motion.div
        className={`relative h-full flex flex-col justify-between rounded-[10px] overflow-hidden p-4 sm:p-6 ${isServiceHovered ? "gradient-border-hover" : "gradient-border"}`}
      >
        <div className="flex flex-col gap-4">
          <header className="inline-flex gap-4 items-center align-middle">
            <div className="relative">
              <div className="absolute inset-0 icon-glow"></div>
              <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
                {icon}
              </div>
            </div>
            <h2 className="text-base leading-[20px] tracking-[-4%] font-medium">
              {title}
            </h2>
          </header>
          <p className="flex-1">{description}</p>
        </div>
      </motion.div>
    </motion.article>
  );
};
