"use client";
import Image from "next/image";
import cap5 from './images/cap5.png'
import mexico from './images/mexico.png'
import { BackgroundGradient } from "@/components/ui/Background-gradient";
import { BackgroundGradientLg } from "@/components/ui/Background-gradient-lg";
import { useLanguage } from "@/context/LanguageContext";



export default function Experiencie(){
    
    const { isEnglish} = useLanguage();

    return(
        <div id="experiencia" className="flex flex-col w-9/12 mx-auto max-xl:w-full max-xl:p-10">
            <div>
              {isEnglish ? <p className="font-bold text-5xl text-white text-center xl:mb-10">Experience</p> : <p className="font-bold text-5xl text-white text-center xl:mb-10">Experiencia</p>}
            </div> 
            <div className="flex items-center mt-10 gap-3">
                <p className="font-semibold text-2xl text-white">Tu Mejor Amigo</p>
                <Image width={30} height={30} src={mexico} alt="mexico"/>
            </div>
            <div className="my-2 flex flex-col gap-3">
                {isEnglish ? <p className="font-semibold text-xl text-white">Frontend Developer</p> : <p className="font-semibold text-xl text-white">Desarrollador Frontend</p>}
                <p className="text-sm text-white font-semibold">{isEnglish ? "November 2023 - Current" : "Noviembre 2023 - Actual"}</p>
            </div>
            <div className="flex items-start justify-between max-xl:flex-col">
                <div className="xl:w-2/4">
                    {isEnglish ? <p className="text-zinc-300">I have contributed significantly to the development of an innovative dog walking service app, focusing on creating intuitive and engaging user interfaces. My work has ranged from implementing essential functionalities for data management, using GET, POST, PUT, and DELETE requests, to ensuring smooth interaction with the applications database.</p> :
                        <p className="text-zinc-300">He contribuido significativamente al desarrollo de una innovadora aplicación de servicio de paseo de perros, enfocándome en la creación de interfaces de usuario intuitivas y atractivas. Mi trabajo ha abarcado desde la implementación de funcionalidades esenciales para la gestión de datos, utilizando peticiones GET, POST, PUT y DELETE, hasta asegurar una interacción fluida con la base de datos de la aplicación.</p>
                    }
                    {isEnglish ? <p className="text-zinc-300 font-bold mt-4">My biggest challengues</p> : <p className="text-zinc-300 font-bold mt-4">Mis mayores desafios</p>}
                    <ul className="mt-3 flex flex-col gap-4">
                        <li>
                            <p className="text-zinc-300 flex items-center gap-2">
                                <svg width={20} height={20} fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z"></path></g></svg>
                                {isEnglish ? "Integrate an effective notification system using React Native Firebase Cloud Messaging." : "Integrar un sistema de notificaciones efectivo mediante React Native Firebase Cloud Messaging."}
                            </p>
                        </li>
                        <li>
                            <p className="text-zinc-300 flex items-center gap-2">
                                <svg width={30} height={30} fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z"></path></g></svg>
                                {isEnglish ? "Added functionality that allowed users to upload their pet and profile pictures through Cloudinary." : "Incorporación de una funcionalidad que permitió a los usuarios cargar imágenes de sus mascotas y tambien de perfil a través de Cloudinary."}
                            </p>
                        </li>
                        <li>
                            <p className="text-zinc-300 flex items-center gap-2">
                                <svg width={30} height={30} fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z"></path></g></svg>
                                {isEnglish ? "Manage the launch of the app in the Google Play Console, ensuring that the service was accessible to dog lovers looking for reliable walkers." : "Gestionar el lanzamiento de la aplicación en Google Play Console, asegurando que el servicio estuviera accesible para los amantes de los perros buscando paseadores confiables."}
                            </p>
                        </li>
                    </ul>
                        <p className="text-zinc-300 font-bold mt-5">{isEnglish ? "Technologies used" : "Tecnologías utilizadas"}</p>
                    <div className="flex items-center gap-2 mt-4 flex-wrap">
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            Typescript
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            React Native
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            Firebase Cloud Messaging
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            Cloudinary
                        </div>
                    </div>

                </div>
                <div className="">
                    <BackgroundGradientLg className="rounded-lg max-xl:hidden">
                        <Image className="w-[400px] h-[400px] rounded-xl max-xl:hidden" src={cap5} alt="cap5"/>
                    </BackgroundGradientLg>
                </div>
                
            </div>
        </div>
    )
}