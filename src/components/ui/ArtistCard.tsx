'use client';

import React from 'react';
import Link from 'next/link';
import { Play, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Artist } from '@/types';
import { formatCompactNumber } from '@/lib/utils';

interface ArtistCardProps {
  artist: Artist;
  className?: string;
}

export function ArtistCard({ artist, className = '' }: ArtistCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link href={`/artist/${artist.id}`} className="block">
      <motion.div
        className={`card-playlist group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative mb-4 aspect-square overflow-hidden rounded-full shadow-lg">
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          
          <motion.div
            className="absolute bottom-2 right-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="btn-play shadow-xl"
              aria-label={`Play ${artist.name}`}
              onClick={(e) => e.preventDefault()}
            >
              <Play className="h-5 w-5 fill-current" />
            </button>
          </motion.div>
        </div>

        <div className="space-y-1 text-center">
          <div className="flex items-center justify-center gap-1">
            <h3 className="line-clamp-1 font-semibold text-white">
              {artist.name}
            </h3>
            {artist.verified && (
              <BadgeCheck className="h-4 w-4 text-blue-500 flex-shrink-0" aria-label="Verified artist" />
            )}
          </div>
          <p className="text-sm text-spotify-light-gray capitalize">
            Artist • {formatCompactNumber(artist.followers)} followers
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
