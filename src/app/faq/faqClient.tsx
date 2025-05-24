"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const allFaqs = [
  {
    category: "General Company Questions",
    faqs: [
      {
        question: "What services does Nevaeh Solutions provide?",
        answer:
          "Nevaeh Solutions provides end-to-end software development services, specializing in web and mobile application development. We offer innovative solutions tailored to elevate your business through custom software that addresses your specific needs and challenges. Our team of experts handles the entire development lifecycle from conceptualization to deployment and maintenance.",
      },
      {
        question: "Where is Nevaeh Solutions located?",
        answer:
          "Nevaeh Solutions (Pty) Ltd is based in South Africa. As a local company, we understand the unique needs of South African businesses while maintaining global development standards and practices.",
      },
      {
        question: "How experienced is your development team?",
        answer:
          "Our development team consists of seasoned professionals with extensive experience in creating enterprise-grade software solutions. Each team member is specialized in their respective technology stack and follows industry best practices to deliver high-quality, scalable applications that stand the test of time.",
      },
    ],
  },
  {
    category: "Project Development Process",
    faqs: [
      {
        question: "What is your software development process?",
        answer:
          "Our development process follows industry standard methodologies divided into several key phases: requirement gathering and analysis, planning, design, development, testing, deployment, and maintenance. We work in short iterations, regularly testing work results and incorporating customer feedback to ensure the final product meets all specifications while maintaining high quality.",
      },
      {
        question: "How long does a typical software development project take?",
        answer:
          "Project timelines vary significantly based on the complexity, scope, and specific requirements. Simple applications may take a few weeks to develop, while more complex enterprise solutions could require several months. After evaluating your project requirements, we provide you with a precise estimated timeframe with specific milestones.",
      },
      {
        question:
          "Do I need technical knowledge to work with your development team?",
        answer:
          "No, you don't need to be technically proficient. Our role is to translate your business needs into technical solutions. You simply need to have a clear vision of what objectives you want to achieve with the software. We handle all technical aspects and explain complex concepts in accessible terms throughout the development process.",
      },
    ],
  },
  {
    category: "Cost and Pricing",
    faqs: [
      {
        question:
          "How do you determine the cost of software development projects?",
        answer:
          "We determine costs based on several factors, including project complexity, the required features, the technology stack, and the estimated development hours. Our pricing model is transparent, with costs typically calculated based on hourly rates depending on the technologies utilized and the experience level of the specialists involved.",
      },
      {
        question:
          "Do you offer flexible payment options for development projects?",
        answer:
          "Yes, we offer various payment structures to accommodate different client needs and project types. These may include milestone-based payments, monthly retainers for ongoing work, or custom arrangements based on your specific situation. We'll discuss payment options during our initial consultations.",
      },
    ],
  },
  {
    category: "Technical Questions",
    faqs: [
      {
        question:
          "What programming languages and technologies do you work with?",
        answer:
          "Our development team is proficient in a wide range of programming languages and frameworks for both web and mobile development. For web applications, we work with HTML, CSS, JavaScript, and various backend technologies. For mobile applications, we develop using native languages like Swift, Objective-C, Java, and Kotlin, as well as cross-platform frameworks such as React Native, Flutter, and Xamarin.",
      },
      {
        question: "What types of applications can you develop?",
        answer:
          "We develop various types of applications, including: Custom web applications, E-commerce platforms, Enterprise management systems, Native mobile applications for iOS and Android, Cross-platform mobile applications, Progressive web applications (PWAs), API integrations and middleware solutions.",
      },
      {
        question: "Which platforms do you develop mobile applications for?",
        answer:
          "We develop mobile applications for all major platforms, including iOS and Android. Depending on your specific needs and target audience, we can recommend either native app development (optimized for a specific platform) or cross-platform solutions that work across multiple operating systems.",
      },
    ],
  },
  {
    category: "Quality Assurance and Testing",
    faqs: [
      {
        question: "How do you ensure the quality of your software?",
        answer:
          "Quality is our top priority. We implement comprehensive testing methodologies throughout the development process, including unit testing, integration testing, and user acceptance testing. We conduct thorough quality assurance to identify and fix bugs, errors, and inconsistencies before deployment. Our development approach includes regular code reviews and adherence to coding standards.",
      },
      {
        question:
          "Do you test applications across different devices and browsers?",
        answer:
          "Yes, we conduct extensive compatibility testing across different devices, screen sizes, browsers, and operating system versions to ensure your application functions correctly in all environments. This comprehensive testing approach helps identify and resolve any platform-specific issues before launch.",
      },
    ],
  },
  {
    category: "Post-Development Support",
    faqs: [
      {
        question:
          "Do you provide support and maintenance after the project is completed?",
        answer:
          "Absolutely. We offer ongoing technical support and maintenance services for all applications we develop. Our support packages can include bug fixes, security updates, performance optimizations, and system monitoring to ensure your application continues to run smoothly.",
      },
      {
        question: "Can you enhance or update existing applications?",
        answer:
          "Yes, we can enhance your software with new features, integrations, or improvements based on evolving business needs or user feedback. We can also update existing applications to incorporate the latest technologies, security standards, or design trends.",
      },
    ],
  },
  {
    category: "Security and Compliance",
    faqs: [
      {
        question:
          "How do you address security concerns in software development?",
        answer:
          "Security is integrated into every stage of our development process. We implement industry-standard security practices, conduct regular security audits, and follow secure coding guidelines. Our applications incorporate data encryption, secure authentication mechanisms, and protection against common vulnerabilities.",
      },
      {
        question:
          "Does your development process comply with industry regulations?",
        answer:
          "Yes, we stay informed about relevant industry regulations and ensure our development practices align with necessary compliance requirements. Depending on your industry, we can incorporate specific compliance measures for standards such as GDPR, POPIA, PCI DSS, or other regulatory frameworks applicable to your business.",
      },
    ],
  },
  {
    category: "Project Management and Communication",
    faqs: [
      {
        question: "How involved will I be in the development process?",
        answer:
          "We believe in collaborative development, keeping you informed and involved throughout the process. You'll have regular progress updates, opportunities to provide feedback, and access to project management tools to track development milestones. The level of involvement can be adjusted based on your preferences and availability.",
      },
      {
        question: "How do you handle changes to project requirements?",
        answer:
          "We understand that requirements may evolve during development. We implement an agile approach that accommodates reasonable changes while maintaining project momentum. Changes are evaluated for their impact on timeline, scope, and budget, with transparent discussions about any adjustments needed.",
      },
    ],
  },
];

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
        <p className="text-white/70 mt-2 text-base">
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
                    className="cursor-pointer border border-white/20 rounded-[30px] p-6 bg-white/5 hover:bg-white/10 transition-all"
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
