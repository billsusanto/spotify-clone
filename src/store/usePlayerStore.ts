import { create } from 'zustand';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: number;
  audioUrl?: string;
}

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  queue: Track[];
  repeatMode: 'off' | 'track' | 'queue';
  shuffle: boolean;
  
  // Actions
  setCurrentTrack: (track: Track) => void;
  togglePlay: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
  nextTrack: () => void;
  previousTrack: () => void;
  toggleRepeat: () => void;
  toggleShuffle: () => void;
  addToQueue: (track: Track) => void;
  clearQueue: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 80,
  currentTime: 0,
  queue: [],
  repeatMode: 'off',
  shuffle: false,

  setCurrentTrack: (track) => set({ currentTrack: track, isPlaying: true, currentTime: 0 }),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(100, volume)) }),
  
  setCurrentTime: (time) => set({ currentTime: time }),
  
  nextTrack: () => {
    const { queue, currentTrack } = get();
    if (queue.length === 0) return;
    
    const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % queue.length;
    set({ currentTrack: queue[nextIndex], currentTime: 0 });
  },
  
  previousTrack: () => {
    const { queue, currentTrack, currentTime } = get();
    
    // If more than 3 seconds into track, restart it
    if (currentTime > 3) {
      set({ currentTime: 0 });
      return;
    }
    
    if (queue.length === 0) return;
    
    const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);
    const prevIndex = currentIndex - 1 < 0 ? queue.length - 1 : currentIndex - 1;
    set({ currentTrack: queue[prevIndex], currentTime: 0 });
  },
  
  toggleRepeat: () => {
    const { repeatMode } = get();
    const modes: Array<'off' | 'track' | 'queue'> = ['off', 'queue', 'track'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    set({ repeatMode: nextMode });
  },
  
  toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
  
  addToQueue: (track) => set((state) => ({ queue: [...state.queue, track] })),
  
  clearQueue: () => set({ queue: [] }),
}));
