import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const JournalPage = () => {
    const { t } = useTranslation();
    const journalData = t("journalPage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={journalData?.heroTitle || "The Journal"}
                subtitle={journalData?.heroSubtitle || "文化的対話。"}
                description={journalData?.heroDesc || "マンガの芸術性、歴史、蒐集の哲学を深く掘り下げるエッセイ。"}
            />

            {/* Featured Article Spotlight */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="h-[800px] bg-mangako-cream/30 border border-mangako-ink/5 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-sunrise/20 via-mangako-pink/10 to-transparent z-0 opacity-40"></div>
                        <div className="absolute bottom-16 left-16 right-16 z-20">
                            <span className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-coral uppercase border border-mangako-coral px-3 py-1 mb-6 inline-block">Featured Story</span>
                            <h2 className="font-mincho text-[4rem] font-black text-mangako-ink tracking-tight leading-tight group-hover:translate-y-[-20px] transition-transform duration-[1.5s]">
                                {journalData?.featuredTitle || "Select Journal Entry"}
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12 lg:pl-16">
                        <SectionHeader
                            title={journalData?.featuredTitle || "Deep Investigation"}
                            subtitle={journalData?.featuredSubtitle || "特集記事。"}
                            className="mb-8"
                        />
                        <p className="font-sans text-xl text-mangako-ink/60 font-light leading-relaxed mb-12 italic border-l-4 border-mangako-coral pl-10">
                            {journalData?.featuredExcerpt || "Mangakoのエディトリアルチームが、独自の視点で描くマンガの深淵。"}
                        </p>
                        <Link to={`/journal/${journalData?.featuredSlug || "featured-entry"}`} className="bg-mangako-ink text-mangako-ivory px-12 py-6 text-xs font-black tracking-[0.4em] font-sans uppercase hover:bg-mangako-ink/80 transition-all rounded-full self-start shadow-2xl shadow-mangako-ink/20 transform hover:-translate-y-1 inline-block text-center">
                            {journalData?.readArticle || "Read Full Entry"}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Journal Entries Grid */}
            <section className="py-32 bg-mangako-cream/10 border-t border-mangako-ink/5">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <SectionHeader
                        title={journalData?.latestTitle || "Latest Essays"}
                        subtitle={journalData?.latestSubtitle || "最新の記事。"}
                        className="mb-24"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
                        {(journalData?.posts || []).map((post: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="group flex flex-col items-start"
                            >
                                <Link to={`/journal/${post?.id || idx}`} className="block w-full">
                                    <div className="aspect-[16/10] w-full bg-white border border-mangako-ink/5 mb-8 relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 bg-mangako-ink/5 group-hover:bg-mangako-coral/5 transition-colors duration-700"></div>
                                        <span className="font-sans text-[8px] tracking-[0.5em] font-black text-mangako-ink/10 uppercase rotate-[-5deg] scale-150">Journal Media Archive</span>
                                    </div>
                                    <span className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-coral uppercase mb-6 group-hover:translate-y-[-5px] transition-transform block">
                                        {post?.tag}
                                    </span>
                                    <h3 className="font-mincho text-3xl font-bold text-mangako-ink mb-6 tracking-widest group-hover:translate-x-4 transition-transform duration-700 leading-tight">
                                        {post?.title}
                                    </h3>
                                    <p className="font-sans text-sm text-mangako-ink/50 font-light leading-relaxed mb-8">
                                        {post?.date} &mdash; {post?.excerpt}
                                    </p>
                                    <span className="font-sans text-[10px] tracking-[0.6em] font-black text-mangako-ink uppercase border-b border-mangako-ink/40 group-hover:border-mangako-coral group-hover:text-mangako-coral pb-1 transition-all inline-block">
                                        Explore Context
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
