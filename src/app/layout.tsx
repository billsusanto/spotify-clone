import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify Clone - Modern Music Streaming",
  description: "A modern Spotify clone built with Next.js, React, TypeScript, and Tailwind CSS",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="overflow-hidden bg-spotify-black text-spotify-white font-inter">
        {/* Skip Links for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-spotify-green focus:text-black focus:rounded-full focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <a 
          href="#player" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-48 focus:z-50 focus:px-6 focus:py-3 focus:bg-spotify-green focus:text-black focus:rounded-full focus:font-semibold focus:shadow-lg"
        >
          Skip to player
        </a>
        
        {children}
      </body>
    </html>
  );
}
