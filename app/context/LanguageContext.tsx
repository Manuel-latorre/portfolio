"use client"

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  switchToEnglish: () => void;
  switchToSpanish: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const switchToEnglish = () => setLanguage("en");
  const switchToSpanish = () => setLanguage("es");

  return (
    <LanguageContext.Provider
      value={{ language, switchToEnglish, switchToSpanish }}
    >
      {children}
    </LanguageContext.Provider>
  );
};