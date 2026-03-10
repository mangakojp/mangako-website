import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    className?: string;
    image?: string;
}

export const PageHero = ({ title, subtitle, description, className }: PageHeroProps) => {
    return (
        <section className={cn("relative pt-48 pb-32 overflow-hidden bg-mangako-ivory border-h border-mangako-ink/5", className)}>
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-mangako-sunrise/20 via-mangako-pink/10 to-transparent blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-mangako-teal/10 via-mangako-coral/5 to-transparent blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {subtitle && (
                                <span className="font-sans text-xs tracking-[0.3em] font-black text-mangako-coral uppercase border-b border-mangako-coral pb-1 inline-block mb-6">
                                    {subtitle}
                                </span>
                            )}
                            <h1 className="font-mincho font-black text-5xl lg:text-7xl text-mangako-ink leading-tight tracking-wider mb-8">
                                {title}
                            </h1>
                            {description && (
                                <p className="font-sans text-xl text-mangako-ink/70 leading-relaxed font-light max-w-2xl">
                                    {description}
                                </p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const SectionHeader = ({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) => (
    <div className={cn("mb-20", className)}>
        {subtitle && (
            <span className="font-sans text-[10px] tracking-[0.4em] font-black text-mangako-ink/30 uppercase block mb-4">
                {subtitle}
            </span>
        )}
        <h2 className="font-mincho font-black text-3xl lg:text-4xl text-mangako-ink tracking-widest leading-tight">
            {title}
        </h2>
    </div>
);
