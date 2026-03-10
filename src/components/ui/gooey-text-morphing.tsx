import React, { useEffect, useState } from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
    texts: string[];
    className?: string;
}

export const GooeyText = ({ texts, className }: GooeyTextProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 4000); // 4 seconds interval to morph
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className={cn("relative flex items-center justify-center h-[200px] overflow-hidden", className)}>
            <svg className="hidden">
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>
            {/* Container with the gooey filter */}
            <div
                className="relative w-full h-full flex items-center justify-center font-mincho text-6xl lg:text-8xl tracking-widest font-black text-mangako-ink"
                style={{ filter: "url(#goo)" }}
            >
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        exit={{ opacity: 0, filter: "blur(20px)", y: -20, position: "absolute" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute"
                    >
                        {texts[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
