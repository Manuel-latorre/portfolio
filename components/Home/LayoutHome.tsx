import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, BookTextIcon, BriefcaseIcon, CodeIcon, Share2Icon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamMultipleOutputDemo";
import { AnimatedListDemo } from "./AnimtedListDemo";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Marquee from "../ui/marquee";
import Image from "next/image";
import ProfileIcon from "@/icons/ProfileIcon";
import tualo from '../../images/tualo.svg'
import tma from '../../images/tma.svg'
import diarc from '../../images/diarc.svg'
import vittanut from '../../images/vittanut.svg'
import gt from '../../images/gt.svg'

const files = [
  {
    name: "Tualo",
    image: <Image src={tualo} alt="Tualo logo" width={30} height={30}/>,
    body: "Startup specialized in the generation of financial reports and personalized graphs through artificial intelligence.",
  },
  {
    name: "Tu Mejor Amigo",
    image: <Image src={tma} alt="Tma logo" width={30} height={30}/>,
    body: "Application focused on offering pet care services developed in React Native with Typescript.",
  },
  {
    name: "Diarc Studio",
    image: <Image src={diarc} alt="diarc logo" width={30} height={30}/>,
    body: "I have developed this website for Diarc Studio, a 3D Art Outsourcing studio focused on the development of Immersive Experiences, Metaverses and Gaming.",
  },
  {
    name: "Vittanut",
    image: <Image src={vittanut} alt="vittanut logo" width={30} height={30}/>,
    body: "This is a landing page for Vittanut, a company that is dedicated to the export of pecan nuts.",
  },
  {
    name: "Generación Tech",
    image: <Image src={gt} alt="gt logo" width={30} height={30}/>,
    body: "I have developed this website for Generación Tech, a digital marketing agency.",
  },
];

const features = [
  {
    Icon: UserIcon,
    name: "About me",
    description: "Here you can see my personal information.",
    href: "#",
    cta: "View more about me",
    className: "col-span-3 lg:col-span-1",
    background: (
        <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
},
{
    Icon: BriefcaseIcon,
    name: "Experience",
    description: "+1 year experience developing web apps.",
    href: "#",
    cta: "View my profesional experience",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-56 h-56 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    {f.image}
                    <figcaption className="text-sm font-medium dark:text-white ">
                    {f.name}
                    </figcaption>
                </div>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
},
{
    Icon: BookTextIcon,
    name: "Education",
    description: "I am currently a Systems Engineering student.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
        <div>
            <p>hola</p>
        </div>
    ),
},
{
    Icon: CodeIcon,
    name: "Skills & Technologies",
    description: "Currently my favorite stack is Typescript, NextJs and tailwind css.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  background: (
    <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  ),
},
];

export function BentoDemo() {
    return (
        <BentoGrid>
      {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature as any} />
        ))}
    </BentoGrid>
  );
}
