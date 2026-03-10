import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { TranslationProvider } from './contexts/TranslationContext';

// Import all inner pages
import { AboutPage } from './pages/AboutPage';
import { CollectionPage } from './pages/CollectionPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { MarketplaceDetailPage } from './pages/MarketplaceDetailPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { ArtistDetailPage } from './pages/ArtistDetailPage';
import { SellPage } from './pages/SellPage';
import { TradePage } from './pages/TradePage';
import { ProvenancePage } from './pages/ProvenancePage';
import { ArchivePage } from './pages/ArchivePage';
import { JournalPage } from './pages/JournalPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { CommunityPage } from './pages/CommunityPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { EarlyAccessPage } from './pages/EarlyAccessPage';

function App() {
    return (
        <TranslationProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="collection" element={<CollectionPage />} />
                        <Route path="collection/:slug" element={<CollectionDetailPage />} />
                        <Route path="marketplace" element={<MarketplacePage />} />
                        <Route path="marketplace/:slug" element={<MarketplaceDetailPage />} />
                        <Route path="artists" element={<ArtistsPage />} />
                        <Route path="artists/:slug" element={<ArtistDetailPage />} />
                        <Route path="sell" element={<SellPage />} />
                        <Route path="trade" element={<TradePage />} />
                        <Route path="provenance" element={<ProvenancePage />} />
                        <Route path="archive" element={<ArchivePage />} />
                        <Route path="journal" element={<JournalPage />} />
                        <Route path="journal/:slug" element={<JournalDetailPage />} />
                        <Route path="community" element={<CommunityPage />} />
                        <Route path="faq" element={<FAQPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="early-access" element={<EarlyAccessPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TranslationProvider>
    );
}

export default App;


