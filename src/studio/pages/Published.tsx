import { useStudio } from "../context/StudioContext";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Published = () => {
  const { st, projects } = useStudio();
  const { slug } = useParams();

  const project = projects.find(p => p.id === slug);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 font-sans text-mangako-ink">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4 max-w-md"
      >
        <div className="w-16 h-16 rounded-full bg-mangako-coral/10 flex items-center justify-center text-mangako-coral mb-4">
          <CheckCircle size={32} />
        </div>

        <h1 className="font-mincho text-3xl font-black text-mangako-ink tracking-widest leading-tight">
          {st("published.success")}
        </h1>

        <p className="font-sans text-sm text-mangako-ink/60 font-light leading-relaxed max-w-xs mx-auto mb-6">
          {st("published.subtext")}
        </p>

        {project && (
          <div className="border border-mangako-ink/5 p-4 bg-white/40 flex items-center gap-4 w-full text-left mb-6 shadow-xl shadow-mangako-ink/5">
            <div className="w-16 h-24 overflow-hidden bg-mangako-cream/10">
              <img src={project.coverImageUrl} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-mincho text-lg font-black text-mangako-ink truncate max-w-[200px]">{project.title}</h4>
              <span className="font-sans text-[10px] tracking-widest font-black text-mangako-ink/40 uppercase">
                {project.format || "One-shot"}
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-4 w-full">
          <Link
            to={`/marketplace/${slug || "new-item"}`}
            className="flex-1 bg-mangako-ink text-mangako-ivory px-6 py-4 text-xs font-black tracking-[0.2em] font-sans uppercase hover:bg-mangako-coral transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink size={14} />
            {st("published.viewManga")}
          </Link>
          <Link
            to="/studio/dashboard"
            className="flex-1 border border-mangako-ink/10 text-mangako-ink px-6 py-4 text-xs font-black tracking-[0.2em] font-sans uppercase hover:border-mangako-coral hover:text-mangako-coral transition-colors flex items-center justify-center gap-2"
          >
            {st("published.viewLibrary")}
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
