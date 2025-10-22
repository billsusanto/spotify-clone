'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  showAll?: boolean;
  showAllHref?: string;
  className?: string;
}

export function SectionHeader({ title, showAll = false, showAllHref = '#', className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <h2 className="text-2xl font-bold text-white font-poppins">
        {title}
      </h2>
      {showAll && (
        <Link
          href={showAllHref}
          className="text-sm font-semibold text-spotify-light-gray hover:text-white flex items-center gap-1 group"
        >
          Show all
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
