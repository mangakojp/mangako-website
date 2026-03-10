import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-mangako-ivory text-mangako-ink font-sans selection:bg-mangako-coral selection:text-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
