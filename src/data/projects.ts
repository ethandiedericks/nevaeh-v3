export interface ProjectImage {
  src: string;
  alt?: string;
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  intro: string;
  body: string;
  benefits: string[];
  conclusion: string;
  imagesLeft?: ProjectImage[];
  imagesRight?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "it-support-ec",
    category: "Website Development",
    title: "IT Support EC",
    intro:
      "Nevaeh Solutions proudly designed and developed a sleek informational website for IT Support EC, a South Africa-based IT service provider. This project demonstrates our ability to create clean, responsive, and business-oriented websites tailored to the tech industry's needs. The platform effectively presents IT Support EC’s core offerings and serves as a digital front door for client engagement.",
    body: "The IT Support EC website was built as a landing page to highlight the company's services and enhance its online presence. Developed using Next.js 15 and styled with Tailwind CSS, the site prioritizes performance, mobile responsiveness, and clarity. It’s an ideal digital brochure for businesses looking to understand IT Support EC’s capabilities at a glance. Key features include:",
    benefits: [
      "Service-Focused Layout: Highlights the company’s IT solutions, such as technical support, cloud services, and network management.",
      "Optimized Responsiveness: Fully responsive across devices, providing users with a seamless experience on mobile, tablet, and desktop.",
      "Modern Tech Stack: Built with Next.js 15 and Tailwind CSS for fast loading, clean UI, and scalability.",
      "Strong Visual Identity: Consistent use of brand colors, logo, and tone to reinforce professionalism and trust.",
      "Simple Navigation: Clear calls to action and contact options to help users connect with the business easily.",
    ],
    conclusion:
      "Through close collaboration with the IT Support EC team, we delivered a lightweight, fast, and informative site that supports their business goals. The final product stands as a reliable, modern web presence that reflects their values and commitment to client satisfaction.",
    imagesLeft: [
      {
        src: "/projects/itsupport-screen-1.avif",
        alt: "Homepage desktop view",
      },
    ],
    imagesRight: [
      { src: "/projects/itsupport-mockup.png", alt: "Mobile menu" },
      {
        src: "/projects/itsupport-screen-2.avif",
        alt: "Homepage desktop view 2",
      },
      { src: "/projects/itsupport-screen-3.avif", alt: "Mobile menu" },
      { src: "/projects/itsupport-screen-4.avif", alt: "About screen" },
      {
        src: "/projects/itsupport-screen-5.avif",
        alt: "Why Choose Us section",
      },
    ],
  },

  {
    slug: "liam-graham-psychometry",
    category: "Website Development",
    title: "Liam Graham Psychometry",
    intro:
      "Nevaeh Solutions created a full-featured website for Liam Graham Psychometry, a private psychometry practice in South Africa. This project showcases our skill in delivering secure, informative, and highly accessible websites for professionals in the mental health space. The site clearly communicates the range of services and provides a trusted digital experience for prospective clients.",
    body: "This website was developed to support the professional practice of Liam Graham, offering services including psychometric assessments, school readiness evaluations, and career guidance. Built using Next.js and Tailwind CSS, the site is fully responsive, SEO-optimized, and features enhanced security with CAPTCHA and a secure email server. Key features include:",
    benefits: [
      "Detailed Service Sections: Clearly outlines each assessment offering, helping clients understand the value of each service.",
      "Secure Communication: Includes CAPTCHA and a secure mail server to protect client inquiries and ensure confidentiality.",
      "Responsive Design: Fully optimized for mobile, tablet, and desktop experiences, enhancing user accessibility.",
      "Professional Aesthetic: Clean and trustworthy design that aligns with the mental health sector’s need for clarity and calm.",
      "Booking Enablement: A clear call-to-action system encouraging contact, with highlighted options for a free 15-minute consultation.",
    ],
    conclusion:
      "We worked closely with Liam Graham to reflect the tone and values of the practice in a digital format. The result is a secure, visually clear, and functionally effective site that supports client education and professional outreach.",
    imagesLeft: [
      {
        src: "/projects/liamgrahampsychometry-screen-1.avif",
        alt: "Homepage desktop",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-2.avif",
        alt: "Guidance section",
      },
    ],
    imagesRight: [
      {
        src: "/projects/liamgrahampsychometry-mockup.png",
        alt: "Mobile homepage",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-3.avif",
        alt: "Mobile homepage",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-4.avif",
        alt: "Assessment services",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-5.avif",
        alt: "Appointment booking",
      },
    ],
  },

  {
    slug: "john-b-scott-attorneys",
    category: "Mobile App Development",
    title: "John B. Scott Attorneys",
    intro:
      "Nevaeh Solutions developed a powerful mobile application for John B. Scott Attorneys, transforming their Road Accident Fund claims process into a fully digital, client-first experience. This solution highlights our ability to build scalable, secure mobile tools that enhance client accessibility and reduce operational complexity for law firms.",
    body: "The John B. Scott Attorneys app replaces a manual, paperwork-heavy claims process with a streamlined, user-friendly mobile experience. Built using Flutter and Firebase, the app enables users to submit claims, receive updates via push notifications, and track their progress in real time. An integrated admin dashboard allows the firm’s legal team to manage claims efficiently. Key features include:",
    benefits: [
      "Claims Automation: Digitizes the claims consultation workflow, eliminating lengthy paper forms.",
      "Claim Tracking: Clients can view real-time updates on the progress of their case via the app.",
      "Push Notifications: Keeps users informed of claim status changes or messages from the legal team.",
      "Admin Dashboard: A secure backend interface where staff can manage and respond to claim submissions.",
      "Cross-Platform Support: Built with Flutter for both Android and iOS compatibility, ensuring wide user access.",
    ],
    conclusion:
      "Nevaeh Solutions collaborated with John B. Scott Attorneys to build a robust, mobile-first tool tailored to their legal processes. By combining a sleek frontend with a scalable Firebase backend, we delivered a solution that significantly improves both client engagement and internal efficiency.",
    imagesLeft: [],
    imagesRight: [
      { src: "/projects/johnscott-mockup.png", alt: "Mockup" },
      { src: "/projects/johnscott-screens.png", alt: "Dashboard screen" },
    ],
  },
];
