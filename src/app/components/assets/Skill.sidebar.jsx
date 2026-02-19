"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const skillsData = {
  Development: [
    "Frontend",
    "Backend",
    "Database",
    "Deployment",
    "Monitoring",
    "Languages",
    "Tools",
  ],
  Testing: ["Functional", "API", "Performance", "Security", "Database"],
  Hacking: ["Social Engineering"],
};

export default function TechSkillsSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState("Development");
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (category, tab) => {
    const slug = tab.toLowerCase().replace(/\s+/g, "-");
    router.push(`/skills/${category.toLowerCase()}/${slug}`);
  };

  const isTabActive = (category, tab) => {
    const slug = tab.toLowerCase().replace(/\s+/g, "-");
    return pathname === `/skills/${category.toLowerCase()}/${slug}`;
  };

  return (
    <div className="flex">
      <div
        className={`fixed lg:sticky left-0 top-0 h-screen bg-primary border-r border-primary transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-64 sm:w-72" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-primary sm:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-primary sm:text-xl">
                Tech & Skills
              </h1>
              <button
                onClick={toggleSidebar}
                className="p-2 transition-colors rounded-lg lg:hidden hover:bg-tertiary"
              >
                <ChevronLeft className="w-5 h-5 text-muted" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-3 sm:p-4">
              {Object.entries(skillsData).map(([category, tabs]) => (
                <div key={category} className="mb-4 sm:mb-6">
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category ? null : category,
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2 mb-2 transition-colors rounded-lg hover:bg-tertiary sm:mb-3"
                  >
                    <h2 className="text-sm font-semibold text-primary sm:text-base">
                      {category}
                    </h2>
                    <ChevronRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-muted transition-transform ${
                        expandedCategory === category ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {expandedCategory === category && (
                    <div className="ml-2 space-y-1 sm:space-y-2">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => handleTabClick(category, tab)}
                          className={`w-full text-left px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm font-medium ${
                            isTabActive(category, tab)
                              ? "bg-inverse text-inverse font-medium"
                              : "text-secondary hover:text-primary hover:bg-tertiary"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  )}

                  <hr className="mt-3 border-primary sm:mt-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className={`fixed left-0 z-50 p-1.5 sm:p-2 transition-all bg-primary border border-primary rounded-r-lg top-16 sm:top-20 hover:bg-tertiary ${
          isOpen ? "translate-x-64 sm:translate-x-72" : "translate-x-0"
        }`}
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4 text-muted sm:w-5 sm:h-5" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted sm:w-5 sm:h-5" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-overlay lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
