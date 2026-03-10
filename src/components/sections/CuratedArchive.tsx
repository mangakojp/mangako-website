import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";

export const CuratedArchive = () => {
    const { t } = useTranslation();
    const archives = t("archive.items") || [];

    return (
        <section className="relative py-32 bg-mangako-ivory border-t border-mangako-ink/5" id="archive">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
                <h2 className="font-mincho font-black text-4xl text-mangako-ink tracking-widest mb-20 text-center uppercase">
                    {t("archive.title")}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {archives.map((item: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 1, delay: idx * 0.2 }}
                            className="group"
                        >
                            <Link to="/archive" className="flex flex-col border border-mangako-ink/10 bg-white p-8 hover:shadow-xl hover:border-mangako-ink/30 transition-all duration-300 cursor-pointer h-full">
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
                                    <span>{t("archive.viewDetails")}</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                        →
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
