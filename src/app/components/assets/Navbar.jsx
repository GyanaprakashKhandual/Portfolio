"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Coffee,
  Menu,
  X,
  Music,
  Video,
  User,
  Palette,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import { useTheme } from "@/app/context/Theme.context";
import { GitHub } from "@mui/icons-material";
import { Tooltip } from "../ui/Tooltip.ui";
import AuthModal from "../window/Auth.modal";

// Dynamically resolve lucide icon by name string
import * as LucideIcons from "lucide-react";

function ThemeIcon({ iconName, className }) {
  const Icon = LucideIcons[iconName] || LucideIcons.Circle;
  return <Icon className={className} />;
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setThemeById, themes } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef(null);

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

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => pathname === path;

  // Deduplicate themes by id (your THEMES array has duplicates)
  const uniqueThemes = themes.filter(
    (t, index, self) => self.findIndex((x) => x.id === t.id) === index,
  );

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
              {/* ── Theme Picker ── */}
              <div className="relative" ref={themeMenuRef}>
                <Tooltip content="Change Theme">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsThemeMenuOpen((prev) => !prev)}
                    className="p-2 transition-colors rounded-md bg-tertiary hover:bg-badge"
                    aria-label="Open theme menu"
                  >
                    <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </motion.button>
                </Tooltip>

                <AnimatePresence>
                  {isThemeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 z-50 w-48 mt-2 overflow-hidden border shadow-xl rounded-xl border-primary bg-primary sidebar-scrollbar"
                    >
                      <div className="px-3 py-2 border-b border-primary">
                        <p className="text-xs font-semibold tracking-wider uppercase text-secondary">
                          Choose Theme
                        </p>
                      </div>
                      <div className="py-1 overflow-y-auto max-h-72">
                        {uniqueThemes.map((t) => (
                          <motion.button
                            key={t.id}
                            // whileHover={{ x: 4 }}
                            onClick={() => {
                              setThemeById(t.id);
                              setIsThemeMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                              theme === t.id
                                ? "text-primary bg-tertiary font-medium"
                                : "text-secondary hover:text-primary hover:bg-tertiary"
                            }`}
                          >
                            <ThemeIcon
                              iconName={t.icon}
                              className="flex-shrink-0 w-4 h-4 text-primary"
                            />
                            <span className="flex-1 text-left">{t.label}</span>
                            {theme === t.id && (
                              <Check className="w-3.5 h-3.5 text-primary" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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

              {/* ── Mobile Theme Picker ── */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary sm:p-6">
                <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-secondary">
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-40">
                  {uniqueThemes.map((t) => (
                    <motion.button
                      key={t.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setThemeById(t.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs font-medium transition-colors ${
                        theme === t.id
                          ? "bg-tertiary text-primary ring-1 ring-primary"
                          : "text-secondary hover:bg-tertiary hover:text-primary"
                      }`}
                    >
                      <ThemeIcon
                        iconName={t.icon}
                        className="w-4 h-4 text-primary"
                      />
                      {t.label}
                    </motion.button>
                  ))}
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
