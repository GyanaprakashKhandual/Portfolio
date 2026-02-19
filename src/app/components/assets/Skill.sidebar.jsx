"use client";

import { useState } from "react";
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
        className={`fixed lg:sticky left-0 top-0 h-screen bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-64 sm:w-72" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 sm:p-6 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                Tech & Skills
              </h1>
              <button
                onClick={toggleSidebar}
                className="p-2 transition-colors rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-slate-300" />
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
                    className="flex items-center justify-between w-full px-3 py-2 mb-2 transition-colors rounded-lg sm:mb-3 hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <h2 className="text-sm font-semibold text-gray-900 sm:text-base dark:text-white">
                      {category}
                    </h2>
                    <ChevronRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-slate-300 transition-transform ${
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
                              ? "bg-black dark:bg-white text-white dark:text-black"
                              : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  )}

                  <hr className="mt-3 border-gray-200 sm:mt-4 dark:border-slate-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className={`fixed left-0 z-50 p-1.5 sm:p-2 transition-all bg-white border border-gray-200 rounded-r-lg top-16 sm:top-20 dark:bg-slate-950 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900 ${
          isOpen ? "translate-x-64 sm:translate-x-72" : "translate-x-0"
        }`}
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4 text-gray-600 sm:w-5 sm:h-5 dark:text-slate-300" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-600 sm:w-5 sm:h-5 dark:text-slate-300" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 dark:bg-opacity-70 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
