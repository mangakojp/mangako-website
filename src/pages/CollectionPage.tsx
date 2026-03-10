import React, { useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { ArchiveCard } from "@/components/common/Cards";
import { motion, AnimatePresence } from "framer-motion";

export const CollectionPage = () => {
    const { t } = useTranslation();
    const collectionData = t("collection");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = collectionData.categories;
    const items = collectionData.items.filter((item: any) =>
        selectedCategory === "all" || item.category === selectedCategory
    );

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={collectionData.heroTitle}
                subtitle={collectionData.heroSubtitle}
                description={collectionData.heroDesc}
            />

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 bg-mangako-ivory/80 backdrop-blur-md border-y border-mangako-ink/5 py-4">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex gap-4 items-center overflow-x-auto no-scrollbar pb-1 lg:pb-0">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`font-sans text-[10px] tracking-[0.3em] font-black uppercase px-6 py-2 transition-all duration-300 ${selectedCategory === "all"
                                    ? "bg-mangako-ink text-mangako-ivory shadow-lg shadow-mangako-ink/10"
                                    : "bg-white border border-mangako-ink/10 text-mangako-ink/50 hover:border-mangako-coral/30"
                                }`}
                        >
                            All
                        </button>
                        {categories.map((cat: any) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`font-sans text-[10px] tracking-[0.3em] font-black uppercase px-6 py-2 transition-all duration-300 whitespace-nowrap ${selectedCategory === cat.id
                                        ? "bg-mangako-ink text-mangako-ivory shadow-lg shadow-mangako-ink/10"
                                        : "bg-white border border-mangako-ink/10 text-mangako-ink/50 hover:border-mangako-coral/30"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <span className="font-sans text-[10px] tracking-[0.2em] font-black text-mangako-ink/40 uppercase">
                            {items.length} {collectionData.resultsCount}
                        </span>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <AnimatePresence mode="popLayout">
                            {items.map((item: any, idx: number) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                >
                                    <ArchiveCard
                                        {...item}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {items.length === 0 && (
                        <div className="py-40 text-center flex flex-col items-center">
                            <h3 className="font-mincho text-2xl text-mangako-ink/30 tracking-widest uppercase mb-4">
                                No entries found
                            </h3>
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-coral border-b border-mangako-coral pb-1"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
