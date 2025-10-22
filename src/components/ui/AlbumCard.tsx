'use client';

import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Album } from '@/types';

interface AlbumCardProps {
  album: Album;
  className?: string;
}

export function AlbumCard({ album, className = '' }: AlbumCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link href={`/album/${album.id}`} className="block">
      <motion.div
        className={`card-playlist group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative mb-4 aspect-square overflow-hidden rounded-md shadow-lg">
          <img
            src={album.imageUrl}
            alt={album.name}
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
              aria-label={`Play ${album.name}`}
              onClick={(e) => e.preventDefault()}
            >
              <Play className="h-5 w-5 fill-current" />
            </button>
          </motion.div>
        </div>

        <div className="space-y-1">
          <h3 className="line-clamp-1 font-semibold text-white">
            {album.name}
          </h3>
          <p className="line-clamp-1 text-sm text-spotify-light-gray">
            {album.releaseYear} • {album.artist}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
