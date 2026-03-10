import React, { useEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { BrandPhilosophy } from './components/sections/BrandPhilosophy';
import { FeaturedGallery } from './components/sections/FeaturedGallery';
import { ThreePillars } from './components/sections/ThreePillars';
import { Provenance } from './components/sections/Provenance';
import { ImmersiveExperience } from './components/sections/ImmersiveExperience';
import { CuratedArchive } from './components/sections/CuratedArchive';
import { CallToAction1 } from './components/ui/call-to-action-1';

export const Home = () => {
    // Add smooth scrolling to anchor links
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
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
    );
};
