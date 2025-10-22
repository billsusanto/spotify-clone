'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import AlbumCard from '../components/AlbumCard';
import TrackList from '../components/TrackList';
import {
  mockPlaylists,
  mockArtists,
  mockTracks,
  mockAlbums,
  recentlyPlayed,
} from '../data/mockData';
import { Search } from 'lucide-react';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(mockTracks[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTrackSelect = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[280px] pb-[90px]">
        {/* Header with Search */}
        <header className="sticky top-0 z-90 bg-gradient-to-b from-background-primary to-transparent backdrop-blur-sm">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  className="w-8 h-8 bg-background-sidebar rounded-full flex items-center justify-center text-white hover:bg-background-tertiary transition-colors"
                  aria-label="Go back"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="w-8 h-8 bg-background-sidebar rounded-full flex items-center justify-center text-white hover:bg-background-tertiary transition-colors"
                  aria-label="Go forward"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="search"
                  placeholder="What do you want to listen to?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[360px] h-10 pl-10 pr-4 bg-background-elevated rounded-full text-sm text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Search for songs, artists, or playlists"
                />
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-2">
                <button className="px-6 py-2 bg-background-sidebar rounded-full text-sm font-bold text-white hover:bg-background-tertiary hover:scale-105 transition-all">
                  Sign up
                </button>
                <button className="px-6 py-2 bg-white rounded-full text-sm font-bold text-black hover:scale-105 transition-all">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="px-8 py-6">
          {/* Hero Section */}
          <section className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-6">Good evening</h1>
            <div className="grid grid-cols-3 gap-4">
              {recentlyPlayed.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className="bg-background-elevated rounded flex items-center gap-4 overflow-hidden hover:bg-background-tertiary transition-colors cursor-pointer group"
                >
                  <img
                    src={item.coverImage}
                    alt={item.name || item.title}
                    className="w-20 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="font-bold text-white truncate">
                      {item.name || item.title}
                    </h3>
                  </div>
                  <button
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 opacity-0 group-hover:opacity-100 transition-all shadow-xl hover:scale-105"
                    aria-label={`Play ${item.name || item.title}`}
                  >
                    <svg className="w-6 h-6 fill-black ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Recently Played */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recently played</h2>
              <a href="#" className="text-sm font-bold text-text-secondary hover:text-white hover:underline">
                Show all
              </a>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {recentlyPlayed.map((item, index) => (
                <AlbumCard
                  key={index}
                  item={item}
                  type={item.artist ? 'album' : 'playlist'}
                />
              ))}
            </div>
          </section>

          {/* Popular Playlists */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Popular playlists</h2>
              <a href="#" className="text-sm font-bold text-text-secondary hover:text-white hover:underline">
                Show all
              </a>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {mockPlaylists.map((playlist) => (
                <AlbumCard key={playlist.id} item={playlist} type="playlist" />
              ))}
            </div>
          </section>

          {/* Popular Artists */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Popular artists</h2>
              <a href="#" className="text-sm font-bold text-text-secondary hover:text-white hover:underline">
                Show all
              </a>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {mockArtists.map((artist) => (
                <AlbumCard key={artist.id} item={artist} type="artist" />
              ))}
            </div>
          </section>

          {/* Popular Albums */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Popular albums</h2>
              <a href="#" className="text-sm font-bold text-text-secondary hover:text-white hover:underline">
                Show all
              </a>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {mockAlbums.map((album) => (
                <AlbumCard key={album.id} item={album} type="album" />
              ))}
            </div>
          </section>

          {/* Featured Playlist with Track List */}
          <section className="mb-10">
            <div className="bg-gradient-to-b from-background-tertiary to-background-primary rounded-lg p-6">
              <div className="flex items-end gap-6 mb-6">
                <img
                  src={mockPlaylists[0].coverImage}
                  alt={mockPlaylists[0].name}
                  className="w-48 h-48 rounded shadow-2xl"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-white uppercase mb-2">Playlist</p>
                  <h2 className="text-5xl font-black text-white mb-6">
                    {mockPlaylists[0].name}
                  </h2>
                  <p className="text-text-secondary mb-4">
                    {mockPlaylists[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold text-white">{mockPlaylists[0].creator}</span>
                    <span className="text-text-secondary">• 50 songs, 3 hr 30 min</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6 mb-6">
                <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:scale-105 hover:bg-primary-light transition-all shadow-xl">
                  <svg className="w-7 h-7 fill-black ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <button className="w-8 h-8 text-text-secondary hover:text-white transition-colors" aria-label="Like">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="w-8 h-8 text-text-secondary hover:text-white transition-colors" aria-label="More options">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>

              {/* Track List */}
              <TrackList tracks={mockTracks} onTrackSelect={handleTrackSelect} />
            </div>
          </section>
        </div>
      </main>

      {/* Player */}
      <Player currentTrack={currentTrack} />
    </div>
  );
}
