import Image from "next/image";

import CTA from "@/assets/images/homepage/nevaeh-solutions-cta-background-image.avif";
import Link from "next/link";
import GradientButton from "../GradientButton";
import { MobileCTA } from "./mobile/MobileCTA";

export const CTASection = () => {
  return (
    <>
      <MobileCTA />
      <section className="hidden md:block">
        <div className="container mx-auto">
          <div className="section-spacing">
            <header className="text-center items-center">
              <h1 className="section-title">Ready to Start Your Project?</h1>
              <p className="mt-4 text-base text-white font-thin leading-[20px] tracking-[-4%]">
                Let&apos;s discuss how we can help bring your vision to life
                with our expertise in digital solutions.
              </p>
            </header>
            <figure className="items-center justify-center">
              <Image
                src={CTA}
                alt="Nevaeh Solutions Call To Action"
                width={1440}
                height={713}
              />
            </figure>
            <footer className="flex justify-center items-center">
              <Link
                href="/contact"
                passHref
                aria-label="Start your project with Nevaeh Solutions"
              >
                <GradientButton text="Start Your Project" />
              </Link>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};
