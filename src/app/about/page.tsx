
import Image from "next/image";
import Link from "next/link";



import GradientButton from "@/components/GradientButton";
import MobileAboutPage from "@/components/about/MobileAboutPage";
import DesktopAboutImage from "@/assets/images/about/nevaeh-solutions-desktop-about-image.png";
import DesktopAboutImage2 from "@/assets/images/about/nevaeh-solutions-desktop-about-image-2.png";
import { CodeIcon, UserIcon, ZapIcon } from "@/components/Icons";
import { Blocks, FastForward, Gem, Lightbulb, Trophy } from "lucide-react";
import { ValueCard } from "@/components/homepage/cards/ValueCard";
import ConceptCard from "@/components/cards/ConceptCard";

const AboutPage = () => {

  const values = [
    {
      icon: <ZapIcon />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage.",
    },
    {
      icon: <UserIcon />,
      title: "Client Partnership",
      description:
        "Your success is our success. We work closely with you to understand your vision and bring it to life.",
    },
    {
      icon: <FastForward />,
      title: "Rapid Delivery",
      description:
        "Our agile approach ensures quick iterations and faster time-to-market without compromising quality.",
    },
    {
      icon: <Lightbulb />,
      title: "Creative Solutions",
      description:
        "We think outside the box to solve complex challenges with innovative, scalable solutions.",
    },
  ];

  const approach = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your vision, goals, and requirements through in-depth consultation.",
    },
    {
      title: "Design & Development",
      description:
        "Our iterative development process ensures transparency and continuous improvement.",
    },
    {
      title: "Launch & Support",
      description:
        "We ensure smooth deployment and provide ongoing support for your success.",
    },
  ];

  const concepts = [
    {
      icon: <CodeIcon />,
      title: "Full-Stack Development",
      description:
        "Expertise in both front-end and back-end development, creating seamless, end-to-end solutions using modern technologies.",
    },
    {
      icon: <Blocks />,
      title: "Architecture Design",
      description:
        "Building scalable, maintainable systems that grow with your business needs and handle increasing demands.",
    },
    {
      icon: <Gem />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes to ensure robust, reliable software solutions.",
    },
    {
      icon: <Trophy />,
      title: "Project Management",
      description:
        "Efficient project delivery with clear communication and milestone-based development approach.",
    },
  ];
  return (
    <>
      <MobileAboutPage />
      <div className="min-h-screen hidden md:block">
        <div className="max-w-6xl mx-auto pt-10 px-4">
          {/* header */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-[25px] items-start justify-center">
              <h1 className="text-5xl">
                Building Tomorrow&apos;s Digital Solutions Today
              </h1>
              <p>
                As a dynamic new software development company, we combine fresh
                perspectives with technical expertise to deliver innovative
                solutions that drive your business forward.
              </p>
              <Link href={"/contact"} aria-label="Contact Nevaeh Solutions">
                <GradientButton text="Book your consultation" />
              </Link>
            </div>
            <div className="flex items-end justify-end ">
              <Image
                src={DesktopAboutImage}
                alt="Nevaeh Solutions Services Image"
                width={500}
                height={334}
                className="object-cover rounded-[30px]"
              />
            </div>
          </div>
          {/* our vision */}
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="max-w-4xl">
              <h2 className="section-title">Our Vision</h2>
              <p className="text-center mt-5 leading-5">
                We envision a future where businesses of all sizes can harness
                the power of cutting-edge technology to achieve their goals. Our
                mission is to make this vision a reality through innovative
                software solutions and exceptional service.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
          {/* our approach */}
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="max-w-3xl">
              <h2 className="section-title">Our Approach</h2>
              <p className="text-center mt-5 leading-5">
                We follow a structured yet flexible approach to ensure your
                project&apos;s success from concept to completion.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            {approach.map((approach, index) => (
              <div key={index} className="top-bottom-gradient-card">
                <div className="flex flex-col gap-4">
                  <h3 className="text-base font-bold">{approach.title}</h3>
                  <p className="text-sm font-normal text-white tracking-[-4%] leading-5">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 my-20">
            <div className="flex items-start justify-start ">
              <Image
                src={DesktopAboutImage2}
                alt="Nevaeh Solutions Services Image"
                width={500}
                height={334}
                className="object-cover rounded-[30px]"
              />
            </div>
            <div className="flex flex-col gap-[25px] items-start justify-center">
              <h1 className="text-5xl">Expert Solutions, Personal Attention</h1>
              <p>
                As developers with comprehensive expertise, we provide dedicated
                attention to each project while delivering professional,
                full-stack solutions. Working with us means you get undivided
                attention, clear communication, and a team who are fully
                invested in your project&apos;s success. No layers of management
                or communication barriers – just straightforward, efficient
                development.
              </p>
            </div>
          </div>
          {/* Concept Cards */}
          <div className="grid grid-cols-2 gap-4 my-20">
            {concepts.map((concept, index) => (
              <ConceptCard key={index} concept={concept} />
            ))}
          </div>
          {/* cta */}
          <div className="flex flex-col gap-[25px] items-center justify-center my-20">
            <h1 className="text-5xl">Ready to Build Something Amazing?</h1>
            <p>
              Let&apos;s collaborate to bring your digital vision to life with
              innovative solutions tailored to your needs.
            </p>
            <Link
              href={"/contact"}
              aria-label="Start a Conversation with Nevaeh Solutions"
            >
              <GradientButton text="Start a Conversation" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
