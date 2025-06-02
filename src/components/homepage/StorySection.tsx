"use client";
import { useState } from "react";

import { MobileStorySection } from "./mobile/MobileStory";

import { motion } from "framer-motion";
import { CheckIcon } from "../Icons";

export const StorySection = () => {
  const [isMissionHovered, setIsMissionHovered] = useState(false);
  const [isWCUHovered, setIsWCUHovered] = useState(false);

  return (
    <>
      <MobileStorySection />
      <section className="hidden md:block">
        <div className="container mx-auto">
          <div className="section-spacing">
            <header className="text-center items-center">
              <span className="section-tag">Our Story</span>
              <h1 className="section-title">
                Transforming Visions into <br /> Digital Reality
              </h1>
              <p className="mt-4">
                We&apos;re a team of passionate developers, designers, and
                strategists dedicated to creating <br /> exceptional digital
                experiences that drive business growth and user engagement.
              </p>
            </header>
            <div className="grid grid-cols-2 gap-8 justify-center mt-12">
              <motion.article
                className={`text-center rounded-[0.938rem] p-2 sm:p-4 ${isMissionHovered ? "gradient-border-hover" : ""}`}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                  boxShadow: "4px 4px 15px 0px rgb(82, 200, 148, 0.2)",
                }}
                onMouseEnter={() => setIsMissionHovered(true)}
                onMouseLeave={() => setIsMissionHovered(false)}
              >
                <motion.div
                  className={`relative rounded-[0.438rem] overflow-hidden p-4 sm:px-6 sm:py-[0.8rem] max-w-fit ${isMissionHovered ? "" : "gradient-border"}`}
                  animate={{ scale: isMissionHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="card-titles">Our Mission</h2>
                </motion.div>
                <p className="mt-4 text-left px-8 pb-6">
                  We provide innovative, user-focused digital solutions,
                  including custom websites, web/mobile apps, and APIs,
                  delivering fast, secure, and tailored products. Our end-to-end
                  approach handles everything from concept to deployment,
                  empowering businesses to grow and engage their audience.
                </p>
              </motion.article>
              <motion.article
                className={`text-center rounded-[0.938rem] p-2 sm:p-4 ${isWCUHovered ? "gradient-border-hover" : ""}`}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                  boxShadow: "4px 4px 15px 0px rgb(82, 200, 148, 0.2)",
                }}
                onMouseEnter={() => setIsWCUHovered(true)}
                onMouseLeave={() => setIsWCUHovered(false)}
              >
                <motion.div
                  className={`relative rounded-[0.438rem] overflow-hidden p-4 sm:px-6 sm:py-[0.8rem] max-w-fit ${isWCUHovered ? "" : "gradient-border"}`}
                  animate={{ scale: isWCUHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="card-titles">Why Choose Us</h2>
                </motion.div>
                <ul className="mt-4 text-left px-8 pb-6 space-y-2">
                  <li>
                    <CheckIcon className="mr-2 inline-flex" />
                    Customized solutions tailored to your business needs
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-flex" />
                    Agile development methodology for faster delivery
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-flex" />
                    Ongoing support and maintenance
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-flex" />
                    Transparent communication throughout the process
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-flex" />
                    Cutting-edge technologies and best practices
                  </li>
                </ul>
              </motion.article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
