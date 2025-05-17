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
        "Web applications	are	browser-based	programs	for	tasks,	services,	or	data	management.	Built with	HTML, CSS, and	JavaScript,	they	offer	user-friendly,	dynamic	interfaces,	integrating	APIs	and	databases	for real-time	functionality,	accessible	across	devices	without	installation.",
    },
    {
      icon: <MobilePhonesIcon />,
      title: "Mobile Application Development",
      description:
        "Mobile application development involves creating software for smartphones and tablets, using platforms like iOS (Swift) and Android (Kotlin/Java). These apps offer intuitive interfaces, leverage device features, and integrate APIs for seamless, high-performance user experiences.",
    },
    {
      icon: <WebIcon />,
      title: "Websites",
      description:
        "Websites are digital platforms hosted on servers, accessible via browsers, built with HTML, CSS, and JavaScript. They provide information, services, or e-commerce, featuring user-friendly designs, responsive layouts, and often integrate APIs for dynamic functionality.",
    },
    {
      icon: <CodeIcon />,
      title: "API Development",
      description:
        "Enterprise API development involves creating secure, scalable application programming interfaces (APIs) to enable seamless data exchange and functionality between enterprise systems, applications, or third-party services. Built with robust frameworks, they ensure high performance, reliability, and compliance with industry standards.",
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
