import { useJournal } from "@/journal/context/JournalContext";
import { NoteCard, SectionIntro } from "../components/Cards";

export const Notes = () => {
  const { articles, jt } = useJournal();
  const notes = articles.filter(a => a.category === "collector-notes");

  return (
    <div className="py-20 flex flex-col gap-12 font-sans text-mangako-ink">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionIntro title={jt("nav.notes")} subtitle="Notes & Fragments" />
        <p className="font-sans text-sm md:text-base text-mangako-ink/50 leading-relaxed font-light max-w-xl mx-auto -mt-10 mb-12">
          Short-form entries, preservation fragments, and tactical observations concerning physical archives.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes.map((article, idx) => (
            <NoteCard key={article.slug} article={article} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
