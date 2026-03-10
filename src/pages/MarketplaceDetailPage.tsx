import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const MarketplaceDetailPage = () => {
    const { t } = useTranslation();
    const marketDetailData = t("marketDetail");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <section className="pt-48 pb-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Left Side: Editorial Image Surface */}
                    <div className="relative h-[900px] bg-white border border-mangako-ink/10 shadow-2xl p-12 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-teal/10 via-mangako-pink/5 to-transparent z-0 opacity-40 group-hover:scale-120 transition-transform duration-[5s]"></div>
                        <div className="relative z-10 w-full h-full border border-mangako-ink/5 flex flex-col items-center justify-center p-8 text-center bg-mangako-ivory/20 backdrop-blur-3xl group-hover:border-mangako-coral transition-colors duration-[1.5s]">
                            <span className="font-sans text-[10px] tracking-[0.8em] font-black text-mangako-ink/10 uppercase mb-12 select-none group-hover:translate-y-[-20px] transition-transform">EXCLUSIVE LISTING MEDIA</span>
                            <div className="w-px h-64 bg-mangako-coral group-hover:bg-mangako-teal transition-all duration-[2s]"></div>
                            <div className="mt-20 flex flex-col items-center gap-6">
                                <h2 className="font-mincho text-3xl font-black text-mangako-ink tracking-widest leading-loose italic">{marketDetailData.title}</h2>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-mangako-coral opacity-20"></div>
                                    <div className="w-3 h-3 rounded-full bg-mangako-coral"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Buyer-Intent Details editorial style */}
                    <div className="flex flex-col gap-12 lg:pl-16">
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-6">
                                <span className="font-sans text-xs tracking-[0.4em] font-black text-mangako-coral uppercase border border-mangako-coral/20 px-3 py-1">Active Listing</span>
                                <span className="font-sans text-xs tracking-[0.4em] font-black text-mangako-ink/40 uppercase">Ref: {marketDetailData.ref}</span>
                            </div>
                            <h1 className="font-mincho font-black text-5xl lg:text-7xl text-mangako-ink tracking-widest leading-tight italic">{marketDetailData.title}</h1>
                            <div className="flex items-center justify-between border-y border-mangako-ink/10 py-12 mt-8">
                                <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-ink/40 uppercase">Listing Price</span>
                                <span className="font-sans text-6xl font-black text-mangako-ink tracking-tighter">{marketDetailData.price}</span>
                            </div>
                        </div>

                        <div className="prose prose-mangako font-sans text-lg text-mangako-ink/70 font-light leading-relaxed mb-6 space-y-8">
                            {marketDetailData.descTexts.map((text: string, idx: number) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-b border-mangako-ink/10 pb-16">
                            {marketDetailData.summary.map((summary: any, idx: number) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <span className="font-sans text-[8px] tracking-[0.3em] font-black text-mangako-coral uppercase">{summary.label}</span>
                                    <span className="font-mincho text-xl font-bold text-mangako-ink tracking-widest leading-tight">{summary.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-8 bg-mangako-cream/10 p-12 border border-mangako-ink/5 relative group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-mangako-coral opacity-5 -rotate-45 translate-x-12 -translate-y-12"></div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-mangako-ink flex items-center justify-center text-[10px] font-sans font-black text-mangako-ivory uppercase grayscale group-hover:grayscale-0 transition-all duration-[1s]">01</div>
                                <h4 className="font-mincho text-xl font-bold text-mangako-ink tracking-widest">{marketDetailData.verificationTitle}</h4>
                            </div>
                            <p className="font-sans text-sm text-mangako-ink/50 font-light leading-relaxed mb-8">{marketDetailData.verificationDesc}</p>
                            <div className="flex gap-4">
                                {marketDetailData.trustTags.map((tag: string, idx: number) => (
                                    <span key={idx} className="font-sans text-[8px] tracking-[0.2em] font-black text-mangako-ink/30 uppercase border border-mangako-ink/5 px-3 py-1 bg-white">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <button className="bg-mangako-ink text-mangako-ivory px-12 py-7 text-xs font-black tracking-[0.5em] font-sans uppercase hover:bg-mangako-coral transition-all rounded-full shadow-2xl shadow-mangako-ink/30 transform hover:-translate-y-2 duration-500">
                                {marketDetailData.ctaInquire}
                            </button>
                            <button className="bg-white border border-mangako-ink/10 text-mangako-ink px-12 py-7 text-xs font-black tracking-[0.5em] font-sans uppercase hover:border-mangako-coral transition-all rounded-full shadow-xl shadow-mangako-ink/5 transform hover:-translate-y-2 duration-500">
                                {marketDetailData.ctaReserve}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
