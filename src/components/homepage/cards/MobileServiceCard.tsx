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
    <motion.div className="h-full">
      <motion.div
        className="relative h-full flex flex-col justify-between  gradient-border overflow-hidden p-4 sm:p-6"
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
          border: "1px solid rgba(255, 255, 255, 1)",
          boxShadow: "4px 4px 8px 0px rgba(255, 255, 255, 0.3)",
        }}
        onHoverStart={() => setIsServiceHovered(true)}
        onHoverEnd={() => setIsServiceHovered(false)}
      >
        <motion.div className="flex flex-col p-4 space-y-4">
          <motion.div className="flex flex-row gap-4 justify-start items-center">
            <div className="relative">
              <div className="absolute inset-0 icon-glow"></div>
              <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
                {service.icon}
              </div>
            </div>
            <h2 className="text-lg text-white font-medium leading-[20px] tracking-[-4%]">
              {service.title}
            </h2>
          </motion.div>
          <p className="text-base text-white font-thin leading-[20px] tracking-[-4%]">
            {service.description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default MobileServiceCard;
