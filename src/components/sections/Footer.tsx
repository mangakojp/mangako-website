import React from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { cn } from "@/lib/utils";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-mangako-ink text-mangako-ivory py-24 relative overflow-hidden">
            {/* Background manga-print subtle texture */}
            <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <h2 className="font-sans font-black text-4xl tracking-[0.2em] uppercase">
                        Mangako
                    </h2>
                    <p className="font-mincho text-sm tracking-widest leading-loose opacity-70">
                        {t("footer.desc")}<br />
                        {t("footer.subtitle")}
                    </p>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4 font-sans text-sm tracking-widest text-mangako-ivory/60">
                    <a href="#world" className="hover:text-mangako-coral transition-colors">{t("nav.world")}</a>
                    <a href="#collection" className="hover:text-mangako-coral transition-colors">{t("nav.collection")}</a>
                    <a href="#features" className="hover:text-mangako-coral transition-colors">{t("nav.features")}</a>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4 font-sans text-sm tracking-widest text-mangako-ivory/60">
                    <a href="#trade" className="hover:text-mangako-coral transition-colors">{t("nav.trade")}</a>
                    <a href="#invite" className="hover:text-mangako-coral transition-colors">{t("nav.invite")}</a>
                    <a href="#" className="hover:text-mangako-coral transition-colors mt-4">{t("footer.terms")}</a>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-end lg:items-end font-sans text-xs tracking-widest text-mangako-ivory/40">
                    <p className="text-right">
                        © 2026 Mangako. All rights reserved.<br />
                        {t("footer.legal")}
                    </p>
                </div>
            </div>
        </footer>
    );
};
