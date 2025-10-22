'use client';

import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

const Sidebar = () => {
  const playlists = [
    'Today\'s Top Hits',
    'RapCaviar',
    'All Out 2010s',
    'Rock Classics',
    'Chill Hits',
    'Viva Latino',
  ];

  return (
    <div className="w-64 bg-black flex flex-col">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-8">Spotify</h1>

        <nav className="space-y-4">
          <a href="#" className="flex items-center text-white hover:text-white transition-colors">
            <Home className="mr-4" size={24} />
            <span className="font-semibold">Home</span>
          </a>
          <a href="#" className="flex items-center text-spotify-lightgray hover:text-white transition-colors">
            <Search className="mr-4" size={24} />
            <span className="font-semibold">Search</span>
          </a>
          <a href="#" className="flex items-center text-spotify-lightgray hover:text-white transition-colors">
            <Library className="mr-4" size={24} />
            <span className="font-semibold">Your Library</span>
          </a>
        </nav>

        <div className="mt-8 space-y-4">
          <a href="#" className="flex items-center text-spotify-lightgray hover:text-white transition-colors">
            <PlusSquare className="mr-4" size={24} />
            <span className="font-semibold">Create Playlist</span>
          </a>
          <a href="#" className="flex items-center text-spotify-lightgray hover:text-white transition-colors">
            <Heart className="mr-4 fill-current text-spotify-green" size={24} />
            <span className="font-semibold">Liked Songs</span>
          </a>
        </div>
      </div>

      <div className="flex-1 px-6 overflow-y-auto">
        <div className="border-t border-spotify-gray pt-4">
          {playlists.map((playlist, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 text-sm text-spotify-lightgray hover:text-white transition-colors"
            >
              {playlist}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
