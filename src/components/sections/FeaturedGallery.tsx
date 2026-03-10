import React from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";
import { ComicText } from "@/components/ui/comic-text";

export const FeaturedGallery = () => {
    const { t } = useTranslation();
    const artworks = [
        { img: "/mangako/poster-01.png", title: t("gallery.items.0.title"), subtitle: t("gallery.items.0.subtitle") },
        { img: "/mangako/poster-02.png", title: t("gallery.items.1.title"), subtitle: t("gallery.items.1.subtitle") },
        { img: "/mangako/poster-03.png", title: t("gallery.items.2.title"), subtitle: t("gallery.items.2.subtitle") },
        { img: "/mangako/poster-04.png", title: t("gallery.items.3.title"), subtitle: t("gallery.items.3.subtitle") },
    ];

    return (
        <section className="relative py-32 bg-mangako-ivory overflow-hidden" id="collection">
            {/* Ambient background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#FADADD_0%,_transparent_40%)] opacity-20 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="flex-1">
                        <h2 className="font-mincho font-black text-4xl lg:text-5xl tracking-widest text-mangako-ink mb-6">
                            {t("gallery.titleLine1")}<br />{t("gallery.titleLine2")}
                        </h2>
                        <p className="font-sans text-lg text-mangako-ink/70 leading-relaxed max-w-xl">
                            {t("gallery.desc")}
                        </p>
                    </div>
                    <div className="flex-none">
                        <button className="text-mangako-ink font-sans tracking-widest text-sm uppercase px-6 py-3 border border-mangako-ink/30 hover:bg-mangako-ink hover:text-mangako-ivory transition-colors duration-300">
                            {t("gallery.button")}
                        </button>
                    </div>
                </div>

                {/* Masonry / Framed Gallery Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {artworks.map((art, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className={`relative group ${index % 2 !== 0 ? 'lg:mt-20' : ''}`}
                        >
                            {/* Image Frame */}
                            <div className="w-full aspect-[2/3] md:aspect-[3/4] lg:aspect-[2/3] bg-white border-[6px] border-white/90 p-1 lg:p-2 shadow-xl shadow-mangako-ink/5 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">

                                {/* Floating ComicText label on cover */}
                                {(index === 1 || index === 3) && (
                                    <div className="absolute top-4 -right-2 z-20">
                                        <ComicText>{art.subtitle}</ComicText>
                                    </div>
                                )}

                                <img
                                    src={art.img}
                                    alt={art.title}
                                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:brightness-110 group-hover:scale-105 transition-all duration-700 ease-out"
                                />

                                {/* Subtle overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <div className="font-sans text-white text-xs tracking-[0.2em] mb-1 opacity-80 uppercase">
                                        Mangako Archive
                                    </div>
                                    <div className="font-mincho text-white font-bold tracking-widest text-lg">
                                        {art.title}
                                    </div>
                                </div>
                            </div>

                            {/* Under-frame Metadata */}
                            <div className="mt-4 flex flex-row items-center justify-between font-sans border-t border-mangako-ink/10 pt-3">
                                <span className="text-xs tracking-widest text-mangako-ink/60 uppercase">
                                    Ref: MN-{1000 + index * 42}
                                </span>
                                <span className="text-xs font-semibold text-mangako-ink bg-mangako-ink/5 px-2 py-1 rounded">
                                    {art.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
