import { Link, useLocation } from "react-router-dom";
import { useJournal } from "@/journal/context/JournalContext";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const JournalHeader = () => {
  const { jt, language, setLanguage } = useJournal();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "jp" ? "en" : "jp");
  };

  const navLinks = [
    { href: "/journal", label: jt("nav.latest") },
    { href: "/journal/category/edition-studies", label: jt("nav.edition") },
    { href: "/journal/category/collector-notes", label: jt("nav.notes") },
    { href: "/journal/category/artist-studies", label: jt("nav.artist") },
    { href: "/journal/category/archive-theory", label: jt("nav.archive") },
    { href: "/journal/subscribe", label: jt("nav.subscribe") }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-mangako-ivory/80 border-b border-mangako-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs font-black tracking-widest text-mangako-ink/40 hover:text-mangako-ink transition-colors uppercase">
            &larr; {jt("nav.back")}
          </Link>
          <div className="h-4 w-[1px] bg-mangako-ink/10" />
          <Link to="/journal" className="flex flex-col items-start">
            <span className="font-mincho text-xl font-black tracking-widest text-mangako-ink">MANGAKO JOURNAL</span>
            <span className="font-sans text-[10px] tracking-[0.2em] text-mangako-coral uppercase">
              {language === "jp" ? "エディトリアル" : "Editorial"}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className={`font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all hover:text-mangako-coral ${
                location.pathname === link.href ? "text-mangako-coral" : "text-mangako-ink/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 font-sans text-xs font-black tracking-widest border border-mangako-ink/10 px-3 py-1.5 hover:border-mangako-coral hover:text-mangako-coral transition-colors"
          >
            <Globe size={12} />
            {language === "jp" ? "EN" : "JP"}
          </button>

          <button className="lg:hidden text-mangako-ink" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 bg-mangako-ivory border-b border-mangako-ink/5 lg:hidden z-40"
          >
            <nav className="flex flex-col py-6 px-6 gap-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-sm tracking-[0.1em] uppercase font-bold ${
                    location.pathname === link.href ? "text-mangako-coral" : "text-mangako-ink/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
