import { Link, useLocation } from "react-router-dom";
import { useStudio } from "../context/StudioContext";
import { Globe, Menu, X, LogIn, LogOut, LayoutDashboard, PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const StudioHeader = () => {
  const { st, language, setLanguage, user, signIn, signOut } = useStudio();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "jp" ? "en" : "jp");
  };

  const navLinks = user ? [
    { href: "/studio/dashboard", label: st("nav.dashboard"), icon: LayoutDashboard },
    { href: "/studio/create", label: st("nav.create"), icon: PlusCircle }
  ] : [];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-mangako-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs font-black tracking-widest text-mangako-ink/40 hover:text-mangako-ink transition-colors uppercase">
            &larr; {st("nav.back")}
          </Link>
          <div className="h-4 w-[1px] bg-mangako-ink/10" />
          <Link to="/studio" className="flex flex-col items-start">
            <span className="font-mincho text-xl font-black tracking-widest text-mangako-ink">MANGAKO STUDIO</span>
            <span className="font-sans text-[10px] tracking-[0.2em] text-mangako-coral uppercase">
              {language === "jp" ? "クリエイター" : "Creators"}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link
                key={idx}
                to={link.href}
                className={`flex items-center gap-1.5 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all hover:text-mangako-coral ${
                  location.pathname === link.href ? "text-mangako-coral" : "text-mangako-ink/60"
                }`}
              >
                <Icon size={14} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 font-sans text-xs font-black tracking-widest border border-mangako-ink/10 px-3 py-1.5 hover:border-mangako-coral hover:text-mangako-coral transition-colors"
          >
            <Globe size={12} />
            {language === "jp" ? "EN" : "JP"}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-mangako-ink/10">
                <img src={user.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"} alt="User" className="w-full h-full object-cover" />
              </div>
              <button onClick={signOut} className="text-mangako-ink/60 hover:text-mangako-ink transition-colors">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={signIn}
              className="flex items-center gap-1.5 font-sans text-xs font-black tracking-widest bg-mangako-ink text-mangako-ivory px-4 py-2 hover:bg-mangako-coral hover:text-mangako-ivory transition-all duration-300"
            >
              <LogIn size={14} />
              {st("nav.signIn")}
            </button>
          )}

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
            className="absolute top-20 left-0 right-0 bg-white border-b border-mangako-ink/5 lg:hidden z-40"
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
