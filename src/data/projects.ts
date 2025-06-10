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
      "Nevaeh Solutions proudly designed and developed the website for IT Support EC, a leading IT support provider based in South Africa. This project showcases our expertise in creating professional, user-centric, and visually appealing websites tailored to the needs of businesses in the technology sector. The IT Support EC website was crafted to highlight their comprehensive IT services, enhance their online presence, and provide an intuitive experience for their clients.",
    body: "The IT Support EC website serves as a digital hub for a company specializing in managed IT services, cybersecurity, and technical support for businesses in the Eastern Cape region. Our goal was to create a clean, modern, and responsive website that reflects IT Support EC’s professionalism and commitment to excellence while ensuring accessibility and ease of navigation for users. Key features of the website include:",
    benefits: [
      "Clear Service Showcase: A dedicated services section that outlines IT Support EC’s offerings, such as network management, cloud solutions, and cybersecurity, presented in an organized and engaging format.",
      "User-Friendly Design: A responsive layout optimized for desktop, tablet, and mobile devices, ensuring seamless access for all users.",
      "Call-to-Action Integration: Strategically placed contact forms and buttons to encourage client inquiries and drive business engagement.",
      "SEO Optimization: Implementation of search engine optimization best practices to improve visibility and attract organic traffic from businesses seeking IT solutions.",
      "Professional Branding: A sleek design incorporating IT Support EC’s brand colors, logo, and imagery to reinforce their identity as a trusted IT partner.",
    ],
    conclusion:
      "Nevaeh Solutions collaborated closely with IT Support EC to understand their business objectives and target audience. We utilized modern web development technologies to deliver a fast, secure, and scalable website. The project was completed on time and within budget, resulting in a platform that has strengthened IT Support EC’s ability to connect with clients and showcase their expertise.",
    imagesLeft: [
      {
        src: "/projects/itsupport-screen-1.png",
        alt: "Homepage desktop view",
      },
    ],
    imagesRight: [
      { src: "/projects/itsupport-mockup.png", alt: "Mobile menu" },
      {
        src: "/projects/itsupport-screen-2.png",
        alt: "Homepage desktop view 2",
      },
      { src: "/projects/itsupport-screen-3.png", alt: "Mobile menu" },
      { src: "/projects/itsupport-screen-4.png", alt: "About screen" },
      {
        src: "/projects/itsupport-screen-5.png",
        alt: "Why Choose Us section",
      },
    ],
  },

  {
    slug: "liam-graham-psychometry",
    category: "Website Development",
    title: "Liam Graham Psychometry",
    intro:
      "Nevaeh Solutions designed and developed the website for Liam Graham Psychometry, a professional psychometry practice based in South Africa. This project highlights our ability to create tailored, user-friendly, and professional websites for specialized service providers in the mental health and assessment sector. The website effectively showcases Liam Graham Psychometry’s expertise in psychometric assessments while ensuring an accessible and engaging experience for clients.",
    body: "The Liam Graham Psychometry website serves as a digital platform for a psychometrist specializing in cognitive ability evaluations, ADHD screening, school readiness, career guidance, and more. Our goal was to create a clean, modern, and responsive website that reflects the practice’s professionalism and commitment to personalized client care. Key features include:",
    benefits: [
      "Clear Service Showcase: A structured layout detailing services like scholastic screening, special school placement, and career assessments, making it easy for clients to understand offerings.",
      "Responsive Design: Optimized for seamless navigation across desktop, tablet, and mobile devices, ensuring accessibility for all users.",
      "User-Friendly Navigation: Intuitive menus and contact forms to facilitate client inquiries and appointment bookings, with a free 15-minute consultation option highlighted.",
      "SEO Optimization: Built with search engine best practices to enhance visibility for individuals seeking psychometric services in South Africa.",
      "Professional Branding: A minimalist design incorporating Liam Graham Psychometry’s branding, fostering trust and credibility.",
    ],
    conclusion:
      "Nevaeh Solutions collaborated closely with Liam Graham to align the website with their unique requirements to deliver a fast, secure, and scalable platform. The result is a website that enhances client engagement, streamlines communication, and reinforces the practice’s reputation as a trusted psychometry provider.",
    imagesLeft: [
      {
        src: "/projects/liamgrahampsychometry-screen-1.png",
        alt: "Homepage desktop",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-2.png",
        alt: "Guidance section",
      },
    ],
    imagesRight: [
      {
        src: "/projects/liamgrahampsychometry-mockup.png",
        alt: "Mobile homepage",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-3.png",
        alt: "Mobile homepage",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-4.png",
        alt: "Assessment services",
      },
      {
        src: "/projects/liamgrahampsychometry-screen-5.png",
        alt: "Appointment booking",
      },
    ],
  },

  {
    slug: "john-b-scott-attorneys",
    category: "Mobile App Development",
    title: "John B. Scott Attorneys",
    intro:
      "Nevaeh Solutions developed the John B. Scott Attorneys mobile application, designed to streamline the consultation process for clients seeking to claim from the Road Accident Fund in South Africa. This project showcases our expertise in creating user-friendly, efficient mobile applications tailored to the legal sector, enhancing client accessibility and operational efficiency for John B. Scott Attorneys.",
    body: "The John B. Scott Attorneys app is a specialized tool that automates the consultation process for Road Accident Fund claims, allowing clients to efficiently submit claims without lengthy paperwork. Built to reflect the firm’s commitment to accessible legal services, the app offers a seamless, intuitive experience. Key features include:",
    benefits: [
      "Automated Consultation Process: Simplifies claim submissions by guiding users through a streamlined, form-free process, saving time and effort.",
      "User-Friendly Interface: Designed for ease of use, ensuring clients of all technical abilities can navigate and submit claims effortlessly.",
      "Responsive Design: Optimized for iOS devices (requires iOS 13.0 or later), providing a consistent experience across iPhones and iPads.",
      "Secure and Efficient: Built with secure data handling to protect sensitive client information, aligning with privacy standards.",
      "Professional Branding: A minimalist design incorporating John B. Scott Attorney’s branding, fostering trust and credibility.",
    ],
    conclusion:
      "Nevaeh Solutions collaborated with John B. Scott Attorneys to understand their operational needs and client expectations, utilizing [insert technologies used, e.g., Swift, Xcode, Firebase, etc., if applicable] to deliver a robust, scalable, and secure application. The result is a mobile solution that enhances client engagement, reduces administrative burdens, and strengthens the firm’s ability to serve clients efficiently.",
    imagesLeft: [],
    imagesRight: [
      { src: "/projects/johnscott-mockup.png", alt: "Mockup" },
      { src: "/projects/johnscott-screens.png", alt: "Dashboard screen" },
    ],
  },
];
