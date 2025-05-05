"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="text-center rounded-[0.938rem] p-2 sm:p-4"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-[0.938rem] border overflow-hidden p-4 sm:p-6"
        initial={{ borderColor: "rgba(255, 255, 255, 0)" }}
        animate={{
          borderColor: isHovered
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-[0.938rem] mb-3 sm:mb-4 mx-auto"
            animate={{
              border: isHovered
                ? "1px solid rgba(255, 255, 255, 0)"
                : "1px solid rgba(255, 255, 255, 1)",
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>

          <h2>{title}</h2>

          <p>{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
