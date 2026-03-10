import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const ArchivePage = () => {
    const { t } = useTranslation();
    const archiveData = t("archivePage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={archiveData?.heroTitle || "Archive Index"}
                subtitle={archiveData?.heroSubtitle || "歴史の目録。"}
                description={archiveData?.heroDesc || "過去から現在に至るまで、Mangakoが検証・公開した全アーカイブのデータベースです。"}
            />

            {/* Curated Archive Index Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
                    {(archiveData?.entries || []).map((entry: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: idx * 0.15 }}
                            className="group"
                        >
                            <Link to={`/collection/${entry?.id || idx}`} className="block bg-white border border-mangako-ink/10 p-12 hover:shadow-2xl transition-all duration-700">
                                <span className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-ink/30 group-hover:text-mangako-coral transition-colors uppercase block mb-12 border-b border-mangako-ink/10 pb-4">
                                    {entry?.ref}
                                </span>
                                <div className="font-sans text-[10px] tracking-[0.2em] font-black text-mangako-ink/40 uppercase mb-4">
                                    {entry?.era}
                                </div>
                                <h3 className="font-mincho text-3xl font-black text-mangako-ink mb-6 tracking-widest group-hover:translate-x-4 transition-transform duration-700 origin-left leading-tight">
                                    {entry?.title}
                                </h3>
                                <p className="font-sans text-sm text-mangako-ink/60 font-light leading-relaxed mb-12">
                                    {entry?.desc}
                                </p>
                                <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-ink uppercase border-b border-mangako-ink/40 group-hover:border-mangako-coral group-hover:text-mangako-coral pb-1 transition-all inline-block">
                                    {archiveData?.exploreLink || "Explore"}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Researcher's Note Section */}
            <section className="py-48 bg-mangako-cream text-center relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                    <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-coral uppercase border border-mangako-coral px-3 py-1 mb-16 inline-block">Archival Note</span>
                    <blockquote className="font-mincho text-3xl lg:text-4xl text-mangako-ink leading-relaxed tracking-wider italic mb-12 bg-white/20 p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-mangako-coral/5 -rotate-45 translate-x-12 -translate-y-12"></div>
                        "{archiveData?.archivalNote || "記録は、沈黙を守りながら真実を語り続ける。"}"
                    </blockquote>
                </div>
            </section>
        </div>
    );
};
