"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
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

      return matchesCategory;
    });
  }, [selectedCategory, projects]);

  return (
    <div className="flex sidebar-scrollbar">
      <div
        className="sticky bottom-0 h-screen bg-white border-r border-gray-200 top-20 dark:bg-slate-950 dark:border-slate-800 w-72"
        style={{ minHeight: "calc(100vh - 105px)", maxHeight: "calc(100vh - 105px)" }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 dark:border-slate-800">
            <div className="relative">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="flex items-center justify-between w-full px-3 py-2 transition-colors bg-gray-100 border border-gray-300 rounded-lg dark:bg-slate-900 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-800"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-600 dark:text-slate-300" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {selectedCategory}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600 dark:text-slate-300" />
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
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
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
            <div className="p-4 space-y-3">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.slug}>
                    <a
                      href={`/projects/${project.slug}`}
                      className={`block p-3 rounded-lg transition-colors duration-200 group ${
                        pathname === `/projects/${project.slug}`
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <h3
                        className={`font-semibold text-sm transition-colors ${
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
                        className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${
                          pathname === `/projects/${project.slug}`
                            ? "bg-white dark:bg-black text-black dark:text-white"
                            : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300"
                        }`}
                      >
                        {project.category}
                      </span>
                    </a>
                    <hr className="mt-3 border-gray-200 dark:border-slate-800" />
                  </div>
                ))
              ) : (
                <div className="py-8 text-center">
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    No projects found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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