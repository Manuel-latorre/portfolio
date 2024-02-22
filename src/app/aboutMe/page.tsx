"use client";
import Image from "next/image";
import { TypewriterEffect } from "../../components/ui/Typewriter-effect";
import profile from './profile.png'
import ProfileImage from "./profileImage/page";
import { Button } from "@nextui-org/react";

const hello = [
    {
      text: "¡ Hola !",
      className: "text-8xl mb-7 max-lg:text-5xl max-lg:mb-5"
    },
    
  ];

    const wordsName = [
      {
        text: "Soy",
        className:"max-md:text-xl"
      },
      {
        text: "Manuel",
        className:"max-md:text-xl"
      },
      {
        text: "Latorre",
        className:"max-md:text-xl"
      },
    ];

    const wordsDeveloper = [
        {
          text: "Desarrollador",
          className: "text-3xl max-md:text-xl"
        },
        {
          text: "Fullstack",
          className: "text-3xl dark:text-blue-500 max-md:text-xl"
        },
      
      ];


export default function AboutMe(){
    return(
        <div id="sobreMi" className="flex items-center justify-evenly max-lg:flex-col max-lg:p-10 max-lg:mx-auto max-lg:justify-center lg:mt-32 max-sm:p-5">
            <div className="flex flex-col gap-1 lg:w-5/12 max-lg:justify-center my-10">
                <div className="max-lg:flex-col max-lg:justify-center max-lg:text-center">
                  <TypewriterEffect words={hello} />
                  <div className="max-lg:flex max-lg:flex-col max-lg:gap-3">
                    <TypewriterEffect words={wordsName} />
                    <TypewriterEffect words={wordsDeveloper} />
                  </div>
                </div>
                <div className="lg:hidden max-lg:justify-center flex max-lg:my-12">
                  <ProfileImage/>
                </div>
                <p className="text-gray-400 mt-4 max-lg:text-center">Mi experiencia abarca tanto el Frontend como el Backend, lo que me permite ofrecer soluciones completas. En la creación de proyectos, prefiero trabajar con el stack MERN (MongoDB, Express, React y Node.js) como base tecnológica. Transitando el Bootcamp de Henry trabajé en proyectos individuales y grupales con metodologías ágiles como SCRUM y también desarrollé habilidades como la escucha activa, la proactividad, el trabajo en equipo y las buenas prácticas.</p>
                <div className="flex items-center gap-7 mt-5 max-lg:justify-center max-sm:flex-wrap">
                    <Button variant="shadow" color="success" className="flex items-center gap-2 text-white">
                        <svg width={20} height={20} fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.533 392.533" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M292.396,324.849H99.879c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925h192.582 c6.012,0,10.925-4.849,10.925-10.925C303.321,329.697,298.473,324.849,292.396,324.849z"></path> </g> </g> <g> <g> <path d="M292.396,277.01H99.879c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925h192.582 c6.012,0,10.925-4.849,10.925-10.925C303.321,281.859,298.473,277.01,292.396,277.01z"></path> </g> </g> <g> <g> <path d="M196.137,45.834c-25.859,0-46.998,21.075-46.998,46.998c0,25.859,21.139,46.933,46.998,46.933 s46.998-21.075,46.998-46.998S221.996,45.834,196.137,45.834z M196.137,117.851c-13.77,0-25.083-11.313-25.083-25.083 c0-13.77,11.248-25.083,25.083-25.083s25.083,11.313,25.083,25.083C221.22,106.537,209.907,117.851,196.137,117.851z"></path> </g> </g> <g> <g> <path d="M258.521,163.362c-39.887-15.515-84.752-15.515-124.638,0c-13.059,5.107-21.786,18.101-21.786,32.388v44.347 c-0.065,6.012,4.849,10.925,10.861,10.925h146.424c6.012,0,10.925-4.848,10.925-10.925V195.75 C280.307,181.463,271.58,168.469,258.521,163.362z M258.521,229.236H133.883v-33.422c0-5.301,3.168-10.214,7.887-12.024 c34.844-13.511,74.02-13.511,108.865,0c4.719,1.875,7.887,6.659,7.887,12.024V229.236z"></path> </g> </g> <g> <g> <path d="M313.083,0H131.491c-8.404,0-16.291,3.232-22.238,9.18L57.018,61.414c-5.947,5.948-9.18,13.834-9.18,22.238v277.333 c0,17.39,14.158,31.547,31.547,31.547h233.762c17.39,0,31.547-14.158,31.547-31.547V31.547C344.501,14.158,330.343,0,313.083,0z M112.032,37.236v27.022H85.01L112.032,37.236z M322.715,116.816h-40.598c-6.012,0-10.925,4.849-10.925,10.925 c0,6.012,4.848,10.925,10.925,10.925h40.598v19.394h-14.869c-6.012,0-10.925,4.848-10.925,10.925 c0,6.012,4.849,10.925,10.925,10.925h14.869v181.139c0,5.366-4.331,9.697-9.632,9.697H79.192c-5.301,0-9.632-4.331-9.632-9.632 V86.044h53.398c6.012,0,10.925-4.848,10.925-10.925V21.721h179.2c5.301,0,9.632,4.331,9.632,9.632V116.816z"></path> </g> </g> </g></svg>
                        CV
                    </Button>
                    <Button variant="shadow" color="primary" className="flex items-center gap-2">
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z" stroke="#ffffff" stroke-linejoin="round"></path> </g></svg>
                        LinkedIn
                    </Button>
                    <Button variant="shadow" color="secondary" className="flex items-center gap-2">
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z" stroke="#ffffff" stroke-linejoin="round"></path> </g></svg>
                        Github
                    </Button>
                </div>
            </div>
            <div className="max-lg:hidden">
                <ProfileImage/>
            </div>
        </div>
    )
}