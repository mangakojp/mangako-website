import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { cn } from "@/lib/utils";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-mangako-ink text-mangako-ivory py-32 relative overflow-hidden border-t border-mangako-ivory/5">
            {/* Background manga-print subtle texture */}
            <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern-footer" width="8" height="8" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern-footer)" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 relative z-10">
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <Link to="/" className="inline-block">
                        <h2 className="font-sans font-black text-4xl tracking-[0.2em] uppercase hover:text-mangako-coral transition-colors">
                            Mangako
                        </h2>
                    </Link>
                    <p className="font-mincho text-sm tracking-widest leading-loose opacity-70 max-w-sm">
                        {t("footer.desc")}<br />
                        {t("footer.subtitle")}
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Link to="/early-access" className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-coral uppercase border border-mangako-coral px-4 py-2 hover:bg-mangako-coral hover:text-white transition-all">
                            Join Archive
                        </Link>
                    </div>
                    <div className="mt-8">
                        <a href="https://orynth.dev/projects/mangako" target="_blank" rel="noopener noreferrer">
                            <img src="https://orynth.dev/api/badge/mangako?theme=light&style=default" alt="Featured on Orynth" width="260" height="80" className="hover:opacity-80 transition-opacity" />
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4">
                    <span className="font-sans text-[10px] tracking-[0.4em] font-black text-white/20 uppercase mb-4">Platform</span>
                    <nav className="flex flex-col gap-4 font-sans text-xs tracking-widest text-mangako-ivory/60">
                        <Link to="/about" className="hover:text-mangako-coral transition-colors">{t("nav.world")}</Link>
                        <Link to="/collection" className="hover:text-mangako-coral transition-colors">{t("nav.collection")}</Link>
                        <Link to="/marketplace" className="hover:text-mangako-coral transition-colors">{t("nav.marketplace")}</Link>
                        <Link to="/archive" className="hover:text-mangako-coral transition-colors">{t("nav.archive")}</Link>
                    </nav>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4">
                    <span className="font-sans text-[10px] tracking-[0.4em] font-black text-white/20 uppercase mb-4">Collector</span>
                    <nav className="flex flex-col gap-4 font-sans text-xs tracking-widest text-mangako-ivory/60">
                        <Link to="/sell" className="hover:text-mangako-coral transition-colors">Consignment</Link>
                        <Link to="/trade" className="hover:text-mangako-coral transition-colors">Exchange</Link>
                        <Link to="/provenance" className="hover:text-mangako-coral transition-colors">Provenance</Link>
                        <Link to="/community" className="hover:text-mangako-coral transition-colors">Community</Link>
                    </nav>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4">
                    <span className="font-sans text-[10px] tracking-[0.4em] font-black text-white/20 uppercase mb-4">Ecosystem</span>
                    <nav className="flex flex-col gap-4 font-sans text-xs tracking-widest text-mangako-ivory/60">
                        <Link to="/journal" className="hover:text-mangako-coral transition-colors">Journal</Link>
                        <a href="https://studio.mangako.online/" className="hover:text-mangako-coral transition-colors">Studio</a>
                        <Link to="/faq" className="hover:text-mangako-coral transition-colors">Support</Link>
                        <a href="https://x.com/Mangako_jp" target="_blank" rel="noopener noreferrer" className="hover:text-mangako-coral transition-colors flex items-center gap-2">
                            <span className="font-bold">X</span> <span className="text-[10px] opacity-50 tracking-normal">(Twitter)</span>
                        </a>
                    </nav>
                </div>

                <div className="lg:col-span-2 flex flex-col justify-end lg:items-end font-sans text-[10px] tracking-widest text-mangako-ivory/30">
                    <div className="text-right">
                        © 2026 Mangako. All rights reserved.<br />
                        <Link to="/faq" className="hover:text-white mt-2 inline-block">Terms & Conditions</Link><br />
                        {t("footer.legal")}
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-32 pt-12 border-t border-mangako-ivory/5 flex justify-between items-center opacity-20 pointer-events-none">
                <span className="font-sans text-[8px] tracking-[1em] font-black uppercase">Archival Marketplace Protocol</span>
                <span className="font-sans text-[8px] tracking-[1em] font-black uppercase">Ver 1.0.4-X</span>
            </div>
        </footer>
    );
};

