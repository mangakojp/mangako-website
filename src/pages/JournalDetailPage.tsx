import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const JournalDetailPage = () => {
    const { t } = useTranslation();
    const journalDetailData = t("journalDetail");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32">
                <Link to="/journal" className="inline-flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-mangako-ink/10 rounded-full flex items-center justify-center group-hover:border-mangako-coral group-hover:bg-mangako-coral transition-all duration-500">
                        <span className="font-sans text-xs font-black text-mangako-ink group-hover:text-white transition-colors">←</span>
                    </div>
                    <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-ink/40 uppercase group-hover:text-mangako-coral transition-colors">Back to Journal</span>
                </Link>
            </div>

            <section className="pt-24 pb-32 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left Side: Article Introduction */}
                    <div className="flex flex-col gap-12 relative z-10 lg:pr-16 order-2 lg:order-1">
                        <SectionHeader
                            title={journalDetailData?.title || "Archive Narrative"}
                            subtitle={journalDetailData?.subtitle || "文化的対話の中にある、線と意志を考察する。"}
                        />
                        <div className="prose prose-mangako font-sans text-xl text-mangako-ink/70 font-light leading-relaxed mb-12 space-y-12 bg-white/20 p-12 lg:p-16 border border-mangako-ink/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-mangako-coral p-1 leading-none text-white text-[10px] font-sans font-black rotate-45 translate-x-12 -translate-y-12 flex items-center justify-center pt-10">Editorial</div>
                            {(journalDetailData?.introTexts || []).map((text: string, idx: number) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>
                        <div className="flex items-center gap-12 mt-8 border-t border-mangako-ink/10 pt-12">
                            <div className="flex flex-col gap-2">
                                <span className="font-sans text-[8px] tracking-[0.4em] font-black text-mangako-ink/30 uppercase italic">WRITTEN BY</span>
                                <span className="font-mincho text-xl font-bold text-mangako-ink tracking-widest leading-tight">{journalDetailData?.author || "Journalist"}</span>
                            </div>
                            <div className="flex flex-col gap-2 border-l border-mangako-ink/10 pl-12">
                                <span className="font-sans text-[8px] tracking-[0.4em] font-black text-mangako-ink/30 uppercase italic">PUBLISHED</span>
                                <span className="font-mincho text-xl font-bold text-mangako-ink tracking-widest leading-tight italic">{journalDetailData?.date || "2024.12"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Article Media Surface */}
                    <div className="order-1 lg:order-2 h-[800px] bg-mangako-cream/20 border border-mangako-ink/10 relative overflow-hidden group p-12">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-sunrise/10 via-mangako-pink/5 to-transparent z-0 opacity-40 group-hover:scale-120 transition-transform duration-[5s]"></div>
                        <div className="relative z-10 h-full border border-mangako-ink/5 flex flex-col items-center justify-center p-12 text-center group-hover:border-mangako-coral transition-colors duration-[1.5s]">
                            <span className="font-sans text-[10px] tracking-[0.8em] font-black text-mangako-ink/10 uppercase mb-20 select-none transform rotate-90 group-hover:scale-110 transition-transform">EDITORIAL MEDIA ARCHIVE</span>
                            <div className="w-1.5 h-64 bg-mangako-coral opacity-20 group-hover:opacity-100 transition-opacity"></div>
                            <div className="mt-24 flex flex-col items-center gap-8">
                                <h2 className="font-mincho text-[7rem] lg:text-[8rem] font-black text-mangako-ink/5 tracking-widest translate-y-[-50%] select-none uppercase">{journalDetailData?.title || "Essay"}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content reading section */}
            <section className="py-24 bg-white border-y border-mangako-ink/5 relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                    <div className="prose prose-mangako font-sans text-xl text-mangako-ink font-light space-y-24 leading-relaxed">
                        {(journalDetailData?.bodySections || []).map((section: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: idx * 0.2 }}
                                className="flex flex-col gap-16 group"
                            >
                                <h3 className="font-mincho text-3xl font-black text-mangako-ink tracking-widest italic group-hover:text-mangako-coral transition-colors duration-500">{section?.heading}</h3>
                                <p className="font-sans text-xl font-light leading-relaxed border-l-4 border-mangako-teal/20 pl-16 py-8 italic bg-mangako-cream/5 shadow-2xl shadow-mangako-ink/[0.02] group-hover:border-mangako-coral transition-colors duration-1000 transform group-hover:translate-x-4">
                                    {section?.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-mangako-cream/5 z-0"></div>
            </section>

            {/* Pull Quote Section */}
            <section className="py-48 bg-mangako-ink text-mangako-ivory overflow-hidden border-y border-mangako-coral/10 relative">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span className="text-mangako-coral/40 text-[10rem] font-mincho mb-8 leading-none select-none opacity-40">“</span>
                    <blockquote className="font-mincho text-3xl lg:text-[5rem] text-mangako-ivory tracking-widest leading-[1.2] mb-16 italic max-w-6xl transition-all duration-1000 hover:text-mangako-coral active:scale-95 cursor-default select-none">
                        {journalDetailData?.pullQuote || "形を愛することは、その背後にある魂を愛することに他ならない。"}
                    </blockquote>
                    <cite className="font-sans text-sm tracking-[0.8em] font-black text-mangako-ivory/40 uppercase not-italic">
                        Editorial Theory Fragment 001
                    </cite>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-mangako-ivory/5 z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-px bg-mangako-ivory/5 z-0"></div>
            </section>
        </div>
    );
};
