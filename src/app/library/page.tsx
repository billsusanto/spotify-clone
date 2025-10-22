'use client';

import React, { useState } from 'react';
import { Plus, ArrowUpDown } from 'lucide-react';
import Link from 'next/link';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<'playlists' | 'artists' | 'albums'>('playlists');

  const playlists = [
    { id: 1, name: 'Liked Songs', type: 'Playlist', count: '127 songs', color: 'bg-gradient-to-br from-purple-500 to-blue-500' },
    { id: 2, name: 'My Playlist #1', type: 'Playlist', count: '23 songs', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { id: 3, name: 'Chill Vibes', type: 'Playlist', count: '45 songs', color: 'bg-gradient-to-br from-pink-500 to-rose-500' },
    { id: 4, name: 'Workout Mix', type: 'Playlist', count: '38 songs', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
    { id: 5, name: 'Focus Flow', type: 'Playlist', count: '52 songs', color: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
    { id: 6, name: 'Road Trip', type: 'Playlist', count: '67 songs', color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
  ];

  const artists = [
    { id: 1, name: 'The Weeknd', type: 'Artist', followers: '2.3M followers' },
    { id: 2, name: 'Dua Lipa', type: 'Artist', followers: '1.8M followers' },
    { id: 3, name: 'Justin Bieber', type: 'Artist', followers: '3.1M followers' },
    { id: 4, name: 'Olivia Rodrigo', type: 'Artist', followers: '1.2M followers' },
    { id: 5, name: 'Doja Cat', type: 'Artist', followers: '1.5M followers' },
  ];

  const albums = [
    { id: 1, name: 'After Hours', artist: 'The Weeknd', year: '2020', type: 'Album' },
    { id: 2, name: 'Future Nostalgia', artist: 'Dua Lipa', year: '2020', type: 'Album' },
    { id: 3, name: 'Justice', artist: 'Justin Bieber', year: '2021', type: 'Album' },
    { id: 4, name: 'SOUR', artist: 'Olivia Rodrigo', year: '2021', type: 'Album' },
    { id: 5, name: 'Planet Her', artist: 'Doja Cat', year: '2021', type: 'Album' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'playlists':
        return playlists.map((playlist) => (
          <Link
            key={playlist.id}
            href={`/playlist/${playlist.id}`}
            className="flex items-center gap-3 p-2 hover:bg-spotify-gray rounded transition cursor-pointer"
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 ${playlist.color} rounded flex-shrink-0 flex items-center justify-center text-2xl`}>
              {playlist.id === 1 ? '💚' : '🎵'}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate text-sm sm:text-base">{playlist.name}</h3>
              <p className="text-xs sm:text-sm text-spotify-lightgray">{playlist.type} • {playlist.count}</p>
            </div>
          </Link>
        ));
      case 'artists':
        return artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/artist/${artist.id}`}
            className="flex items-center gap-3 p-2 hover:bg-spotify-gray rounded transition cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-spotify-gray rounded-full flex-shrink-0 flex items-center justify-center text-2xl">
              👤
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate text-sm sm:text-base">{artist.name}</h3>
              <p className="text-xs sm:text-sm text-spotify-lightgray">{artist.type} • {artist.followers}</p>
            </div>
          </Link>
        ));
      case 'albums':
        return albums.map((album) => (
          <Link
            key={album.id}
            href={`/album/${album.id}`}
            className="flex items-center gap-3 p-2 hover:bg-spotify-gray rounded transition cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-spotify-gray rounded flex-shrink-0 flex items-center justify-center text-2xl">
              💿
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate text-sm sm:text-base">{album.name}</h3>
              <p className="text-xs sm:text-sm text-spotify-lightgray">{album.type} • {album.artist} • {album.year}</p>
            </div>
          </Link>
        ));
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-darkgray to-black overflow-y-auto pb-32 lg:pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-spotify-darkgray px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Your Library</h1>
          <button className="text-spotify-lightgray hover:text-white transition">
            <Plus size={28} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab('playlists')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition ${
              activeTab === 'playlists' ? 'bg-white text-black' : 'bg-spotify-gray text-white hover:bg-spotify-gray/80'
            }`}
          >
            Playlists
          </button>
          <button
            onClick={() => setActiveTab('artists')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition ${
              activeTab === 'artists' ? 'bg-white text-black' : 'bg-spotify-gray text-white hover:bg-spotify-gray/80'
            }`}
          >
            Artists
          </button>
          <button
            onClick={() => setActiveTab('albums')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition ${
              activeTab === 'albums' ? 'bg-white text-black' : 'bg-spotify-gray text-white hover:bg-spotify-gray/80'
            }`}
          >
            Albums
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        {/* Sort Button */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 text-spotify-lightgray hover:text-white transition text-sm">
            <ArrowUpDown size={16} />
            <span className="hidden sm:inline">Sort by: Recent</span>
            <span className="sm:hidden">Sort</span>
          </button>
        </div>

        {/* List */}
        <div className="space-y-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
