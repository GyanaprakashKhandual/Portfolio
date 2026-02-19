"use client";

import { useState, useMemo } from "react";
import { Filter, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { usePathname } from "next/navigation";

const categories = [
  "All",
  "Development",
  "Performance Testing",
  "Testing",
  "Hacking",
];

export default function ProjectSidebar({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (!project || typeof project !== "object") {
        return false;
      }

      const title = project.title || "";
      const shortDesc = project.shortDesc || "";
      const category = project.category || "";

      const matchesCategory =
        selectedCategory === "All" || category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, projects]);

  return (
    <div className="flex sidebar-scrollbar">
      <div
        className={`sticky bottom-0 h-screen bg-white border-r border-gray-200 top-20 dark:bg-slate-950 dark:border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "w-64 sm:w-72" : "w-0"
        }`}
        style={{
          minHeight: "calc(100vh - 105px)",
          maxHeight: "calc(100vh - 105px)",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="p-3 space-y-2 border-b border-gray-200 sm:p-4 dark:border-slate-800 sm:space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 sm:text-base dark:text-white">
                Projects
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-slate-300" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 dark:text-slate-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full py-2 pl-8 pr-8 text-xs text-gray-900 placeholder-gray-400 transition-colors bg-gray-100 border border-gray-300 rounded-lg sm:text-sm dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-slate-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
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
                  <span className="text-xs font-medium text-gray-900 sm:text-sm dark:text-white">
                    {selectedCategory}
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-slate-300" />
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
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.slug}>
                    <a
                      href={`/projects/${project.slug}`}
                      className={`block p-2.5 sm:p-3 rounded-lg transition-colors duration-200 group ${
                        pathname === `/projects/${project.slug}`
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <h3
                        className={`font-semibold text-xs sm:text-sm transition-colors ${
                          pathname === `/projects/${project.slug}`
                            ? "text-white dark:text-black"
                            : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 line-clamp-2 ${
                          pathname === `/projects/${project.slug}`
                            ? "text-gray-300 dark:text-gray-700"
                            : "text-gray-500 dark:text-slate-400"
                        }`}
                      >
                        {project.shortDesc}
                      </p>
                      <span
                        className={`inline-block mt-1.5 sm:mt-2 text-xs font-medium px-2 py-0.5 sm:py-1 rounded ${
                          pathname === `/projects/${project.slug}`
                            ? "bg-white dark:bg-black text-black dark:text-white"
                            : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300"
                        }`}
                      >
                        {project.category}
                      </span>
                    </a>
                    <hr className="mt-2 border-gray-200 sm:mt-3 dark:border-slate-800" />
                  </div>
                ))
              ) : (
                <div className="py-8 text-center">
                  <p className="text-xs text-gray-500 sm:text-sm dark:text-slate-400">
                    No projects found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
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
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}
