import React, { useState } from "react";
import Image from "next/image";
import usa from '../../../app/projects/images/usa.png'
import arg from '../../../app/projects/images/arg.png'
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@nextui-org/react";


export default function ButtonsLanguages() {
    const [selectedButton, setSelectedButton] = useState("arg"); // Definir como "arg" inicialmente
    const { switchToEnglish, switchToSpanish } = useLanguage();


  const handleButtonClick = (buttonName:any) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <Button
      size="sm"
        style={{
          backgroundColor:
            selectedButton === "arg" ? "gray" : "transparent",
        }}
        onClick={() => {handleButtonClick("arg"), switchToSpanish();}}
      >
            <Image src={arg} alt="United States flag" width={20} height={20}/>
            <p className="text-white">Spanish</p>
      </Button>


      <Button
      size="sm"
        style={{
          backgroundColor:
          selectedButton === "usa" ? "gray" : "transparent",
        }}
        onClick={() => {handleButtonClick("usa"), switchToEnglish();}}
      >
            <Image src={usa} alt="United States flag" width={20} height={20}/>
            <p className="text-white">English</p>
      </Button>
    </div>
  );
}
