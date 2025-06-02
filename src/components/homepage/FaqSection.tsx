"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import GradientButton from "../GradientButton";
import { faqs } from "@/faqs";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="section-spacing container mx-auto">
      <div className="text-center">
        <span className="section-tag">FAQs</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="mt-2 text-white text-left md:text-center">
          Got questions? Here are some of the ones we hear most often.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="cursor-pointer gradient-border p-6 transition-all duration-300 bg-white/5 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[500px] mt-2" : "max-h-0"
                }`}
              >
                <p className="text-sm text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/faq"
          className="underline text-white hover:text-blue-400 transition-colors"
        >
          <GradientButton text="View more FAQs" />
        </Link>
      </div>
    </div>
  );
};
