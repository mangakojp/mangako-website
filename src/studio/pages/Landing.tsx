import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStudio } from "../context/StudioContext";
import { motion } from "framer-motion";

export const Landing = () => {
  const { st, user, signIn } = useStudio();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/studio/dashboard");
    }
  }, [user, navigate]);

  const features = st("landing.features") as any[];

  return (
    <div className="py-20 flex flex-col gap-24 font-sans text-mangako-ink">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-xs tracking-[0.3em] font-black text-mangako-coral uppercase mb-4"
        >
          Studio Tier
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mincho text-4xl md:text-5xl lg:text-6xl font-black text-mangako-ink leading-tight mb-6 tracking-widest"
        >
          {st("landing.hero")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-sm md:text-base text-mangako-ink/60 max-w-2xl leading-relaxed mb-8 font-light"
        >
          {st("landing.subhero")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <button
            onClick={signIn}
            className="bg-mangako-ink text-mangako-ivory px-8 py-4 text-xs font-black tracking-[0.2em] font-sans uppercase hover:bg-mangako-coral hover:text-mangako-ivory transition-all duration-300 rounded-none shadow-xl shadow-mangako-ink/5"
          >
            {st("landing.ctaStart")}
          </button>
          <button className="border border-mangako-ink/10 text-mangako-ink px-8 py-4 text-xs font-black tracking-[0.2em] font-sans uppercase hover:border-mangako-coral hover:text-mangako-coral transition-colors duration-300 rounded-none">
            {st("landing.ctaView")}
          </button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 bg-white/40 backdrop-blur-sm border border-mangako-ink/5 p-12">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-start text-left gap-3"
          >
            <span className="font-mincho text-2xl font-black text-mangako-coral/40">0{idx + 1}</span>
            <h3 className="font-mincho text-xl font-black text-mangako-ink tracking-widest">{feature.title}</h3>
            <p className="font-sans text-sm text-mangako-ink/60 font-light leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Manifesto/Cradled view */}
      <section className="py-20 text-center flex flex-col items-center bg-mangako-cream/20">
         <span className="font-mincho text-xl font-bold italic text-mangako-ink max-w-lg leading-relaxed">
            「描く前に、形にする。作品のはじまりを、Mangako Studioで。」
         </span>
      </section>
    </div>
  );
};
