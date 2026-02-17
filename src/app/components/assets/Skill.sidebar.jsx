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
  const [isOpen, setIsOpen] = useState(true);
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
          isOpen ? "w-72" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
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

          {/* Skills List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {Object.entries(skillsData).map(([category, tabs]) => (
                <div key={category} className="mb-6">
                  {/* Category Header */}
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category ? null : category,
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2 mb-3 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <h2 className="font-semibold text-gray-900 dark:text-white">
                      {category}
                    </h2>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-600 dark:text-slate-300 transition-transform ${
                        expandedCategory === category ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Category Tabs */}
                  {expandedCategory === category && (
                    <div className="ml-2 space-y-2">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => handleTabClick(category, tab)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium ${
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

                  <hr className="mt-4 border-gray-200 dark:border-slate-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed left-0 z-50 p-2 transition-colors bg-white border border-gray-200 rounded-r-lg top-6 dark:bg-slate-950 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900"
      >
        {isOpen ? (
          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-slate-300" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-slate-300" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 dark:bg-opacity-70 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
