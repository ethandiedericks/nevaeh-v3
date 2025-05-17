import { MobileStoryCard } from "../cards/MobileStoryCard";

export const MobileStorySection = () => {
  return (
    <div className="md:hidden">
      <div className="container mx-auto">
        <div className="section-spacing">
          {/* text wrapper */}
          <div className="">
            <span className="section-tag">Our Story</span>
            <h1 className="section-title">
              Transforming Visions into <br /> Digital Reality
            </h1>
            <p className="mt-4 ml-4 text-base  text-white font-thin leading-[20px] tracking-[-4%]">
              We&apos;re a team of passionate developers, designers, and
              strategists dedicated to creating <br /> exceptional digital
              experiences that drive business growth and user engagement.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <MobileStoryCard benefit="Customized solutions tailored to your business needs" />
            <MobileStoryCard benefit="Agile development methodology for faster delivery" />
            <MobileStoryCard benefit="Ongoing support and maintenance" />
            <MobileStoryCard benefit="Transparent communication throughout the process" />
            <MobileStoryCard benefit="Cutting-edge technologies and best practices" />
          </div>
        </div>
      </div>
    </div>
  );
};
