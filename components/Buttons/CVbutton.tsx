"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { DocumentTextIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";

import { useState } from "react";


const CVbutton = () => {
    const {language} = useLanguage()
    const [isHoveredCv, setIsHoveredCv] = useState(false);


  return (
    <button
        onClick={() => {
          window.open(language === "en" ? "/MANUEL-LATORRE-FRONTEND-DEVELOPER.pdf" : "/MANUEL-LATORRE-FRONTEND-DEVELOPER.pdf", "_blank");
        }}
        className="relative inline-block w-[30px] h-[30px]"
        onMouseEnter={() => setIsHoveredCv(true)}
        onMouseLeave={() => setIsHoveredCv(false)}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHoveredCv ? 0 : 1 }}
        >
          <DocumentTextIcon width={30} height={30}/>
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out rotate-45"
          style={{ opacity: isHoveredCv ? 1 : 0 }}
        >
          <ArrowUpCircleIcon width={30} height={30} />
        </div>
      </button>
  );
};

export default CVbutton;
