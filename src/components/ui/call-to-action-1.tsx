import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/contexts/TranslationContext";

interface CallToAction1Props {
    className?: string;
}

export const CallToAction1 = ({ className }: CallToAction1Props) => {
    const { t } = useTranslation();
    return (
        <div className={cn("relative py-24 bg-mangako-ivory overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <h2 className="font-mincho text-4xl mb-6 text-center text-mangako-ink font-semibold tracking-tight">
                    {(t("ctaSection.title") || "Join the Archive")}
                </h2>
                <p className="text-xl text-center text-mangako-ink/70 mb-10 max-w-2xl">
                    {(t("ctaSection.desc") || "Discover rare manga and collector pieces.")}
                </p>
                <Link to="/early-access" className="bg-mangako-ink text-mangako-ivory px-8 py-4 text-lg rounded-full font-sans tracking-widest hover:bg-mangako-ink/80 transition-all duration-300 shadow-xl shadow-mangako-ink/10 relative group overflow-hidden inline-block text-center">
                    <span className="relative z-10">{(t("ctaSection.button") || "Get Started")}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-mangako-coral via-mangako-pink to-mangako-sunrise opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>
                </Link>
                <p className="mt-6 text-sm text-mangako-ink/50 font-sans tracking-wider border-b border-mangako-ink/20 pb-1">
                    {(t("ctaSection.footer") || "Invitation-only community")}
                </p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-mangako-pink/30 to-mangako-sunrise/20 blur-[100px] rounded-full z-0 block"></div>
            <div className="absolute top-10 left-10 w-32 h-32 border border-mangako-ink/5 rounded-full z-0"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 border border-mangako-coral/10 rounded-full z-0"></div>
        </div>
    );
};
