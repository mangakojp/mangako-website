import React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

export const BrandPhilosophy = () => {
    const { t } = useTranslation();
    return (
        <section className="relative py-40 w-full bg-mangako-cream flex flex-col items-center justify-center overflow-hidden">
            {/* Decorative vertical Japanese text */}
            <div className="absolute left-[5%] top-[10%] writing-vertical-rl text-mangako-ink/10 font-mincho text-6xl tracking-[1em] opacity-40">
                {t("philosophy.vertical1")}
            </div>
            <div className="absolute right-[5%] bottom-[10%] writing-vertical-rl text-mangako-ink/10 font-mincho text-8xl tracking-[0.5em] opacity-30">
                {t("philosophy.vertical2")}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center z-10 w-full">
                {/* Gooey morphing words */}
                <GooeyText texts={t("philosophy.words")} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mt-16 text-center max-w-3xl flex flex-col gap-6"
                >
                    <h2 className="font-mincho font-semibold text-3xl lg:text-4xl text-mangako-ink tracking-widest leading-relaxed">
                        {t("philosophy.title")}
                    </h2>
                    <p className="font-sans text-lg text-mangako-ink/70 leading-[2.2] max-w-2xl mx-auto tracking-wide font-light">
                        {t("philosophy.desc")}
                    </p>
                </motion.div>

                {/* Minimalist image panel to break up the text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="mt-24 w-full max-w-4xl h-[400px] border-[8px] border-white/90 bg-white p-2 shadow-2xl overflow-hidden group"
                >
                    <img
                        src="/mangako/poster-01.png"
                        alt="Manga Panel Fragment"
                        className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                    />
                </motion.div>
            </div>
        </section>
    );
};
