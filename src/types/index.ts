/**
 * Track interface representing a music track
 */
export interface Track {
  id: string | number;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: number;
  uri?: string;
  explicit?: boolean;
  popularity?: number;
}

/**
 * Playlist interface
 */
export interface Playlist {
  id: string | number;
  name: string;
  description: string;
  coverImage: string;
  tracks: Track[];
  owner: string;
  isPublic: boolean;
  followers?: number;
}

/**
 * Album interface
 */
export interface Album {
  id: string | number;
  title: string;
  artist: string;
  coverImage: string;
  releaseDate: string;
  tracks: Track[];
  totalDuration: number;
  label?: string;
  copyright?: string;
}

/**
 * Artist interface
 */
export interface Artist {
  id: string | number;
  name: string;
  image: string;
  verified: boolean;
  followers: number;
  monthlyListeners: number;
  bio?: string;
  genres: string[];
  topTracks: Track[];
  albums: Album[];
}

/**
 * Category interface for browse
 */
export interface Category {
  id: string | number;
  name: string;
  icon: string;
  color: string;
}

/**
 * Player repeat modes
 */
export type RepeatMode = 'off' | 'track' | 'queue';

/**
 * Player state interface
 */
export interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  repeatMode: RepeatMode;
  shuffle: boolean;
}
