"use client";

import { useState, useMemo } from "react";
import { Filter, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
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
        className={`fixed lg:sticky left-0 top-0 h-screen bg-primary border-r border-primary transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-64 sm:w-72" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-3 space-y-2 border-b border-primary sm:p-4 sm:space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary sm:text-base">
                Experience
              </span>
              <button
                onClick={toggleSidebar}
                className="p-1.5 transition-colors rounded-lg shrink-0 hover:bg-tertiary lg:hidden"
              >
                <ChevronLeft className="w-4 h-4 text-muted sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute w-3.5 h-3.5 text-muted transform -translate-y-1/2 left-3 top-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search experience..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-8 pr-8 text-xs transition-colors border rounded-lg text-primary placeholder-muted bg-tertiary border-primary sm:text-sm focus:outline-none focus:ring-2 focus:ring-strong"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="flex items-center justify-between w-full px-3 py-2 transition-colors border rounded-lg bg-tertiary border-primary hover:bg-badge"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted" />
                  <span className="text-xs font-medium truncate text-primary sm:text-sm">
                    {selectedCategory}
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted shrink-0" />
              </button>

              {showCategoryDropdown && (
                <div className="absolute left-0 right-0 z-50 mt-1 overflow-hidden border rounded-lg shadow-lg bg-card border-primary top-full">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-inverse text-inverse"
                          : "text-primary hover:bg-tertiary"
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
                            ? "bg-inverse text-inverse"
                            : "hover:bg-tertiary"
                        }`}
                      >
                        <div className="flex items-start gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                          <Icon
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 ${
                              isActive ? "text-inverse" : "text-muted"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-semibold text-xs sm:text-sm transition-colors ${
                                isActive
                                  ? "text-inverse"
                                  : "text-primary group-hover:text-strong"
                              }`}
                            >
                              {exp.title}
                            </h3>
                            <p
                              className={`text-xs mt-0.5 truncate ${
                                isActive ? "text-muted" : "text-muted"
                              }`}
                            >
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <p
                          className={`text-xs line-clamp-2 ml-6 sm:ml-7 ${
                            isActive ? "text-muted" : "text-muted"
                          }`}
                        >
                          {exp.excerpt}
                        </p>
                        <span
                          className={`inline-block mt-1.5 sm:mt-2 ml-6 sm:ml-7 text-xs font-medium px-2 py-0.5 rounded ${
                            isActive
                              ? "bg-primary text-inverse"
                              : "bg-badge text-primary"
                          }`}
                        >
                          {exp.category}
                        </span>
                      </button>
                      <hr className="mt-2 border-primary sm:mt-3" />
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center">
                  <p className="text-xs text-muted sm:text-sm">
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
