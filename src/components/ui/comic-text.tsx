import React from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ComicText = ($2) => {
  const { t } = useTranslation();
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "inline-block font-sans font-black tracking-widest text-xs uppercase px-3 py-1",
                "bg-mangako-coral text-mangako-ivory",
                "border-[1px] border-mangako-ink shadow-[2px_2px_0px_#1A1A1D]",
                "skew-x-[-10deg]",
                className
            )}
        >
            <span className="block skew-x-[10deg]">{children}</span>
        </motion.div>
    );
};
