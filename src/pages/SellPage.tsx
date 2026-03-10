import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const SellPage = () => {
    const { t } = useTranslation();
    const sellData = t("sell");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={sellData.heroTitle}
                subtitle={sellData.heroSubtitle}
                description={sellData.heroDesc}
            />

            {/* Why Sell with Mangako */}
            <section className="py-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-b border-mangako-ink/10 pb-32">
                        {sellData.reasons.map((reason: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="flex flex-col items-start px-4"
                            >
                                <span className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-coral uppercase border border-mangako-coral px-3 py-1 mb-10">
                                    Benefit {idx + 1}
                                </span>
                                <h3 className="font-mincho text-2xl font-bold text-mangako-ink mb-6 tracking-widest">{reason.title}</h3>
                                <p className="font-sans text-mangako-ink/60 leading-relaxed font-light">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step-by-Step Evolution Process */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative h-[1000px] grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="bg-mangako-cream/50 h-[400px] border border-mangako-ink/5"></div>
                            <div className="bg-mangako-pink/20 h-[500px] border border-mangako-ink/5"></div>
                        </div>
                        <div className="flex flex-col gap-4 pt-24">
                            <div className="bg-mangako-sunrise/10 h-[500px] border border-mangako-ink/5"></div>
                            <div className="bg-mangako-teal/5 h-[400px] border border-mangako-ink/5"></div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <SectionHeader
                            title={sellData.processTitle}
                            subtitle={sellData.processSubtitle}
                        />
                        <div className="flex flex-col gap-12">
                            {sellData.steps.map((step: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                    className="flex items-start gap-12 group"
                                >
                                    <span className="font-sans text-6xl font-black text-mangako-ink/5 group-hover:text-mangako-coral/10 transition-colors uppercase select-none">
                                        0{idx + 1}
                                    </span>
                                    <div className="flex flex-col">
                                        <h4 className="font-mincho text-xl font-bold text-mangako-ink mb-2 tracking-widest">{step.title}</h4>
                                        <p className="font-sans text-mangako-ink/50 font-light leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Consignment Inquiry Form */}
            <section className="py-48 bg-mangako-cream relative" id="form-inquiry">
                <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                    <div className="bg-white p-16 shadow-2xl border border-mangako-ink/10 relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-mangako-coral"></div>

                        <div className="mb-16">
                            <h2 className="font-mincho font-black text-4xl text-mangako-ink tracking-widest mb-6">{sellData.formTitle}</h2>
                            <p className="font-sans text-mangako-ink/50 font-light">{sellData.formDesc}</p>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-4">
                                <label className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-ink uppercase">{sellData.fields.name}</label>
                                <input type="text" className="bg-mangako-cream/30 border-b border-mangako-ink/10 p-4 focus:border-mangako-coral outline-none transition-all font-sans text-sm" placeholder="Full Name" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-ink uppercase">{sellData.fields.email}</label>
                                <input type="email" className="bg-mangako-cream/30 border-b border-mangako-ink/10 p-4 focus:border-mangako-coral outline-none transition-all font-sans text-sm" placeholder="Email Address" />
                            </div>
                            <div className="flex flex-col gap-4 md:col-span-2">
                                <label className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-ink uppercase">{sellData.fields.itemTitle}</label>
                                <input type="text" className="bg-mangako-cream/30 border-b border-mangako-ink/10 p-4 focus:border-mangako-coral outline-none transition-all font-sans text-sm" placeholder="Series Title, Volume, Edition" />
                            </div>
                            <div className="flex flex-col gap-4 md:col-span-2">
                                <label className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-ink uppercase">{sellData.fields.notes}</label>
                                <textarea className="bg-mangako-cream/30 border border-mangako-ink/10 p-6 focus:border-mangako-coral outline-none transition-all font-sans text-sm h-48 resize-none" placeholder="Provide any additional collectors notes here..."></textarea>
                            </div>
                            <div className="md:col-span-2 mt-8">
                                <button className="bg-mangako-ink text-mangako-ivory px-16 py-6 text-xs font-black tracking-[0.4em] font-sans uppercase hover:bg-mangako-ink/80 transition-all rounded-full shadow-2xl shadow-mangako-ink/20">
                                    {sellData.submitButton}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
