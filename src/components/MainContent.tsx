'use client';

import React from 'react';
import { Play, MoreHorizontal, ChevronDown } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
}

interface MainContentProps {
  setCurrentTrack: (track: Track) => void;
}

const MainContent: React.FC<MainContentProps> = ({ setCurrentTrack }) => {
  const tracks: Track[] = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: 200 },
    { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: 203 },
    { id: 3, title: 'Save Your Tears', artist: 'The Weeknd', album: 'After Hours', duration: 215 },
    { id: 4, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', duration: 198 },
    { id: 5, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', duration: 178 },
    { id: 6, title: 'Kiss Me More', artist: 'Doja Cat ft. SZA', album: 'Planet Her', duration: 208 },
    { id: 7, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*ck Love 3', duration: 141 },
    { id: 8, title: 'Industry Baby', artist: 'Lil Nas X, Jack Harlow', album: 'MONTERO', duration: 212 },
  ];

  const playlists = [
    { id: 1, name: 'Today\'s Top Hits', description: 'Ed Sheeran is on top of the Hottest 50!' },
    { id: 2, name: 'RapCaviar', description: 'New music from Lil Baby, Gunna and Lil Durk.' },
    { id: 3, name: 'All Out 2010s', description: 'The biggest songs of the 2010s.' },
    { id: 4, name: 'Rock Classics', description: 'Rock legends & epic songs.' },
    { id: 5, name: 'Chill Hits', description: 'Kick back to the best new and recent chill hits.' },
    { id: 6, name: 'Viva Latino', description: 'Today\'s top Latin hits.' },
  ];

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-darkgray to-black overflow-y-auto">
      {/* Header - Mobile Responsive */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-spotify-darkgray/70 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button className="bg-spotify-green text-white px-6 sm:px-8 py-2 rounded-full font-semibold hover:scale-105 transition text-sm sm:text-base">
              Upgrade
            </button>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-end">
            <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition text-sm sm:text-base">
              <span className="hidden sm:inline">Bill Susanto</span>
              <span className="sm:hidden">BS</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Playlists Section - Responsive Grid */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Popular Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-spotify-darkgray p-3 sm:p-4 rounded-lg hover:bg-spotify-gray transition-all cursor-pointer group"
            >
              <div className="relative mb-3 sm:mb-4">
                <div className="bg-spotify-gray aspect-square rounded flex items-center justify-center text-2xl sm:text-4xl">
                  🎵
                </div>
                <button className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-2 sm:p-3 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <Play size={16} className="sm:w-5 sm:h-5 fill-current text-black" />
                </button>
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 truncate text-sm sm:text-base">{playlist.name}</h3>
              <p className="text-xs sm:text-sm text-spotify-lightgray line-clamp-2">{playlist.description}</p>
            </div>
          ))}
        </div>

        {/* Tracks Section - Mobile Responsive Table */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Popular Songs</h2>
        <div className="bg-spotify-darkgray/30 rounded-lg overflow-hidden">
          {/* Desktop Table Header */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-3 border-b border-spotify-gray text-spotify-lightgray text-sm font-semibold">
            <div className="col-span-1">#</div>
            <div className="col-span-5">TITLE</div>
            <div className="col-span-3">ALBUM</div>
            <div className="col-span-2">DURATION</div>
            <div className="col-span-1"></div>
          </div>

          {/* Tracks List - Adaptive Layout */}
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="group hover:bg-spotify-gray/50 transition-colors cursor-pointer"
              onClick={() => setCurrentTrack(track)}
            >
              {/* Desktop Layout */}
              <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-3 items-center">
                <div className="col-span-1 text-spotify-lightgray group-hover:text-white">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play size={16} className="hidden group-hover:block fill-current" />
                </div>
                <div className="col-span-5">
                  <div className="font-semibold truncate">{track.title}</div>
                  <div className="text-sm text-spotify-lightgray truncate">{track.artist}</div>
                </div>
                <div className="col-span-3 text-spotify-lightgray text-sm truncate">{track.album}</div>
                <div className="col-span-2 text-spotify-lightgray text-sm">{formatDuration(track.duration)}</div>
                <div className="col-span-1">
                  <button className="opacity-0 group-hover:opacity-100 text-spotify-lightgray hover:text-white transition">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="sm:hidden flex items-center gap-3 px-4 py-3">
                <div className="flex-shrink-0 w-12 h-12 bg-spotify-gray rounded flex items-center justify-center text-xl">
                  🎵
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate text-sm">{track.title}</div>
                  <div className="text-xs text-spotify-lightgray truncate">{track.artist}</div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-xs text-spotify-lightgray">{formatDuration(track.duration)}</span>
                  <button className="text-spotify-lightgray">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
