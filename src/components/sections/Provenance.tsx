import React from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import RetroGrid from "@/components/ui/retro-grid";
import { motion } from "framer-motion";

export const Provenance = ($2) => {
  const { t } = useTranslation();
    const blocks = [
        { title: "真贋確認", info: "Verified Authentic", icon: "01" },
        { title: "来歴記録", info: "Provenance Data", icon: "02" },
        { title: "保存価値", info: "Archival Grade", icon: "03" },
        { title: "流動性", info: "Market Liquidity", icon: "04" },
    ];

    return (
        <section className="relative py-32 bg-mangako-cream flex items-center justify-center min-h-[80vh] overflow-hidden" id="trade">
            <RetroGrid angle={75} className="opacity-20 z-0" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Typography */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-mangako-ink"></span>
                        <span className="font-sans uppercase tracking-widest text-sm font-semibold">Authentication Engine</span>
                    </div>
                    <h2 className="font-mincho font-black text-5xl lg:text-6xl text-mangako-ink leading-tight tracking-widest">
                        価値は、情報によって守られる。
                    </h2>
                    <p className="font-sans text-mangako-ink/70 text-lg leading-relaxed max-w-xl font-light">
                        真正性、来歴、保存性、市場流動性。Mangakoは、コレクターが本当に必要とする情報と体験を、美しく一つに束ねます。
                    </p>
                </motion.div>

                {/* Right Feature Blocks */}
                <div className="grid grid-cols-2 gap-4 lg:gap-8">
                    {blocks.map((block, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.15 }}
                            className="bg-white border-[1px] border-mangako-ink/10 p-8 hover:shadow-2xl hover:border-mangako-ink/20 transition-all duration-300 relative group"
                        >
                            <div className="absolute top-4 right-4 text-mangako-ink/10 font-sans text-4xl font-black group-hover:text-mangako-coral/20 transition-colors">
                                {block.icon}
                            </div>
                            <div className="mt-8">
                                <div className="text-xs font-sans tracking-[0.2em] text-mangako-ink/40 uppercase mb-2">
                                    {block.info}
                                </div>
                                <div className="font-mincho text-2xl font-bold tracking-widest text-mangako-ink">
                                    {block.title}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
