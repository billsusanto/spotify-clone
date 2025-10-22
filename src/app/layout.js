import './globals.css';

export const metadata = {
  title: 'Spotify Clone - Your Music Library',
  description: 'A modern Spotify clone built with Next.js, React, and Tailwind CSS',
  keywords: 'spotify, music, streaming, playlist, albums',
  authors: [{ name: 'Spotify Clone' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#121212',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎵</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
