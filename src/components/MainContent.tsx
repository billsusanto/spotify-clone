'use client';

import React from 'react';
import { Play, MoreHorizontal, Clock } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
}

interface MainContentProps {
  setCurrentTrack: (track: any) => void;
}

const MainContent: React.FC<MainContentProps> = ({ setCurrentTrack }) => {
  const tracks: Track[] = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
    { id: 2, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", duration: "3:35" },
    { id: 3, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23" },
    { id: 4, title: "Peaches", artist: "Justin Bieber", album: "Justice", duration: "3:18" },
    { id: 5, title: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", duration: "2:58" },
    { id: 6, title: "Stay", artist: "The Kid LAROI, Justin Bieber", album: "F*ck Love 3", duration: "2:21" },
    { id: 7, title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", duration: "3:58" },
    { id: 8, title: "Kiss Me More", artist: "Doja Cat, SZA", album: "Planet Her", duration: "3:28" },
  ];

  const playlists = [
    { id: 1, name: "Today's Top Hits", description: "Ed Sheeran is on top of the Hottest 50!" },
    { id: 2, name: "RapCaviar", description: "New music from Lil Baby, Roddy Ricch and more." },
    { id: 3, name: "All Out 2010s", description: "The biggest songs of the 2010s." },
    { id: 4, name: "Rock Classics", description: "Rock legends & epic songs that continue to inspire." },
    { id: 5, name: "Chill Hits", description: "Kick back to the best new and recent chill hits." },
    { id: 6, name: "Viva Latino", description: "Today's top Latin hits, elevando nuestra música." },
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-darkgray to-black overflow-y-auto">
      <header className="bg-spotify-black bg-opacity-60 backdrop-blur-md sticky top-0 z-10 p-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-black bg-opacity-70 rounded-full p-1 hover:bg-opacity-80 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-black bg-opacity-70 rounded-full p-1 hover:bg-opacity-80 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition">
              Upgrade
            </button>
            <button className="bg-black rounded-full p-1 flex items-center space-x-2 pr-3 hover:bg-spotify-darkgray transition">
              <div className="bg-spotify-gray rounded-full w-7 h-7 flex items-center justify-center">
                <span className="text-sm font-semibold">U</span>
              </div>
              <span className="text-sm font-semibold">User</span>
            </button>
          </div>
        </div>
      </header>

      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Good evening</h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist) => (
            <div
              key={playlist.id}
              className="bg-spotify-gray bg-opacity-20 hover:bg-opacity-30 rounded flex items-center overflow-hidden group cursor-pointer transition"
            >
              <div className="bg-spotify-green w-20 h-20 flex items-center justify-center flex-shrink-0">
                <Play className="fill-current" size={32} />
              </div>
              <div className="px-4 flex-1">
                <h3 className="font-semibold truncate">{playlist.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Your top tracks</h2>

        <div className="bg-spotify-black bg-opacity-40 rounded-lg p-6">
          <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 pb-2 text-spotify-lightgray text-sm border-b border-spotify-gray mb-4">
            <div>#</div>
            <div>TITLE</div>
            <div>ALBUM</div>
            <div></div>
            <div className="flex justify-end">
              <Clock size={16} />
            </div>
          </div>

          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 rounded hover:bg-spotify-gray hover:bg-opacity-20 group cursor-pointer"
              onClick={() => setCurrentTrack(track)}
            >
              <div className="flex items-center justify-center text-spotify-lightgray">
                <span className="group-hover:hidden">{index + 1}</span>
                <Play className="hidden group-hover:block fill-current text-white" size={16} />
              </div>
              <div>
                <div className="font-semibold text-white">{track.title}</div>
                <div className="text-sm text-spotify-lightgray">{track.artist}</div>
              </div>
              <div className="flex items-center text-spotify-lightgray text-sm">
                {track.album}
              </div>
              <div className="flex items-center justify-end">
                <button className="opacity-0 group-hover:opacity-100 hover:text-white transition">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <div className="flex items-center justify-end text-spotify-lightgray text-sm">
                {track.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
