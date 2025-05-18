import Link from "next/link";
import GradientButton from "@/components/GradientButton";
import {
  CodeIcon,
  LaptopIcon,
  MobilePhonesIcon,
  WebIcon,
} from "@/components/Icons";
import MobileServiceCard from "../cards/MobileServiceCard";

export const MobileServices = () => {
  const services = [
    {
      icon: <LaptopIcon />,
      title: "Web Applications Development",
      description:
        "Secure, scalable, and tailored web apps built for performance-ideal for e-commerce, booking systems, CRMs, internal tools, and more. Includes responsive UI, admin dashboard, user management, API integration, and full documentation. Automate processes, gain insights, and reduce costs with solutions built around your business.",
    },
    {
      icon: <MobilePhonesIcon />,
      title: "Mobile Application Development",
      description:
        "High-performance native and cross-platform apps for iOS and Android-perfect for e-commerce, booking, social, and service-based platforms. Includes backend integration, push notifications, analytics, and app store launch support. Elevate your brand, engage users, and grow your reach across all devices.",
    },
    {
      icon: <WebIcon />,
      title: "Websites",
      description:
        "Professional, conversion-focused websites that combine beautiful design with powerful functionality. Ideal for businesses, portfolios, blogs, and service providers. Includes custom design, CMS, SEO, performance and security optimization, and lead generation tools. Build trust, attract traffic, and convert visitors with a site that works for your goals.",
    },
    {
      icon: <CodeIcon />,
      title: "API Development",
      description:
        "Robust, secure, and scalable APIs built with .NET to power your apps, websites, and integrations. Ideal for internal tools, mobile apps, third-party services, and enterprise systems. Includes authentication, data validation, documentation, and performance tuning. Enable seamless communication across platforms with reliable backend infrastructure.",
    },
  ];
  return (
    <div className="md:hidden">
      <div className="container mx-auto">
        <div className="section-spacing">
          {/* text wrapper */}
          <div className="">
            <span className="section-tag">Professional Services</span>
            <h1 className="section-title">
              Tailored Solutions for Business Growth
            </h1>
            <p className="mt-4 text-base text-white font-thin leading-[20px] tracking-[-4%]">
              We deliver comprehensive software development services designed to
              address <br /> your specific business challenges and drive
              measurable results.
            </p>
          </div>
          {/* Service Cards */}

          <div className="grid grid-cols-1 gap-4 mt-8">
            {services.map((service, index) => (
              <MobileServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="mt-8 flex justify-center items-center">
            <Link href={"/services"} passHref>
              <GradientButton text="Explore Our Services" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
