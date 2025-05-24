"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import WhatsappIcon from "@/assets/images/whatsapp-icon.svg";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/27812799063"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50 flex items-center justify-center rounded-full shadow-lg transition-colors duration-300"
    >
      <motion.div
        className="relative w-12 h-12 md:w-14 md:h-14"
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 whatsapp-icon-glow" />
        {/* Icon */}
        <div className="relative z-10 w-full h-full">
          <Image
            src={WhatsappIcon}
            alt="Fixed WhatsApp Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </a>
  );
};

export default WhatsAppButton;
