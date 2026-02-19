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
        className={`sticky bottom-0 h-screen bg-primary border-r border-primary top-20 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "w-64 sm:w-72" : "w-0"
        }`}
        style={{
          minHeight: "calc(100vh - 105px)",
          maxHeight: "calc(100vh - 105px)",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="p-3 space-y-2 border-b border-primary sm:p-4 sm:space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary sm:text-base">
                Projects
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg transition-colors hover:bg-tertiary lg:hidden"
              >
                <ChevronLeft className="w-4 h-4 text-muted sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full py-2 pl-8 pr-8 text-xs transition-colors border rounded-lg text-primary placeholder-muted bg-tertiary border-primary sm:text-sm focus:outline-none focus:ring-2 focus:ring-strong"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
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
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.slug}>
                    <a
                      href={`/projects/${project.slug}`}
                      className={`block p-2.5 sm:p-3 rounded-lg transition-colors duration-200 group ${
                        pathname === `/projects/${project.slug}`
                          ? "bg-inverse text-inverse"
                          : "hover:bg-tertiary"
                      }`}
                    >
                      <h3
                        className={`font-semibold text-xs sm:text-sm transition-colors ${
                          pathname === `/projects/${project.slug}`
                            ? "text-inverse"
                            : "text-primary group-hover:text-strong"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 line-clamp-2 ${
                          pathname === `/projects/${project.slug}`
                            ? "text-muted"
                            : "text-muted"
                        }`}
                      >
                        {project.shortDesc}
                      </p>
                      <span
                        className={`inline-block mt-1.5 sm:mt-2 text-xs font-medium px-2 py-0.5 sm:py-1 rounded ${
                          pathname === `/projects/${project.slug}`
                            ? "bg-primary text-inverse"
                            : "bg-badge text-primary"
                        }`}
                      >
                        {project.category}
                      </span>
                    </a>
                    <hr className="mt-2 border-primary sm:mt-3" />
                  </div>
                ))
              ) : (
                <div className="py-8 text-center">
                  <p className="text-xs text-muted sm:text-sm">
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
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}