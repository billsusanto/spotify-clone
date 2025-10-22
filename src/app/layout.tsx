import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Spotify Clone - Modern Music Streaming",
  description: "A modern, responsive Spotify clone built with Next.js, React, TypeScript, and Tailwind CSS. Experience premium music streaming with a sleek, accessible interface.",
  keywords: "spotify, music, streaming, playlist, audio, player, next.js, react",
  authors: [{ name: "Bill Susanto" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-inter antialiased">
        {/* Skip Navigation Links for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="#player" className="skip-link">
          Skip to player
        </a>
        
        {children}
      </body>
    </html>
  );
}
