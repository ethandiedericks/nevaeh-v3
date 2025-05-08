/* eslint-disable @typescript-eslint/no-unused-vars */
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
        className="relative h-full flex flex-col justify-between rounded-[0.938rem] border overflow-hidden p-4 sm:p-6"
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
          border: "1px solid rgba(255, 255, 255, 1)",
          boxShadow: "4px 4px 8px 0px rgba(255, 255, 255, 0.3)",
        }}
        onHoverStart={() => setIsValueHovered(true)}
        onHoverEnd={() => setIsValueHovered(false)}
      >
        <motion.div className="space-y-3">
          <motion.div className="border rounded-[0.438rem] p-2 max-w-fit">
            {icon}
          </motion.div>
          <motion.div>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="flex-1">
            <p>{description}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
