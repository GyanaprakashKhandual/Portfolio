"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Coffee, Moon, Sun, Menu, X, Music, Video, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import { useTheme } from "@/app/context/Theme.context";
import { GitHub } from "@mui/icons-material";
import { Tooltip } from "../ui/Tooltip.ui";
import AuthModal from "../window/Auth.modal";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navLinks = [
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Blogs", path: "/blogs" },
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
            ? "bg-primary backdrop-blur-md border-b border-primary"
            : "bg-primary backdrop-blur-sm"
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
              <FaCoffee className="w-6 h-6 text-primary sm:w-7 sm:h-7" />
              <span className="ml-2 text-xl font-bold text-primary sm:text-2xl">
                Gyan's
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
                      ? "text-primary bg-tertiary font-medium"
                      : "text-secondary hover:text-primary hover:bg-tertiary"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <Tooltip
                content={
                  theme === "dark" ? "Switch to Light" : "Switch to Dark"
                }
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 transition-colors rounded-md bg-tertiary hover:bg-badge"
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
                        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Tooltip>

              <Tooltip content="Music">
                <motion.button
                  onClick={() => router.push("/music")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="items-center hidden gap-2 p-2 transition-colors rounded-md bg-tertiary sm:flex sm:px-4 sm:py-2 hover:bg-badge"
                >
                  <Music className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </motion.button>
              </Tooltip>

              <Tooltip content="Vlogs">
                <motion.button
                  onClick={() => router.push("/vlogs")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="items-center hidden gap-2 p-2 transition-colors rounded-md bg-tertiary sm:flex sm:px-4 sm:py-2 hover:bg-badge"
                >
                  <Video className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </motion.button>
              </Tooltip>

              <Tooltip content="Github">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="items-center hidden gap-2 p-2 transition-colors rounded-md bg-tertiary md:flex sm:px-4 sm:py-2 hover:bg-badge"
                >
                  <GitHub className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </motion.button>
              </Tooltip>

              <Tooltip content="Please Login">
                <motion.button
                  onClick={() => setIsAuthModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 p-2 transition-colors rounded-md bg-tertiary sm:px-4 sm:py-2 hover:bg-badge"
                >
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </motion.button>
              </Tooltip>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className="p-2 transition-colors rounded-md bg-tertiary lg:hidden hover:bg-badge"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-primary" />
                ) : (
                  <Menu className="w-5 h-5 text-primary" />
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
              className="fixed inset-0 z-40 bg-overlay lg:hidden"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 right-0 z-50 w-full border-l bg-primary border-primary sm:w-80 lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-primary sm:p-6">
                <div className="flex items-center gap-2">
                  <Coffee className="w-6 h-6 text-primary" />
                  <span className="text-xl font-bold text-primary">Gyan's</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileMenu}
                  className="p-2 transition-colors rounded-md hover:bg-tertiary"
                >
                  <X className="w-5 h-5 text-primary" />
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
                        ? "text-primary bg-tertiary font-medium"
                        : "text-secondary hover:text-primary hover:bg-tertiary"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}

                <div className="pt-4 space-y-2 border-t border-primary sm:hidden">
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleNavigation("/music")}
                    className="flex items-center w-full gap-3 px-4 py-3 text-base font-medium text-left transition-colors rounded-md text-secondary hover:text-primary hover:bg-tertiary"
                  >
                    <Music className="w-5 h-5 text-primary" />
                    Music
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleNavigation("/vlogs")}
                    className="flex items-center w-full gap-3 px-4 py-3 text-base font-medium text-left transition-colors rounded-md text-secondary hover:text-primary hover:bg-tertiary"
                  >
                    <Video className="w-5 h-5 text-primary" />
                    Vlogs
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center w-full gap-3 px-4 py-3 text-base font-medium text-left transition-colors rounded-md text-secondary hover:text-primary hover:bg-tertiary"
                  >
                    <GitHub className="w-5 h-5 text-primary" />
                    GitHub
                  </motion.button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Theme</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 transition-colors rounded-md bg-tertiary hover:bg-badge"
                  >
                    {theme === "dark" ? (
                      <>
                        <Tooltip content="Switch to Light">
                          <Sun className="w-4 h-4 cursor-pointer text-primary" />
                        </Tooltip>
                        <span className="text-sm font-medium text-primary">
                          Light
                        </span>
                      </>
                    ) : (
                      <>
                        <Tooltip content="Switch to Dark">
                          <Moon className="w-4 h-4 cursor-pointer text-primary" />
                        </Tooltip>
                        <span className="text-sm font-medium text-primary">
                          Dark
                        </span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </AnimatePresence>
    </>
  );
}
