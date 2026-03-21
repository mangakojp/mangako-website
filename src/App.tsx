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

// Journal Subdomain Imports
import { JournalLayout } from './journal/Layout';
import { Home as JournalHome } from './journal/pages/Home';
import { Article as JournalArticle } from './journal/pages/Article';
import { Category as JournalCategory } from './journal/pages/Category';
import { Notes as JournalNotes } from './journal/pages/Notes';
import { Archive as JournalArchive } from './journal/pages/Archive';
import { About as JournalAbout } from './journal/pages/About';
import { Subscribe as JournalSubscribe } from './journal/pages/Subscribe';
import { Author as JournalAuthor } from './journal/pages/Author';

// Studio Subdomain Imports
import { StudioLayout } from './studio/Layout';
import { Landing as StudioLanding } from './studio/pages/Landing';
import { Dashboard as StudioDashboard } from './studio/pages/Dashboard';
import { Create as StudioCreate } from './studio/pages/Create';
import { Published as StudioPublished } from './studio/pages/Published';

function App() {
    const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    const isJournal = hostname.startsWith('journal.') || hostname === 'journal.localhost';
    const isStudio = hostname.startsWith('studio.') || hostname === 'studio.localhost';

    // 1. journal.mangako.jp Subdomain Application
    if (isJournal) {
        return (
            <TranslationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<JournalLayout />}>
                            <Route index element={<JournalHome />} />
                            <Route path="article/:slug" element={<JournalArticle />} />
                            <Route path="category/:slug" element={<JournalCategory />} />
                            <Route path="notes" element={<JournalNotes />} />
                            <Route path="archive" element={<JournalArchive />} />
                            <Route path="about" element={<JournalAbout />} />
                            <Route path="subscribe" element={<JournalSubscribe />} />
                            <Route path="authors/:slug" element={<JournalAuthor />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TranslationProvider>
        );
    }

    // 2. studio.mangako.jp Subdomain Application
    if (isStudio) {
        return (
            <TranslationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<StudioLayout />}>
                            <Route index element={<StudioLanding />} />
                            <Route path="dashboard" element={<StudioDashboard />} />
                            <Route path="create" element={<StudioCreate />} />
                            <Route path="published/:slug" element={<StudioPublished />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TranslationProvider>
        );
    }

    // 3. Main Website (Fallback / Root Domain)
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
                        <Route path="journal-legacy" element={<JournalPage />} />
                        <Route path="journal-legacy/:slug" element={<JournalDetailPage />} />
                        <Route path="community" element={<CommunityPage />} />
                        <Route path="faq" element={<FAQPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="early-access" element={<EarlyAccessPage />} />
                        
                        {/* Fallback routes to test subdomains locally via directories (e.g. localhost:5173/journal) */}
                        <Route path="journal/*" element={
                            <Routes>
                                <Route path="/" element={<JournalLayout />}>
                                    <Route index element={<JournalHome />} />
                                    <Route path="article/:slug" element={<JournalArticle />} />
                                    <Route path="category/:slug" element={<JournalCategory />} />
                                    <Route path="notes" element={<JournalNotes />} />
                                    <Route path="archive" element={<JournalArchive />} />
                                    <Route path="about" element={<JournalAbout />} />
                                    <Route path="subscribe" element={<JournalSubscribe />} />
                                    <Route path="authors/:slug" element={<JournalAuthor />} />
                                </Route>
                            </Routes>
                        } />
                        <Route path="studio/*" element={
                            <Routes>
                                <Route path="/" element={<StudioLayout />}>
                                    <Route index element={<StudioLanding />} />
                                    <Route path="dashboard" element={<StudioDashboard />} />
                                    <Route path="create" element={<StudioCreate />} />
                                    <Route path="published/:slug" element={<StudioPublished />} />
                                </Route>
                            </Routes>
                        } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TranslationProvider>
    );
}


export default App;



