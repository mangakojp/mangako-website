import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTranslation, Language } from "@/contexts/TranslationContext";

export const Navbar = ($2) => {
  const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const { t, language, setLanguage } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 lg:px-12 py-4 flex items-center justify-between",
                scrolled ? "bg-mangako-ivory/80 backdrop-blur-md shadow-sm" : "bg-transparent py-6"
            )}
        >
            <div className="flex items-center gap-2">
                <h1 className="font-sans font-black text-2xl tracking-[0.2em] uppercase text-mangako-ink">
                    Mangako
                </h1>
                <span className="hidden md:inline-block ml-4 text-[10px] tracking-widest px-2 py-0.5 border border-mangako-ink/30 text-mangako-ink/70 font-sans">
                    {t("nav.subtitle")}
                </span>
            </div>

            <nav className="hidden lg:flex items-center gap-10 font-sans text-sm tracking-widest text-mangako-ink">
                <a href="#world" className="hover:text-mangako-coral transition-colors">{t("nav.world")}</a>
                <a href="#collection" className="hover:text-mangako-coral transition-colors">{t("nav.collection")}</a>
                <a href="#features" className="hover:text-mangako-coral transition-colors">{t("nav.features")}</a>
                <a href="#trade" className="hover:text-mangako-coral transition-colors">{t("nav.trade")}</a>
                <a href="#invite" className="hover:text-mangako-coral transition-colors">{t("nav.invite")}</a>
            </nav>

            <div className="flex items-center gap-6">
                {/* Language Toggle */}
                <div className="flex bg-mangako-ink/5 p-1 rounded-full border border-mangako-ink/10 relative">
                    <div
                        className={cn(
                            "absolute bg-white shadow-sm border border-mangako-ink/10 rounded-full h-[calc(100%-8px)] w-[46px] transition-transform duration-300 ease-spring pointer-events-none top-1 bottom-1",
                            language === "jp" ? "translate-x-0 left-1" : "translate-x-[46px] left-[2px]"
                        )}
                    ></div>
                    <button
                        onClick={() => setLanguage("jp")}
                        className={cn(
                            "relative z-10 w-11 h-7 text-[10px] font-sans font-bold tracking-widest rounded-full transition-colors",
                            language === "jp" ? "text-mangako-ink" : "text-mangako-ink/50 hover:text-mangako-ink/80"
                        )}
                        aria-pressed={language === "jp"}
                        aria-label="Switch to Japanese"
                    >
                        JP
                    </button>
                    <button
                        onClick={() => setLanguage("en")}
                        className={cn(
                            "relative z-10 w-11 h-7 text-[10px] font-sans font-bold tracking-widest rounded-full transition-colors",
                            language === "en" ? "text-mangako-ink" : "text-mangako-ink/50 hover:text-mangako-ink/80"
                        )}
                        aria-pressed={language === "en"}
                        aria-label="Switch to English"
                    >
                        EN
                    </button>
                </div>

                <button className="bg-mangako-ink text-mangako-ivory px-6 py-2.5 text-sm rounded-full font-sans tracking-widest hover:bg-mangako-ink/80 transition-all border border-transparent hover:border-mangako-ink/20 shadow-md whitespace-nowrap">
                    {t("nav.cta")}
                </button>
            </div>
        </header>
    );
};
