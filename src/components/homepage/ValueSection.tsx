import { MedalIcon, TimeIcon, UserIcon, ZapIcon } from "../Icons";
import { ValueCard } from "./cards/ValueCard";

export const ValueSection = () => {
  return (
    <div className="hidden md:block">
      <div className="container mx-auto">
        <div className="section-spacing">
          {/* text wrapper */}
          <div className="text-center items-center">
            <span className="section-tag">Our Core Values</span>
            <h1 className="section-title">
              Driven by Purpose, <br />
              Grounded in Values
            </h1>
            <p className="mt-4">
              These principles guide everything we do and define how we work
              with our clients.
            </p>
          </div>
          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="h-full">
              <ValueCard
                icon={<UserIcon />}
                title="Client Partnership"
                description="We build lasting relationships based on trust and mutual success."
              />
            </div>
            <div className="h-full">
              <ValueCard
                icon={<MedalIcon />}
                title="Excellence"
                description="We're committed to delivering exceptional quality in everything we do."
              />
            </div>
            <div className="h-full">
              <ValueCard
                icon={<TimeIcon />}
                title="Reliability"
                description="We deliver on our promises, on time and within budget."
              />
            </div>
            <div className="h-full">
              <ValueCard
                icon={<ZapIcon />}
                title="Innovation"
                description="We embrace new technologies and approaches to solve complex problems."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
