"use client";

import { useState, useMemo } from "react";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BlogSidebar({ posts }) {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.meta.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.meta.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, posts]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex sidebar-scrollbar">
      <div
        className={`fixed lg:sticky left-0 top-0 h-screen bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-gray-900 dark:border-slate-800 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-72" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2 dark:text-slate-500" />
                <input
                  type="text"
                  placeholder="Search blogs..."
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
                  <ChevronLeft
                    className="w-5 h-5 text-gray-600 dark:text-slate-300"
                    tooltip-data="Close Sidebar"
                    tooltip-placement="right"
                  />
                ) : (
                  <ChevronRight
                    className="w-5 h-5 text-gray-600 dark:text-slate-300"
                    tooltip-data="Open Sidebar"
                    tooltip-placement="right"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-3">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div key={post.slug}>
                    <a
                      href={`/blogs/${post.slug}`}
                      className={`block p-3 rounded-lg transition-colors duration-200 group ${
                        pathname === `/blogs/${post.slug}`
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <h3
                        className={`font-semibold text-sm transition-colors ${
                          pathname === `/blogs/${post.slug}`
                            ? "text-white dark:text-black"
                            : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        }`}
                      >
                        {post.meta.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 line-clamp-2 ${
                          pathname === `/blogs/${post.slug}`
                            ? "text-gray-300 dark:text-gray-700"
                            : "text-gray-500 dark:text-slate-400"
                        }`}
                      >
                        {post.meta.excerpt}
                      </p>
                    </a>
                    <hr className="mt-3 border-gray-200 dark:border-slate-800" />
                  </div>
                ))
              ) : (
                <div className="py-8 text-center">
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    No posts found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className="fixed left-0 z-50 p-2 transition-colors bg-white border border-gray-200 rounded-r-lg top-6 dark:bg-slate-950 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900"
      >
        {isOpen ? (
          <ChevronLeft
            className="w-5 h-5 text-gray-600 dark:text-slate-300"
            tooltip-data="Close Sidebar"
            tooltip-placement="right"
          />
        ) : (
          <ChevronRight
            className="w-5 h-5 text-gray-600 dark:text-slate-300"
            tooltip-data="Open Sidebar"
            tooltip-placement="right"
          />
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
