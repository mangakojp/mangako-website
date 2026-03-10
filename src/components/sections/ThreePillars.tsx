import React from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";
import { ComicText } from "@/components/ui/comic-text";

export const ThreePillars = ($2) => {
  const { t } = useTranslation();
    const pillars = [
        {
            title: "蒐集",
            desc: "「初版、限定版、完結セット、証明付きアートを厳選して出会える。」",
            label: "限定",
            delay: 0.1
        },
        {
            title: "閲覧",
            desc: "「作品の空気感を損なわない、静かで没入感のある鑑賞体験。」",
            label: "注目",
            delay: 0.3
        },
        {
            title: "売買",
            desc: "「真贋確認と来歴情報を伴う、信頼性の高い流通体験。」",
            label: "新着",
            delay: 0.5
        }
    ];

    return (
        <section className="relative py-32 bg-white" id="features">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <h2 className="font-mincho text-4xl lg:text-5xl text-center text-mangako-ink mb-24 tracking-widest font-bold">
                    Mangakoを構成する、3つの体験
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 1.2, delay: pillar.delay, ease: "easeOut" }}
                            className="relative aspect-[3/4] border-2 border-mangako-ink/10 bg-mangako-ivory flex flex-col items-center justify-center p-12 text-center group hover:border-mangako-ink/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Corner Accents (Manga Panel style framing) */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-mangako-ink/30 m-4 transition-all duration-500 group-hover:m-6 group-hover:border-mangako-ink"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-mangako-ink/30 m-4 transition-all duration-500 group-hover:m-6 group-hover:border-mangako-ink"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-mangako-ink/30 m-4 transition-all duration-500 group-hover:m-6 group-hover:border-mangako-ink"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-mangako-ink/30 m-4 transition-all duration-500 group-hover:m-6 group-hover:border-mangako-ink"></div>

                            <div className="absolute -top-4">
                                <ComicText>{pillar.label}</ComicText>
                            </div>

                            <span className="font-sans text-mangako-ink/20 font-black text-xs tracking-widest mb-6 block uppercase uppercase">
                                Phase {idx + 1}
                            </span>
                            <h3 className="font-mincho text-4xl mb-8 font-black text-mangako-ink">
                                {pillar.title}
                            </h3>
                            <p className="font-sans text-base leading-loose tracking-wide text-mangako-ink/70 font-light">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
