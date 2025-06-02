"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import GradientButton from "../GradientButton";

const faqs = [
  {
    question: "What types of companies do you work with?",
    answer:
      "We partner with businesses of all sizes — from consultants and startups to enterprise clients — who need reliable, long-term software development support. If your project requires clean architecture, modern tooling, and strategic thinking, we’re a good fit.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in .NET, Angular, and Next.js for enterprise web apps, as well as both native and cross-platform mobile development. We choose tech stacks that are maintainable, scalable, and suited to your unique business case.",
  },
  {
    question: "Can you handle ongoing updates and maintenance?",
    answer:
      "Yes. Most of our clients work with us on a retainer basis. We not only build your product, we maintain it, iterate with you, and ensure it evolves with your business needs.",
  },
  {
    question: "What does your typical development process look like?",
    answer:
      "We start with a strategy call to understand your business goals. From there, we move into design, development, testing, and long-term deployment support — always in close collaboration with your team.",
  },
  {
    question: "Can you modernize or rebuild an existing system?",
    answer:
      "Absolutely. Many of our clients approach us with legacy tools or platforms that need to be modernized. We handle audits, refactors, replatforming, and clean rewrites depending on your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. While we’re based in South Africa, we operate with global standards and collaborate seamlessly with remote teams across time zones.",
  },
  {
    question: "What’s the next step if we want to work with you?",
    answer:
      "Schedule a free strategy call. We’ll discuss your goals, challenges, and how we can support you — then outline the next steps for a successful engagement.",
  },
];

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
