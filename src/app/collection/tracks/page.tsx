'use client';

import React, { useState } from 'react';
import { Play, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';
import { TrackRow } from '@/components/ui/TrackRow';
import { mockTracks } from '@/lib/mockData';
import { usePlayerStore } from '@/store/usePlayerStore';
import { formatNumber } from '@/lib/utils';

type SortOption = 'recent' | 'title' | 'artist' | 'album';

export default function LikedSongsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const { setCurrentTrack } = usePlayerStore();

  // In a real app, this would filter by liked songs from user data
  const likedTracks = mockTracks;

  // Sort tracks based on selected option
  const sortedTracks = [...likedTracks].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'artist':
        return a.artist.localeCompare(b.artist);
      case 'album':
        return a.album.localeCompare(b.album);
      case 'recent':
      default:
        return 0; // Keep original order for 'recent'
    }
  });

  const totalDuration = likedTracks.reduce((acc, track) => acc + track.duration, 0);
  const hours = Math.floor(totalDuration / 3600);
  const minutes = Math.floor((totalDuration % 3600) / 60);

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-spotify-purple/40 via-spotify-dark-charcoal to-spotify-black">
          {/* Liked Songs Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 md:px-8 pt-16 pb-6 bg-gradient-to-b from-spotify-purple/60 to-transparent"
          >
            <div className="flex flex-col md:flex-row gap-6 items-end">
              {/* Heart Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center rounded shadow-2xl bg-gradient-to-br from-spotify-purple to-spotify-green/50"
              >
                <Heart className="h-24 w-24 md:h-28 md:h-28 text-white fill-current" />
              </motion.div>

              <div className="flex-1 space-y-4">
                <span className="text-sm font-semibold uppercase tracking-wider">Playlist</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-poppins">
                  Liked Songs
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-white">{formatNumber(likedTracks.length)} songs</span>
                  {hours > 0 && (
                    <>
                      <span className="text-spotify-light-gray">•</span>
                      <span className="text-spotify-light-gray">
                        {hours > 0 && `${hours} hr `}{minutes} min
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Bar */}
          <div className="px-4 md:px-8 py-6 flex items-center gap-6">
            <button
              className="btn-play w-14 h-14"
              onClick={() => {
                if (sortedTracks[0]) setCurrentTrack(sortedTracks[0]);
              }}
              aria-label="Play all liked songs"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>

            {/* Sort Dropdown */}
            <div className="ml-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent text-spotify-light-gray hover:text-white text-sm font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-spotify-green rounded px-2 py-1"
                aria-label="Sort liked songs"
              >
                <option value="recent" className="bg-spotify-dark-gray">Recently Added</option>
                <option value="title" className="bg-spotify-dark-gray">Title</option>
                <option value="artist" className="bg-spotify-dark-gray">Artist</option>
                <option value="album" className="bg-spotify-dark-gray">Album</option>
              </select>
            </div>
          </div>

          {/* Track List */}
          <div className="px-4 md:px-8 pb-32">
            {/* Table Header */}
            <div className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-2 mb-2 text-sm text-spotify-light-gray border-b border-white/10">
              <div className="text-center">#</div>
              <div>Title</div>
              <div className="hidden md:block">Album</div>
              <div className="flex items-center justify-end gap-4">
                <Clock className="h-4 w-4" />
              </div>
            </div>

            {/* Tracks */}
            {sortedTracks.length > 0 ? (
              <div className="space-y-1">
                {sortedTracks.map((track, index) => (
                  <TrackRow key={track.id} track={track} index={index} showAddedAt />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="h-16 w-16 text-spotify-medium-gray mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No liked songs yet</h3>
                <p className="text-spotify-light-gray mb-6">
                  Songs you like will appear here. Start exploring and save your favorites!
                </p>
                <button className="btn-primary">
                  Explore Music
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      <Player />
      <BottomNav />
    </div>
  );
}
