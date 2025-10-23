'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';
import PageLayout from '@/components/PageLayout';
import { PlaylistCard } from '@/components/ui/PlaylistCard';
import { mockPlaylists, mockAlbums } from '@/lib/mockData';

const sectionData: Record<string, { title: string; description?: string; items: any[] }> = {
  'playlists': {
    title: 'Popular Playlists',
    description: 'The most popular playlists right now',
    items: mockPlaylists,
  },
  'made-for-you': {
    title: 'Made For You',
    description: 'Unique playlists made just for you',
    items: [
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
        description: "Songs you can't get enough of",
        imageUrl: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
      },
      {
        id: 'on-repeat',
        name: 'On Repeat',
        description: 'Your most played songs',
        imageUrl: 'https://i.scdn.co/image/ab67706f00000002c6b4c171d5165f14961dcf50',
      },
    ],
  },
  'recent': {
    title: 'Recently Played',
    description: 'Your listening history',
    items: mockAlbums.map(album => ({
      ...album,
      description: `${album.releaseYear} • ${album.artist}`,
    })),
  },
};

export default function SectionPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const section = sectionData[params.id] || sectionData['playlists'];

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />

        <PageLayout showNavigation={false}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-spotify-light-gray hover:text-white transition-colors mb-4"
              aria-label="Go back"
            >
              <ArrowLeft className="h-6 w-6" />
              <span className="font-semibold">Back</span>
            </button>

            {/* Section Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-2">
                {section.title}
              </h1>
              {section.description && (
                <p className="text-spotify-light-gray text-lg">
                  {section.description}
                </p>
              )}
            </div>

            {/* Section Content Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-8">
              {section.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <PlaylistCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    href={
                      params.id === 'recent'
                        ? `/album/${item.id}`
                        : `/playlist/${item.id}`
                    }
                  />
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {section.items.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-2">Nothing here yet</h3>
                <p className="text-spotify-light-gray">
                  Check back later for more content
                </p>
              </div>
            )}
          </motion.div>
        </PageLayout>
      </div>

      <Player />
      <BottomNav />
    </div>
  );
}
