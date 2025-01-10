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

const experiences = [
  {
    title: "Tualo",
    link:"https://www.linkedin.com/company/tualo/posts/?feedView=all",
    subtitle: "Fullstack Developer",
    country: "Mexico",
    type: "Remote",
    icon: (
      <Image
        src={tualo}
        alt="Tualo Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
    date: "April 2024 - Current",
    description: <DescriptionTualo/>
    ,
    stack: "",
  },
  {
    title: "Tu Mejor Amigo",
    link:"https://www.linkedin.com/company/tu-mejor-amigo/",
    subtitle: "Frontend Developer",
    country: "Mexico",
    type: "Remote",
    icon: (
      <Image
        src={tma}
        alt="Tu mejor amigo logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
    date: "Nov 2023 - March 2024",
    description: <DescriptionTma/>,
    stack: "",
  },
];

const freelances = [
  {
    title: "Vittanut",
    link:"https://www.vittanut.com/",
    subtitle: "Pecan nuts industry",
    date: "April 2024 - Current",
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
    link:"https://www.diarc.studio/demo",
    subtitle: "3D Art Outsourcing Studio",
    date: "Nov 2023 - March 2024",
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
    date: "Nov 2023 - March 2024",
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
    <div className="lg:w-[70%] mx-auto mt-5 flex flex-col gap-12 h-full  max-lg:px-8">
      <div>
        <p className="font-semibold text-2xl mb-2">Work Experience</p>

        <div>
          {experiences.map((data) => (
            <AccordionDemo
              key={data.title} 
              trigger={
                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="flex items-center gap-3">
                    {data.icon}
                    <div className="flex flex-col items-start">
                      <Link href={data.link} target="_blank" className="lg:text-lg text-start font-semibold text-zinc-800">
                        {data.title}
                      </Link>
                      <p className="text-sm lg:text-base">{data.subtitle}</p>
                      <p className="text-xs lg:text-sm">
                        {data.country} | {data.type}
                      </p>
                    </div>
                  </div>
                  <div className="px-4">
                    <p className="text-gray-600 max-md:text-sm">{data.date}</p>
                  </div>
                </div>
              }
              content={<div>{data.description}</div>}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-2xl mb-2">Freelance Proyects</p>

        <div>
          {freelances.map((data) => (
            <AccordionDemo
              key={data.title} 
              trigger={
                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="flex items-center gap-3">
                    {data.icon}
                    <div className="flex flex-col items-start">
                      <Link href={data.link} target="_blank" className="lg:text-lg text-start font-semibold text-zinc-800">
                        {data.title}
                      </Link>
                      <p className="text-sm lg:text-base">{data.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-4">
                    <p className="text-gray-600 max-md:text-sm">{data.date}</p>
                  </div>
                </div>
              }
              content={<div>{data.description}</div>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
