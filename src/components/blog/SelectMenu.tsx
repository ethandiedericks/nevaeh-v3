"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SelectMenuProps {
  onCategoryChange?: (category: string) => void;
}

export default function SelectMenu({ onCategoryChange }: SelectMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const options = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Backend Development",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);

    // Call the parent component's handler function
    if (onCategoryChange) {
      onCategoryChange(option);
    }
  };

  return (
    <div className="relative w-full mt-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-xl font-medium mr-8">Latest Articles</h2>

        {/* Selected option button */}
        <div className="relative">
          <button
            className="relative bg-black bg-opacity-30 text-white px-6 py-2 rounded-[10px] border border-gray-600 flex items-center justify-between w-48"
            onClick={toggleDropdown}
          >
            <span>{selected}</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown menu with green shadow effect - positioned under the button */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-[#000000] to-[#000000]/0 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg shadow-[#528B69] z-50">
              <ul className="p-4 flex flex-col space-y-2">
                {options.map((option) => (
                  <li
                    key={option}
                    className="px-6 py-2 text-base tracking-[-4%] font-thin text-white text-center cursor-pointer border border-white rounded-[10px]"
                    onClick={() => selectOption(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
