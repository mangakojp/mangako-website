import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";
import { ArchiveCard } from "@/components/common/Cards";

export const TradePage = () => {
    const { t } = useTranslation();
    const tradeData = t("tradePage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={tradeData?.heroTitle || "Exchange Engine"}
                subtitle={tradeData?.heroSubtitle || "等価交換の美学。"}
                description={tradeData?.heroDesc || "希少なアーカイブ同士の交換、または一部現金を含むトレードを仲介します。"}
            />

            {/* Comparison Narrative */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="flex flex-col gap-12">
                        <SectionHeader
                            title={tradeData?.howItWorksTitle || "Trading Mechanism"}
                            subtitle={tradeData?.howItWorksSubtitle || "取引の仕組み。"}
                        />
                        <div className="flex flex-col gap-10">
                            {(tradeData?.steps || []).map((step: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center border border-mangako-ink/10 font-sans text-xs font-black text-mangako-ink group-hover:bg-mangako-coral group-hover:text-white group-hover:border-mangako-coral transition-all duration-500">
                                        {idx + 1}
                                    </div>
                                    <div className="flex flex-col pt-1">
                                        <h4 className="font-mincho text-xl font-bold text-mangako-ink mb-2 tracking-widest">{step?.title}</h4>
                                        <p className="font-sans text-mangako-ink/50 font-light leading-relaxed">{step?.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[800px] bg-mangako-cream/20 p-8 flex flex-col justify-center gap-8 group">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-mangako-pink/5 to-transparent z-0 opacity-40"></div>

                        {/* Visual Trade Mockup */}
                        <div className="relative z-10 grid grid-cols-2 gap-8 items-center">
                            <div className="aspect-[3/4] bg-white border border-mangako-ink/10 shadow-xl p-4 flex flex-col justify-between transform -rotate-1 group-hover:rotate-0 transition-transform duration-1000">
                                <div className="bg-mangako-cream h-2/3"></div>
                                <div className="h-10 w-3/4 bg-mangako-ink/5 mt-4"></div>
                                <div className="h-4 w-1/2 bg-mangako-ink/5 mt-2"></div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-px h-16 bg-mangako-coral mb-4"></div>
                                <span className="font-sans text-[8px] tracking-[0.4em] font-black text-mangako-coral uppercase">Equivalence</span>
                                <div className="w-px h-16 bg-mangako-coral mt-4"></div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-32 h-32 border border-dashed border-mangako-ink/20 rounded-full flex items-center justify-center"
                                >
                                    <div className="w-4 h-4 bg-mangako-coral rounded-full"></div>
                                </motion.div>
                            </div>

                            <div className="aspect-[3/4] bg-white border border-mangako-ink/10 shadow-xl p-4 flex flex-col justify-between transform rotate-2 group-hover:rotate-0 transition-transform duration-1000">
                                <div className="bg-mangako-teal/5 h-2/3"></div>
                                <div className="h-10 w-3/4 bg-mangako-ink/5 mt-4"></div>
                                <div className="h-4 w-1/2 bg-mangako-ink/5 mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Trade Scenarios */}
            <section className="py-24 bg-mangako-cream/10">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <SectionHeader
                        title={tradeData?.scenariosTitle || "Trading Scenarios"}
                        subtitle={tradeData?.scenariosSubtitle || "交換の事例。"}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                        {(tradeData?.scenarios || []).map((scenario: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="bg-white p-12 border border-mangako-ink/10 hover:shadow-2xl transition-all duration-700 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mangako-ink/[0.02] to-transparent z-0"></div>
                                <h3 className="font-mincho text-2xl font-bold text-mangako-ink mb-8 tracking-widest relative z-10">{scenario?.title}</h3>
                                <p className="font-sans text-mangako-ink/50 font-light leading-relaxed mb-12 relative z-10">{scenario?.desc}</p>
                                <div className="flex items-center gap-6 relative z-10 border-t border-mangako-ink/5 pt-10">
                                    <button className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-coral border-b border-mangako-coral/20 pb-1 hover:border-mangako-coral transition-all uppercase">
                                        Inquire Trade
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
