"use client";
import Image from "next/image";
import { TypewriterEffect } from "../../components/ui/Typewriter-effect";
import profile from './profile.png'
import ProfileImage from "../aboutMe/profileImage/page";
import { Button } from "@nextui-org/react";
import cap1 from './images/cap1.png'
import cap2 from './images/cap2.png'
import cap3 from './images/cap3.png'
import cap4 from './images/cap4.png'
import mexico from './images/mexico.png'



export default function Experiencie(){
    
    

    return(
        <div className="flex flex-col w-9/12 mx-auto">
            <div>
              <p className="font-bold text-5xl text-white text-center">Experiencia</p>
            </div> 
            <div className="flex items-center mt-10 gap-3">
                {/* <svg width={30} height={30} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="2.2399999999999998" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M34.82,52.73H14.69V22.18a1,1,0,0,1,.52-.87L33.34,11.4a1,1,0,0,1,1.48.88Z" stroke-linecap="round"></path><path d="M48.87,52.73H34.92V21.59L48.4,29.3a1,1,0,0,1,.47.85Z" stroke-linecap="round"></path><line x1="28.1" y1="24.86" x2="21.06" y2="24.86" stroke-linecap="round"></line><line x1="43.66" y1="32.41" x2="40.14" y2="32.41" stroke-linecap="round"></line><line x1="43.66" y1="36.9" x2="40.14" y2="36.9" stroke-linecap="round"></line><line x1="43.66" y1="41.71" x2="40.14" y2="41.71" stroke-linecap="round"></line><line x1="43.66" y1="46.19" x2="40.14" y2="46.19" stroke-linecap="round"></line><line x1="28.1" y1="30.44" x2="21.06" y2="30.44" stroke-linecap="round"></line><line x1="28.1" y1="35.94" x2="21.06" y2="35.94" stroke-linecap="round"></line><line x1="28.1" y1="41.44" x2="21.06" y2="41.44" stroke-linecap="round"></line><line x1="28.1" y1="46.94" x2="21.06" y2="46.94" stroke-linecap="round"></line><line x1="9.46" y1="52.73" x2="54.54" y2="52.73" stroke-linecap="round"></line></g></svg> */}
                <p className="font-semibold text-2xl text-white">Tu Mejor Amigo</p>
                <Image width={30} height={30} src={mexico} alt="mexico"/>
            </div>
            <div className="mt-2 flex flex-col gap-3">
                <p className="font-semibold text-xl text-white">Desarrollador Frontend</p>
                <p className="text-sm text-white">14/11/23 - Actual</p>
            </div>
            <div className="flex items-center justify-between mt-7">
                <div className="w-2/4">
                    <p className="text-zinc-300">He contribuido significativamente al desarrollo de una innovadora aplicación de servicio de paseo de perros, enfocándome en la creación de interfaces de usuario intuitivas y atractivas. Mi trabajo ha abarcado desde la implementación de funcionalidades esenciales para la gestión de datos, utilizando peticiones GET, POST, PUT y DELETE, hasta asegurar una interacción fluida con la base de datos de la aplicación.</p>
                    <p className="text-zinc-300 font-bold mt-4">Mis mayores desafios</p>
                    <ul className="mt-3 flex flex-col gap-4">
                        <li>
                            <p className="text-zinc-300">
                                - Integrar un sistema de notificaciones efectivo mediante React Native Firebase Cloud Messaging.
                            </p>
                        </li>
                        <li>
                            <p className="text-zinc-300">
                                - Incorporación de una funcionalidad que permitió a los usuarios cargar imágenes de sus mascotas y tambien de perfil a través de Cloudinary.
                            </p>
                        </li>
                        <li>
                            <p className="text-zinc-300">
                                - Gestionar el lanzamiento de la aplicación en Google Play Console, asegurando que el servicio estuviera accesible para los amantes de los perros buscando paseadores confiables.
                            </p>
                        </li>
                    </ul>
                    <div>
                        <p className="text-zinc-300 mt-4">Tecnologías utilizadas</p>
                    </div>

                </div>
                <div className="flex gap-2">
                    <Image width={120} height={120} src={cap1} alt="image" className="rounded-lg"/>
                    <Image width={120} height={120} src={cap2} alt="image" className="rounded-lg"/>
                    <Image width={120} height={120} src={cap3} alt="image" className="rounded-lg"/>
                    <Image width={120} height={120} src={cap4} alt="image" className="rounded-lg"/>
                </div>
                
            </div>
            
        </div>
    )
}