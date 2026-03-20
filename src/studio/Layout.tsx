import React from 'react';
import { Outlet } from 'react-router-dom';
import { StudioHeader } from './components/Header';
import { StudioProvider } from './context/StudioContext';

export const StudioLayout = () => {
  return (
    <StudioProvider>
      <div className="min-h-screen bg-mangako-ivory text-mangako-ink font-sans selection:bg-mangako-coral selection:text-white">
        <StudioHeader />
        <main className="min-h-[calc(100vh-80px)]">
          <Outlet />
        </main>
      </div>
    </StudioProvider>
  );
};
