'use client';

import React, { useState } from 'react';
import { Play, MoreHorizontal, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

export default function ArtistPage() {
  const params = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  const artist = {
    id: params.id,
    name: 'The Weeknd',
    monthlyListeners: '107,234,567',
    verified: true,
  };

  const popularTracks = [
    { id: 1, title: 'Blinding Lights', plays: '3.2B', duration: '3:20' },
    { id: 2, title: 'Starboy', plays: '2.9B', duration: '3:50' },
    { id: 3, title: 'Save Your Tears', plays: '2.5B', duration: '3:35' },
    { id: 4, title: 'The Hills', plays: '2.1B', duration: '4:02' },
    { id: 5, title: 'I Feel It Coming', plays: '1.8B', duration: '4:29' },
  ];

  const albums = [
    { id: 1, name: 'After Hours', year: '2020', type: 'Album' },
    { id: 2, name: 'Starboy', year: '2016', type: 'Album' },
    { id: 3, name: 'Beauty Behind the Madness', year: '2015', type: 'Album' },
    { id: 4, name: 'Dawn FM', year: '2022', type: 'Album' },
  ];

  const relatedArtists = [
    { id: 1, name: 'Drake', type: 'Artist' },
    { id: 2, name: 'Post Malone', type: 'Artist' },
    { id: 3, name: 'Travis Scott', type: 'Artist' },
    { id: 4, name: 'Frank Ocean', type: 'Artist' },
  ];

  return (
    <PageLayout>
      <div className="flex-1 bg-gradient-to-b from-purple-900 via-spotify-darkgray to-black overflow-y-auto pb-32 lg:pb-24">
        {/* Artist Header */}
        <div className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-6">
          <div className="flex items-end gap-4 sm:gap-6">
            <div className="w-32 h-32 sm:w-48 sm:h-48 bg-spotify-gray rounded-full flex-shrink-0 flex items-center justify-center text-6xl sm:text-8xl shadow-2xl">
              👤
            </div>
            
            <div className="flex-1 pb-2">
              {artist.verified && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm text-white">Verified Artist</span>
                </div>
              )}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">{artist.name}</h1>
              <p className="text-sm sm:text-base text-white">{artist.monthlyListeners} monthly listeners</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 sm:px-6 lg:px-8 pb-6 flex items-center gap-4 sm:gap-6">
          <button className="bg-spotify-green text-black rounded-full p-4 sm:p-5 hover:scale-105 transition">
            <Play size={24} className="sm:w-7 sm:h-7 fill-current" />
          </button>
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full border text-sm sm:text-base font-semibold transition ${
              isFollowing 
                ? 'border-white text-white hover:scale-105' 
                : 'border-spotify-lightgray text-spotify-lightgray hover:border-white hover:text-white hover:scale-105'
            }`}
          >
            <UserPlus size={20} className="inline mr-2" />
            {isFollowing ? 'Following' : 'Follow'}
          </button>
          <button className="text-spotify-lightgray hover:text-white transition">
            <MoreHorizontal size={32} />
          </button>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Popular Tracks */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Popular</h2>
            <div className="space-y-1">
              {popularTracks.map((track, index) => (
                <div
                  key={track.id}
                  className="group flex items-center gap-3 sm:gap-4 p-2 hover:bg-spotify-gray/50 rounded transition cursor-pointer"
                >
                  <span className="text-spotify-lightgray group-hover:text-white w-6 text-center text-sm sm:text-base">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate text-sm sm:text-base">{track.title}</h3>
                    <p className="text-xs sm:text-sm text-spotify-lightgray">{track.plays} plays</p>
                  </div>
                  <span className="text-xs sm:text-sm text-spotify-lightgray">{track.duration}</span>
                  <button className="opacity-0 group-hover:opacity-100 text-spotify-lightgray hover:text-white transition">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Discography */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Discography</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {albums.map((album) => (
                <Link
                  key={album.id}
                  href={`/album/${album.id}`}
                  className="bg-spotify-darkgray p-3 sm:p-4 rounded-lg hover:bg-spotify-gray transition cursor-pointer group"
                >
                  <div className="relative mb-3 sm:mb-4">
                    <div className="bg-spotify-gray aspect-square rounded flex items-center justify-center text-3xl sm:text-4xl">
                      💿
                    </div>
                    <button className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-2 sm:p-3 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <Play size={16} className="sm:w-5 sm:h-5 fill-current text-black" />
                    </button>
                  </div>
                  <h3 className="font-semibold mb-1 truncate text-sm sm:text-base">{album.name}</h3>
                  <p className="text-xs sm:text-sm text-spotify-lightgray">{album.year} • {album.type}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Artists */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Fans also like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {relatedArtists.map((relArtist) => (
                <Link
                  key={relArtist.id}
                  href={`/artist/${relArtist.id}`}
                  className="bg-spotify-darkgray p-3 sm:p-4 rounded-lg hover:bg-spotify-gray transition cursor-pointer group"
                >
                  <div className="relative mb-3 sm:mb-4">
                    <div className="bg-spotify-gray aspect-square rounded-full flex items-center justify-center text-3xl sm:text-4xl">
                      👤
                    </div>
                    <button className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-2 sm:p-3 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <Play size={16} className="sm:w-5 sm:h-5 fill-current text-black" />
                    </button>
                  </div>
                  <h3 className="font-semibold mb-1 truncate text-sm sm:text-base">{relArtist.name}</h3>
                  <p className="text-xs sm:text-sm text-spotify-lightgray">{relArtist.type}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
