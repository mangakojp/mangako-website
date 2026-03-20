import { useStudio } from "../context/StudioContext";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircle, FileText, Globe, Eye } from "lucide-react";
import { motion } from "framer-motion";

export const Dashboard = () => {
  const { st, user, projects, loading } = useStudio();
  const navigate = useNavigate();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center font-sans">Loading Dashboard...</div>;
  }

  if (!user) {
    navigate("/studio");
    return null;
  }

  const publishedCount = projects.filter(p => p.status === "published").length;
  const draftCount = projects.filter(p => p.status !== "published").length;

  return (
    <div className="py-20 flex flex-col gap-12 font-sans text-mangako-ink max-w-7xl mx-auto px-6">
      {/* Welcome Block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-mangako-ink/5 pb-8">
        <div>
          <h1 className="font-mincho text-3xl md:text-4xl font-black text-mangako-ink tracking-widest mb-1">
            {st("dashboard.welcome")}{user.displayName || "Creator Panel"}
          </h1>
          <p className="font-sans text-xs tracking-widest font-black text-mangako-coral uppercase">
            Workspace
          </p>
        </div>
        <Link
          to="/studio/create"
          className="bg-mangako-ink text-mangako-ivory px-6 py-4 text-xs font-black tracking-[0.2em] font-sans uppercase hover:bg-mangako-coral hover:text-mangako-ivory transition-all duration-300 flex items-center gap-2"
        >
          <PlusCircle size={14} />
          {st("dashboard.newManga")}
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: st("dashboard.stats.drafts"), value: draftCount, icon: FileText },
          { label: st("dashboard.stats.published"), value: publishedCount, icon: Globe },
          { label: st("dashboard.stats.views"), value: "0", icon: Eye }
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white/40 border border-mangako-ink/5 p-6 flex flex-col gap-2 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-mangako-coral font-bold text-xs uppercase tracking-widest">
                <Icon size={14} />
                <span>{stat.label}</span>
              </div>
              <span className="font-mincho text-3xl font-black text-mangako-ink">{stat.value}</span>
            </div>
          );
        })}
      </div>

      {/* Recent Projects list */}
      <div className="flex flex-col gap-6">
        <h2 className="font-mincho text-xl font-black tracking-widest text-mangako-ink">
          {st("dashboard.recentProjects")}
        </h2>

        {projects.length === 0 ? (
          <div className="border border-mangako-ink/5 p-16 text-center text-mangako-ink/40 font-bold text-sm bg-white/40">
            {st("dashboard.noProjects")}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/40 border border-mangako-ink/5 hover:border-mangako-coral/40 transition-all duration-300 flex flex-col group overflow-hidden pointer-events-auto"
              >
                <Link to={`/studio/project/${project.id}`} className="flex flex-col h-full justify-between">
                  <div className="aspect-[3/4] overflow-hidden bg-mangako-cream/30 relative">
                    <img
                      src={project.coverImageUrl || "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-mangako-ink/80 text-mangako-ivory text-[8px] tracking-[0.2em] font-black px-2 py-1 uppercase rounded-none backdrop-blur-md">
                      {project.status === "published" ? "Live" : "Draft"}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-1 border-t border-mangako-ink/5 bg-white/80">
                    <h3 className="font-mincho text-lg font-black text-mangako-ink truncate group-hover:text-mangako-coral transition-colors">
                      {project.title || "Untitled Project"}
                    </h3>
                    <div className="flex justify-between items-center text-[10px] tracking-widest font-black text-mangako-ink/40 uppercase">
                      <span>{project.format || "One-shot"}</span>
                      <span>{new Date(project.updatedAt || Date.now()).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
