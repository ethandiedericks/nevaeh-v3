/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface MobileServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const MobileServiceCard: React.FC<MobileServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  return (
    <motion.div className="h-full">
      <motion.div
        className="relative h-full flex flex-col justify-between rounded-[0.938rem] border overflow-hidden p-4 sm:p-6"
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
          <motion.div>
            <h2>{title}</h2>
          </motion.div>
          <p>{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
