import { Link } from "react-router-dom";
import { useJournal } from "@/journal/context/JournalContext";
import { motion } from "framer-motion";

export const CategoryPill = ({ id }: { id: string }) => {
  const { jt } = useJournal();
  return (
    <Link
      to={`/journal/category/${id}`}
      className="inline-block text-[10px] tracking-[0.3em] font-black text-mangako-coral uppercase border border-mangako-coral px-3 py-1 mb-4 hover:bg-mangako-coral hover:text-mangako-ivory transition-all duration-300"
    >
      {jt(`categories.${id}`)}
    </Link>
  );
};

export const MetadataRow = ({ author, date, readingTime }: { author: string; date: string; readingTime: string }) => {
  return (
    <div className="flex items-center gap-4 font-sans text-[11px] tracking-widest text-mangako-ink/40 font-bold uppercase">
      <span>By {author}</span>
      <div className="h-3 w-[1px] bg-mangako-ink/10" />
      <span>{date}</span>
      <div className="h-3 w-[1px] bg-mangako-ink/10" />
      <span>{readingTime}</span>
    </div>
  );
};

export const LargeFeaturedCard = ({ article }: { article: any }) => {
  const { language, jt } = useJournal();
  const title = article.title[language];
  const excerpt = article.excerpt[language];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group">
      <div className="lg:col-span-7 h-[600px] overflow-hidden bg-mangako-cream/30 border border-mangako-ink/5 relative">
        <img
          src={article.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out-quint"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-mangako-ivory/20 to-transparent"></div>
      </div>

      <div className="lg:col-span-5 flex flex-col items-start text-left">
        <CategoryPill id={article.category} />
        <h2 className="font-mincho text-3xl md:text-5xl font-black text-mangako-ink mt-2 mb-4 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="font-sans text-sm md:text-base text-mangako-ink/60 font-light leading-relaxed mb-6 border-l-2 border-mangako-coral/30 pl-6">
          {excerpt}
        </p>
        <MetadataRow author={article.author} date={article.date} readingTime={article.readingTime} />
        <Link
          to={`/journal/article/${article.slug}`}
          className="mt-8 bg-mangako-ink text-mangako-ivory px-10 py-4 text-xs font-black tracking-[0.2em] font-sans uppercase hover:bg-mangako-coral hover:text-mangako-ivory transition-all duration-500 rounded-full"
        >
          {jt("hero.read")}
        </Link>
      </div>
    </div>
  );
};

export const EssayCard = ({ article, idx }: { article: any; idx: number }) => {
  const { language } = useJournal();
  const title = article.title[language];
  const excerpt = article.excerpt[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      className="group flex flex-col items-start"
    >
      <Link to={`/journal/article/${article.slug}`} className="block w-full">
        <div className="aspect-[16/10] w-full bg-white border border-mangako-ink/5 mb-6 relative overflow-hidden">
          <img
            src={article.image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out-quint"
          />
        </div>
        <CategoryPill id={article.category} />
        <h3 className="font-mincho text-2xl font-black text-mangako-ink mb-3 tracking-widest leading-snug group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h3>
        <p className="font-sans text-sm text-mangako-ink/50 font-light leading-relaxed mb-4 line-clamp-2">
          {excerpt}
        </p>
        <MetadataRow author={article.author} date={article.date} readingTime={article.readingTime} />
      </Link>
    </motion.div>
  );
};

export const NoteCard = ({ article, idx }: { article: any; idx: number }) => {
  const { language } = useJournal();
  const title = article.title[language];
  const excerpt = article.excerpt[language];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.05 }}
      className="bg-mangako-cream/20 border border-mangako-ink/5 p-6 hover:border-mangako-coral/30 transition-colors duration-500 flex flex-col group justify-between h-full"
    >
      <Link to={`/journal/article/${article.slug}`} className="flex flex-col h-full justify-between">
        <div>
          <span className="font-sans text-[9px] tracking-[0.2em] font-black text-mangako-ink/40 uppercase mb-2 block">
            Note #{idx + 101}
          </span>
          <h4 className="font-mincho text-xl font-black text-mangako-ink mb-2 group-hover:text-mangako-coral transition-colors">
            {title}
          </h4>
          <p className="font-sans text-xs text-mangako-ink/60 font-light leading-relaxed">
            {excerpt}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-mangako-ink/5 text-[10px] tracking-widest font-black text-mangako-ink/30 uppercase">
          {article.date}
        </div>
      </Link>
    </motion.div>
  );
};

export const SectionIntro = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      {subtitle && (
        <span className="font-sans text-xs tracking-[0.3em] font-black text-mangako-coral uppercase mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="font-mincho text-3xl md:text-4xl font-black text-mangako-ink tracking-widest relative">
        {title}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-mangako-coral" />
      </h2>
    </div>
  );
};
