'use client'

import { useLanguage } from "@/context/LanguageContext";
import { Dw } from "./Dw";
import { Fs } from "./Fs";
import { Js } from "./Js";

export default function Studies(){

    const { isEnglish} = useLanguage();
    return(
        <div id="studies" className="mb-20">
            <p className="font-bold text-5xl text-white text-center mb-20">{isEnglish ? "Studies" : "Estudios"}</p>
            <div className="flex items-center justify-center gap-5 max-lg:flex-wrap">
                <Dw/>
                <Js/>
                <Fs/>
            </div>
        </div>
    )
}