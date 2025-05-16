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
    <motion.div className="h-full">
      <motion.div
        className={`relative h-full flex flex-col justify-between rounded-[10px] overflow-hidden p-4 sm:p-6 ${
          isServiceHovered ? "gradient-border-hover" : "gradient-border"
        }`}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
          boxShadow: "4px 4px 15px 0px rgb(82, 200, 148, 0.2)",
        }}
        onHoverStart={() => setIsServiceHovered(true)}
        onHoverEnd={() => setIsServiceHovered(false)}
      >
        <motion.div className="flex flex-col gap-4">
          <motion.div className="inline-flex gap-4 items-center align-middle">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 icon-glow"></div>
              {/* Icon with a higher z-index to appear above the glow */}
              <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
                {icon}
              </div>
            </div>
            <h2 className="text-base leading-[20px] tracking-[-4%] font-medium">
              {title}
            </h2>
          </motion.div>
          <motion.div className="flex-1">
            <p>{description}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
