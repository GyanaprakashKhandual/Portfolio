import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/assets/Navbar";
import { ThemeProvider } from "./scripts/Theme.context";
import { TooltipProvider } from "./scripts/Tooltip.context";
import Tooltip from "./components/utils/Tooltip.util";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gyan | Full Stack AI Engineer | Home",
  description: "This is the Portfolio Main Layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <TooltipProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Tooltip />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
