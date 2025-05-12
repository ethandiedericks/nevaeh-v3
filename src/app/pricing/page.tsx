"use client";

import GradientButton from "@/components/GradientButton";
import { CheckIcon } from "@/components/Icons";
import { MobilePricing } from "@/components/page-components/pricing/MobilePricingPage";
import { pricingData } from "@/pricing";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("single-page");

  const tabs = [
    { id: "single-page", label: "Single Page Website" },
    { id: "5-plus-page", label: "5+ Page Website" },
    { id: "web-app", label: "Web Application" },
    { id: "mobile-app", label: "Mobile Application" },
  ];

  return (
    <>
      <MobilePricing />
      <div className="hidden min-h-screen text-white md:flex flex-col items-center">
        {/* Main content */}
        <div className="w-full max-w-6xl px-4 pt-10 flex flex-col items-center">
          <h1 className="page-title">
            Choose the Perfect Service Option for Your Business
          </h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 w-full max-w-4xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-1 py-1 rounded-[0.625rem] transition-all relative hover:cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-transparent border border-gray-600"
                    : "bg-transparent border border-gray-600 "
                }`}
              >
                <div
                  className={`w-full relative ${
                    activeTab === tab.id ? "" : "bg-transparent "
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 btn-grad rounded-[0.625rem]"></div>
                  )}
                  <div className="px-[27px] py-[11px] relative z-20 font-thin text-base">
                    {tab.label}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Pricing table using CSS Grid */}
          <div
            className={`w-full max-w-4xl table-gradient-${tabs.findIndex(
              (tab) => tab.id === activeTab
            )} mb-12 p-10`}
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 pb-4 font-medium text-gray-300 border-b border-green-900/30">
              <div>Service</div>
              <div>Price</div>
              <div>Features</div>
            </div>

            {/* Table Content */}
            {pricingData[activeTab as keyof typeof pricingData].map(
              (item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 py-4 items-center border-b border-green-900/30 last:border-b-0"
                >
                  <div className="flex items-center">
                    <CheckIcon size={24} className="text-white mr-4" />
                    <span>{item.service}</span>
                  </div>
                  <div>{item.price}</div>
                  <div>{item.features}</div>
                </div>
              )
            )}
          </div>

          <Link
            href={"/contact"}
            passHref
            aria-label="Start your project with Nevaeh Solutions"
          >
            <GradientButton text="Get Started" />
          </Link>
        </div>
      </div>
    </>
  );
}
