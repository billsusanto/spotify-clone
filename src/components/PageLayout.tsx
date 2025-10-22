'use client';

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  className?: string;
}

export default function PageLayout({ children, showNavigation = true, className = '' }: PageLayoutProps) {
  const router = useRouter();

  return (
    <main className={`flex-1 overflow-y-auto bg-gradient-to-b from-spotify-dark-charcoal to-spotify-black ${className}`}>
      {showNavigation && (
        <div className="sticky top-0 z-10 bg-black/40 backdrop-blur-md px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="btn-icon bg-black/60 hover:bg-black/80"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => router.forward()}
              className="btn-icon bg-black/60 hover:bg-black/80"
              aria-label="Go forward"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      
      <div className="px-4 md:px-8 py-6 pb-32">
        {children}
      </div>
    </main>
  );
}
