import { useParams, Link } from "react-router-dom";
import { useJournal } from "@/journal/context/JournalContext";
import { EssayCard, NoteCard, SectionIntro } from "../components/Cards";

export const Category = () => {
  const { slug } = useParams();
  const { articles, jt, language } = useJournal();

  const categoryName = jt(`categories.${slug}`);
  const filteredArticles = articles.filter(a => a.category === slug);

  if (!categoryName || filteredArticles.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-mincho text-4xl font-black text-mangako-ink mb-4">Empty</h1>
        <p className="font-sans text-sm text-mangako-ink/40 mb-8">No articles found in this category.</p>
        <Link to="/journal" className="bg-mangako-ink text-mangako-ivory px-6 py-3 text-xs tracking-widest font-black uppercase">
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 flex flex-col gap-16">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="font-sans text-xs tracking-[0.3em] font-black text-mangako-coral uppercase mb-2">
          Category
        </span>
        <h1 className="font-mincho text-4xl md:text-5xl lg:text-6xl font-black text-mangako-ink leading-tight mb-4 tracking-widest relative">
          {categoryName}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-mangako-coral" />
        </h1>
        <p className="font-sans text-sm md:text-base text-mangako-ink/50 leading-relaxed font-light max-w-xl mt-6">
          {language === "jp"
            ? "このカテゴリーでは、マンガを作品・印刷物・文化資産として考察する様々な記事を厳選しています。"
            : "Explore select essays for managing, researching, and viewing manga as institutional art assets."}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        {slug === "collector-notes" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <NoteCard key={article.slug} article={article} idx={idx} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredArticles.map((article, idx) => (
              <EssayCard key={article.slug} article={article} idx={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
