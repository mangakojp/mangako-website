import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";

export const OrynthPartnership = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full bg-mangako-ivory py-32 overflow-hidden border-t border-mangako-ink/5">
            {/* Subtle background texture/grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Typography Block */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-8"
                        >
                            {/* Overline & Micro Label */}
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-sans tracking-[0.2em] uppercase text-mangako-coral">
                                    {t("orynthSection.eyebrow")}
                                </span>
                                <div className="h-px w-12 bg-mangako-coral/30"></div>
                                <span className="text-[10px] font-sans tracking-widest text-mangako-ink/40 uppercase border border-mangako-ink/10 px-2 py-0.5 rounded-sm">
                                    {t("orynthSection.microLabel")}
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="font-mincho font-medium text-4xl lg:text-5xl lg:leading-[1.2] tracking-wider text-mangako-ink">
                                {t("orynthSection.title")}
                            </h2>

                            {/* Body */}
                            <p className="font-sans text-lg text-mangako-ink/70 leading-relaxed font-light max-w-lg">
                                {t("orynthSection.body")}
                            </p>

                            {/* Metadata Chips */}
                            <div className="flex flex-wrap gap-3 mt-2">
                                {t("orynthSection.chips").map((chip: string, idx: number) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-sans tracking-widest px-4 py-1.5 border border-mangako-ink/15 text-mangako-ink/60 bg-white/50 rounded-full"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                                <a
                                    href="https://orynth.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-mangako-ink text-mangako-ivory px-8 py-3.5 text-sm rounded-full font-sans tracking-widest shadow-lg shadow-mangako-ink/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-2"
                                >
                                    {t("orynthSection.primaryCta")}
                                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <Link
                                    to="/early-access"
                                    className="text-mangako-ink font-sans text-sm tracking-widest hover:text-mangako-coral transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-mangako-ink/20 hover:after:bg-mangako-coral"
                                >
                                    {t("orynthSection.secondaryCta")}
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual Composition */}
                    <div className="relative order-1 lg:order-2 h-full min-h-[500px] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative w-full max-w-md aspect-[4/5] bg-white border border-mangako-ink/5 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group"
                        >
                            {/* Layer 1: Background Image Panel */}
                            <div className="absolute inset-2 top-20 bottom-32 opacity-90 transition-transform duration-1000 group-hover:scale-105">
                                <img
                                    src="/images/artists/studio_workspace.png"
                                    alt="Studio Workspace"
                                    className="w-full h-full object-cover filter grayscale-[10%]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                            </div>

                            {/* Top Lockup Header */}
                            <div className="relative z-10 flex items-center justify-between border-b border-mangako-ink/10 pb-4">
                                <span className="font-sans text-[10px] tracking-[0.3em] font-black uppercase text-mangako-ink/60">Listing Notice</span>
                                <span className="font-sans text-[10px] tracking-widest text-mangako-ink/40">REF. 082</span>
                            </div>

                            {/* Center Lockup: Mangako × Orynth */}
                            <div className="relative z-20 flex flex-col items-center justify-center my-auto transition-transform duration-700 group-hover:-translate-y-2">
                                <div className="flex items-center gap-5 scale-90 sm:scale-100">
                                    <h3 className="font-sans font-black text-2xl tracking-[0.2em] uppercase text-mangako-ink">
                                        Mangako
                                    </h3>
                                    <span className="font-mincho text-xl text-mangako-ink/30 italic px-2">×</span>
                                    <h3 className="font-sans font-black text-2xl tracking-[0.2em] uppercase text-mangako-coral">
                                        Orynth
                                    </h3>
                                </div>
                            </div>

                            {/* Bottom Footer Info */}
                            <div className="relative z-10 flex justify-between items-end border-t border-mangako-ink/10 pt-4 mt-auto">
                                <div className="flex flex-col gap-1">
                                    <span className="font-sans text-[9px] tracking-[0.2em] text-mangako-ink/40 uppercase">Ecosystem Expansion</span>
                                    <span className="font-sans text-xs tracking-widest text-mangako-ink/80 font-medium">Premium Asset Layer</span>
                                </div>
                                {/* Stamp Motif */}
                                <div className="w-8 h-8 rounded-sm border-[1.5px] border-mangako-coral/60 flex items-center justify-center rotate-[-12deg] opacity-80 backdrop-blur-sm bg-white/50">
                                    <span className="text-[8px] font-mincho text-mangako-coral/80 font-bold">公式</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Decorative Elements */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 w-24 h-24 border border-mangako-ink/10 flex items-center justify-center bg-white/50 backdrop-blur-md shadow-lg"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <span className="font-mincho text-mangako-ink/30 text-3xl">次</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
