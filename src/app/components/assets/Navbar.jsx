"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Coffee, Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import { useTheme } from "../../scripts/Theme.context";
import { Tooltip } from "@/app/ui/Tooltip.ui";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Blogs", path: "/blogs" },
    { name: "Notes", path: "/notes" },
    { name: "Docs", path: "/docs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
            : "bg-white dark:bg-black/60 backdrop-blur-sm"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <FaCoffee className="w-6 h-6 text-black sm:w-7 sm:h-7 dark:text-white" />
              <span className="ml-2 text-xl font-bold text-black sm:text-2xl dark:text-white">
                Gyan&#39;s
              </span>
            </motion.div>

            <div className="items-center hidden gap-1 lg:flex xl:gap-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(link.path)}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive(link.path)
                      ? "text-black dark:text-white bg-gray-200 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Tooltip content={theme === "dark" ? "Switch to Light" : "Switch to Dark"}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 transition-colors bg-gray-100 rounded-md dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun
                          className="w-5 h-5 text-black dark:text-white"
                          tooltip-data="Switch To White"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon
                          className="w-5 h-5 text-black dark:text-white"
                          tooltip-data="Switch To Dark"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Tooltip>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className="p-2 transition-colors bg-gray-100 rounded-md lg:hidden dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-black dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-black dark:text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 dark:bg-white/10 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 right-0 z-50 w-full bg-white border-l border-gray-200 sm:w-80 dark:bg-black dark:border-gray-800 lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 sm:p-6 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Coffee className="w-6 h-6 text-black dark:text-white" />
                  <span className="text-xl font-bold text-black dark:text-white">
                    Gyan&apos;s
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileMenu}
                  className="p-2 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <X className="w-5 h-5 text-black dark:text-white" />
                </motion.button>
              </div>

              <div className="p-4 space-y-2 sm:p-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    onClick={() => handleNavigation(link.path)}
                    className={`w-full px-4 py-3 text-base font-medium text-left transition-colors rounded-md ${
                      isActive(link.path)
                        ? "text-black dark:text-white bg-gray-200 dark:bg-gray-800"
                        : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 sm:p-6 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Theme
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 transition-colors bg-gray-100 rounded-md dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
                  >
                    {theme === "dark" ? (
                      <>
                        <Tooltip content="Switch to Light">
                          <Sun className="w-4 h-4 cursor-pointer" />
                        </Tooltip>
                        <span
                          className="text-sm font-medium"
                          tooltip-data="Light"
                        >
                          Light
                        </span>
                      </>
                    ) : (
                      <>
                        <Tooltip content="Switch to Dark">
                          <Moon className="w-4 h-4 cursor-pointer"/>
                        </Tooltip>
                        <span className="text-sm font-medium">Dark</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}