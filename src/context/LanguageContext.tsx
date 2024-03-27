import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  isEnglish: boolean;
  switchToEnglish: () => void;
  switchToSpanish: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  isEnglish: false,
  switchToEnglish: () => {},
  switchToSpanish: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export const LanguageProvider: React.FC = ({ children }:any) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  const switchToEnglish = () => {
    setIsEnglish(true);
  };

  const switchToSpanish = () => {
    setIsEnglish(false);
  };

  return (
    <LanguageContext.Provider value={{ isEnglish, switchToEnglish, switchToSpanish }}>
      {children}
    </LanguageContext.Provider>
  );
};
