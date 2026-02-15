"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./scripts/Theme.context";

export default function NotFound() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white dark:bg-black">
      <div className="w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Coffee className="w-16 h-16 mx-auto mb-6 text-black sm:w-20 sm:h-20 dark:text-white" />

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 text-6xl font-bold text-black sm:text-8xl md:text-9xl dark:text-white"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl dark:text-gray-200"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-8 text-base text-gray-600 sm:text-lg dark:text-gray-400"
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoHome}
            className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white transition-colors bg-black rounded-md sm:px-8 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-black transition-colors bg-gray-100 rounded-md sm:px-8 dark:bg-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Lost? Let&apos;s get you back on track.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
