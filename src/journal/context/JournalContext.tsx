import React, { createContext, useContext } from 'react';
import { useTranslation, Language } from '@/contexts/TranslationContext';
import { journalContent, mockArticles, authors } from '../data/content';

interface JournalContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  jt: (path: string) => any;
  articles: typeof mockArticles;
  authorsList: typeof authors;
}

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export const JournalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage } = useTranslation();

  const jt = (path: string) => {
    const keys = path.split('.');
    let result: any = journalContent[language];
    for (const key of keys) {
      if (result === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <JournalContext.Provider value={{ language, setLanguage, jt, articles: mockArticles, authorsList: authors }}>
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => {
  const context = useContext(JournalContext);
  if (!context) throw new Error('useJournal must be used within a JournalProvider');
  return context;
};
