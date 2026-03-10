import React from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";

export const ImmersiveExperience = () => {
    const { t } = useTranslation();
    return (
        <section className="relative py-32 bg-mangako-ivory overflow-hidden" id="experience">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Horizontal Slice Imagery */}
                <div className="relative w-full h-[600px] pointer-events-none group">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-10 left-4 w-[85%] h-48 overflow-hidden shadow-2xl border-4 border-white/90 z-20"
                    >
                        <img
                            src="/mangako/hero-sunrise.png"
                            alt="Manga Upper Panel"
                            className="w-full h-full object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-[2s]"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        className="absolute top-52 right-4 w-[90%] h-64 overflow-hidden shadow-2xl border-4 border-white/90 z-30"
                    >
                        <img
                            src="/mangako/hero-city-tunnel.png"
                            alt="Manga Lower Panel"
                            className="w-full h-full object-cover object-[50%_60%] group-hover:scale-105 transition-transform duration-[2s]"
                        />
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-mangako-ink/10 rounded-full z-10 block"></div>
                </div>

                {/* Narrative Content */}
                <div className="flex flex-col gap-8 lg:pl-16 z-10 w-full relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h2 className="font-mincho font-black text-5xl lg:text-[4rem] text-mangako-ink leading-[1.2] tracking-wider mb-8 whitespace-pre-line">
                            {t("immersive.title")}
                        </h2>
                        <p className="font-sans text-lg text-mangako-ink/70 leading-relaxed font-light mt-4 tracking-wide max-w-lg mb-10">
                            {t("immersive.desc")}
                        </p>
                        <div className="flex items-center gap-4 border-t border-mangako-ink/10 pt-6">
                            <span className="w-8 h-px bg-mangako-ink"></span>
                            <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold">{t("immersive.label")}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
