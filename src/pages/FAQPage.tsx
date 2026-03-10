import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQPage = () => {
    const { t } = useTranslation();
    const faqData = t("faqPage");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <PageHero
                title={faqData?.heroTitle || "Support Center"}
                subtitle={faqData?.heroSubtitle || "よくある質問とご案内。"}
                description={faqData?.heroDesc || "Mangakoのサービス、取引、鑑定プロセスに関する詳細な情報はこちらから。"}
            />

            {/* Structured FAQ Sections */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col gap-24">
                        {(faqData?.categories || []).map((category: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="flex flex-col gap-12"
                            >
                                <SectionHeader
                                    title={category?.title || "Category Title"}
                                    subtitle={category?.subtitle || "Category Subtitle"}
                                    className="mb-0 border-b border-mangako-ink/10 pb-10"
                                />

                                <Accordion className="w-full">
                                    {(category?.questions || []).map((q: any, qIdx: number) => (
                                        <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="border-mangako-ink/5 border-b py-4">
                                            <AccordionTrigger className="font-mincho text-xl lg:text-2xl font-bold tracking-widest text-left text-mangako-ink hover:text-mangako-coral hover:no-underline py-6">
                                                {q?.question || "Question"}
                                            </AccordionTrigger>
                                            <AccordionContent className="font-sans text-lg text-mangako-ink/60 font-light leading-relaxed pb-8 pl-0">
                                                {q?.answer || "Answer"}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Inquiries Closing */}
            <section className="py-48 bg-mangako-cream text-center">
                <div className="max-w-[800px] mx-auto px-6">
                    <h3 className="font-mincho text-3xl font-black text-mangako-ink mb-12 tracking-widest leading-tight italic">
                        {faqData?.supportTitle || "Still have questions?"}
                    </h3>
                    <p className="font-sans text-xl text-mangako-ink/50 font-light mb-16 leading-relaxed">
                        {faqData?.supportDesc || "Can't find the answer you're looking for? Don't hesitate to reach out to our support team."}
                    </p>
                    <Link to="/contact" className="bg-mangako-ink text-mangako-ivory px-16 py-7 text-xs font-black tracking-[0.4em] font-sans uppercase hover:bg-mangako-coral transition-all rounded-full shadow-2xl shadow-mangako-ink/20 transform hover:-translate-y-1 inline-block text-center">
                        {faqData?.contactSupport || "Contact Support"}
                    </Link>
                </div>
            </section>
        </div>
    );
};
