'use client';

import React from 'react';
import { Play, MoreHorizontal, Clock, Heart, UserPlus } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function PlaylistPage() {
  const params = useParams();

  const playlist = {
    id: params.id,
    name: "Today's Top Hits",
    description: 'Ed Sheeran is on top of the Hottest 50!',
    creator: 'Spotify',
    followers: '32,145,678',
    totalTracks: 50,
    duration: '2 hr 45 min',
  };

  const tracks = [
    { id: 1, title: 'Vampire', artist: 'Olivia Rodrigo', album: 'GUTS', duration: '3:39', addedAt: '5 days ago' },
    { id: 2, title: 'Cruel Summer', artist: 'Taylor Swift', album: 'Lover', duration: '2:58', addedAt: '1 week ago' },
    { id: 3, title: 'Paint The Town Red', artist: 'Doja Cat', album: 'Scarlet', duration: '3:50', addedAt: '2 weeks ago' },
    { id: 4, title: 'Snooze', artist: 'SZA', album: 'SOS', duration: '3:21', addedAt: '3 weeks ago' },
    { id: 5, title: 'greedy', artist: 'Tate McRae', album: 'THINK LATER', duration: '2:11', addedAt: '1 month ago' },
    { id: 6, title: 'Water', artist: 'Tyla', album: 'Water', duration: '3:20', addedAt: '1 month ago' },
    { id: 7, title: 'Lose Control', artist: 'Teddy Swims', album: "I've Tried Everything", duration: '3:29', addedAt: '2 months ago' },
    { id: 8, title: 'Rich Baby Daddy', artist: 'Drake ft. Sexyy Red', album: 'For All The Dogs', duration: '3:42', addedAt: '2 months ago' },
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 via-spotify-darkgray to-black overflow-y-auto pb-32 lg:pb-24">
      {/* Playlist Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6">
          <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-purple-500 to-blue-500 rounded shadow-2xl flex-shrink-0 flex items-center justify-center text-8xl">
            🎵
          </div>
          <div className="flex-1">
            <p className="text-xs sm:text-sm font-semibold mb-2">PLAYLIST</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">{playlist.name}</h1>
            <p className="text-sm sm:text-base text-spotify-lightgray mb-4">{playlist.description}</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">{playlist.creator}</span>
              <span>•</span>
              <span>{playlist.followers} likes</span>
              <span>•</span>
              <span>{playlist.totalTracks} songs</span>
              <span className="hidden sm:inline text-spotify-lightgray">, {playlist.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-6 flex items-center gap-4 sm:gap-6">
        <button className="bg-spotify-green text-black rounded-full p-4 sm:p-5 hover:scale-105 transition">
          <Play size={24} className="sm:w-7 sm:h-7 fill-current" />
        </button>
        <button className="text-spotify-lightgray hover:text-white transition">
          <Heart size={32} />
        </button>
        <button className="text-spotify-lightgray hover:text-white transition">
          <UserPlus size={28} />
        </button>
        <button className="text-spotify-lightgray hover:text-white transition">
          <MoreHorizontal size={32} />
        </button>
      </div>

      {/* Track List */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-2 border-b border-spotify-gray text-spotify-lightgray text-sm">
          <div className="col-span-1">#</div>
          <div className="col-span-5">TITLE</div>
          <div className="col-span-3">ALBUM</div>
          <div className="col-span-2">DATE ADDED</div>
          <div className="col-span-1 flex items-center justify-end"><Clock size={16} /></div>
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
                <div className="col-span-5">
                  <div className="font-semibold group-hover:text-spotify-green truncate">{track.title}</div>
                  <div className="text-sm text-spotify-lightgray truncate">{track.artist}</div>
                </div>
                <div className="col-span-3 text-spotify-lightgray text-sm truncate">{track.album}</div>
                <div className="col-span-2 text-spotify-lightgray text-sm">{track.addedAt}</div>
                <div className="col-span-1 text-spotify-lightgray text-right">{track.duration}</div>
              </div>

              <div className="sm:hidden flex items-center gap-3 px-4 py-3">
                <div className="flex-shrink-0 w-12 h-12 bg-spotify-gray rounded flex items-center justify-center text-xl">
                  🎵
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate text-sm">{track.title}</div>
                  <div className="text-xs text-spotify-lightgray truncate">{track.artist}</div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-xs text-spotify-lightgray">{track.duration}</span>
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
}
