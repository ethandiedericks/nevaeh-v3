import Link from "next/link";

import { pricingData } from "@/pricing";
import { TickIcon } from "@/components/Icons";
import GradientButton from "@/components/GradientButton";

export const MobilePricing = () => {
  const tabs = [
    { id: "single-page", label: "Single Page Website" },
    { id: "5-plus-page", label: "5+ Page Website" },
    { id: "web-app", label: "Web Application" },
    { id: "mobile-app", label: "Mobile Application" },
  ];

  return (
    <div className="md:hidden min-h-screen text-white">
      <div className="px-4 pt-10 flex flex-col items-center">
        <h1 className="page-title">
          Choose the Perfect Service Option for Your Business
        </h1>

        {/* Render each pricing category sequentially */}
        {tabs.map((tab, tabIndex) => (
          <div key={tab.id} className="w-full mb-12">
            {/* Tab label as heading */}
            <div className="text-center px-6 py-3 rounded-[0.625rem] bg-transparent border border-gray-600 mb-6">
              <h2 className="tab-label">{tab.label}</h2>
            </div>

            {/* Pricing items */}
            <div className={`w-full table-gradient-${tabIndex} px-4 py-6`}>
              {pricingData[tab.id as keyof typeof pricingData].map(
                (item, index) => (
                  <div
                    key={index}
                    className="mb-4 border-b border-green-900/30 pb-4 last:border-b-0"
                  >
                    <div className="flex items-start mb-1">
                      <TickIcon
                        size={18}
                        className="text-white mt-1 mr-2 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="font-thin">{item.service}</div>
                        <div className="text-xs text-gray-400 mt-1 italic">
                          {"("}
                          {item.features}
                          {")"}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-thin">{item.price}</div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}

        <div className="mb-10">
          <Link
            href={"/contact"}
            passHref
            aria-label="Start your project with Nevaeh Solutions"
          >
            <GradientButton text="Get Started" />
          </Link>
        </div>
      </div>
    </div>
  );
};
