'use client';

import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PlaylistCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  href?: string;
  className?: string;
}

export function PlaylistCard({ id, name, description, imageUrl, href, className }: PlaylistCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const link = href || `/playlist/${id}`;

  return (
    <Link href={link} className="block">
      <motion.div
        className={cn(
          'card-playlist group relative cursor-pointer',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Album Art Container */}
        <div className="relative mb-4 aspect-square overflow-hidden rounded-md shadow-lg">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Play Button Overlay */}
          <motion.div
            className="absolute bottom-2 right-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="btn-play shadow-xl"
              aria-label={`Play ${name}`}
              onClick={(e) => {
                e.preventDefault();
                // Handle play action
              }}
            >
              <Play className="h-5 w-5 fill-current" />
            </button>
          </motion.div>
        </div>

        {/* Playlist Info */}
        <div className="space-y-1">
          <h3 className="line-clamp-1 font-semibold text-white">
            {name}
          </h3>
          <p className="line-clamp-2 text-sm text-spotify-light-gray">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
