'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';
import PageLayout from '@/components/PageLayout';
import { PlaylistCard } from '@/components/ui/PlaylistCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { mockPlaylists, mockAlbums, mockTracks } from '@/lib/mockData';
import { usePlayerStore } from '@/store/usePlayerStore';
import { Play } from 'lucide-react';

export default function Home() {
  const { setCurrentTrack, addToQueue } = usePlayerStore();

  useEffect(() => {
    // Initialize queue with mock tracks
    mockTracks.forEach((track) => addToQueue(track));
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const recentlyPlayed = [
    { id: '1', name: 'Liked Songs', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36' },
    { id: '2', name: 'Daily Mix 1', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273c0e0e4c2f9e36ca9efae0006' },
    { id: '3', name: 'Discover Weekly', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a' },
    { id: '4', name: 'Release Radar', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2730744690248ef3ba7b776ea7b' },
    { id: '5', name: 'Your Episodes', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273fe24dcd263c08c6dd84b6e8c' },
    { id: '6', name: 'Chill Mix', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a49b0d728bf0c2a45773d791' },
  ];

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        
        <PageLayout showNavigation={true}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Greeting Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                {getGreeting()}
              </h1>

              {/* Recently Played Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentlyPlayed.slice(0, 6).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-spotify-dark-gray/50 rounded flex items-center gap-4 overflow-hidden
                      hover:bg-spotify-dark-gray transition-all duration-300 cursor-pointer group"
                    onClick={() => {
                      if (mockTracks[0]) {
                        setCurrentTrack(mockTracks[0]);
                      }
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 flex-shrink-0 shadow-md"
                    />
                    <span className="font-semibold text-white flex-1 pr-4">{item.name}</span>
                    <button
                      className="btn-play mr-4 opacity-0 group-hover:opacity-100 transition-all
                        translate-y-2 group-hover:translate-y-0"
                      aria-label={`Play ${item.name}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (mockTracks[0]) {
                          setCurrentTrack(mockTracks[0]);
                        }
                      }}
                    >
                      <Play className="h-5 w-5 fill-current" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Popular Playlists */}
            <section>
              <SectionHeader title="Popular playlists" showAll showAllHref="/section/playlists" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {mockPlaylists.map((playlist) => (
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

            {/* Made For You */}
            <section>
              <SectionHeader title="Made for you" showAll showAllHref="/section/made-for-you" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {[
                  {
                    id: 'discover',
                    name: 'Discover Weekly',
                    description: 'Your weekly mixtape of fresh music',
                    imageUrl: 'https://i.scdn.co/image/ab67706f00000002a713c9c6db021f66c8b194b3',
                  },
                  {
                    id: 'daily-mix-1',
                    name: 'Daily Mix 1',
                    description: 'The Weeknd, Dua Lipa and more',
                    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
                  },
                  {
                    id: 'daily-mix-2',
                    name: 'Daily Mix 2',
                    description: 'Olivia Rodrigo, Taylor Swift and more',
                    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
                  },
                  {
                    id: 'release-radar',
                    name: 'Release Radar',
                    description: 'Catch all the latest music',
                    imageUrl: 'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
                  },
                  {
                    id: 'repeat-rewind',
                    name: 'Repeat Rewind',
                    description: 'Songs you can\'t get enough of',
                    imageUrl: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
                  },
                  {
                    id: 'on-repeat',
                    name: 'On Repeat',
                    description: 'Your most played songs',
                    imageUrl: 'https://i.scdn.co/image/ab67706f00000002c6b4c171d5165f14961dcf50',
                  },
                ].map((playlist) => (
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

            {/* Recently Played Albums */}
            <section>
              <SectionHeader title="Recently played" showAll showAllHref="/section/recent" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {mockAlbums.map((album) => (
                  <PlaylistCard
                    key={album.id}
                    id={album.id}
                    name={album.name}
                    description={`${album.releaseYear} • ${album.artist}`}
                    imageUrl={album.imageUrl}
                    href={`/album/${album.id}`}
                  />
                ))}
              </div>
            </section>
          </motion.div>
        </PageLayout>
      </div>
      
      <Player />
      <BottomNav />
    </div>
  );
}
