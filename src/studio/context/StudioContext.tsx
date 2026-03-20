import React, { createContext, useContext, useState, useEffect } from "react";
import { studioService } from "../services/firebase";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { studioContent } from "../data/content";

interface StudioContextType {
  user: any | null;
  loading: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
  st: (path: string) => any;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  projects: any[];
  loadProjects: () => Promise<void>;
  saveProject: (projectData: any) => Promise<any>;
  publishProject: (projectId: string, listingData: any) => Promise<any>;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export const StudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage } = useTranslation();
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);

  // Standard listener configuring auth states wrappers
  useEffect(() => {
    const checkUser = () => {
      const mockUser = localStorage.getItem("mangako-mock-user");
      if (mockUser) setUser(JSON.parse(mockUser));
      else setUser(null);
      setLoading(false);
    };

    checkUser();
    
    // Simulate auth state tracking manually
    const interval = setInterval(checkUser, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (user) loadProjects();
  }, [user]);

  const st = (path: string) => {
    const keys = path.split(".");
    let result: any = studioContent[language];
    for (const key of keys) {
      if (result === undefined) return path;
      result = result[key];
    }
    return result;
  };

  const signIn = async () => {
    try {
      setLoading(true);
      const authenticatedUser = await studioService.signIn();
      setUser(authenticatedUser);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await studioService.logOut();
    setUser(null);
  };

  const loadProjects = async () => {
    if (!user) return;
    const projs = await studioService.getProjects(user.uid);
    setProjects(projs);
  };

  const saveProject = async (projectData: any) => {
    if (!user) return;
    const proj = await studioService.saveProject(user.uid, projectData);
    await loadProjects();
    return proj;
  };

  const publishProject = async (projectId: string, listingData: any) => {
    if (!user) return;
    const pub = await studioService.publishProject(user.uid, projectId, listingData);
    await loadProjects();
    return pub;
  };

  return (
    <StudioContext.Provider
      value={{
        user,
        loading,
        language,
        setLanguage,
        st,
        signIn,
        signOut,
        projects,
        loadProjects,
        saveProject,
        publishProject
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => {
  const context = useContext(StudioContext);
  if (!context) throw new Error("useStudio must be used within a StudioProvider");
  return context;
};
