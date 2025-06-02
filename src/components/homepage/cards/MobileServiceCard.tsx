/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}
const MobileServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  return (
    <motion.article className="h-full">
      <motion.div
        className="relative h-full flex flex-col justify-between gradient-border overflow-hidden p-4 sm:p-6"
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
          border: "1px solid rgba(255, 255, 255, 1)",
          boxShadow: "4px 4px 8px 0px rgba(255, 255, 255, 0.3)",
        }}
        onMouseEnter={() => setIsServiceHovered(true)}
        onMouseLeave={() => setIsServiceHovered(false)}
      >
        <div className="flex flex-col p-4 space-y-4">
          <header className="flex flex-row gap-4 justify-start items-center">
            <figure className="relative">
              <div className="absolute inset-0 icon-glow"></div>
              <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
                {service.icon}
              </div>
            </figure>
            <h2 className="mobile-card-title">{service.title}</h2>
          </header>
          <p className="text-base text-white font-thin leading-[20px] tracking-[-4%]">
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
};
export default MobileServiceCard;
