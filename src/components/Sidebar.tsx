'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Library, label: 'Your Library', href: '/library' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden md:flex md:flex-col md:w-[280px] bg-spotify-black p-6 gap-6"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-white">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-2" role="navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded transition-all duration-200',
                'hover:bg-white/10',
                isActive && 'bg-spotify-dark-gray'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && (
                <div 
                  className="absolute left-0 w-1 h-8 bg-spotify-green rounded-r"
                  aria-hidden="true"
                />
              )}
              <Icon
                className={cn(
                  'h-6 w-6',
                  isActive ? 'text-white' : 'text-spotify-light-gray'
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  'font-semibold text-sm',
                  isActive ? 'text-white' : 'text-spotify-light-gray'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}</nav>

      {/* Library Section */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-4">
          <button
            className="flex items-center gap-3 text-spotify-light-gray hover:text-white transition-colors"
            aria-label="Create playlist"
          >
            <Plus className="h-5 w-5" aria-hidden="true" />
            <span className="font-semibold text-sm">Create Playlist</span>
          </button>
        </div>

        <Link
          href="/collection/tracks"
          className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/10 transition-colors mb-4"
          aria-label="View liked songs"
        >
          <div className="bg-gradient-to-br from-spotify-purple to-spotify-green/50 p-2 rounded">
            <Heart className="h-4 w-4 text-white fill-current" aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold text-white">Liked Songs</span>
        </Link>

        {/* Playlist List */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-spotify-medium-gray scrollbar-track-transparent">
          {['My Playlist #1', 'Chill Vibes', 'Workout Mix', 'Study Session', 'Party Hits', 'Road Trip', 'Focus Flow', 'Sleep Sounds'].map((playlist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/playlist/${index + 1}`}
                className="block px-4 py-2 text-sm text-spotify-light-gray hover:text-white transition-colors rounded"
                aria-label={`View playlist: ${playlist}`}
              >
                {playlist}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </aside>
  );
}
