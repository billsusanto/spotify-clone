'use client';

import React from 'react';
import { Play, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';
import PageLayout from '@/components/PageLayout';
import { TrackRow } from '@/components/ui/TrackRow';
import { AlbumCard } from '@/components/ui/AlbumCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { mockTracks, mockAlbums, mockArtists } from '@/lib/mockData';
import { usePlayerStore } from '@/store/usePlayerStore';
import { formatCompactNumber } from '@/lib/utils';

export default function ArtistPage({ params }: { params: { id: string } }) {
  const { setCurrentTrack } = usePlayerStore();
  
  const artist = mockArtists.find(a => a.id === params.id) || mockArtists[0];
  const popularTracks = mockTracks.slice(0, 5);
  const albums = mockAlbums;

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-spotify-purple/20 via-spotify-dark-charcoal to-spotify-black">
          {/* Artist Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-[400px] overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spotify-black/50 to-spotify-black" />
            </div>
            
            <div className="relative h-full flex items-end px-4 md:px-8 pb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {artist.verified && (
                    <BadgeCheck className="h-6 w-6 text-blue-500" aria-label="Verified artist" />
                  )}
                  <span className="text-sm font-semibold uppercase tracking-wider">Verified Artist</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white font-poppins">
                  {artist.name}
                </h1>
                <p className="text-white text-lg">
                  {formatCompactNumber(artist.followers)} monthly listeners
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="px-4 md:px-8 pb-32 space-y-8">
            {/* Play Button */}
            <div className="py-6">
              <button
                className="btn-play w-14 h-14"
                onClick={() => {
                  if (popularTracks[0]) setCurrentTrack(popularTracks[0]);
                }}
                aria-label="Play artist"
              >
                <Play className="h-6 w-6 fill-current" />
              </button>
            </div>

            {/* Popular Tracks */}
            <section>
              <SectionHeader title="Popular" />
              <div className="space-y-1">
                {popularTracks.map((track, index) => (
                  <TrackRow key={track.id} track={track} index={index} showAlbum />
                ))}
              </div>
            </section>

            {/* Discography */}
            <section>
              <SectionHeader title="Discography" showAll showAllHref={`/artist/${artist.id}/discography`} />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {albums.map((album) => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>
            </section>

            {/* About */}
            <section>
              <SectionHeader title="About" />
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full md:w-64 h-64 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-white mb-2">
                      {formatCompactNumber(artist.followers)}
                    </p>
                    <p className="text-spotify-light-gray">Followers</p>
                  </div>
                  <p className="text-spotify-light-gray leading-relaxed">
                    {artist.name} is a {artist.verified ? 'verified' : ''} artist known for their contributions
                    to modern music. With millions of monthly listeners worldwide, they continue to create
                    chart-topping hits and inspire fans globally.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <Player />
      <BottomNav />
    </div>
  );
}
