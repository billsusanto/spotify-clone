'use client';

import React from 'react';
import { Play, MoreHorizontal, ChevronDown } from 'lucide-react';
import { usePlayerStore } from '@/store/usePlayerStore';
import { formatTime } from '@/lib/utils';

const MainContent: React.FC = () => {
  const { setCurrentTrack } = usePlayerStore();

  const tracks = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36', duration: 200 },
    { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', albumArt: 'https://i.scdn.co/image/ab67616d0000b273c88028668ecda1a38606e788', duration: 203 },
    { id: 3, title: 'Save Your Tears', artist: 'The Weeknd', album: 'After Hours', albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36', duration: 215 },
    { id: 4, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', albumArt: 'https://i.scdn.co/image/ab67616d0000b273c87f1394833f5b26e8f36eec', duration: 198 },
    { id: 5, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', albumArt: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a', duration: 178 },
    { id: 6, title: 'Kiss Me More', artist: 'Doja Cat ft. SZA', album: 'Planet Her', albumArt: 'https://i.scdn.co/image/ab67616d0000b273be841ba4bc24340152e3a79a', duration: 208 },
    { id: 7, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*ck Love 3', albumArt: 'https://i.scdn.co/image/ab67616d0000b273ce5fb5e7fd093bc6f8c8ad8d', duration: 141 },
    { id: 8, title: 'Industry Baby', artist: 'Lil Nas X, Jack Harlow', album: 'MONTERO', albumArt: 'https://i.scdn.co/image/ab67616d0000b273be82673b5f79d9658ec0a9fd', duration: 212 },
  ];

  const playlists = [
    { id: 1, name: 'Today\'s Top Hits', description: 'Ed Sheeran is on top of the Hottest 50!' },
    { id: 2, name: 'RapCaviar', description: 'New music from Lil Baby, Gunna and Lil Durk.' },
    { id: 3, name: 'All Out 2010s', description: 'The biggest songs of the 2010s.' },
    { id: 4, name: 'Rock Classics', description: 'Rock legends & epic songs.' },
    { id: 5, name: 'Chill Hits', description: 'Kick back to the best new and recent chill hits.' },
    { id: 6, name: 'Viva Latino', description: 'Today\'s top Latin hits.' },
  ];

  const handleTrackClick = (track: typeof tracks[0]) => {
    setCurrentTrack(track);
  };

  const handleTrackKeyDown = (e: React.KeyboardEvent, track: typeof tracks[0]) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTrackClick(track);
    }
  };

  return (
    <main 
      id="main-content" 
      className="flex-1 bg-gradient-to-b from-spotify-dark-gray to-black overflow-y-auto"
      role="main"
    >
      {/* Header - Mobile Responsive */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-spotify-dark-gray/70 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button 
              className="btn-primary text-sm sm:text-base"
              aria-label="Upgrade to Spotify Premium"
            >
              Upgrade
            </button>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-end">
            <button 
              className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:scale-105 transition text-sm sm:text-base"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <span className="hidden sm:inline">Bill Susanto</span>
              <span className="sm:hidden">BS</span>
              <ChevronDown size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Playlists Section - Responsive Grid */}
        <section aria-labelledby="playlists-heading">
          <h2 id="playlists-heading" className="text-h2 sm:text-h2-mobile font-poppins mb-6">
            Popular Playlists
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6 mb-12">
            {playlists.map((playlist) => (
              <article
                key={playlist.id}
                className="card-playlist"
                role="article"
                aria-label={`Playlist: ${playlist.name}`}
              >
                <div className="relative mb-4">
                  <div className="bg-spotify-dark-gray aspect-square rounded flex items-center justify-center text-4xl">
                    🎵
                  </div>
                  <button 
                    className="btn-play absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-green-lg"
                    aria-label={`Play ${playlist.name}`}
                  >
                    <Play size={20} className="fill-current" aria-hidden="true" />
                  </button>
                </div>
                <h3 className="font-semibold mb-2 truncate text-sm sm:text-base">{playlist.name}</h3>
                <p className="text-body-small text-spotify-light-gray line-clamp-2">{playlist.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Tracks Section - Mobile Responsive Table */}
        <section aria-labelledby="tracks-heading">
          <h2 id="tracks-heading" className="text-h2 sm:text-h2-mobile font-poppins mb-6">
            Popular Songs
          </h2>
          <div className="bg-spotify-dark-gray/30 rounded-lg overflow-hidden">
            {/* Desktop Table Header */}
            <div 
              className="hidden sm:grid grid-cols-12 gap-4 px-4 py-3 border-b border-spotify-dark-gray text-spotify-light-gray text-sm font-semibold"
              role="row"
            >
              <div className="col-span-1" role="columnheader">#</div>
              <div className="col-span-5" role="columnheader">TITLE</div>
              <div className="col-span-3" role="columnheader">ALBUM</div>
              <div className="col-span-2" role="columnheader">DURATION</div>
              <div className="col-span-1" role="columnheader"></div>
            </div>

            {/* Tracks List - Adaptive Layout */}
            <div role="list" aria-label="Track list">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  role="listitem"
                  tabIndex={0}
                  className="card-track group"
                  onClick={() => handleTrackClick(track)}
                  onKeyDown={(e) => handleTrackKeyDown(e, track)}
                  aria-label={`Track: ${track.title} by ${track.artist}`}
                >
                  {/* Desktop Layout */}
                  <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-3 items-center">
                    <div className="col-span-1 text-spotify-light-gray group-hover:text-white">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <Play size={16} className="hidden group-hover:block fill-current" aria-hidden="true" />
                    </div>
                    <div className="col-span-5">
                      <div className="font-semibold truncate">{track.title}</div>
                      <div className="text-sm text-spotify-light-gray truncate">{track.artist}</div>
                    </div>
                    <div className="col-span-3 text-spotify-light-gray text-sm truncate">{track.album}</div>
                    <div className="col-span-2 text-spotify-light-gray text-sm font-mono">{formatTime(track.duration)}</div>
                    <div className="col-span-1">
                      <button 
                        className="opacity-0 group-hover:opacity-100 text-spotify-light-gray hover:text-white transition"
                        aria-label={`More options for ${track.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal size={20} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="sm:hidden flex items-center gap-3 px-4 py-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-spotify-dark-gray rounded flex items-center justify-center text-xl">
                      🎵
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate text-sm">{track.title}</div>
                      <div className="text-xs text-spotify-light-gray truncate">{track.artist}</div>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <span className="text-xs text-spotify-light-gray font-mono">{formatTime(track.duration)}</span>
                      <button 
                        className="text-spotify-light-gray"
                        aria-label={`More options for ${track.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal size={18} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
