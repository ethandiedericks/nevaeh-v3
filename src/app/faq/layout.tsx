import { Metadata } from "next";
import Script from "next/script";

// Structured data for FAQPage schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Nevaeh Solutions provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevaeh Solutions provides end-to-end software development services, specializing in web and mobile application development. We offer innovative solutions tailored to elevate your business through custom software that addresses your specific needs and challenges. Our team of experts handles the entire development lifecycle from conceptualization to deployment and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Nevaeh Solutions located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevaeh Solutions (Pty) Ltd is based in South Africa. As a local company, we understand the unique needs of South African businesses while maintaining global development standards and practices.",
      },
    },
    {
      "@type": "Question",
      name: "How experienced is your development team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our development team consists of seasoned professionals with extensive experience in creating enterprise-grade software solutions. Each team member is specialized in their respective technology stack and follows industry best practices to deliver high-quality, scalable applications that stand the test of time.",
      },
    },
    {
      "@type": "Question",
      name: "What is your software development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our development process follows industry standard methodologies divided into several key phases: requirement gathering and analysis, planning, design, development, testing, deployment, and maintenance. We work in short iterations, regularly testing work results and incorporating customer feedback to ensure the final product meets all specifications while maintaining high quality.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical software development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary significantly based on the complexity, scope, and specific requirements. Simple applications may take a few weeks to develop, while more complex enterprise solutions could require several months. After evaluating your project requirements, we provide you with a precise estimated timeframe with specific milestones.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge to work with your development team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you don't need to be technically proficient. Our role is to translate your business needs into technical solutions. You simply need to have a clear vision of what objectives you want to achieve with the software. We handle all technical aspects and explain complex concepts in accessible terms throughout the development process.",
      },
    },
    {
      "@type": "Question",
      name: "How do you determine the cost of software development projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We determine costs based on several factors, including project complexity, the required features, the technology stack, and the estimated development hours. Our pricing model is transparent, with costs typically calculated based on hourly rates depending on the technologies utilized and the experience level of the specialists involved.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer flexible payment options for development projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer various payment structures to accommodate different client needs and project types. These may include milestone-based payments, monthly retainers for ongoing work, or custom arrangements based on your specific situation. We'll discuss payment options during our initial consultations.",
      },
    },
    {
      "@type": "Question",
      name: "What programming languages and technologies do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our development team is proficient in a wide range of programming languages and frameworks for both web and mobile development. For web applications, we work with HTML, CSS, JavaScript, and various backend technologies. For mobile applications, we develop using native languages like Swift, Objective-C, Java, and Kotlin, as well as cross-platform frameworks such as React Native, Flutter, and Xamarin.",
      },
    },
    {
      "@type": "Question",
      name: "What types of applications can you develop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop various types of applications, including: Custom web applications, E-commerce platforms, Enterprise management systems, Native mobile applications for iOS and Android, Cross-platform mobile applications, Progressive web applications (PWAs), API integrations and middleware solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms do you develop mobile applications for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop mobile applications for all major platforms, including iOS and Android. Depending on your specific needs and target audience, we can recommend either native app development (optimized for a specific platform) or cross-platform solutions that work across multiple operating systems.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure the quality of your software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality is our top priority. We implement comprehensive testing methodologies throughout the development process, including unit testing, integration testing, and user acceptance testing. We conduct thorough quality assurance to identify and fix bugs, errors, and inconsistencies before deployment. Our development approach includes regular code reviews and adherence to coding standards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you test applications across different devices and browsers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we conduct extensive compatibility testing across different devices, screen sizes, browsers, and operating system versions to ensure your application functions correctly in all environments. This comprehensive testing approach helps identify and resolve any platform-specific issues before launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support and maintenance after the project is completed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer ongoing technical support and maintenance services for all applications we develop. Our support packages can include bug fixes, security updates, performance optimizations, and system monitoring to ensure your application continues to run smoothly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you enhance or update existing applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can enhance your software with new features, integrations, or improvements based on evolving business needs or user feedback. We can also update existing applications to incorporate the latest technologies, security standards, or design trends.",
      },
    },
    {
      "@type": "Question",
      name: "How do you address security concerns in software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Security is integrated into every stage of our development process. We implement industry-standard security practices, conduct regular security audits, and follow secure coding guidelines. Our applications incorporate data encryption, secure authentication mechanisms, and protection against common vulnerabilities.",
      },
    },
    {
      "@type": "Question",
      name: "Does your development process comply with industry regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we stay informed about relevant industry regulations and ensure our development practices align with necessary compliance requirements. Depending on your industry, we can incorporate specific compliance measures for standards such as GDPR, POPIA, PCI DSS, or other regulatory frameworks applicable to your business.",
      },
    },
    {
      "@type": "Question",
      name: "How involved will I be in the development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We believe in collaborative development, keeping you informed and involved throughout the process. You'll have regular progress updates, opportunities to provide feedback, and access to project management tools to track development milestones. The level of involvement can be adjusted based on your preferences and availability.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle changes to project requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We understand that requirements may evolve during development. We implement an agile approach that accommodates reasonable changes while maintaining project momentum. Changes are evaluated for their impact on timeline, scope, and budget, with transparent discussions about any adjustments needed.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title:
    "FAQ | Nevaeh Solutions | Your Questions Answered on Software Development",
  description:
    "Find answers to common questions about Nevaeh Solutions' software development services, including web and mobile app development, pricing, processes, and support in South Africa.",
  keywords: [
    "software development FAQ",
    "web application development",
    "mobile app development",
    "custom software solutions",
    "South Africa software development",
    "end-to-end development services",
    "software project pricing",
    "development process",
    "application maintenance",
    "software security",
    "compliance in software development",
    "agile development",
    "client collaboration",
    "Nevaeh Solutions FAQ",
  ],
  openGraph: {
    title: "Nevaeh Solutions | FAQ on Software Development Services",
    description:
      "Explore answers to frequently asked questions about our web and mobile development services, pricing, processes, and more.",
    url: `${process.env.NEXT_PUBLIC_OG_IMAGE_URL}`,
  },
  twitter: {
    title: "Nevaeh Solutions | FAQ on Software Development Services",
    description:
      "Get answers to your questions about our software development services, from project timelines to security and support.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/faq`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
