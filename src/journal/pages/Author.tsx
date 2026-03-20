import { useParams, Link } from "react-router-dom";
import { useJournal } from "@/journal/context/JournalContext";
import { EssayCard, SectionIntro } from "../components/Cards";

export const Author = () => {
  const { slug } = useParams();
  const { authorsList, articles, language } = useJournal();
  
  const author = authorsList.find(a => a.slug === slug);
  const authorArticles = articles.filter(a => a.author.toLowerCase().includes(slug?.split('-')[1] || ''));

  if (!author) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-mincho text-4xl font-black text-mangako-ink mb-4">404</h1>
        <p className="font-sans text-sm text-mangako-ink/40 mb-8">Author not found.</p>
        <Link to="/journal" className="bg-mangako-ink text-mangako-ivory px-6 py-3 text-xs tracking-widest font-black uppercase">
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 flex flex-col gap-16 font-sans text-mangako-ink">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border border-mangako-ink/10 mb-6 drop-shadow-md">
          <img src={author.image} alt={author.name[language]} className="w-full h-full object-cover" />
        </div>
        
        <span className="font-sans text-xs tracking-[0.3em] font-black text-mangako-coral uppercase mb-2">
          {author.role[language]}
        </span>

        <h1 className="font-mincho text-4xl font-black text-mangako-ink tracking-widest leading-tight mb-4">
          {author.name[language]}
        </h1>

        <p className="font-sans text-sm md:text-base text-mangako-ink/60 font-light max-w-lg leading-relaxed">
          {author.bio[language]}
        </p>
      </div>

      {/* Author's Articles */}
      {authorArticles.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionIntro title="Essays & Notes" subtitle="Published Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 -mt-10">
            {authorArticles.map((article, idx) => (
              <EssayCard key={article.slug} article={article} idx={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
