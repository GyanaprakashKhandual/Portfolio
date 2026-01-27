// app/layout.js     ← stays .js
'use client';

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from './components/assets/Navbar';
import Tooltip from './components/utils/Tooltip.util';
import { TooltipProvider } from './scripts/Tooltip.context';
import { ThemeProvider } from './scripts/Theme.context';
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarPaths = ["/privacy-policy", "/terms-and-conditions"];
  const showNavbar = !hideNavbarPaths.includes(pathname);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <TooltipProvider>
          <ThemeProvider>
            {showNavbar && <Navbar />}
            {children}
            <Tooltip />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}