"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { LinkIcon } from "@heroicons/react/24/outline";

const CVbutton = () => {
    const {language} = useLanguage()

  return (
    <button
      onClick={() => {
        window.open("/Manuel-Latorre-Desarrollador-Frontend.pdf", "_blank");
      }}
      className="flex items-center gap-2 hover:underline underline-offset-2 transition-all"
    >
      {language === "en" ? "View my resume here!" : "¡Mira mi CV aquí!"}
      <LinkIcon width={18} height={18}/>
    </button>
  );
};

export default CVbutton;
