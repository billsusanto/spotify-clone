'use client';

import React, { useState } from 'react';
import { Play, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';
import PageLayout from '@/components/PageLayout';
import { TrackRow } from '@/components/ui/TrackRow';
import { mockTracks, mockAlbums } from '@/lib/mockData';
import { usePlayerStore } from '@/store/usePlayerStore';

export default function AlbumPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const { setCurrentTrack } = usePlayerStore();
  
  const album = mockAlbums.find(a => a.id === params.id) || mockAlbums[0];
  const tracks = mockTracks.slice(0, album.trackCount);

  const totalDuration = tracks.reduce((acc, track) => acc + track.duration, 0);
  const minutes = Math.floor(totalDuration / 60);

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-spotify-dark-gray via-spotify-dark-charcoal to-spotify-black">
          {/* Album Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 md:px-8 pt-16 pb-6 bg-gradient-to-b from-spotify-purple/40 to-transparent"
          >
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={album.imageUrl}
                alt={album.name}
                className="w-48 h-48 md:w-56 md:h-56 rounded shadow-2xl"
              />
              <div className="flex-1 space-y-4">
                <span className="text-sm font-semibold uppercase tracking-wider">Album</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-poppins">
                  {album.name}
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  <img
                    src={album.imageUrl}
                    alt={album.artist}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-semibold text-white hover:underline cursor-pointer">
                    {album.artist}
                  </span>
                  <span className="text-spotify-light-gray">•</span>
                  <span className="text-spotify-light-gray">{album.releaseYear}</span>
                  <span className="text-spotify-light-gray">•</span>
                  <span className="text-spotify-light-gray">
                    {album.trackCount} songs, {minutes} min
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Bar */}
          <div className="px-4 md:px-8 py-6 flex items-center gap-6">
            <button
              className="btn-play w-14 h-14"
              onClick={() => {
                if (tracks[0]) setCurrentTrack(tracks[0]);
              }}
              aria-label="Play album"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>
            
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`btn-icon ${
                isLiked ? 'text-spotify-green' : 'text-spotify-light-gray'
              }`}
              aria-label={isLiked ? 'Remove from library' : 'Add to library'}
            >
              <Heart className={`h-8 w-8 ${isLiked ? 'fill-current' : ''}`} />
            </button>

            <button className="btn-icon" aria-label="More options">
              <MoreHorizontal className="h-8 w-8" />
            </button>
          </div>

          {/* Track List */}
          <div className="px-4 md:px-8 pb-32">
            <div className="space-y-1">
              {tracks.map((track, index) => (
                <TrackRow key={track.id} track={track} index={index} showAlbum={false} />
              ))}
            </div>

            {/* Album Info */}
            <div className="mt-12 text-sm text-spotify-light-gray">
              <p className="mb-2">{new Date(album.releaseYear, 0).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              <p>© {album.releaseYear} {album.artist}</p>
            </div>
          </div>
        </main>
      </div>
      
      <Player />
      <BottomNav />
    </div>
  );
}
