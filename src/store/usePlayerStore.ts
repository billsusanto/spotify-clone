import { create } from 'zustand';
import { Track, RepeatMode } from '@/types';

interface PlayerStore {
  // State
  currentTrack: Track | null;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  repeatMode: RepeatMode;
  shuffle: boolean;

  // Actions
  setCurrentTrack: (track: Track) => void;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
  nextTrack: () => void;
  previousTrack: () => void;
  toggleRepeat: () => void;
  toggleShuffle: () => void;
  addToQueue: (track: Track) => void;
  clearQueue: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  // Initial state
  currentTrack: {
    id: 1,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    duration: 200,
  },
  queue: [],
  isPlaying: false,
  volume: 80,
  currentTime: 0,
  repeatMode: 'off',
  shuffle: false,

  // Actions
  setCurrentTrack: (track) =>
    set({
      currentTrack: track,
      currentTime: 0,
      isPlaying: true,
    }),

  togglePlay: () =>
    set((state) => ({
      isPlaying: !state.isPlaying,
    })),

  play: () => set({ isPlaying: true }),

  pause: () => set({ isPlaying: false }),

  setVolume: (volume) =>
    set({
      volume: Math.max(0, Math.min(100, volume)),
    }),

  setCurrentTime: (time) =>
    set((state) => ({
      currentTime: Math.max(0, Math.min(state.currentTrack?.duration || 0, time)),
    })),

  nextTrack: () => {
    const { queue, currentTrack, repeatMode, shuffle: isShuffled } = get();
    
    if (repeatMode === 'track') {
      set({ currentTime: 0, isPlaying: true });
      return;
    }

    if (queue.length > 0) {
      const nextTrack = queue[0];
      set({
        currentTrack: nextTrack,
        queue: queue.slice(1),
        currentTime: 0,
        isPlaying: true,
      });
    } else {
      // In a real app, you'd load next track from the playlist
      set({ currentTime: 0, isPlaying: false });
    }
  },

  previousTrack: () => {
    const { currentTime } = get();
    
    // If more than 3 seconds played, restart current track
    if (currentTime > 3) {
      set({ currentTime: 0 });
    } else {
      // In a real app, you'd load previous track
      set({ currentTime: 0 });
    }
  },

  toggleRepeat: () =>
    set((state) => ({
      repeatMode:
        state.repeatMode === 'off'
          ? 'queue'
          : state.repeatMode === 'queue'
          ? 'track'
          : 'off',
    })),

  toggleShuffle: () =>
    set((state) => ({
      shuffle: !state.shuffle,
    })),

  addToQueue: (track) =>
    set((state) => ({
      queue: [...state.queue, track],
    })),

  clearQueue: () =>
    set({
      queue: [],
    }),
}));
