import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import RetroGrid from "@/components/ui/retro-grid";
import { motion } from "framer-motion";

export const ProvenancePage = () => {
    const { t } = useTranslation();
    const provenanceData = t("provenancePage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <div className="relative overflow-hidden">
                <RetroGrid angle={45} className="opacity-20 z-0" />
                <PageHero
                    title={provenanceData?.heroTitle || "Verification Archive"}
                    subtitle={provenanceData?.heroSubtitle || "真実を保証する。"}
                    description={provenanceData?.heroDesc || "Mangakoは、すべての取引において透明性と真正性を守るための独自の検証プロセスを確立しています。"}
                    className="bg-transparent"
                />
            </div>

            {/* Verification Layers Section */}
            <section className="py-32 relative">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="order-2 lg:order-1 flex flex-col gap-12">
                        <SectionHeader
                            title={provenanceData?.processTitle || "Verification Layers"}
                            subtitle={provenanceData?.processSubtitle || "信頼の構築。"}
                        />
                        <div className="flex flex-col gap-8">
                            {(provenanceData?.layers || []).map((layer: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                    className="bg-white p-10 border-l-4 border-mangako-coral shadow-lg shadow-mangako-ink/5 flex items-start gap-8 group hover:border-mangako-teal/50 transition-all duration-500"
                                >
                                    <div className="flex flex-col gap-4">
                                        <h4 className="font-mincho text-2xl font-bold text-mangako-ink tracking-widest leading-tight">{layer?.title}</h4>
                                        <p className="font-sans text-mangako-ink/60 font-light leading-relaxed">{layer?.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 h-[800px] border border-mangako-ink/10 relative overflow-hidden group p-8 bg-mangako-cream/10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-teal/10 via-mangako-pink/5 to-transparent z-0 opacity-40"></div>
                        <div className="absolute inset-0 border border-mangako-ink/5 z-10 m-10 flex flex-col items-center justify-center">
                            <span className="font-sans text-[10px] tracking-[1em] font-black text-mangako-ink/20 uppercase mb-8">VERIFICATION RECORD ARCHIVE</span>
                            <div className="w-px h-64 bg-mangako-coral group-hover:bg-mangako-teal transition-all duration-700"></div>
                            <div className="mt-12 flex flex-col items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-mangako-coral opacity-20"></div>
                                    <div className="w-3 h-3 rounded-full bg-mangako-coral opacity-40"></div>
                                    <div className="w-3 h-3 rounded-full bg-mangako-coral"></div>
                                </div>
                                <span className="font-sans text-[8px] tracking-[0.5em] font-black text-mangako-ink/40 uppercase">Archival Layer 034-X</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specimen Labels Grid */}
            <section className="py-48 bg-mangako-ink text-mangako-ivory overflow-hidden border-y border-mangako-coral/10">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {(provenanceData?.standards || []).map((standard: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.15 }}
                            className="bg-mangako-ivory/5 p-12 hover:bg-mangako-coral transition-all duration-700 cursor-default group"
                        >
                            <span className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-coral group-hover:text-mangako-ivory uppercase block mb-12 border-b border-mangako-coral/20 pb-4">
                                Standard {idx + 1}
                            </span>
                            <h3 className="font-mincho text-2xl font-bold text-mangako-ivory mb-6 tracking-widest group-hover:scale-110 transition-transform origin-left">
                                {standard?.title}
                            </h3>
                            <p className="font-sans text-xs text-mangako-ivory/40 group-hover:text-mangako-ivory font-light leading-relaxed uppercase tracking-widest selection:bg-white selection:text-mangako-coral">
                                {standard?.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-mangako-ivory text-center flex flex-col items-center">
                <SectionHeader
                    title={provenanceData?.faqTitle || "Still Questions?"}
                    subtitle={provenanceData?.faqSubtitle || "疑問点。"}
                    className="mb-12 text-center"
                />
                <Link to="/faq" className="text-mangako-ink font-sans tracking-[0.4em] text-xs font-black uppercase border-b border-mangako-ink pb-2 hover:border-mangako-coral hover:text-mangako-coral transition-all">
                    Explore Verification FAQ
                </Link>
            </section>
        </div>
    );
};
