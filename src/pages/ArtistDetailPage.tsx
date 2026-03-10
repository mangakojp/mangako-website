import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const ArtistDetailPage = () => {
    const { t } = useTranslation();
    const artistDetailData = t("artistDetail");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <section className="pt-48 pb-32 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Artist Biography Area */}
                    <div className="flex flex-col gap-12 relative z-10 lg:pr-16 order-2 lg:order-1">
                        <SectionHeader
                            title={artistDetailData.name}
                            subtitle={artistDetailData.subtitle}
                        />
                        <div className="prose prose-mangako font-sans text-xl text-mangako-ink/70 font-light leading-relaxed mb-12 space-y-12">
                            {artistDetailData.bioTexts.map((text: string, idx: number) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-12 border-t border-mangako-ink/10 pt-16">
                            {artistDetailData.milestones.map((milestone: any, idx: number) => (
                                <div key={idx} className="flex flex-col gap-4 group">
                                    <span className="font-sans text-[8px] tracking-[0.4em] font-black text-mangako-ink/40 uppercase group-hover:text-mangako-coral transition-colors">{milestone.year}</span>
                                    <h4 className="font-mincho text-xl font-bold text-mangako-ink tracking-widest italic">{milestone.title}</h4>
                                    <p className="font-sans text-xs text-mangako-ink/40 font-light leading-relaxed uppercase tracking-widest">{milestone.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Abstract Portrait Layout */}
                    <div className="order-1 lg:order-2 h-[900px] bg-mangako-cream/10 border border-mangako-ink/10 relative overflow-hidden group p-12">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-teal/5 via-transparent to-mangako-pink/5 z-0 opacity-40"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-full bg-white opacity-40 group-hover:rotate-12 transition-transform duration-[3s]"></div>
                        <div className="relative z-10 h-full border border-mangako-ink/5 flex flex-col items-center justify-center p-12 text-center group-hover:border-mangako-coral transition-colors duration-[1.5s]">
                            <span className="font-sans text-[10px] tracking-[0.8em] font-black text-mangako-ink/10 uppercase mb-20 select-none transform -rotate-90 group-hover:scale-110 transition-transform">CREATOR ARCHIVE PORTRAIT</span>
                            <div className="w-1.5 h-64 bg-mangako-coral opacity-20 group-hover:opacity-100 transition-opacity"></div>
                            <div className="mt-24 flex flex-col items-center gap-8">
                                <h2 className="font-mincho text-[7rem] lg:text-[9rem] font-black text-mangako-ink/5 tracking-widest translate-y-[-50%] select-none">{artistDetailData.name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery context section */}
            <section className="py-24 bg-white border-y border-mangako-ink/5 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-10">
                    <span className="text-mangako-coral/40 text-[10rem] font-mincho mb-8 leading-none select-none opacity-20">“</span>
                    <blockquote className="font-mincho text-3xl lg:text-5xl text-mangako-ink tracking-widest leading-relaxed mb-16 italic max-w-5xl">
                        {artistDetailData.keyQuote}
                    </blockquote>
                    <cite className="font-sans text-sm tracking-[0.6em] font-black text-mangako-ink/40 uppercase not-italic">
                        Curator Note 032-B
                    </cite>
                </div>
                <div className="absolute inset-0 bg-mangako-cream/10 z-0"></div>
            </section>
        </div>
    );
};
