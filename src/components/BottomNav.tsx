'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Library, label: 'Library', href: '/library' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 bg-spotify-dark-charcoal border-t border-spotify-dark-gray z-40 h-14 font-inter"
      aria-label="Bottom navigation"
    >
      <div className="grid grid-cols-4 h-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1',
                'transition-colors',
                isActive ? 'text-white' : 'text-spotify-light-gray'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
