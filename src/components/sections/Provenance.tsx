import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import RetroGrid from "@/components/ui/retro-grid";
import { motion } from "framer-motion";

export const Provenance = () => {
    const { t } = useTranslation();
    const blocks = t("provenance.blocks") || [];

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
                        <span className="font-sans uppercase tracking-widest text-sm font-semibold">{t("provenance.label")}</span>
                    </div>
                    <h2 className="font-mincho font-black text-5xl lg:text-6xl text-mangako-ink leading-tight tracking-widest">
                        {t("provenance.titleLine1")}<br />{t("provenance.titleLine2")}
                    </h2>
                    <p className="font-sans text-mangako-ink/70 text-lg leading-relaxed max-w-xl font-light">
                        {t("provenance.desc")}
                    </p>
                    <Link to="/provenance" className="inline-block mt-4 text-mangako-coral font-sans tracking-[0.4em] text-[10px] font-black uppercase border-b border-mangako-coral/50 pb-2 hover:border-mangako-coral transition-colors self-start">
                        Explore Authentication Protocol
                    </Link>
                </motion.div>

                {/* Right Feature Blocks */}
                <div className="grid grid-cols-2 gap-4 lg:gap-8">
                    {blocks.map((block: any, idx: number) => (
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
