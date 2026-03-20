import { useJournal } from "@/journal/context/JournalContext";
import { SectionIntro } from "../components/Cards";

export const About = () => {
  const { jt, language } = useJournal();

  return (
    <div className="py-20 flex flex-col gap-12 font-sans text-mangako-ink text-center items-center">
      <SectionIntro title={jt("about.title")} subtitle="Philosophy" />
      
      <div className="max-w-3xl mx-auto px-6 text-base md:text-lg leading-relaxed text-mangako-ink/80 flex flex-col gap-8 text-left">
        <p className="font-bold text-xl text-mangako-ink leading-relaxed">
          {jt("about.p1")}
        </p>
        <p>
          {jt("about.p2")}
        </p>
        <p>
          {jt("about.p3")}
        </p>
        
        <blockquote className="my-8 border-l-4 border-mangako-coral pl-8 font-mincho text-2xl font-black text-mangako-ink italic leading-relaxed py-4 bg-mangako-cream/10">
          {language === "jp"
            ? "マンガは、私たちが共有した記憶の断片であり、未来に託されるべき遺産である。"
            : "Manga is a fragment of our shared memory, a legacy meant to be entrusted to the future."}
        </blockquote>

        <p>
          {language === "jp"
            ? "私たちは、単なるマンガのプラットフォームではなく、コレクターによる、コレクターのための「知の集積地」を目指しています。"
            : "We aim to not only build a commerce layer, but to host an ecosystem for preserving the fine art values of sequenced panels."}
        </p>
      </div>
    </div>
  );
};
