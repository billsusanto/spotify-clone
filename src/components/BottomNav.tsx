'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library } from 'lucide-react';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Search', icon: Search, href: '/search' },
    { name: 'Your Library', icon: Library, href: '/library' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-spotify-gray z-50 pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-white' : 'text-spotify-lightgray'
              }`}
            >
              <Icon size={24} className={isActive ? 'fill-current' : ''} />
              <span className="text-xs mt-1 font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
