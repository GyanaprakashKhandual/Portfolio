'use client';

import { useState, useMemo } from 'react';
import { ChevronRight, ChevronLeft, Search, Filter } from 'lucide-react';
import { usePathname } from 'next/navigation';

const categories = ['All', 'Development', 'Testing', 'Hacking'];

export default function ProjectSidebar({ projects }) {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const pathname = usePathname();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, projects]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex sidebar-scrollbar">
      <div
        className={`fixed lg:sticky left-0 top-0 h-screen bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'w-72' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2 dark:text-slate-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-800 dark:focus:ring-blue-400 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
                />
              </div>
              <button
                onClick={toggleSidebar}
                className="p-2 transition-colors rounded-lg shrink-0 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {isOpen ? (
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-slate-300" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-slate-300" />
                )}
              </button>
            </div>

            {/* Category Dropdown */}
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

              {/* Dropdown Menu */}
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
                          ? 'bg-black dark:bg-white text-white dark:text-black'
                          : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Projects List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-3">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.slug}>
                    <a
                      href={`/projects/${project.slug}`}
                      className={`block p-3 rounded-lg transition-colors duration-200 group ${
                        pathname === `/projects/${project.slug}`
                          ? 'bg-black dark:bg-white text-white dark:text-black'
                          : 'hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <h3
                        className={`font-semibold text-sm transition-colors ${
                          pathname === `/projects/${project.slug}`
                            ? 'text-white dark:text-black'
                            : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 line-clamp-2 ${
                          pathname === `/projects/${project.slug}`
                            ? 'text-gray-300 dark:text-gray-700'
                            : 'text-gray-500 dark:text-slate-400'
                        }`}
                      >
                        {project.shortDesc}
                      </p>
                      <span
                        className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${
                          pathname === `/projects/${project.slug}`
                            ? 'bg-white dark:bg-black text-black dark:text-white'
                            : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300'
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

// ChevronDown icon component
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