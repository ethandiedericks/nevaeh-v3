"use client";
import { useState } from "react";

import { motion } from "framer-motion";

interface Concept {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ConceptCard: React.FC<{ concept: Concept }> = ({ concept }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`rounded-[0.9rem] h-full flex-1 values-card-wrapper ${
        isHovered ? "gradient-border-hover" : "gradient-border"
      }`}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
        boxShadow: "4px 4px 15px 0px rgb(82, 200, 148, 0.2)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-row flex-1 gap-8 items-center justify-center p-2">
        <div className="relative">
          <div className="absolute inset-0 icon-glow"></div>
          <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
            {concept.icon}
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-4">
          <h3 className="text-base font-bold">{concept.title}</h3>
          <p className="text-sm font-normal text-white tracking-[-4%] leading-5">
            {concept.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ConceptCard;
