import Image from "next/image";
import tualo from "../../../images/tualo.svg";
import tma from "../../../images/tma.svg";
import diarc from "../../../images/diarc.svg";
import vittanut from "../../../images/vittanut.svg";
import brochure from "../../../images/brochure.svg";
import { AccordionDemo } from "@/components/Accordion/Accordion";
import DescriptionTualo from "@/components/Experience/DescriptionTualo";
import DescriptionTma from "@/components/Experience/DescriptionTma";
import DescriptionVittanut from "@/components/Experience/DescriptionVittanut";
import DescriptionDigitalBrochure from "@/components/Experience/DescriptionDigitalBrochure";
import Link from "next/link";
import DescriptionDiarc from "@/components/Experience/DescriptionDiarc";
import Text from "@/components/Text/Text";

const experiences = [
  {
    title: "Tualo",
    link:"https://www.linkedin.com/company/tualo/posts/?feedView=all",
    subtitle: <Text textEn="Fullstack Developer" textEs="Desarrollador Fullstack"/>,
    country: "Mexico",
    type: <Text textEn="Remote" textEs="Remoto"/>,
    icon: (
      <Image
        src={tualo}
        alt="Tualo Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
    date: <Text textEn="April 2024 - Current" textEs="Abril 2024 - Actual"/>,
    description: <DescriptionTualo/>
    ,
    stack: "",
  },
  {
    title: "Tu Mejor Amigo",
    link:"https://www.linkedin.com/company/tu-mejor-amigo/",
    subtitle: <Text textEn="Frontend Developer" textEs="Desarrollador Frontend"/>,
    country: "Mexico",
    type: <Text textEn="Remote" textEs="Remoto"/>,
    icon: (
      <Image
        src={tma}
        alt="Tu mejor amigo logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
    date: <Text textEn="Nov 2023 - March 2024" textEs="Nov 2023 - Mar 2024"/>,
    description: <DescriptionTma/>,
    stack: "",
  },
];

const freelances = [
  {
    title: "Vittanut",
    link:"https://www.vittanut.com/",
    subtitle: <Text textEn="Pecan nuts industry" textEs="Industria de nueces pecán"/>,
    date: <Text textEn="April 2024 - Current" textEs="Noviembre 2024"/>,
    icon: (
      <Image
        src={vittanut}
        alt="Tualo Logo"
        width={60}
        height={60}
        className="rounded-full border"
      />
    ),
    description: <DescriptionVittanut/>,
    stack: "",
    latest: true,
  },
  {
    title: "Brochure Digital Creative",
    link:"https://diarc-studio-web.vercel.app/demo",
    subtitle: "3D Art Outsourcing Studio",
    date: <Text textEn="November 2024" textEs="Noviembre 2023"/>,
    icon: (
      <Image
        src={brochure}
        alt="Tu mejor amigo logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
    description: <DescriptionDigitalBrochure/>,
    stack: "",
    latest: false,
  },
  {
    title: "Diarc Studio",
    link:"https://www.linkedin.com/company/diarcstudio/posts/?feedView=all",
    subtitle: "3D Art Outsourcing Studio",
    date: <Text textEn="Nov 2023 - March 2024" textEs="Nov 2023 - Mar 2024"/>,
    icon: (
      <Image
        src={diarc}
        alt="Tu mejor amigo logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
    description: <DescriptionDiarc/>,
    stack: "",
    latest: false,
  },
];

export default function ExperiencePage() {
  return (
    <div className="lg:w-[70%] mx-auto mt-5 flex flex-col gap-12 h-full  max-lg:px-8 max-md:pb-[80px]">
      <div>
        <Text textEn={<p className="font-semibold text-2xl mb-2">Professional Experience</p>} textEs={<p className="font-semibold text-2xl mb-2">Experiencia profesional</p>}/>

        <div>
          {experiences.map((data) => (
            <AccordionDemo
              key={data.title} 
              trigger={
                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="flex items-center gap-3">
                    {data.icon}
                    <div className="flex flex-col items-start">
                      <Link href={data.link} target="_blank" className="lg:text-lg text-start font-semibold text-zinc-800 dark:text-white">
                        {data.title}
                      </Link>
                      <p className="text-sm lg:text-base">{data.subtitle}</p>
                      <div className="flex items-center gap-2 text-xs lg:text-sm">
                        {data.country}  | {data.type}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 max-sm:hidden">
                    <p className="text-gray-600 max-md:text-sm">{data.date}</p>
                  </div>
                </div>
              }
              content={<div>
                  <p className="text-gray-600 dark:text-white max-md:text-sm sm:hidden mb-4">{data.date}</p>
                {data.description}
                </div>}
            />
          ))}
        </div>
      </div>

      <div>
        <Text textEn={<p className="font-semibold text-2xl mb-2">Freelance Proyects</p>} textEs={<p className="font-semibold text-2xl mb-2">Proyectos freelance</p>}/>

        <div>
          {freelances.map((data) => (
            <AccordionDemo
              key={data.title} 
              trigger={
                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="flex items-center gap-3">
                    {data.icon}
                    <div className="flex flex-col items-start">
                      <Link href={data.link} target="_blank" className="lg:text-lg text-start font-semibold text-zinc-800 dark:text-white">
                        {data.title}
                      </Link>
                      <p className="text-sm lg:text-base">{data.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-4 max-sm:hidden">
                    <p className="text-gray-600 max-md:text-sm">{data.date}</p>
                  </div>
                </div>
              }
              content={<div>
                 <p className="text-gray-600 dark:text-white max-md:text-sm sm:hidden mb-4">{data.date}</p>
                {data.description}
              </div>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
