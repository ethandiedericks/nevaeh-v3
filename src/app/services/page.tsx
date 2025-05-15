import GradientButton from "@/components/GradientButton";
import Image from "next/image";
import DesktopServicesImage from "@/assets/images/services/nevaeh-solutions-desktop-services-image.png";
import { CodeIcon, LaptopIcon } from "@/components/Icons";
import { Globe, Smartphone } from "lucide-react";
import ServicesCard from "@/components/cards/ServicesCard";
import Link from "next/link";
import MobileServicesPage from "@/components/services/MobileServicesPage";

const Services = () => {
  const services = [
    {
      icon: <LaptopIcon />,
      title: "Web Applications",
      description:
        "Custom web applications designed for performance and scalability, tailored to your unique business needs.",
      key_features: [
        "Responsive single-page applications (SPAs)",
        "Progressive web apps (PWAs)",
        "Enterprise web applications",
        "E-commerce platforms",
        "Customer portals and dashboards",
        "CMS and content platforms",
      ],
    },
    {
      icon: <Smartphone />,
      title: "Mobile Application Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on any device.",
      key_features: [
        "iOS & Android native apps",
        "Cross-platform mobile solutions",
        "Mobile app UI/UX design",
        "App performance optimization",
        "Offline functionality",
        "Push notifications and real-time features",
      ],
    },
    {
      icon: <Globe />,
      title: "Landing Pages",
      description:
        "High-converting landing pages optimized for engagement, conversions, and business growth.",
      key_features: [
        "Conversion-optimized design",
        "A/B testing and optimization",
        "Mobile-first approach",
        "Fast loading pages",
        "SEO optimization",
        "Integration with marketing tools",
      ],
    },
    {
      icon: <CodeIcon />,
      title: "Full Scale Websites",
      description:
        "Comprehensive website solutions that combine stunning design with powerful functionality.",
      key_features: [
        "Corporate websites",
        "E-commerce websites",
        "Blogs and publishing platforms",
        "Multilingual websites",
        "Performance optimization",
        "Accessibility compliance",
      ],
    },
  ];

  return (
    <>
      <MobileServicesPage />
      <div className="min-h-screen hidden md:block">
        <div className="max-w-6xl mx-auto pt-10 px-4">
          {/* Hero Section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-[25px] items-start justify-center">
              <h1 className="text-5xl">Comprehensive Software Solutions</h1>
              <p>
                We offer end-to-end development services to bring your digital
                vision to life with precision and excellence.
              </p>
              <Link href={"/contact"} aria-label="Contact Nevaeh Solutions">
                <GradientButton text="Book your consultation" />
              </Link>
            </div>
            <div className="flex items-end justify-end ">
              <Image
                src={DesktopServicesImage}
                alt="Nevaeh Solutions Services Image"
                width={500}
                height={334}
                className="object-cover rounded-[30px]"
              />
            </div>
          </div>

          {/* Services Card Section */}
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 mt-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-full mb-10 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="max-w-[500px] w-full">
                  <ServicesCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    key_features={service.key_features}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
