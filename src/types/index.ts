export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: number;
  audioUrl?: string;
  addedAt?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  trackCount: number;
  owner: string;
  tracks?: Track[];
  isPublic?: boolean;
  collaborative?: boolean;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  imageUrl: string;
  releaseYear: number;
  trackCount: number;
  tracks?: Track[];
  releaseDate?: string;
  label?: string;
  copyright?: string;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  followers: number;
  verified: boolean;
  genres?: string[];
  bio?: string;
  monthlyListeners?: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  imageUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
  isPremium: boolean;
}
