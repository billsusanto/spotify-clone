'use client';

import React, { useState } from 'react';
import { Grid3x3, List, Search, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';
import PageLayout from '@/components/PageLayout';
import { PlaylistCard } from '@/components/ui/PlaylistCard';
import { mockPlaylists, mockAlbums } from '@/lib/mockData';

type ViewMode = 'grid' | 'list';
type FilterType = 'all' | 'playlists' | 'albums' | 'artists';

export default function LibraryPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allItems = [
    ...mockPlaylists.map(p => ({ ...p, type: 'playlist' })),
    ...mockAlbums.map(a => ({ ...a, type: 'album', description: a.artist })),
  ];

  const filteredItems = allItems.filter(item => {
    if (filter !== 'all' && !item.type.includes(filter.slice(0, -1))) return false;
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        
        <PageLayout showNavigation={false}>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white font-poppins">Your Library</h1>
              <div className="flex items-center gap-2">
                <button
                  className="btn-icon"
                  aria-label="Create playlist"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Filters and View Toggle */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                {(['all', 'playlists', 'albums', 'artists'] as FilterType[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      filter === f
                        ? 'bg-white text-black'
                        : 'bg-spotify-dark-gray text-white hover:bg-spotify-dark-gray/80'
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-spotify-medium-gray" />
                  <input
                    type="text"
                    placeholder="Search in your library"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input pl-10 pr-4 py-2 w-64 text-sm"
                  />
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-spotify-dark-gray rounded-md p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-spotify-dark-surface' : 'hover:bg-spotify-dark-surface/50'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-spotify-dark-surface' : 'hover:bg-spotify-dark-surface/50'
                    }`}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Library Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {filteredItems.map((item: any) => (
                    <PlaylistCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      imageUrl={item.imageUrl}
                      href={item.type === 'album' ? `/album/${item.id}` : `/playlist/${item.id}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredItems.map((item: any, index: number) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-center gap-4 p-3 rounded-md hover:bg-spotify-dark-gray transition-colors cursor-pointer"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-12 h-12 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold line-clamp-1">{item.name}</h3>
                        <p className="text-sm text-spotify-light-gray line-clamp-1">
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)} • {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-spotify-light-gray text-lg">No items found</p>
                </div>
              )}
            </motion.div>
          </div>
        </PageLayout>
      </div>
      
      <Player />
      <BottomNav />
    </div>
  );
}
