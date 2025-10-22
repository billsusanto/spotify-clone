'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import Player from '@/components/Player';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 200,
  });

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent setCurrentTrack={setCurrentTrack} />
      </div>
      <Player currentTrack={currentTrack} />
    </div>
  );
}
