"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { allFaqs } from "@/faqs";

export const FaqClient = () => {
  const [openIndex, setOpenIndex] = useState<{
    group: number;
    faq: number;
  } | null>(null);

  return (
    <div className="section-spacing max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl leading-tight tracking-[-4%]">
          Frequently Asked Questions
        </h1>
        <p className="text-white/70 mt-2 text-base ">
          Everything you need to know about working with Nevaeh Solutions.
        </p>
      </div>

      <div className="space-y-10">
        {allFaqs.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-2xl font-semibold mb-4">{group.category}</h2>
            <div className="space-y-4">
              {group.faqs.map((faq, faqIndex) => {
                const isOpen =
                  openIndex?.group === groupIndex &&
                  openIndex?.faq === faqIndex;

                return (
                  <div
                    key={faqIndex}
                    onClick={() =>
                      setOpenIndex(
                        isOpen ? null : { group: groupIndex, faq: faqIndex }
                      )
                    }
                    className="cursor-pointer gradient-border p-6 bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white mb-0">
                        {faq.question}
                      </h3>
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
                      <p className="text-white/70 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
