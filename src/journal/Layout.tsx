import React from 'react';
import { Outlet } from 'react-router-dom';
import { JournalHeader } from './components/Header';
import { JournalFooter } from './components/Footer';
import { JournalProvider } from './context/JournalContext';

export const JournalLayout = () => {
  return (
    <JournalProvider>
      <div className="min-h-screen bg-mangako-ivory text-mangako-ink font-sans selection:bg-mangako-coral selection:text-white">
        <JournalHeader />
        <main className="min-h-[calc(100vh-160px)]">
          <Outlet />
        </main>
        <JournalFooter />
      </div>
    </JournalProvider>
  );
};
