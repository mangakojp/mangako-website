import { Link } from "react-router-dom";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

export const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[110vh] w-full bg-mangako-ivory overflow-hidden mt-0" id="world">
            {/* Background Motion Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.03] mix-blend-multiply"
                    src="/mangako/ambient-hero.mp4"
                />
                <WavyBackground
                    className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center pb-40"
                    containerClassName="opacity-80"
                    colors={["#FADADD", "#FFD700", "#E0FFFF", "#FF7F50", "#E6E6FA"]}
                    waveWidth={60}
                    backgroundFill="transparent"
                    blur={10}
                    waveOpacity={0.6}
                />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-24 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-6 w-full lg:max-w-xl z-20 mix-blend-multiply pl-0 lg:pl-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-row gap-3 items-center mb-6"
                    >
                        {(t("hero.tags") || []).map((tag: string, i: number) => (
                            <span key={i} className="text-xs font-sans tracking-widest text-mangako-ink/70 px-3 py-1 border border-mangako-ink/10 rounded-full bg-white/50 backdrop-blur-md whitespace-nowrap">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="font-mincho font-black text-6xl lg:text-[5.5rem] leading-[1.1] text-mangako-ink tracking-tight whitespace-pre-line"
                    >
                        {t("hero.titleLine1")}<br />{t("hero.titleLine2")}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                        className="my-4 font-mincho text-2xl lg:text-3xl text-mangako-ink/80 tracking-widest"
                    >
                        {t("hero.subtitle")}
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                        className="font-sans text-base lg:text-lg text-mangako-ink/70 leading-relaxed font-light mt-2 mb-10"
                    >
                        {t("hero.desc")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link to="/collection" className="bg-mangako-ink text-black px-8 py-4 rounded-none font-sans tracking-widest text-sm hover:bg-mangako-ink/90 transition-all text-white border-2 border-transparent text-center">
                            {t("hero.ctaPrimary")}
                        </Link>
                        <Link to="/early-access" className="bg-transparent text-mangako-ink px-8 py-4 rounded-none font-sans tracking-widest text-sm hover:bg-black/5 transition-all border-2 border-mangako-ink/20 text-center">
                            {t("hero.ctaSecondary")}
                        </Link>
                    </motion.div>
                </div>

                {/* Right Imagery (Parallax Composition) */}
                <div className="relative w-full h-[600px] lg:h-full flex items-center justify-center lg:justify-end mt-16 lg:mt-0 z-10 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="absolute top-[10%] lg:top-[20%] right-[10%] lg:right-[5%] w-[80%] lg:w-[450px] aspect-[4/5] overflow-hidden shadow-2xl z-20 border-[6px] border-white/80 bg-white p-2"
                    >
                        <img
                            src="/mangako/hero-city-tunnel.png"
                            alt="City Tunnel Parallax"
                            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="absolute bottom-[5%] lg:bottom-[10%] left-[5%] lg:left-[-15%] w-[65%] lg:w-[400px] aspect-square overflow-hidden shadow-xl z-30 border-[4px] border-white/90 bg-white p-1"
                    >
                        <img
                            src="/mangako/hero-sunrise.png"
                            alt="Manga Floor Sunrise"
                            className="w-full h-full object-cover saturate-[1.2]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 font-mincho text-white text-xs tracking-widest leading-relaxed whitespace-pre-line drop-shadow-md">
                            {t("hero.imageTag")}
                        </div>
                    </motion.div>

                    <div className="absolute top-[5%] left-[20%] text-mangako-ink/10 font-mincho text-[180px] leading-none z-0 tracking-tighter opacity-70">
                        原
                    </div>
                    <div className="absolute bottom-[-5%] right-[20%] text-mangako-ink/10 font-mincho text-[220px] leading-none z-0 tracking-tighter opacity-70">
                        典
                    </div>
                </div>
            </div>
        </section>
    );
};
