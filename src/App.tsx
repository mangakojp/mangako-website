import React, { useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { BrandPhilosophy } from './components/sections/BrandPhilosophy';
import { FeaturedGallery } from './components/sections/FeaturedGallery';
import { ThreePillars } from './components/sections/ThreePillars';
import { Provenance } from './components/sections/Provenance';
import { ImmersiveExperience } from './components/sections/ImmersiveExperience';
import { CuratedArchive } from './components/sections/CuratedArchive';
import { CallToAction1 } from './components/ui/call-to-action-1';
import { Footer } from './components/sections/Footer';
import { TranslationProvider } from './contexts/TranslationContext';

function App() {
    // Add smooth scrolling to anchor links
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <TranslationProvider>
            <div className="min-h-screen bg-mangako-ivory text-mangako-ink font-sans selection:bg-mangako-coral selection:text-white">
                <Navbar />
                <main>
                    <HeroSection />
                    <BrandPhilosophy />
                    <FeaturedGallery />
                    <ThreePillars />
                    <Provenance />
                    <ImmersiveExperience />
                    <CuratedArchive />
                    <section id="invite">
                        <CallToAction1 />
                    </section>
                </main>
                <Footer />
            </div>
        </TranslationProvider>
    );
}

export default App;
