"use client";

import { useState, useMemo } from "react";
import { ChevronRight, ChevronLeft, Search, Filter, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    id: "qa-engineer-avidus",
    title: "Quality Assurance Engineer",
    company: "Abydos Interactive",
    duration: "January 2025 - September 2025",
    excerpt:
      "Led comprehensive QA and testing initiatives across multiple platforms",
    icon: Briefcase,
    category: "Quality Assurance",
  },
  {
    id: "product-designer-sdet-avidus",
    title: "Product Designer & SDET",
    company: "Avidus Interactive",
    duration: "October 2025 - Present",
    excerpt: "Architect complete product design and quality assurance strategy",
    icon: Briefcase,
    category: "Design & Engineering",
  },
];

const categories = ["All", "Quality Assurance", "Design & Engineering"];

export default function ExperienceSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const filteredExperiences = useMemo(() => {
    return experienceData.filter((exp) => {
      const matchesSearch =
        exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || exp.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCardClick = (id) => {
    router.push(`/experience/${id}`);
  };

  return (
    <div className="flex sidebar-scrollbar">
      <div
        className={`fixed lg:sticky left-0 top-0 h-screen bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-gray-900 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-64 sm:w-72" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-3 space-y-2 border-b border-gray-200 sm:p-4 dark:border-slate-800 sm:space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 sm:text-base dark:text-white">
                Experience
              </span>
              <button
                onClick={toggleSidebar}
                className="p-1.5 transition-colors rounded-lg shrink-0 hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-slate-300" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute w-3.5 h-3.5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2 dark:text-slate-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Search experience..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-8 pr-8 text-xs text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg sm:text-sm dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-800 dark:focus:ring-blue-400 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="flex items-center justify-between w-full px-3 py-2 transition-colors bg-gray-100 border border-gray-300 rounded-lg dark:bg-slate-900 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-800"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-slate-300" />
                  <span className="text-xs font-medium text-gray-900 truncate sm:text-sm dark:text-white">
                    {selectedCategory}
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-slate-300 shrink-0" />
              </button>

              {showCategoryDropdown && (
                <div className="absolute left-0 right-0 z-50 mt-1 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg top-full dark:bg-slate-900 dark:border-slate-700">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-3 space-y-2 sm:p-4 sm:space-y-3">
              {filteredExperiences.length > 0 ? (
                filteredExperiences.map((exp) => {
                  const Icon = exp.icon;
                  const isActive = pathname === `/experience/${exp.id}`;
                  return (
                    <div key={exp.id}>
                      <button
                        onClick={() => handleCardClick(exp.id)}
                        className={`w-full text-left p-2.5 sm:p-3 rounded-lg transition-colors duration-200 group ${
                          isActive
                            ? "bg-black dark:bg-white text-white dark:text-black"
                            : "hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <div className="flex items-start gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                          <Icon
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 ${
                              isActive
                                ? "text-white dark:text-black"
                                : "text-gray-600 dark:text-slate-400"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-semibold text-xs sm:text-sm transition-colors ${
                                isActive
                                  ? "text-white dark:text-black"
                                  : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                              }`}
                            >
                              {exp.title}
                            </h3>
                            <p
                              className={`text-xs mt-0.5 truncate ${
                                isActive
                                  ? "text-gray-300 dark:text-gray-700"
                                  : "text-gray-600 dark:text-slate-400"
                              }`}
                            >
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <p
                          className={`text-xs line-clamp-2 ml-6 sm:ml-7 ${
                            isActive
                              ? "text-gray-300 dark:text-gray-700"
                              : "text-gray-500 dark:text-slate-400"
                          }`}
                        >
                          {exp.excerpt}
                        </p>
                        <span
                          className={`inline-block mt-1.5 sm:mt-2 ml-6 sm:ml-7 text-xs font-medium px-2 py-0.5 rounded ${
                            isActive
                              ? "bg-white dark:bg-black text-black dark:text-white"
                              : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300"
                          }`}
                        >
                          {exp.category}
                        </span>
                      </button>
                      <hr className="mt-2 border-gray-200 sm:mt-3 dark:border-slate-800" />
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center">
                  <p className="text-xs text-gray-500 sm:text-sm dark:text-slate-400">
                    No experience found
                  </p>
                </div>
              )}
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

function ChevronDown(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
