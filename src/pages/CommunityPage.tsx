import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const CommunityPage = () => {
    const { t } = useTranslation();
    const communityData = t("communityPage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={communityData.heroTitle}
                subtitle={communityData.heroSubtitle}
                description={communityData.heroDesc}
            />

            {/* Private Collector Circle Narrative */}
            <section className="py-48 relative overflow-hidden bg-mangako-ink text-mangako-ivory">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-mangako-coral blur-[300px] rounded-full"></div>
                </div>

                <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className="p-32 border border-mangako-ivory/10 bg-white/5 backdrop-blur-2xl relative"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-mangako-coral"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-64 bg-mangako-coral"></div>

                        <SectionHeader
                            title={communityData.accessTitle}
                            subtitle={communityData.accessSubtitle}
                            className="mb-16 text-center"
                        />

                        <p className="font-mincho text-3xl lg:text-5xl text-mangako-ivory tracking-widest leading-tight mb-20 italic">
                            {communityData.membershipQuote}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 text-left">
                            {communityData.benefits.map((benefit: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                    className="flex flex-col border-l border-mangako-ivory/20 pl-8 group hover:border-mangako-coral transition-colors duration-700"
                                >
                                    <h4 className="font-mincho text-xl font-bold mb-4 tracking-widest text-mangako-ivory group-hover:text-mangako-coral transition-colors">{benefit.title}</h4>
                                    <p className="font-sans text-mangako-ivory/40 font-light leading-relaxed group-hover:text-mangako-ivory/60 transition-colors uppercase text-[10px] tracking-widest leading-loose">
                                        {benefit.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Exclusive CTA Invitation Section */}
            <section className="py-48 bg-white relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center gap-12 relative z-10">
                    <div className="w-16 h-16 border-2 border-mangako-coral rounded-full flex items-center justify-center p-3 animate-pulse">
                        <div className="w-full h-full bg-mangako-coral/20 rounded-full"></div>
                    </div>
                    <SectionHeader
                        title={communityData.joinTitle}
                        subtitle={communityData.joinSubtitle}
                        className="mb-0"
                    />
                    <p className="font-sans text-xl text-mangako-ink/50 font-light max-w-2xl text-center leading-relaxed">
                        {communityData.joinDesc}
                    </p>
                    <button className="bg-mangako-ink text-mangako-ivory px-16 py-8 text-xs font-black tracking-[0.5em] font-sans uppercase hover:bg-mangako-ink/80 transition-all rounded-full shadow-2xl shadow-mangako-ink/30 transform hover:scale-110 active:scale-95 duration-500 mt-12">
                        {communityData.requestAccess}
                    </button>
                    <div className="mt-16 flex gap-6 items-center">
                        <div className="w-24 h-px bg-mangako-ink/10"></div>
                        <span className="font-sans text-[10px] tracking-[0.6em] font-black text-mangako-ink/20 uppercase">Private Access Node</span>
                        <div className="w-24 h-px bg-mangako-ink/10"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};
