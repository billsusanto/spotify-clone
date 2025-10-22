'use client';

import React from 'react';
import { Play, MoreHorizontal, Clock, Heart } from 'lucide-react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

export default function AlbumPage() {
  const params = useParams();

  const album = {
    id: params.id,
    name: 'After Hours',
    artist: 'The Weeknd',
    year: '2020',
    totalTracks: 14,
    duration: '56 min 16 sec',
  };

  const tracks = [
    { id: 1, title: 'Alone Again', duration: '4:10' },
    { id: 2, title: 'Too Late', duration: '3:59' },
    { id: 3, title: 'Hardest To Love', duration: '3:31' },
    { id: 4, title: 'Scared To Live', duration: '3:11' },
    { id: 5, title: 'Snowchild', duration: '4:07' },
    { id: 6, title: 'Escape From LA', duration: '5:55' },
    { id: 7, title: 'Heartless', duration: '3:18' },
    { id: 8, title: 'Faith', duration: '4:43' },
    { id: 9, title: 'Blinding Lights', duration: '3:20' },
    { id: 10, title: 'In Your Eyes', duration: '3:57' },
    { id: 11, title: 'Save Your Tears', duration: '3:35' },
    { id: 12, title: 'Repeat After Me', duration: '3:15' },
    { id: 13, title: 'After Hours', duration: '6:01' },
    { id: 14, title: 'Until I Bleed Out', duration: '3:10' },
  ];

  return (
    <PageLayout>
      <div className="flex-1 bg-gradient-to-b from-red-900 via-spotify-darkgray to-black overflow-y-auto pb-32 lg:pb-24">
        {/* Album Header */}
        <div className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-spotify-gray rounded shadow-2xl flex-shrink-0 flex items-center justify-center text-8xl">
              💿
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-semibold mb-2">ALBUM</p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">{album.name}</h1>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span className="font-semibold">{album.artist}</span>
                <span>•</span>
                <span>{album.year}</span>
                <span>•</span>
                <span>{album.totalTracks} songs</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline text-spotify-lightgray">{album.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-4 sm:px-6 lg:px-8 pb-6 flex items-center gap-6">
          <button className="bg-spotify-green text-black rounded-full p-4 sm:p-5 hover:scale-105 transition">
            <Play size={24} className="sm:w-7 sm:h-7 fill-current" />
          </button>
          <button className="text-spotify-lightgray hover:text-white transition">
            <Heart size={32} />
          </button>
          <button className="text-spotify-lightgray hover:text-white transition">
            <MoreHorizontal size={32} />
          </button>
        </div>

        {/* Track List */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-2 border-b border-spotify-gray text-spotify-lightgray text-sm">
            <div className="col-span-1">#</div>
            <div className="col-span-9">TITLE</div>
            <div className="col-span-2 flex items-center justify-end"><Clock size={16} /></div>
          </div>
          
          <div className="mt-2">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="group hover:bg-spotify-gray/50 transition-colors cursor-pointer rounded"
              >
                <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-3 items-center">
                  <div className="col-span-1 text-spotify-lightgray group-hover:text-white">
                    <span className="group-hover:hidden">{index + 1}</span>
                    <Play size={16} className="hidden group-hover:block fill-current" />
                  </div>
                  <div className="col-span-9">
                    <div className="font-semibold group-hover:text-spotify-green">{track.title}</div>
                    <div className="text-sm text-spotify-lightgray">{album.artist}</div>
                  </div>
                  <div className="col-span-2 text-spotify-lightgray text-right">{track.duration}</div>
                </div>

                <div className="sm:hidden flex items-center gap-3 px-4 py-3">
                  <span className="text-spotify-lightgray w-6">{index + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate text-sm">{track.title}</div>
                    <div className="text-xs text-spotify-lightgray">{album.artist}</div>
                  </div>
                  <span className="text-xs text-spotify-lightgray">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs sm:text-sm text-spotify-lightgray">
            © {album.year} {album.artist}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
