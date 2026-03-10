import React from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";

export const CuratedArchive = ($2) => {
  const { t } = useTranslation();
    const archives = [
        { title: "注目のアーカイブ", desc: "第一部 完結セット 初版", date: "2024.10", ref: "ARCH-001" },
        { title: "今週の厳選出品", desc: "作者直筆 サイン入り", date: "2024.11", ref: "ARCH-024" },
        { title: "収蔵候補", desc: "限定装丁版 全巻綴じ", date: "2024.12", ref: "ARCH-089" }
    ];

    return (
        <section className="relative py-32 bg-mangako-ivory border-t border-mangako-ink/5" id="archive">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
                <h2 className="font-mincho font-black text-4xl text-mangako-ink tracking-widest mb-20 text-center">
                    Selected Archive
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {archives.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 1, delay: idx * 0.2 }}
                            className="group flex flex-col border border-mangako-ink/10 bg-white p-8 hover:shadow-xl hover:border-mangako-ink/30 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-coral uppercase border border-mangako-coral px-2 py-1">
                                    {item.ref}
                                </span>
                                <span className="font-sans text-xs tracking-widest text-mangako-ink/40">
                                    {item.date}
                                </span>
                            </div>
                            <h3 className="font-mincho text-2xl font-bold tracking-widest text-mangako-ink mb-4 group-hover:text-mangako-teal transition-colors">
                                {item.title}
                            </h3>
                            <p className="font-sans text-sm tracking-widest text-mangako-ink/60 mb-8 border-b border-mangako-ink/10 pb-6">
                                {item.desc}
                            </p>
                            <div className="mt-auto flex justify-between items-center text-xs tracking-widest font-sans text-mangako-ink uppercase font-semibold">
                                <span>View Details</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                    →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
