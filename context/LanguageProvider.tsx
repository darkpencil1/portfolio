"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "fi";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang") as Lang | null;
      if (stored) setLang(stored);
    } catch (e) {
      // ignore (e.g., SSR or disabled storage)
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "fi" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export default LanguageProvider;
