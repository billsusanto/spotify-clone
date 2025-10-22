'use client';

import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';
import PageLayout from '@/components/PageLayout';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PlaylistCard } from '@/components/ui/PlaylistCard';
import { TrackRow } from '@/components/ui/TrackRow';
import { mockCategories, mockPlaylists, mockTracks } from '@/lib/mockData';
import { debounce } from '@/lib/utils';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any>(null);

  const handleSearch = debounce((query: string) => {
    if (query.trim().length === 0) {
      setSearchResults(null);
      return;
    }

    // Mock search results
    setSearchResults({
      tracks: mockTracks.filter(t => 
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.artist.toLowerCase().includes(query.toLowerCase())
      ),
      playlists: mockPlaylists.slice(0, 4),
    });
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        
        <PageLayout showNavigation={false}>
          <div className="space-y-6">
            {/* Search Input */}
            <div className="sticky top-0 z-10 bg-spotify-dark-charcoal/95 backdrop-blur-md py-4 -mx-4 md:-mx-8 px-4 md:px-8">
              <div className="max-w-md relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-spotify-medium-gray" />
                <input
                  type="text"
                  placeholder="What do you want to listen to?"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="input-search w-full pl-12"
                  aria-label="Search for songs, albums, artists, or playlists"
                />
              </div>
            </div>

            {/* Search Results */}
            {searchResults ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Top Result */}
                {searchResults.tracks.length > 0 && (
                  <section>
                    <SectionHeader title="Top result" />
                    <div className="bg-spotify-dark-gray rounded-lg p-6 hover:bg-spotify-dark-gray/80 transition-colors cursor-pointer">
                      <img
                        src={searchResults.tracks[0].albumArt}
                        alt={searchResults.tracks[0].album}
                        className="w-24 h-24 rounded-lg mb-4 shadow-lg"
                      />
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {searchResults.tracks[0].title}
                      </h3>
                      <p className="text-spotify-light-gray">
                        Song • {searchResults.tracks[0].artist}
                      </p>
                    </div>
                  </section>
                )}

                {/* Songs */}
                {searchResults.tracks.length > 0 && (
                  <section>
                    <SectionHeader title="Songs" />
                    <div className="space-y-1">
                      {searchResults.tracks.map((track: any, index: number) => (
                        <TrackRow key={track.id} track={track} index={index} />
                      ))}
                    </div>
                  </section>
                )}

                {/* Playlists */}
                {searchResults.playlists.length > 0 && (
                  <section>
                    <SectionHeader title="Playlists" showAll />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {searchResults.playlists.map((playlist: any) => (
                        <PlaylistCard
                          key={playlist.id}
                          id={playlist.id}
                          name={playlist.name}
                          description={playlist.description}
                          imageUrl={playlist.imageUrl}
                        />
                      ))}
                    </div>
                  </section>
                )}
              </motion.div>
            ) : (
              /* Browse Categories */
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <SectionHeader title="Browse all" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {mockCategories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </PageLayout>
      </div>
      
      <Player />
      <BottomNav />
    </div>
  );
}
