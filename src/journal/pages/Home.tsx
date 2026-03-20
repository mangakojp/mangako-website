import { useJournal } from "@/journal/context/JournalContext";
import { LargeFeaturedCard, EssayCard, NoteCard, SectionIntro } from "../components/Cards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  const { jt, articles } = useJournal();
  
  const featuredArticle = articles.find(a => a.featured) || articles[0];
  const essays = articles.filter(a => !a.featured).slice(0, 3);
  const notes = articles.filter(a => a.category === "collector-notes").slice(0, 4);

  return (
    <div className="py-20 flex flex-col gap-24 font-sans text-mangako-ink">
      {/* Featured Block */}
      <section className="max-w-7xl mx-auto px-6">
        <LargeFeaturedCard article={featuredArticle} />
      </section>

      {/* Categories Fast Links */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["edition-studies", "collector-notes", "artist-studies", "archive-theory"].map((cat, idx) => (
          <Link
            key={idx}
            to={`/journal/category/${cat}`}
            className="group flex flex-col p-6 border border-mangako-ink/5 bg-mangako-cream/10 hover:border-mangako-coral/30 hover:scale-[1.02] transition-all duration-300"
          >
            <span className="font-mincho text-xl font-black text-mangako-ink mb-2 group-hover:text-mangako-coral">
              {jt(`categories.${cat}`)}
            </span>
            <span className="text-[10px] tracking-widest font-black text-mangako-ink/40 uppercase">Explore Essays</span>
          </Link>
        ))}
      </section>

      {/* Latest Essays Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <SectionIntro title="Latest Essays" subtitle="最新の考察" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {essays.map((article, idx) => (
            <EssayCard key={article.slug} article={article} idx={idx} />
          ))}
        </div>
      </section>

      {/* Manifesto Banner */}
      <section className="bg-mangako-ink py-24 text-mangako-ivory text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-coral/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-4 items-center">
          <p className="font-mincho text-2xl md:text-3xl font-black tracking-widest mb-2 leading-relaxed">
            {jt("manifesto.text")}
          </p>
          <span className="font-sans text-xs tracking-[0.4em] font-black text-mangako-coral uppercase">
            {jt("manifesto.subtext")}
          </span>
        </div>
      </section>

      {/* Collector Notes Section */}
      <section className="max-w-7xl mx-auto px-6">
        <SectionIntro title="Collector Notes" subtitle={jt("nav.notes")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {notes.map((article, idx) => (
            <NoteCard key={article.slug} article={article} idx={idx} />
          ))}
        </div>
      </section>

      {/* Elegant Subscribe Banner */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center flex flex-col items-center bg-mangako-cream/10 border border-mangako-ink/5 rounded-none">
        <SectionIntro title={jt("subscribe.title")} subtitle={jt("nav.subscribe")} />
        <p className="text-sm font-light leading-relaxed text-mangako-ink/60 max-w-lg mb-8">
          {jt("subscribe.desc")}
        </p>
        <div className="flex w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="email@example.com"
            className="flex-1 bg-mangako-ivory border border-mangako-ink/10 px-4 py-3 text-xs tracking-widest text-mangako-ink font-bold focus:outline-none focus:border-mangako-coral"
          />
          <button className="bg-mangako-ink text-mangako-ivory px-6 py-3 text-xs tracking-widest font-black uppercase hover:bg-mangako-coral hover:text-mangako-ivory transition-all">
            {jt("subscribe.button")}
          </button>
        </div>
        <p className="text-[10px] text-mangako-ink/40 mt-3 font-medium">{jt("subscribe.privacy")}</p>
      </section>
    </div>
  );
};
