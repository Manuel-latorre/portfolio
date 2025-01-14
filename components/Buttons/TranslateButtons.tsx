"use client";

import * as React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { LanguageIcon } from "@heroicons/react/20/solid";

export default function TranslationSwitch() {
  const { language, switchToEnglish, switchToSpanish } = useLanguage();

  const handleSwitchChange = (checked: boolean) => {
    if (checked) {
      switchToEnglish();
    } else {
      switchToSpanish();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <LanguageIcon className="h-4 w-4 text-gray-500" />
      <Switch 
        id="language-switch"
        checked={language === 'en'}
        onCheckedChange={handleSwitchChange}
      />
      <label htmlFor="language-switch" className="text-sm">
        {language === 'en' ? 'English' : 'Español'}
      </label>
    </div>
  );
}