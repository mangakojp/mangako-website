import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const ArtistsPage = () => {
    const { t } = useTranslation();
    const artistsData = t("artists");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={artistsData.heroTitle}
                subtitle={artistsData.heroSubtitle}
                description={artistsData.heroDesc}
            />

            {/* Featured Artist Spotlight */}
            <section className="py-32 relative group overflow-hidden bg-mangako-cream/20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="order-2 lg:order-1 relative h-[800px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-mangako-coral/5 blur-3xl rounded-full scale-150 group-hover:scale-120 transition-transform duration-[4s]"></div>
                        <div className="relative border border-mangako-ink/10 h-full w-[90%] bg-white group-hover:border-mangako-coral transition-colors duration-700 p-8 flex items-center justify-center">
                            <span className="font-mincho text-7xl lg:text-9xl text-mangako-ink/5 font-black uppercase tracking-[0.2em] transform -rotate-90 select-none">
                                {artistsData.featuredArtist}
                            </span>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-ink/20 uppercase mb-8">Archival Portrait</span>
                                <div className="w-px h-48 bg-mangako-coral opacity-20 group-hover:opacity-100 transition-opacity duration-[1.5s]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col gap-12">
                        <SectionHeader
                            title={artistsData.featuredArtist}
                            subtitle={artistsData.featuredSubtitle}
                        />
                        <div className="prose prose-mangako font-sans text-lg text-mangako-ink/70 font-light leading-relaxed space-y-8">
                            {artistsData.featuredTexts.map((text: string, idx: number) => (
                                <p key={idx}>{text}</p>
                            )}
                        </div>
                        <button className="bg-mangako-ink text-mangako-ivory px-10 py-5 text-xs font-black tracking-[0.3em] font-sans uppercase hover:bg-mangako-ink/80 transition-all rounded-full self-start shadow-xl shadow-mangako-ink/10">
                            {artistsData.viewProfile}
                        </button>
                    </div>
                </div>
            </section>

            {/* Artist Collective Index */}
            <section className="py-24">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <SectionHeader
                        title={artistsData.indexTitle}
                        subtitle={artistsData.indexSubtitle}
                        className="mb-24"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {artistsData.list.map((artist: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="group cursor-pointer border-l-2 border-mangako-ink/10 pl-10 hover:border-mangako-coral transition-all duration-500 py-6"
                            >
                                <span className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-ink/20 uppercase mb-4 block group-hover:text-mangako-coral/40 transition-colors">
                                    {artist.style}
                                </span>
                                <h3 className="font-mincho text-3xl font-bold text-mangako-ink tracking-widest mb-6 group-hover:translate-x-4 transition-transform duration-500">
                                    {artist.name}
                                </h3>
                                <p className="font-sans text-sm text-mangako-ink/50 font-light leading-relaxed uppercase tracking-widest">
                                    {artist.count}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
