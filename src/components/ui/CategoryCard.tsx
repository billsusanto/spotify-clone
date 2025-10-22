'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className = '' }: CategoryCardProps) {
  return (
    <Link href={`/genre/${category.id}`}>
      <motion.div
        className={`relative h-32 overflow-hidden rounded-lg cursor-pointer ${className}`}
        style={{ backgroundColor: category.color }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {category.name}
          </h3>
        </div>
        
        <div className="absolute bottom-0 right-0 w-24 h-24 transform rotate-25 translate-x-2 translate-y-2">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover rounded shadow-xl"
            loading="lazy"
          />
        </div>
      </motion.div>
    </Link>
  );
}
