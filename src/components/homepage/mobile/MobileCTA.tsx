import Image from "next/image";
import Link from "next/link";

import GradientButton from "@/components/GradientButton";
import CTA from "@/assets/images/homepage/nevaeh-solutions-mobile-cta-background-image.avif";
export const MobileCTA = () => {
  return (
    <div className="md:hidden">
      <div className="container mx-auto">
        <div className="section-spacing">
          {/* text wrapper */}
          <div className="">
            <h1 className="section-title">Ready to Start?</h1>
            <p className="mt-4 text-base text-white font-thin leading-[20px] tracking-[-4%]">
              Let&apos;s discuss how we can help bring your vision to life with
              our expertise in digital solutions.
            </p>
          </div>
          <div className="items-center justify-center mt-4">
            <Image
              src={CTA}
              alt="Nevaeh Solutions Call To Action"
              width={1440}
              height={713}
              className="w-full h-full"
              priority
            />
          </div>
          <div className=" flex justify-center items-center mt-10">
            <Link
              href={"/contact"}
              passHref
              aria-label="Start your project with Nevaeh Solutions"
            >
              <GradientButton text="Start Your Project" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
