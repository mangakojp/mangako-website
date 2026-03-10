import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ArchiveCardProps {
    title: string;
    series: string;
    type: string;
    condition: string;
    provenance: string;
    rarity?: string;
    image?: string;
    className?: string;
    onClick?: () => void;
}

export const ArchiveCard = ({ title, series, type, condition, provenance, rarity, image, className, onClick }: ArchiveCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={cn(
                "group cursor-pointer border border-mangako-ink/10 bg-white p-6 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-[600px] overflow-hidden",
                className
            )}
            onClick={onClick}
        >
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                {rarity && (
                    <span className="font-sans text-[8px] tracking-[0.3em] font-black text-white bg-mangako-coral px-2 py-1 rounded-sm uppercase">
                        {rarity}
                    </span>
                )}
            </div>

            <div className="flex-1 mb-8 overflow-hidden relative border border-mangako-ink/5 bg-mangako-cream/30">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                        <span className="font-sans uppercase text-[10px] tracking-[0.5em] font-black text-mangako-ink grayscale">
                            Manga Archive Panel
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-mangako-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            <div className="z-10 bg-white">
                <div className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-coral uppercase mb-2">
                    {series}
                </div>
                <h3 className="font-mincho font-bold text-2xl text-mangako-ink tracking-widest leading-tight mb-6">
                    {title}
                </h3>

                <div className="grid grid-cols-2 gap-4 border-t border-mangako-ink/10 pt-6">
                    <div className="flex flex-col gap-1">
                        <span className="font-sans text-[8px] tracking-[0.2em] font-black text-mangako-ink/40 uppercase">Format</span>
                        <span className="font-sans text-[10px] tracking-[0.1em] font-semibold text-mangako-ink uppercase">{type}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-sans text-[8px] tracking-[0.2em] font-black text-mangako-ink/40 uppercase">Condition</span>
                        <span className="font-sans text-[10px] tracking-[0.1em] font-semibold text-mangako-ink uppercase">{condition}</span>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-mangako-teal"></div>
                    <span className="font-sans text-[10px] tracking-[0.1em] font-bold text-mangako-ink/80 uppercase">Provenance: {provenance}</span>
                </div>
            </div>
        </motion.div>
    );
};

export const ListingCard = ({ title, series, price, image, className, onClick }: { title: string; series: string; price: string; image?: string; className?: string; onClick?: () => void }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "group cursor-pointer border border-mangako-ink/10 bg-white p-5 hover:border-mangako-coral/30 hover:shadow-xl transition-all duration-300 relative h-full flex flex-col",
                className
            )}
            onClick={onClick}
        >
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-mangako-cream/50 relative">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-10 font-sans uppercase text-[10px] tracking-[0.5em] font-black grayscale">Archive Image</div>
                )}
            </div>

            <div className="flex flex-col flex-1">
                <div className="font-sans text-[10px] tracking-[0.3em] font-black text-mangako-ink/40 uppercase mb-2">
                    {series}
                </div>
                <h3 className="font-mincho font-bold text-xl text-mangako-ink tracking-wider leading-tight mb-4 flex-1">
                    {title}
                </h3>
                <div className="flex items-center justify-between border-t border-mangako-ink/5 pt-4">
                    <span className="font-sans text-xs font-black text-mangako-coral uppercase px-2 py-0.5 border border-mangako-coral/20">Active</span>
                    <span className="font-sans font-black text-lg text-mangako-ink tracking-tight">{price}</span>
                </div>
            </div>
        </motion.div>
    );
};
