import { MedalIcon, TimeIcon, UserIcon, ZapIcon } from "@/components/Icons";
import { HomeValueCard } from "../cards/HomeValueCard";

export const MobileValuesSection = () => {
  return (
    <section className="md:hidden">
      <div className="container mx-auto">
        <div className="section-spacing">
          <header>
            <span className="section-tag">Why Work With Us</span>
            <h1 className="section-title">Small Team. Big Impact.</h1>
            <p className="mt-4 text-base text-white font-thin leading-[20px] tracking-[-4%]">
              We’re not an agency. We’re a senior software developer and product
              designer who collaborate closely with every client. You work with
              us directly — no account managers, no layers, no delays.
            </p>
          </header>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="h-full">
              <HomeValueCard
                icon={<UserIcon />}
                title="Client Partnership"
                description="We build lasting relationships based on trust and mutual success."
              />
            </div>
            <div className="h-full">
              <HomeValueCard
                icon={<MedalIcon />}
                title="Excellence"
                description="We're committed to delivering exceptional quality in everything we do."
              />
            </div>
            <div className="h-full">
              <HomeValueCard
                icon={<TimeIcon />}
                title="Reliability"
                description="We deliver on our promises, on time and within budget."
              />
            </div>
            <div className="h-full">
              <HomeValueCard
                icon={<ZapIcon />}
                title="Innovation"
                description="We embrace new technologies and approaches to solve complex problems."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
