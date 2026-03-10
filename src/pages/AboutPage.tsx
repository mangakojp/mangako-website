import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { CallToAction1 } from "@/components/ui/call-to-action-1";

export const AboutPage = () => {
    const { t } = useTranslation();
    const aboutData = t("about");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={aboutData?.heroTitle || "Archive & Ethos"}
                subtitle={aboutData?.heroSubtitle || "継承される意志。"}
                description={aboutData?.heroDesc || "Mangakoは、紙版マンガを単なる消費物ではなく、価値ある美術品として扱い、次世代へ受け継ぐためのプラットフォームです。"}
            />

            {/* Philosophy Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <SectionHeader
                            title={aboutData?.philosophyTitle || "Brand Philosophy"}
                            subtitle={aboutData?.philosophySubtitle || "物語の原典を守る。"}
                        />
                        <div className="prose prose-mangako leading-relaxed font-sans text-lg text-mangako-ink/70 font-light space-y-8">
                            {(aboutData?.philosophyTexts || []).map((text: string, idx: number) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-mangako-coral/5 border border-mangako-ink/5 rounded-full blur-3xl opacity-40"></div>
                        <GooeyText texts={aboutData?.philosophyWords || ["「真実」", "「保存」", "「悦び」", "「継承」"]} className="h-full w-full" />
                    </div>
                </div>
            </section>

            {/* Value Protection Section */}
            <section className="py-32 bg-mangako-cream">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <SectionHeader
                            title={aboutData?.valueTitle || "Value Protection"}
                            subtitle={aboutData?.valueSubtitle || "価値を守るための、四つの柱。"}
                            className="text-center"
                        />
                        <p className="font-sans text-xl text-mangako-ink/70 font-light">
                            {aboutData?.valueDesc || "Mangakoでは、すべての出品物に対して厳格な基準を設け、コレクターの資産価値を保護します。"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {(aboutData?.pillars || []).map((pillar: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="bg-white p-10 border border-mangako-ink/10 flex flex-col items-start group hover:border-mangako-coral transition-colors"
                            >
                                <span className="font-sans text-4xl mb-12 text-mangako-ink/10 font-black group-hover:text-mangako-coral/20 transition-colors uppercase">
                                    0{idx + 1}
                                </span>
                                <h3 className="font-mincho text-2xl font-bold text-mangako-ink mb-6 tracking-widest">
                                    {pillar?.title}
                                </h3>
                                <p className="font-sans text-mangako-ink/60 leading-relaxed font-light">
                                    {pillar?.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Editorial Quote Section */}
            <section className="py-48 bg-white overflow-hidden relative border-y border-mangako-ink/5">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-center">
                        <span className="text-mangako-coral/40 text-8xl font-mincho mb-8 leading-none">“</span>
                        <blockquote className="font-mincho text-3xl lg:text-5xl text-center text-mangako-ink leading-tight tracking-[0.1em] mb-12 font-medium max-w-5xl transition-all duration-700 hover:text-mangako-coral">
                            {aboutData?.quote || "マンガは、私たちが共有した記憶の断片であり、未来に託されるべき遺産である。"}
                        </blockquote>
                        <cite className="font-sans text-sm tracking-[0.4em] font-black text-mangako-ink/40 uppercase not-italic">
                            {aboutData?.quoteAuthor || "Mangako Editorial"}
                        </cite>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-mangako-ink/5 z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-px bg-mangako-ink/5 z-0"></div>
            </section>

            <CallToAction1 />
        </div>
    );
};
