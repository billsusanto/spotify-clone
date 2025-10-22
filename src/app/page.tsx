'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import Player from '@/components/Player';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 200,
  });

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - Hidden on mobile by default */}
        <Sidebar />
        {/* Main Content */}
        <MainContent setCurrentTrack={setCurrentTrack} />
      </div>
      {/* Player - Fixed at bottom */}
      <Player currentTrack={currentTrack} />
      {/* Bottom Navigation - Mobile only */}
      <BottomNav />
    </div>
  );
}
