"use client";
import Image from "next/image";
import cap5 from './images/cap5.png'
import argentina from './images/argentina.png'
import { BackgroundGradient } from "@/components/ui/Background-gradient";
import { BackgroundGradientLg } from "@/components/ui/Background-gradient-lg";
import gentech from './images/gentech.png'
import { useLanguage } from "@/context/LanguageContext";



export default function Gentech(){

    const { isEnglish} = useLanguage();


    return(
        <div className="flex flex-col w-9/12 mx-auto max-xl:w-full max-xl:p-10"> 
            <div className="flex items-center mt-7 gap-3">
                <p className="font-semibold text-2xl text-white">Generación Tech</p>
                <Image width={30} height={30} src={argentina} alt="argentina"/>
            </div>
            <div className="mt-2 flex flex-col gap-3">
            {isEnglish ? <p className="font-semibold text-xl text-white">Frontend Developer</p> : <p className="font-semibold text-xl text-white">Desarrollador Frontend</p>}
                <p className="text-sm text-white">{isEnglish ? "August 2023 - October 2023" : "Agosto 2023 - Octubre 2023"}</p>
            </div>
            <div className="flex items-center justify-between max-xl:flex-col">
                <div className="xl:w-2/4">
                    <p className="text-zinc-300">
                        {isEnglish ? "During the development of Generation Tech, it is a SPA (Single Page Application). This is a digital services agency, in which I have coded the design agreed upon by the design team. It features a responsive-design, intuitive user interface, and more." : "Durante el desarrollo de Generación Tech, que se trata de un SPA(Single Page Application). Esta es una agencia de servicios digitales, en la cual he llevado a código el diseño acordado por el equipo de diseño. Cuenta con un responsive-design, interfaz de usuario intuitiva y más."}
                    </p>
                    <p className="text-zinc-300 font-bold mt-4">{isEnglish ? "My biggest challengues" : "Mis mayores desafios"}</p>
                    <ul className="mt-3 flex flex-col gap-4">
                        <li className="flex items-center gap-2">
                            <svg width={20} height={20} fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z"></path></g></svg>
                            <p className="text-zinc-300">
                                {isEnglish ? "Integrate the option to communicate via email directly from the website through the Email Js library" : "Integrar mediante la librería Email Js la opcion de comunicarse via email directamente desde el sitio web"}
                            </p>
                        </li>
                    </ul>
                        <p className="text-zinc-300 font-bold mt-5">{isEnglish ? "Technologies used" : "Tecnologías utilizadas"}</p>
                    <div className="flex items-center gap-2 mt-4 flex-wrap">
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            HTML
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            Typescript
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            Next Js
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            CSS
                        </div>
                    </div>

                </div>
                <div className="">
                    <BackgroundGradientLg className="rounded-lg max-xl:hidden">
                        <Image className="w-[400px] h-[400px] rounded-xl max-xl:hidden" src={gentech} alt="Generacion Tech"/>
                    </BackgroundGradientLg>
                </div>
                
            </div>
        </div>
    )
}