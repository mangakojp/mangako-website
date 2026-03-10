import { Link, useParams } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";
import { ArchiveCard } from "@/components/common/Cards";

export const CollectionDetailPage = () => {
    const { slug } = useParams();
    const { t } = useTranslation();
    const collectionData = t("collection");
    const detailData = t("collectionDetail");

    // Find the item from the collection if possible to get correct image/title
    const itemData = (collectionData?.items || []).find((item: any) => item.id === slug) || detailData;

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32">
                <Link to="/collection" className="inline-flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-mangako-ink/10 rounded-full flex items-center justify-center group-hover:border-mangako-coral group-hover:bg-mangako-coral transition-all duration-500">
                        <span className="font-sans text-xs font-black text-mangako-ink group-hover:text-white transition-colors">←</span>
                    </div>
                    <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-ink/40 uppercase group-hover:text-mangako-coral transition-colors">Back to Archive</span>
                </Link>
            </div>

            <section className="pt-24 pb-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Left Side: Rich Image Area */}
                    <div className="relative group overflow-hidden h-[900px] flex items-center justify-center p-8 bg-white border border-mangako-ink/10 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-pink/5 via-transparent to-transparent z-0 opacity-40"></div>
                        <div className="absolute top-12 right-12 z-20 flex flex-col items-center gap-12 group-hover:translate-x-4 transition-transform duration-[1s]">
                            <div className="w-1.5 h-64 bg-mangako-coral opacity-20 group-hover:opacity-100 transition-opacity"></div>
                            <span className="font-sans text-[8px] tracking-[0.6em] font-black text-mangako-ink/40 uppercase rotate-90 whitespace-nowrap">AUTHENTIC ARCHIVE ITEM</span>
                        </div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-[2s]">
                            {itemData?.image ? (
                                <img
                                    src={itemData.image}
                                    alt={itemData?.title}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <>
                                    <span className="font-sans text-[10px] tracking-[1em] font-black text-mangako-ink/5 uppercase translate-y-[-20%] select-none">Manga Detail Preview</span>
                                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-center">
                                        <h2 className="font-mincho text-2xl font-black text-mangako-ink tracking-widest leading-tight uppercase group-hover:scale-110 transition-transform origin-center">{itemData?.title || "Manga Detail"}</h2>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Detail Metadata editorial style */}
                    <div className="flex flex-col gap-16 lg:pl-16">
                        <div className="flex flex-col gap-8">
                            <span className="font-sans text-xs tracking-[0.4em] font-black text-mangako-coral uppercase border-b border-mangako-coral/20 pb-2 self-start">{itemData?.series || detailData?.series || "Archive Series"}</span>
                            <h1 className="font-mincho font-black text-5xl lg:text-7xl text-mangako-ink tracking-widest leading-tight">{itemData?.title || detailData?.title || "Untitled Archive"}</h1>
                            <div className="flex flex-wrap gap-4 mt-8">
                                {(detailData?.badges || []).map((badge: string, idx: number) => (
                                    <span key={idx} className="font-sans text-[10px] tracking-[0.2em] font-bold text-mangako-ink/40 border border-mangako-ink/10 px-4 py-2 uppercase">{badge}</span>
                                ))}
                            </div>
                        </div>

                        <div className="prose prose-mangako font-sans text-lg text-mangako-ink/70 font-light leading-relaxed mb-6 space-y-8">
                            {(detailData?.descTexts || []).map((text: string, idx: number) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-12 border-y border-mangako-ink/10 py-16">
                            {(detailData?.metadata || []).map((meta: any, idx: number) => (
                                <div key={idx} className="flex flex-col gap-4 border-l border-mangako-ink/5 pl-8 hover:border-mangako-coral transition-colors duration-500">
                                    <span className="font-sans text-[8px] tracking-[0.3em] font-black text-mangako-ink/30 uppercase">{meta?.label}</span>
                                    <span className="font-mincho text-xl font-bold text-mangako-ink tracking-widest italic">{meta?.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-12">
                            <SectionHeader
                                title={detailData?.provenanceTitle || "Provenance"}
                                subtitle={detailData?.provenanceSubtitle || "来歴。"}
                                className="mb-0"
                            />
                            <div className="flex flex-col gap-8 bg-mangako-cream/30 p-10 border border-mangako-ink/10">
                                {(detailData?.provenanceSteps || []).map((step: any, idx: number) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <span className="font-sans text-xs font-black text-mangako-coral border-r border-mangako-coral pr-6">{step?.date}</span>
                                        <div className="flex flex-col">
                                            <h4 className="font-mincho text-sm font-bold text-mangako-ink tracking-widest uppercase mb-1">{step?.title}</h4>
                                            <p className="font-sans text-xs text-mangako-ink/40 font-light tracking-widest leading-relaxed uppercase">{step?.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link to="/contact" className="bg-mangako-ink text-mangako-ivory px-16 py-8 text-xs font-black tracking-[0.5em] font-sans uppercase hover:bg-mangako-coral transition-all rounded-full shadow-2xl shadow-mangako-ink/30 transform hover:-translate-y-1 duration-500 mt-12 self-start inline-block text-center">
                            {detailData?.ctaInquire || "Inquire"}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related items row */}
            <section className="py-24 bg-mangako-cream/10 border-t border-mangako-ink/5">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <SectionHeader
                        title={detailData?.relatedTitle || "Related Works"}
                        subtitle={detailData?.relatedSubtitle || "関連作品。"}
                        className="mb-20 text-center"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {(detailData?.relatedItems || []).map((item: any, idx: number) => (
                            <Link key={idx} to={`/collection/${item.id || idx}`} className="block">
                                <ArchiveCard {...item} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
