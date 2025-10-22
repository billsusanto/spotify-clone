'use client';

import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: 'Pop', color: 'bg-pink-500', emoji: '🎤' },
    { id: 2, name: 'Hip-Hop', color: 'bg-purple-500', emoji: '🎧' },
    { id: 3, name: 'Rock', color: 'bg-red-500', emoji: '🎸' },
    { id: 4, name: 'Electronic', color: 'bg-blue-500', emoji: '🎹' },
    { id: 5, name: 'R&B', color: 'bg-amber-500', emoji: '🎵' },
    { id: 6, name: 'Latin', color: 'bg-orange-500', emoji: '🌶️' },
    { id: 7, name: 'Jazz', color: 'bg-indigo-500', emoji: '🎺' },
    { id: 8, name: 'Country', color: 'bg-yellow-500', emoji: '🤠' },
    { id: 9, name: 'Classical', color: 'bg-teal-500', emoji: '🎻' },
    { id: 10, name: 'Metal', color: 'bg-gray-700', emoji: '🤘' },
    { id: 11, name: 'Indie', color: 'bg-green-500', emoji: '🌿' },
    { id: 12, name: 'Soul', color: 'bg-rose-500', emoji: '💫' },
  ];

  const recentSearches = [
    'The Weeknd',
    'Blinding Lights',
    'Today\'s Top Hits',
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-darkgray to-black overflow-y-auto pb-32 lg:pb-24">
      {/* Search Header */}
      <div className="sticky top-0 z-20 bg-spotify-darkgray px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-lightgray" size={20} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white text-black rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Recent Searches */}
        {!searchQuery && recentSearches.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Recent Searches</h2>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-spotify-gray rounded transition cursor-pointer"
                >
                  <div className="w-12 h-12 bg-spotify-gray rounded flex items-center justify-center text-xl flex-shrink-0">
                    🔍
                  </div>
                  <span className="text-white">{search}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Browse Categories */}
        {!searchQuery && (
          <>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Browse All</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className={`${category.color} relative overflow-hidden rounded-lg aspect-square group hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="p-4 h-full flex flex-col justify-between">
                    <h3 className="text-white font-bold text-lg sm:text-xl">
                      {category.name}
                    </h3>
                    <div className="text-4xl sm:text-5xl self-end transform rotate-12 group-hover:scale-110 transition-transform">
                      {category.emoji}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Search Results (when typing) */}
        {searchQuery && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
            <p className="text-spotify-lightgray">
              Start typing to search for songs, artists, albums, and playlists...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
