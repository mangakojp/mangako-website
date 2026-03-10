import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { ListingCard } from "@/components/common/Cards";
import { motion } from "framer-motion";

export const MarketplacePage = () => {
    const { t } = useTranslation();
    const marketData = t("marketplace");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={marketData.heroTitle}
                subtitle={marketData.heroSubtitle}
                description={marketData.heroDesc}
            />

            {/* Featured Listing Highlight */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 relative z-10">
                        <SectionHeader
                            title={marketData.featuredTitle}
                            subtitle={marketData.featuredSubtitle}
                        />
                        <div className="bg-white border border-mangako-ink/10 p-12 hover:shadow-2xl transition-all duration-700 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-mangako-coral p-1 leading-none text-white text-[10px] font-sans font-black rotate-45 translate-x-12 -translate-y-12 flex items-center justify-center pt-10">Featured</div>
                            <h3 className="font-mincho text-3xl font-black text-mangako-ink mb-6 tracking-widest">{marketData.featuredItemTitle}</h3>
                            <p className="font-sans text-lg text-mangako-ink/60 font-light mb-12">{marketData.featuredItemDesc}</p>
                            <div className="flex items-end justify-between border-t border-mangako-ink/5 pt-12 mt-12">
                                <span className="font-sans text-xs tracking-widest font-black text-mangako-coral uppercase border border-mangako-coral px-3 py-1">Limited Drop</span>
                                <span className="font-sans text-5xl font-black text-mangako-ink tracking-tighter">{marketData.featuredItemPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 h-[700px] bg-mangako-cream/50 relative p-8 group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-pink/30 to-transparent z-0 opacity-40 group-hover:scale-125 transition-transform duration-[4s]"></div>
                        <div className="absolute inset-0 border border-mangako-ink/5 z-10 m-6 flex items-center justify-center">
                            <span className="font-sans text-[10px] tracking-[0.6em] font-black text-mangako-ink/10 uppercase rotate-90 whitespace-nowrap">PREMIUM ARCHIVE LISTING</span>
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                <span className="font-sans text-xs font-black tracking-widest text-mangako-ink/40 uppercase mb-4">View Artwork Detail</span>
                                <div className="w-px h-24 bg-mangako-coral"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Active Listings */}
            <section className="py-24 bg-mangako-cream/30">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-mangako-ink/10 pb-12">
                        <SectionHeader
                            title={marketData.listingTitle}
                            subtitle={marketData.listingSubtitle}
                            className="mb-0"
                        />
                        <div className="flex gap-4">
                            {marketData.filterPills.map((pill: string, idx: number) => (
                                <button key={idx} className="font-sans text-[10px] tracking-[0.2em] font-black uppercase text-mangako-ink/40 border border-mangako-ink/10 px-6 py-2 hover:border-mangako-coral hover:text-mangako-coral transition-all">
                                    {pill}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {marketData.listings.map((item: any, idx: number) => (
                            <ListingCard
                                key={idx}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
