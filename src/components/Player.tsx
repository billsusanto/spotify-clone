'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Volume2,
  VolumeX,
  Heart,
  MoreHorizontal,
} from 'lucide-react';
import { usePlayerStore } from '@/store/usePlayerStore';
import { formatTime } from '@/lib/utils';

export default function Player() {
  const {
    currentTrack,
    isPlaying,
    volume,
    currentTime,
    repeatMode,
    shuffle,
    togglePlay,
    setVolume,
    setCurrentTime,
    nextTrack,
    previousTrack,
    toggleRepeat,
    toggleShuffle,
  } = usePlayerStore();

  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Simulate progress (in real app, sync with audio element)
  useEffect(() => {
    if (!isPlaying || !currentTrack) return;

    const interval = setInterval(() => {
      setCurrentTime(currentTime + 1);
      
      if (currentTime >= currentTrack.duration) {
        if (repeatMode === 'track') {
          setCurrentTime(0);
        } else {
          nextTrack();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, currentTrack, repeatMode]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !currentTrack) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * currentTrack.duration;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!currentTrack) {
    return null;
  }

  const progress = (currentTime / currentTrack.duration) * 100;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-spotify-dark-surface border-t border-spotify-dark-gray px-4 py-3 z-50"
      role="region"
      aria-label="Music player controls"
    >
      {/* Progress Bar */}
      <div
        ref={progressRef}
        className="absolute top-0 left-0 right-0 h-1 bg-spotify-medium-gray cursor-pointer group"
        onClick={handleProgressClick}
        role="slider"
        aria-label="Track progress"
        aria-valuemin={0}
        aria-valuemax={currentTrack.duration}
        aria-valuenow={currentTime}
      >
        <div
          className="h-full bg-white group-hover:bg-spotify-green transition-colors relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center pt-2">
        {/* Current Track Info */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={currentTrack.albumArt}
            alt={currentTrack.album}
            className="h-14 w-14 rounded flex-shrink-0"
          />
          <div className="min-w-0 hidden sm:block">
            <p className="text-sm font-semibold text-white line-clamp-1">
              {currentTrack.title}
            </p>
            <p className="text-xs text-spotify-light-gray line-clamp-1 hover:text-white hover:underline cursor-pointer">
              {currentTrack.artist}
            </p>
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`ml-2 hidden md:block ${
              isLiked ? 'text-spotify-green' : 'text-spotify-light-gray hover:text-white'
            }`}
            aria-label={isLiked ? 'Remove from Liked Songs' : 'Add to Liked Songs'}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            {/* Shuffle */}
            <button
              onClick={toggleShuffle}
              className={`btn-icon hidden sm:flex ${
                shuffle ? 'text-spotify-green' : 'text-spotify-light-gray'
              }`}
              aria-label="Toggle shuffle"
              aria-pressed={shuffle}
            >
              <Shuffle className="h-4 w-4" />
            </button>

            {/* Previous */}
            <button
              onClick={previousTrack}
              className="btn-icon text-white"
              aria-label="Previous track"
            >
              <SkipBack className="h-5 w-5 fill-current" />
            </button>

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="h-5 w-5 fill-current" />
              )}
            </button>

            {/* Next */}
            <button
              onClick={nextTrack}
              className="btn-icon text-white"
              aria-label="Next track"
            >
              <SkipForward className="h-5 w-5 fill-current" />
            </button>

            {/* Repeat */}
            <button
              onClick={toggleRepeat}
              className={`btn-icon hidden sm:flex ${
                repeatMode !== 'off' ? 'text-spotify-green' : 'text-spotify-light-gray'
              }`}
              aria-label={`Repeat ${repeatMode}`}
              aria-pressed={repeatMode !== 'off'}
            >
              <Repeat className="h-4 w-4" />
              {repeatMode === 'track' && (
                <span className="absolute text-[8px] font-bold">1</span>
              )}
            </button>
          </div>

          {/* Time Display */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-spotify-light-gray font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center justify-end gap-3">
          <button
            className="hidden md:block text-spotify-light-gray hover:text-white"
            aria-label="More options"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
          
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-spotify-light-gray hover:text-white"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-spotify-medium-gray rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform"
              aria-label="Volume control"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
