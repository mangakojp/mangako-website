import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const EarlyAccessPage = () => {
    const { t } = useTranslation();
    const earlyData = t("earlyAccessPage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={earlyData.heroTitle}
                subtitle={earlyData.heroSubtitle}
                description={earlyData.heroDesc}
            />

            {/* Exclusive Perks Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="flex flex-col gap-12">
                        <SectionHeader
                            title={earlyData.perksTitle}
                            subtitle={earlyData.perksSubtitle}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {earlyData.perks.map((perk: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className="bg-white p-8 border-l border-mangako-ink/10 group hover:border-mangako-coral hover:shadow-xl transition-all duration-500"
                                >
                                    <h4 className="font-mincho text-lg font-bold text-mangako-ink mb-2 tracking-widest">{perk.title}</h4>
                                    <p className="font-sans text-xs text-mangako-ink/40 font-light leading-relaxed uppercase tracking-widest leading-loose">
                                        {perk.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[800px] bg-mangako-ink p-12 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-coral/20 via-transparent to-transparent z-0 opacity-40"></div>
                        <div className="relative z-10 h-full border border-mangako-ivory/10 p-12 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 border-2 border-mangako-coral/40 rounded-full flex items-center justify-center mb-12 animate-pulse">
                                <div className="w-3 h-3 bg-mangako-coral rounded-full"></div>
                            </div>
                            <h3 className="font-mincho text-4xl text-mangako-ivory tracking-[0.2em] mb-12">
                                {earlyData.formTitle}
                            </h3>
                            <p className="font-sans text-sm text-mangako-ivory/30 tracking-widest mb-16 uppercase leading-loose">
                                {earlyData.formDesc}
                            </p>
                            <form className="w-full flex flex-col gap-8">
                                <input type="email" className="bg-transparent border-b border-mangako-ivory/20 p-6 text-xl font-mincho text-mangako-ivory tracking-widest outline-none focus:border-mangako-coral placeholder:text-mangako-ivory/10 text-center" placeholder="Collector Email" />
                                <button className="bg-mangako-coral text-white py-6 text-xs font-black tracking-[0.5em] font-sans uppercase hover:bg-white hover:text-mangako-ink transition-all rounded-full shadow-2xl shadow-mangako-coral/10 mt-8">
                                    {earlyData.joinButton}
                                </button>
                            </form>
                            <div className="mt-20 pt-20 border-t border-mangako-ivory/10 w-full flex justify-center gap-12">
                                <span className="font-sans text-[8px] tracking-[0.6em] font-black text-mangako-ivory/20 uppercase">Early Node 001</span>
                                <span className="font-sans text-[8px] tracking-[0.6em] font-black text-mangako-ivory/20 uppercase">Priority Queue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
