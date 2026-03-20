import { useJournal } from "@/journal/context/JournalContext";
import { SectionIntro } from "../components/Cards";

export const Subscribe = () => {
  const { jt } = useJournal();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <SectionIntro title={jt("subscribe.title")} subtitle={jt("nav.subscribe")} />
      
      <p className="font-sans text-sm md:text-base text-mangako-ink/60 max-w-lg mb-8 mx-auto -mt-8 leading-relaxed">
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

      <p className="text-[10px] text-mangako-ink/40 mt-4 font-medium max-w-xs leading-relaxed">
        {jt("subscribe.privacy")}
      </p>
    </div>
  );
};
