// app/layout.jsx — NO 'use client'
import { Geist, Geist_Mono } from 'next/font/google';
import Providers from './components/assets/Provider';
import './globals.css';
import './css/Theme.css';
import './css/Scrollbar.css';
import './css/Util.css'

import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: 'Gyan Portfolio',
  description: 'Your description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-primary 
          text-black 
          dark:text-white 
          transition-colors 
          duration-300
          min-h-screen 
          max-h-screen 
          overflow-hidden
        `}
      >
        <Providers>
          <NextTopLoader
            color="#000000"
            height={1}
            options={{ easing: 'ease', speed: 500, minimum: 0.3 }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}