'use client';

import React from 'react';
import { Play, Heart, MoreHorizontal, Pause } from 'lucide-react';
import { formatTime } from '@/lib/utils';
import { usePlayerStore } from '@/store/usePlayerStore';
import { Track } from '@/types';

interface TrackRowProps {
  track: Track;
  index: number;
  showAlbum?: boolean;
  showAddedAt?: boolean;
  className?: string;
}

export function TrackRow({ track, index, showAlbum = true, showAddedAt = false, className = '' }: TrackRowProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const { currentTrack, isPlaying, setCurrentTrack, togglePlay } = usePlayerStore();
  
  const isCurrentTrack = currentTrack?.id === track.id;
  const showPlayButton = isHovered || isCurrentTrack;

  const handlePlayClick = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else {
      setCurrentTrack(track);
    }
  };

  return (
    <div
      className={`card-track group grid grid-cols-[16px_4fr_2fr_1fr] gap-4 items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="row"
      aria-label={`${track.title} by ${track.artist}`}
    >
      {/* Index / Play Button */}
      <div className="flex items-center justify-center">
        {showPlayButton ? (
          <button
            onClick={handlePlayClick}
            className="text-white hover:scale-110 transition-transform"
            aria-label={isCurrentTrack && isPlaying ? 'Pause' : 'Play'}
          >
            {isCurrentTrack && isPlaying ? (
              <Pause className="h-4 w-4 fill-current" />
            ) : (
              <Play className="h-4 w-4 fill-current" />
            )}
          </button>
        ) : (
          <span className={`text-sm ${isCurrentTrack ? 'text-spotify-green' : 'text-spotify-light-gray'}`}>
            {index + 1}
          </span>
        )}
      </div>

      {/* Track Info */}
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={track.albumArt}
          alt={track.album}
          className="h-10 w-10 rounded flex-shrink-0"
          loading="lazy"
        />
        <div className="min-w-0">
          <p className={`line-clamp-1 ${isCurrentTrack ? 'text-spotify-green' : 'text-white'}`}>
            {track.title}
          </p>
          <p className="line-clamp-1 text-sm text-spotify-light-gray hover:text-white hover:underline cursor-pointer">
            {track.artist}
          </p>
        </div>
      </div>

      {/* Album Name */}
      {showAlbum && (
        <div className="hidden md:block">
          <p className="line-clamp-1 text-sm text-spotify-light-gray hover:text-white hover:underline cursor-pointer">
            {track.album}
          </p>
        </div>
      )}

      {/* Actions & Duration */}
      <div className="flex items-center justify-between gap-4">
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`opacity-0 group-hover:opacity-100 transition-opacity ${
            isLiked ? 'text-spotify-green opacity-100' : 'text-spotify-light-gray hover:text-white'
          }`}
          aria-label={isLiked ? 'Remove from Liked Songs' : 'Add to Liked Songs'}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Duration */}
        <span className="text-sm text-spotify-light-gray font-mono">
          {formatTime(track.duration)}
        </span>

        {/* More Options */}
        <button
          className="opacity-0 group-hover:opacity-100 text-spotify-light-gray hover:text-white transition-opacity"
          aria-label="More options"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
