import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const ContactPage = () => {
    const { t } = useTranslation();
    const contactData = t("contactPage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={contactData?.heroTitle || "Contact Archive"}
                subtitle={contactData?.heroSubtitle || "文化的対話の窓口。"}
                description={contactData?.heroDesc || "Mangakoのキュレーターやサポートチームへの、正式な問い合わせ窓口です。"}
            />

            {/* Premium Contact Form and Info Section */}
            <section className="py-24 relative overflow-hidden bg-white/20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
                    <div className="flex flex-col gap-16">
                        <SectionHeader
                            title={contactData?.formTitle || "Inquiry Form"}
                            subtitle={contactData?.formSubtitle || "問い合わせ。"}
                        />

                        <form className="flex flex-col gap-12 max-w-xl">
                            <div className="flex flex-col gap-4 border-b border-mangako-ink/10 pb-6 group hover:border-mangako-coral transition-colors duration-500">
                                <label className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-ink/30 uppercase group-hover:text-mangako-coral/50 transition-colors">
                                    {contactData?.fields?.name || "Name"}
                                </label>
                                <input type="text" className="bg-transparent text-xl font-mincho text-mangako-ink tracking-widest outline-none placeholder:text-mangako-ink/10" placeholder="Collector Name" />
                            </div>

                            <div className="flex flex-col gap-4 border-b border-mangako-ink/10 pb-6 group hover:border-mangako-coral transition-colors duration-500">
                                <label className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-ink/30 uppercase group-hover:text-mangako-coral/50 transition-colors">
                                    {contactData?.fields?.email || "Email"}
                                </label>
                                <input type="email" className="bg-transparent text-xl font-mincho text-mangako-ink tracking-widest outline-none placeholder:text-mangako-ink/10" placeholder="Collector Email" />
                            </div>

                            <div className="flex flex-col gap-4 border-b border-mangako-ink/10 pb-6 group hover:border-mangako-coral transition-colors duration-500">
                                <label className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-ink/30 uppercase group-hover:text-mangako-coral/50 transition-colors">
                                    {contactData?.fields?.type || "Inquiry Type"}
                                </label>
                                <select className="bg-transparent text-xl font-mincho text-mangako-ink tracking-widest outline-none appearance-none cursor-pointer">
                                    {(contactData?.fields?.typeOptions || []).map((opt: string, idx: number) => (
                                        <option key={idx} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-4 border border-mangako-ink/10 p-8 group hover:border-mangako-coral transition-colors duration-500 bg-white/40">
                                <label className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-ink/30 uppercase group-hover:text-mangako-coral/50 transition-colors mb-4 block">
                                    {contactData?.fields?.message || "Message"}
                                </label>
                                <textarea className="bg-transparent text-lg font-sans text-mangako-ink font-light leading-relaxed outline-none min-h-[250px] resize-none placeholder:text-mangako-ink/10" placeholder="Your inquiry details..."></textarea>
                            </div>

                            <button className="bg-mangako-ink text-mangako-ivory px-16 py-8 text-xs font-black tracking-[0.5em] font-sans uppercase hover:bg-mangako-ink/90 transition-all rounded-full self-start shadow-xl shadow-mangako-ink/20 transform hover:-translate-y-1 active:translate-y-0 duration-500">
                                {contactData?.submitButton || "Send Inquiry"}
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col gap-12 bg-mangako-cream/30 p-16 border border-mangako-ink/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-mangako-coral/5 via-transparent to-transparent z-0 opacity-40"></div>
                        <div className="relative z-10">
                            <SectionHeader
                                title={contactData?.infoTitle || "Information"}
                                subtitle={contactData?.infoSubtitle || "窓口。"}
                                className="mb-12"
                            />
                            <div className="flex flex-col gap-16">
                                {(contactData?.infoBlocks || []).map((block: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: idx * 0.2 }}
                                        className="flex flex-col border-l border-mangako-ink/10 pl-10 group-hover:border-mangako-coral transition-colors duration-700"
                                    >
                                        <h4 className="font-mincho text-xl font-bold text-mangako-ink mb-2 tracking-widest leading-tight italic">{block?.title}</h4>
                                        <p className="font-sans text-sm text-mangako-ink/40 font-light leading-relaxed uppercase tracking-widest">{block?.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-24 pt-24 border-t border-mangako-ink/5 flex flex-col items-center">
                                <div className="w-16 h-16 border border-mangako-coral rounded-full flex items-center justify-center mb-8 bg-white shadow-xl shadow-mangako-coral/10 group-hover:scale-125 transition-transform duration-1000">
                                    <div className="w-2 h-2 bg-mangako-coral rounded-full"></div>
                                </div>
                                <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-coral uppercase">Archival Support Registry</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
