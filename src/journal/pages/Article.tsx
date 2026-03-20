import { useParams, Link } from "react-router-dom";
import { useJournal } from "@/journal/context/JournalContext";
import { CategoryPill, MetadataRow } from "../components/Cards";
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

export const Article = () => {
  const { slug } = useParams();
  const { articles, language } = useJournal();
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-mincho text-4xl font-black text-mangako-ink mb-4">404</h1>
        <p className="font-sans text-sm text-mangako-ink/40 mb-8">Article not found.</p>
        <Link to="/journal" className="bg-mangako-ink text-mangako-ivory px-6 py-3 text-xs tracking-widest font-black uppercase">
          Back to Journal
        </Link>
      </div>
    );
  }

  const title = article.title[language];
  const excerpt = article.excerpt[language];
  const body = (article as any).body ? (article as any).body[language] : (language === 'jp' ? "本文は現在、編集チームによって校正中です。" : "The full content of this essay is currently being finalized by our editorial team.");

  return (
    <article className="py-16 md:py-24">
      {/* Article Hero */}
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center mb-16">
        <CategoryPill id={article.category} />
        
        <h1 className="font-mincho text-3xl md:text-5xl lg:text-6xl font-black text-mangako-ink leading-tight mt-4 mb-6 tracking-tight">
          {title}
        </h1>

        <p className="font-sans text-lg md:text-xl font-light text-mangako-ink/60 max-w-2xl leading-relaxed mb-8">
          {excerpt}
        </p>

        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2 font-sans text-xs tracking-widest text-mangako-ink/50 font-bold uppercase">
            <User size={14} className="text-mangako-coral" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2 font-sans text-xs tracking-widest text-mangako-ink/50 font-bold uppercase">
            <Calendar size={14} className="text-mangako-coral" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2 font-sans text-xs tracking-widest text-mangako-ink/50 font-bold uppercase">
            <Clock size={14} className="text-mangako-coral" />
            <span>{article.readingTime} Reading</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mb-16 h-[500px] md:h-[600px] relative">
        <img
          src={article.image}
          alt={title}
          className="w-full h-full object-cover border border-mangako-ink/5"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 font-sans text-base md:text-lg text-mangako-ink/80 leading-relaxed flex flex-col gap-8">
        <p className="font-bold text-xl text-mangako-ink leading-relaxed first-letter:text-5xl first-letter:font-mincho first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-mangako-coral">
          {body}
        </p>
        <p>
          {language === "jp" 
            ? "マンガの所有、その体験、そして時間。紙のインク、当時の製造技術、それらのすべてが、今ここにいる自分を物語へ沈めていく。読書体験の背景にあるこれらの中立的な、静かなオブジェクトをどう保存するか、コレクターを悩ませる。私たちは、これらに向き合っていかなければいけない。それ自体の美しさを、次の世代へ。"
            : "The absolute weight of ink saturation on early volumes, the calibration of industrial print speeds, and the ambient temperature of 1980s press loops. These aren't simply medium defects; they are environmental factors containing the exact visual resonance of an era of authorship."}
        </p>
        <blockquote className="my-8 border-l-4 border-mangako-coral pl-8 font-mincho text-2xl font-black text-mangako-ink italic leading-relaxed py-4 bg-mangako-cream/10">
          {language === "jp"
            ? "「物理的なマンガは、時の流れに対する抵抗である。」"
            : "“Physical manga is a form of resistance against the flow of time.”"}
        </blockquote>
        <p>
          {language === "jp"
            ? "このエッセイは、版の差異とその蒐集をテーマにしている。来歴、真贋確認、そして流動性。これらは単なるマーケットの言葉ではなく、マンガを文化遺産として評価するための重要な評価軸として機能するように、私たちはエディトリアルの視点を持ち続けなければならない。"
            : "This detailed review of material culture pushes beyond default nostalgia. To establish collectors' guilds properly, the frame variables—edition, provenance, and restoration ethics—must remain elevated above corporate content channels."}
        </p>
      </div>

      {/* Author Bio Section */}
      <div className="max-w-3xl mx-auto px-6 mt-20 pt-12 border-t border-mangako-ink/5 flex items-center gap-6">
        <div className="w-16 h-16 rounded-full overflow-hidden border border-mangako-ink/10">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt={article.author} className="w-full h-full object-cover"/>
        </div>
        <div>
          <span className="font-mincho text-xl font-black text-mangako-ink block mb-1">
            {article.author}
          </span>
          <p className="font-sans text-sm text-mangako-ink/50 leading-relaxed max-w-lg">
            {language === 'jp' 
              ? 'Mangako Journalのエディトリアルチーム、または定期寄稿者。文化としてのマンガの研究を行う。'
              : 'Editorial contributor for Mangako Journal. Focusing on manga as a cultural and material object.'}
          </p>
        </div>
      </div>
    </article>
  );
};
