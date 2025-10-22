'use client';

import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import BottomNav from './BottomNav';

interface PageLayoutProps {
  children: ReactNode;
  currentTrack?: {
    title: string;
    artist: string;
    album: string;
    duration: number;
  };
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  currentTrack = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 200,
  }
}) => {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        {children}
      </div>
      <Player currentTrack={currentTrack} />
      <BottomNav />
    </div>
  );
};

export default PageLayout;
