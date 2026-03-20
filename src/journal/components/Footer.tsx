import { Link } from "react-router-dom";
import { useJournal } from "@/journal/context/JournalContext";

export const JournalFooter = () => {
  const { jt, language } = useJournal();

  return (
    <footer className="bg-mangako-ivory border-t border-mangako-ink/5 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 font-sans text-mangako-ink/70">
        <div className="flex flex-col gap-4">
          <Link to="/journal" className="flex flex-col items-start">
            <span className="font-mincho text-xl font-black tracking-widest text-mangako-ink">MANGAKO JOURNAL</span>
            <span className="font-sans text-[10px] tracking-[0.2em] text-mangako-coral uppercase">
              {language === "jp" ? "エディトリアル" : "Editorial"}
            </span>
          </Link>
          <p className="text-xs font-light leading-relaxed max-w-xs mt-2">
            {language === "jp"
              ? "マンガを作品、印刷物、文化資産として見つめるためのエディトリアル。"
              : "An editorial publication devoted to viewing manga as work, print object, and cultural asset."}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs tracking-widest uppercase text-mangako-coral mb-2">Categories</span>
          <Link to="/journal/category/edition-studies" className="text-sm hover:text-mangako-coral transition-colors">{jt("nav.edition")}</Link>
          <Link to="/journal/category/collector-notes" className="text-sm hover:text-mangako-coral transition-colors">{jt("nav.notes")}</Link>
          <Link to="/journal/category/artist-studies" className="text-sm hover:text-mangako-coral transition-colors">{jt("nav.artist")}</Link>
          <Link to="/journal/category/archive-theory" className="text-sm hover:text-mangako-coral transition-colors">{jt("nav.archive")}</Link>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs tracking-widest uppercase text-mangako-coral mb-2">Quick Links</span>
          <Link to="/journal/about" className="text-sm hover:text-mangako-coral transition-colors">About the Journal</Link>
          <Link to="/journal/archive" className="text-sm hover:text-mangako-coral transition-colors">Archive Index</Link>
          <Link to="/journal/subscribe" className="text-sm hover:text-mangako-coral transition-colors">Newsletter</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-mangako-ink/5 mt-12 pt-6 flex justify-between items-center text-xs text-mangako-ink/40">
        <span>&copy; {new Date().getFullYear()} Mangako Journal. All rights reserved.</span>
        <span>Curated Collectibles Archive.</span>
      </div>
    </footer>
  );
};
