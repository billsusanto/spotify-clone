'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Mic2, ListMusic, Laptop2, Volume2, Maximize2 } from 'lucide-react';

interface PlayerProps {
  currentTrack: {
    title: string;
    artist: string;
    album: string;
    duration: number;
  };
}

const Player: React.FC<PlayerProps> = ({ currentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = x / bounds.width;
    setCurrentTime(Math.floor(percentage * currentTrack.duration));
  };

  return (
    <div className="h-auto sm:h-24 bg-spotify-darkgray border-t border-spotify-gray">
      {/* Mobile Layout (Stacked) */}
      <div className="sm:hidden flex flex-col px-4 py-2">
        {/* Progress Bar at Top on Mobile */}
        <div className="flex items-center space-x-2 w-full mb-2">
          <span className="text-xs text-spotify-lightgray">{formatTime(currentTime)}</span>
          <div
            className="flex-1 bg-spotify-gray h-1 rounded-full cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="bg-white h-full rounded-full relative group-hover:bg-spotify-green transition-colors"
              style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-xs text-spotify-lightgray">{formatTime(currentTrack.duration)}</span>
        </div>

        {/* Track Info and Controls Combined */}
        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="bg-spotify-gray w-12 h-12 flex-shrink-0 flex items-center justify-center rounded text-xs">
              🎵
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{currentTrack.title}</div>
              <div className="text-xs text-spotify-lightgray truncate">{currentTrack.artist}</div>
            </div>
          </div>

          {/* Compact Controls */}
          <div className="flex items-center space-x-3 ml-2">
            <button className="text-spotify-lightgray hover:text-white transition">
              <SkipBack size={20} fill="currentColor" />
            </button>
            <button
              className="bg-white rounded-full p-2 hover:scale-105 transition"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause size={18} className="text-black fill-current" />
              ) : (
                <Play size={18} className="text-black fill-current" />
              )}
            </button>
            <button className="text-spotify-lightgray hover:text-white transition">
              <SkipForward size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Original 3-Column) */}
      <div className="hidden sm:flex items-center justify-between px-4 h-24">
        {/* Current Track Info */}
        <div className="flex items-center space-x-4 w-1/4">
          <div className="bg-spotify-gray w-14 h-14 flex-shrink-0 flex items-center justify-center rounded">
            <span className="text-xs">🎵</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">{currentTrack.title}</div>
            <div className="text-xs text-spotify-lightgray truncate">{currentTrack.artist}</div>
          </div>
          <button className="text-spotify-lightgray hover:text-white transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-2/4 max-w-2xl">
          <div className="flex items-center space-x-6 mb-2">
            <button className="text-spotify-lightgray hover:text-white transition">
              <Shuffle size={16} />
            </button>
            <button className="text-spotify-lightgray hover:text-white transition">
              <SkipBack size={20} fill="currentColor" />
            </button>
            <button
              className="bg-white rounded-full p-2 hover:scale-105 transition"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause size={20} className="text-black fill-current" />
              ) : (
                <Play size={20} className="text-black fill-current" />
              )}
            </button>
            <button className="text-spotify-lightgray hover:text-white transition">
              <SkipForward size={20} fill="currentColor" />
            </button>
            <button className="text-spotify-lightgray hover:text-white transition">
              <Repeat size={16} />
            </button>
          </div>

          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-spotify-lightgray w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div
              className="flex-1 bg-spotify-gray h-1 rounded-full cursor-pointer group"
              onClick={handleProgressClick}
            >
              <div
                className="bg-white h-full rounded-full relative group-hover:bg-spotify-green transition-colors"
                style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="text-xs text-spotify-lightgray w-10">
              {formatTime(currentTrack.duration)}
            </span>
          </div>
        </div>

        {/* Additional Controls */}
        <div className="hidden lg:flex items-center justify-end space-x-4 w-1/4">
          <button className="text-spotify-lightgray hover:text-white transition">
            <Mic2 size={16} />
          </button>
          <button className="text-spotify-lightgray hover:text-white transition">
            <ListMusic size={16} />
          </button>
          <button className="text-spotify-lightgray hover:text-white transition">
            <Laptop2 size={16} />
          </button>
          <div className="flex items-center space-x-2 w-32">
            <Volume2 size={16} className="text-spotify-lightgray" />
            <div className="flex-1 bg-spotify-gray h-1 rounded-full group cursor-pointer">
              <div
                className="bg-white h-full rounded-full relative group-hover:bg-spotify-green transition-colors"
                style={{ width: `${volume}%` }}
              >
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          <button className="text-spotify-lightgray hover:text-white transition">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
