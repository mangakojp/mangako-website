import { useJournal } from "@/journal/context/JournalContext";
import { Link } from "react-router-dom";

export const Archive = () => {
  const { articles, language } = useJournal();

  return (
    <div className="py-20 flex flex-col gap-12 font-sans text-mangako-ink">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-mincho text-4xl font-black text-mangako-ink mb-2 tracking-widest">
          {language === "jp" ? "アーカイブ一覧" : "Archive Index"}
        </h1>
        <p className="font-sans text-xs tracking-widest font-black text-mangako-coral uppercase">
          Full Catalog of Essays
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col border-t border-mangako-ink/10">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/journal/article/${article.slug}`}
            className="group flex justify-between items-center py-6 border-b border-mangako-ink/5 hover:bg-mangako-cream/10 px-4 transition-colors duration-300"
          >
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] tracking-widest font-black text-mangako-coral uppercase">
                {article.category.replace("-", " ")}
              </span>
              <h2 className="font-mincho text-lg md:text-xl font-bold text-mangako-ink group-hover:text-mangako-coral transition-colors">
                {article.title[language]}
              </h2>
            </div>
            <div className="font-sans text-xs tracking-widest font-bold text-mangako-ink/30 uppercase">
              {article.date}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
