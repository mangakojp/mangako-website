import { useState, useEffect } from "react";
import { useStudio } from "../context/StudioContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowLeft, CheckCircle, Loader } from "lucide-react";

export const Create = () => {
  const { st, saveProject, publishProject } = useStudio();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form states mapping node
  const [formData, setFormData] = useState({
    id: `proj-${Date.now()}`,
    title: "",
    concept: "",
    genres: [] as string[],
    tone: "",
    format: "One-shot",
    style: "Cinematic",
    pageCount: "16",
    color: "Black & White",
    description: "",
    tags: "",
    visibility: "Public",
    coverImageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200",
    status: "draft"
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4); // Skip step 3 animation automatically
      }, 3000);
      setStep(3);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePublish = async () => {
    setLoading(true);
    try {
      // Save current status in sub-services node safely
      const saveResponse = await saveProject({ ...formData, status: "published" });
      await publishProject(saveResponse.id, formData);
      navigate(`/studio/published/${saveResponse.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const stepsList = st("create.stepper") as string[];

  return (
    <div className="py-20 max-w-4xl mx-auto px-6 font-sans text-mangako-ink flex flex-col gap-12">
      {/* Stepper Header */}
      <div className="flex items-center justify-between border-b border-mangako-ink/5 pb-6">
        {stepsList.map((label, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border ${
                step > idx + 1
                  ? "bg-mangako-coral border-mangako-coral text-white"
                  : step === idx + 1
                  ? "border-mangako-coral text-mangako-coral"
                  : "border-mangako-ink/20 text-mangako-ink/40"
              }`}
            >
              {step > idx + 1 ? <CheckCircle size={12} /> : idx + 1}
            </span>
            <span
              className={`text-xs font-black tracking-widest uppercase ${
                step >= idx + 1 ? "text-mangako-ink" : "text-mangako-ink/40"
              }`}
            >
              {label}
            </span>
            {idx < stepsList.length - 1 && <ChevronRight size={14} className="text-mangako-ink/20 ml-2" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
            <h2 className="font-mincho text-2xl font-black">{st("create.step1.title")}</h2>
            <p className="text-sm text-mangako-ink/50">{st("create.step1.desc")}</p>

            <div className="flex flex-col gap-4 mt-4">
              <label className="text-xs font-black uppercase tracking-widest">{st("create.step1.titleLabel")}</label>
              <input value={formData.title} onChange={e => updateField("title", e.target.value)} type="text" placeholder="Title..." className="p-3 bg-white border border-mangako-ink/10 focus:outline-none focus:border-mangako-coral font-sans text-sm" />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-xs font-black uppercase tracking-widest">{st("create.step1.conceptLabel")}</label>
              <textarea value={formData.concept} onChange={e => updateField("concept", e.target.value)} rows={4} placeholder="Concept..." className="p-3 bg-white border border-mangako-ink/10 focus:outline-none focus:border-mangako-coral font-sans text-sm" />
            </div>

            <button onClick={handleNext} disabled={!formData.title} className="bg-mangako-ink text-mangako-ivory px-6 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-mangako-coral disabled:bg-mangako-ink/40 disabled:pointer-events-none transition-all self-end">
              {st("create.step1.next")}
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
            <h2 className="font-mincho text-2xl font-black">{st("create.step2.title")}</h2>
            <p className="text-sm text-mangako-ink/50">{st("create.step2.desc")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-widest">{st("create.step2.formatLabel")}</label>
                <div className="flex flex-col gap-2">
                  {(st("create.step2.formats") as string[]).map(format => (
                    <button key={format} onClick={() => updateField("format", format)} className={`p-3 text-left border ${formData.format === format ? "border-mangako-coral bg-mangako-coral/5 text-mangako-coral" : "border-mangako-ink/10"} text-sm`}>
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-widest">{st("create.step2.styleLabel")}</label>
                <div className="flex flex-col gap-2">
                  {(st("create.step2.styles") as string[]).map(style => (
                    <button key={style} onClick={() => updateField("style", style)} className={`p-3 text-left border ${formData.style === style ? "border-mangako-coral bg-mangako-coral/5 text-mangako-coral" : "border-mangako-ink/10"} text-sm`}>
                      {style}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={handleNext} className="bg-mangako-ink text-mangako-ivory px-6 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-mangako-coral transition-all self-end">
              {st("create.step2.next")}
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-[40vh] flex flex-col items-center justify-center text-center gap-6">
            <Loader size={48} className="text-mangako-coral animate-spin" />
            <h2 className="font-mincho text-2xl font-black">{st("create.step3.title")}</h2>
            <p className="text-sm text-mangako-ink/50 max-w-xs">{st("create.step3.desc")}</p>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
            <h2 className="font-mincho text-2xl font-black">{st("create.step4.title")}</h2>
            <p className="text-sm text-mangako-ink/50">{st("create.step4.desc")}</p>

            <div className="flex flex-col gap-4 mt-4">
              <label className="text-xs font-black uppercase tracking-widest">{st("create.step4.descLabel")}</label>
              <textarea value={formData.description} onChange={e => updateField("description", e.target.value)} rows={4} placeholder="Description..." className="p-3 bg-white border border-mangako-ink/10 focus:outline-none focus:border-mangako-coral font-sans text-sm" />
            </div>

            <button onClick={handleNext} className="bg-mangako-ink text-mangako-ivory px-6 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-mangako-coral transition-all self-end">
              {st("create.step4.next")}
            </button>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
            <h2 className="font-mincho text-2xl font-black">{st("create.step5.title")}</h2>
            <p className="text-sm text-mangako-ink/50">{st("create.step5.desc")}</p>

            <div className="border border-mangako-ink/5 p-6 bg-white/40 flex flex-col md:flex-row gap-6 mt-4">
              <div className="w-32 h-44 bg-mangako-cream/30 overflow-hidden">
                <img src={formData.coverImageUrl} alt={formData.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-mincho text-xl font-black text-mangako-ink mb-1">{formData.title}</h3>
                  <p className="font-sans text-xs text-mangako-ink/60 line-clamp-2">{formData.concept}</p>
                </div>
                <div className="flex gap-4 text-[10px] tracking-widest font-black uppercase text-mangako-ink/40">
                  <span>{formData.format}</span>
                  <span>{formData.style}</span>
                </div>
              </div>
            </div>

            <button onClick={handlePublish} disabled={loading} className="bg-mangako-coral text-mangako-ivory px-6 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-mangako-coral/90 disabled:opacity-50 disabled:pointer-events-none transition-all self-end flex items-center gap-2">
              {loading && <Loader size={14} className="animate-spin" />}
              {st("create.step5.publish")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
