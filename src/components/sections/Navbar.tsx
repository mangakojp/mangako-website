import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTranslation, Language } from "@/contexts/TranslationContext";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { t, language, setLanguage } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("nav.world"), path: "/about" },
        { name: t("nav.collection"), path: "/collection" },
        { name: t("nav.marketplace"), path: "/marketplace" },
        { name: t("nav.archive"), path: "/archive" },
        { name: t("nav.artists"), path: "/artists" },
        { name: t("nav.journal"), path: "/journal" },
        { name: t("nav.community"), path: "/community" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 lg:px-12 py-4 flex items-center justify-between",
                scrolled || location.pathname !== "/" ? "bg-mangako-ivory/80 backdrop-blur-md shadow-sm" : "bg-transparent py-6"
            )}
        >
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-4 group">
                    <img
                        src="/images/mangako_logo_web.png"
                        alt="Mangako Premium Marketplace"
                        className="h-10 object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                </Link>
                <span className="hidden md:inline-block ml-4 text-[10px] tracking-widest px-2 py-0.5 border border-mangako-ink/30 text-mangako-ink/70 font-sans">
                    {t("nav.subtitle")}
                </span>
            </div>

            <nav className="hidden lg:flex items-center gap-10 font-sans text-sm tracking-widest text-mangako-ink">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={cn(
                            "hover:text-mangako-coral transition-colors relative group",
                            location.pathname.startsWith(link.path) && "text-mangako-coral"
                        )}
                    >
                        {link.name}
                        <span className={cn(
                            "absolute -bottom-1 left-0 w-0 h-px bg-mangako-coral transition-all duration-300 group-hover:w-full",
                            location.pathname.startsWith(link.path) && "w-full"
                        )}></span>
                    </Link>
                ))}
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

                <Link to="/early-access" className="bg-mangako-ink text-mangako-ivory px-6 py-2.5 text-sm rounded-full font-sans tracking-widest hover:bg-mangako-ink/80 transition-all border border-transparent hover:border-mangako-ink/20 shadow-md whitespace-nowrap">
                    {t("nav.cta")}
                </Link>
            </div>
        </header>
    );
};

