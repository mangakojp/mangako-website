import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'jp' | 'en';

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const translations = {
    jp: {
        nav: {
            world: "世界観",
            collection: "コレクション",
            features: "特徴",
            trade: "取引",
            invite: "先行案内",
            cta: "「先行登録」",
            subtitle: "プレミアム・マンガ・マーケットプレイス"
        },
        hero: {
            tags: ["真贋確認済み", "来歴管理"],
            titleLine1: "物語の原典を、",
            titleLine2: "その手に。",
            subtitle: "「シークエンスの魂。」",
            desc: "Mangakoは、希少な紙版マンガ、限定アート、完結セットを蒐集・閲覧・売買できる、コレクターのためのプレミアム・マーケットプレイスです。マンガを単なる消費物ではなく、価値ある作品として扱います。",
            ctaPrimary: "「ギャラリーを見る」",
            ctaSecondary: "「先行案内に参加」",
            imageTag: "真贋確認済\n第一巻・完結セット",
        },
        philosophy: {
            words: ["「蒐集」", "「閲覧」", "「売買」", "「継承」"],
            vertical1: "所有する悦び",
            vertical2: "価値の継承",
            title: "Mangakoは、マンガを読むためだけの場所ではありません。",
            desc: "作品を所有し、受け継ぎ、価値を見出すための新しいアーカイブです。線、余白、紙、構図。そのすべてを“作品”として捉えるために、コレクターが本当に必要とする情報と体験を、美しく一つに束ねます。"
        },
        gallery: {
            titleLine1: "所有する悦びを、",
            titleLine2: "再定義する。",
            desc: "紙の存在感、印刷の熱、線の強度まで。ギャラリーに並ぶのは、単なる「本」ではなく、来歴と真贋が証明された美術品としてのマンガです。",
            button: "「すべて見る」",
            items: [
                { title: "初版候補", subtitle: "注目の出品" },
                { title: "限定アート", subtitle: "稀少" },
                { title: "アーカイブ", subtitle: "収蔵候補" },
                { title: "限定出品", subtitle: "新着" }
            ]
        },
        pillars: {
            title: "Mangakoを構成する、3つの体験",
            items: [
                { title: "蒐集", desc: "「初版、限定版、完結セット、証明付きアートを厳選して出会える。」", label: "限定" },
                { title: "閲覧", desc: "「作品の空気感を損なわない、静かで没入感のある鑑賞体験。」", label: "注目" },
                { title: "売買", desc: "「真贋確認と来歴情報を伴う、信頼性の高い流通体験。」", label: "新着" }
            ],
            phasePrefix: "Phase"
        },
        provenance: {
            engine: "Authentication Engine",
            title: "価値は、情報によって守られる。",
            desc: "真正性、来歴、保存性、市場流動性。Mangakoは、コレクターが本当に必要とする情報と体験を、美しく一つに束ねます。",
            items: [
                { title: "真贋確認", info: "Verified Authentic" },
                { title: "来歴記録", info: "Provenance Data" },
                { title: "保存価値", info: "Archival Grade" },
                { title: "流動性", info: "Market Liquidity" }
            ]
        },
        experience: {
            title1: "読むためだけではない。",
            title2: "感じるための",
            title3: "体験へ。",
            desc: "線、余白、紙、構図。そのすべてを“作品”として捉えるために、Mangakoはギャラリーのような閲覧体験を設計します。",
            tag: "Cinematic Viewing"
        },
        archive: {
            title: "Selected Archive",
            items: [
                { title: "注目のアーカイブ", desc: "第一部 完結セット 初版" },
                { title: "今週の厳選出品", desc: "作者直筆 サイン入り" },
                { title: "収蔵候補", desc: "限定装丁版 全巻綴じ" }
            ],
            viewDetails: "View Details",
            date1: "2024.10",
            date2: "2024.11",
            date3: "2024.12"
        },
        cta: {
            title: "「次の名作との出会いを、いち早く。」",
            desc: "限定ドロップ、先行出品、招待制コミュニティ、アーカイブ公開の案内を受け取る。",
            button: "先行登録する",
            community: "招待制コレクター・コミュニティ"
        },
        footer: {
            subtitle1: "物語の原典を、その手に。",
            subtitle2: "プレミアム・マンガ・マーケットプレイス",
            terms: "利用規約",
            copyright: "© 2026 Mangako. All rights reserved.",
            tag: "Curated Collectibles Archive."
        }
    },
    en: {
        nav: {
            world: "World",
            collection: "Collection",
            features: "Features",
            trade: "Trade",
            invite: "Early Access",
            cta: "Join",
            subtitle: "Premium Manga Marketplace"
        },
        hero: {
            tags: ["Verified Authenticity", "Provenance Tracked"],
            titleLine1: "Hold the original source",
            titleLine2: "of the story.",
            subtitle: "The soul of the sequence.",
            desc: "Mangako is a premium marketplace for collectors to acquire, experience, and trade rare physical manga editions, complete sets, and limited artwork. We treat manga not merely as a consumable, but as valuable works of art.",
            ctaPrimary: "Explore the Gallery",
            ctaSecondary: "Join Early Access",
            imageTag: "Verified Authentic\nVol.1 Complete Set",
        },
        philosophy: {
            words: ["Collect", "Read", "Trade", "Preserve"],
            vertical1: "The Joy of Ownership",
            vertical2: "Inheriting Value",
            title: "Manga not only to read, but to own.",
            desc: "A new archive to own, inherit, and discover the true value of manga. Lines, negative space, paper, composition. To treat all of this as a 'work of art', Mangako beautifully bundles the information and experience that collectors truly need."
        },
        gallery: {
            titleLine1: "Redefining the joy",
            titleLine2: "of ownership.",
            desc: "The physical presence of paper, the heat of the print, the strength of the strokes. What lines our gallery are not simply 'books', but manga as authenticated artworks with proven provenance.",
            button: "View All",
            items: [
                { title: "First Edition", subtitle: "Featured" },
                { title: "Limited Art", subtitle: "Rare" },
                { title: "Archive", subtitle: "Candidate" },
                { title: "Limited Run", subtitle: "New Arrival" }
            ]
        },
        pillars: {
            title: "The Three Pillars of Mangako",
            items: [
                { title: "Collect", desc: "Discover first editions, complete sets, limited releases, and authenticated artwork.", label: "Limited" },
                { title: "Read", desc: "Experience manga through a quiet, immersive, gallery-like interface.", label: "Featured" },
                { title: "Trade", desc: "Exchange collectible works with provenance, trust, and market clarity.", label: "New" }
            ],
            phasePrefix: "Pillar"
        },
        provenance: {
            engine: "Authentication Engine",
            title: "Value is protected by information.",
            desc: "Authenticity, provenance, preservation, and market liquidity. Mangako elegantly unifies the information and experiences that true collectors require.",
            items: [
                { title: "Verification", info: "Verified Authentic" },
                { title: "Provenance", info: "Provenance Data" },
                { title: "Preservation", info: "Archival Grade" },
                { title: "Liquidity", info: "Market Liquidity" }
            ]
        },
        experience: {
            title1: "An experience",
            title2: "meant to be felt,",
            title3: "not just read.",
            desc: "Lines, negative space, paper, composition. To capture it all as an artwork, Mangako designs an immersive, gallery-like viewing experience.",
            tag: "Cinematic Viewing"
        },
        archive: {
            title: "Selected Archive",
            items: [
                { title: "Featured Archive", desc: "Part 1 Complete Set, First Edition" },
                { title: "Weekly Selection", desc: "Autographed by the Author" },
                { title: "Archive Candidate", desc: "Limited Bound Edition, Full Set" }
            ],
            viewDetails: "View Details",
            date1: "Oct 2024",
            date2: "Nov 2024",
            date3: "Dec 2024"
        },
        cta: {
            title: "Be first to discover the next masterpiece.",
            desc: "Get updates on limited drops, early listings, invite-only community access, and archive releases.",
            button: "Join Early Access",
            community: "Invite-only Collector Community"
        },
        footer: {
            subtitle1: "Hold the original source of the story.",
            subtitle2: "Premium Manga Marketplace",
            terms: "Terms of Service",
            copyright: "© 2026 Mangako. All rights reserved.",
            tag: "Curated Collectibles Archive."
        }
    }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('jp');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Load from local storage on mount
        const saved = localStorage.getItem('mangako-language');
        if (saved === 'jp' || saved === 'en') {
            setLanguageState(saved);
        }
        setIsMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('mangako-language', lang);
    };

    const t = (path: string) => {
        const keys = path.split('.');
        let result: any = translations[language];
        for (const key of keys) {
            if (result === undefined) return path; // fallback
            result = result[key];
        }
        return result;
    };

    // Prevent hydration mismatch
    if (!isMounted) return null;

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            <div className={language === 'en' ? 'font-en' : ''}>
                {children}
            </div>
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
