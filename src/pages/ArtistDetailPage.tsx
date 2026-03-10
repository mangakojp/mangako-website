import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { PageHero, SectionHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

export const ArtistDetailPage = () => {
    const { t } = useTranslation();
    const artistDetailData = t("artistDetail");

    return (
        <div className="bg-mangako-ivory min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32">
                <Link to="/artists" className="inline-flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-mangako-ink/10 rounded-full flex items-center justify-center group-hover:border-mangako-coral group-hover:bg-mangako-coral transition-all duration-500">
                        <span className="font-sans text-xs font-black text-mangako-ink group-hover:text-white transition-colors">←</span>
                    </div>
                    <span className="font-sans text-[10px] tracking-[0.5em] font-black text-mangako-ink/40 uppercase group-hover:text-mangako-coral transition-colors">Back to Artists</span>
                </Link>
            </div>

            <section className="pt-24 pb-32 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Artist Biography Area */}
                    <div className="flex flex-col gap-12 relative z-10 lg:pr-16 order-2 lg:order-1">
                        <SectionHeader
                            title={artistDetailData?.name || "Artist Name"}
                            subtitle={artistDetailData?.subtitle || "職人としての軌跡。"}
                        />
                        <div className="prose prose-mangako font-sans text-xl text-mangako-ink/70 font-light leading-relaxed mb-12 space-y-12">
                            {(artistDetailData?.bioTexts || []).map((text: string, idx: number) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-12 border-t border-mangako-ink/10 pt-16">
                            {(artistDetailData?.milestones || []).map((milestone: any, idx: number) => (
                                <div key={idx} className="flex flex-col gap-4 group">
                                    <span className="font-sans text-[8px] tracking-[0.4em] font-black text-mangako-ink/40 uppercase group-hover:text-mangako-coral transition-colors">{milestone?.year}</span>
                                    <h4 className="font-mincho text-xl font-bold text-mangako-ink tracking-widest italic">{milestone?.title}</h4>
                                    <p className="font-sans text-xs text-mangako-ink/40 font-light leading-relaxed uppercase tracking-widest">{milestone?.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Artist Image Surface */}
                    <div className="order-1 lg:order-2 h-[900px] bg-white border border-mangako-ink/10 relative overflow-hidden group shadow-2xl">
                        {/* Background Layer: Studio Workspace (Low Opacity) */}
                        <div className="absolute inset-0 z-0">
                            {artistDetailData?.studioImage && (
                                <img
                                    src={artistDetailData.studioImage}
                                    alt="Artist Studio"
                                    className="w-full h-full object-cover opacity-10 grayscale scale-110 group-hover:scale-100 transition-transform duration-[4s]"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-tr from-mangako-coral/5 via-transparent to-transparent"></div>
                        </div>

                        {/* Foreground Layer: Main Portrait */}
                        <div className="relative z-10 h-full flex items-center justify-center p-12">
                            {artistDetailData?.image ? (
                                <div className="relative w-full h-full border border-mangako-ink/5 p-4 bg-white shadow-xl group-hover:border-mangako-coral/30 transition-colors">
                                    <img
                                        src={artistDetailData.image}
                                        alt={artistDetailData.name}
                                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s]"
                                    />
                                    <div className="absolute top-8 right-8 flex flex-col items-end gap-2 text-white mix-blend-difference">
                                        <span className="font-sans text-[8px] tracking-[0.6em] font-black uppercase">Archive Ref 082</span>
                                        <div className="w-16 h-px bg-white"></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-center">
                                    <span className="font-sans text-[10px] tracking-[0.8em] font-black text-mangako-ink/10 uppercase mb-20 select-none transform -rotate-90 group-hover:scale-110 transition-transform">CREATOR ARCHIVE PORTRAIT</span>
                                    <div className="w-1.5 h-64 bg-mangako-coral opacity-20 group-hover:opacity-100 transition-opacity"></div>
                                    <h2 className="font-mincho text-[7rem] lg:text-[9rem] font-black text-mangako-ink/5 tracking-widest translate-y-[-50%] select-none">{artistDetailData?.name || "Archive"}</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery context section */}
            <section className="py-24 bg-white border-y border-mangako-ink/5 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-10">
                    <span className="text-mangako-coral/40 text-[10rem] font-mincho mb-8 leading-none select-none opacity-20">“</span>
                    <blockquote className="font-mincho text-3xl lg:text-5xl text-mangako-ink tracking-widest leading-relaxed mb-16 italic max-w-5xl">
                        {artistDetailData?.keyQuote || "書かれた線の一本一本には、物語が宿っている。"}
                    </blockquote>
                    <cite className="font-sans text-sm tracking-[0.6em] font-black text-mangako-ink/40 uppercase not-italic">
                        Curator Note 032-B
                    </cite>
                </div>
                <div className="absolute inset-0 bg-mangako-cream/10 z-0"></div>
            </section>
        </div>
    );
};
