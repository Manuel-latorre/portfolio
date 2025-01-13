"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageIcon } from "@heroicons/react/20/solid";
import { useLanguage } from "@/app/context/LanguageContext";

const languages = [
    {
      value: "es",
      label: "Español",
      switch: "switchToSpanish", // Key for switching
    },
  {
    value: "en",
    label: "English",
    switch: "switchToEnglish", // Key for switching
  },
];

export default function TranslationButtons() {
  const { language, switchToEnglish, switchToSpanish } = useLanguage();

  // Map switch functions
  const switchFunctions: { [key: string]: () => void } = {
    switchToEnglish,
    switchToSpanish,
  };

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <Button
          key={lang.value}
          onClick={switchFunctions[lang.switch]}
          variant={language === lang.value ? "default" : "outline"}
          className="flex items-center space-x-2"
        >
          <LanguageIcon className="h-4 w-4" />
          <span>{lang.label}</span>
          {language === lang.value && <Check className="h-4 w-4 ml-2" />}
        </Button>
      ))}
    </div>
  );
}

