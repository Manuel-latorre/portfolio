import {
  BookTextIcon,
  BriefcaseIcon,
  CodeIcon,
  UserIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamMultipleOutputDemo";
import { AnimatedListDemo } from "./AnimtedListDemo";
import { BentoCard } from "../ui/bento-grid";
import Marquee from "../ui/marquee";
import Image from "next/image";
import tualo from "../../images/tualo.svg";
import tma from "../../images/tma.svg";
import diarc from "../../images/diarc.svg";
import vittanut from "../../images/vittanut.svg";
import gt from "../../images/gt.svg";

const files = [
  {
    name: "Tualo",
    image: <Image src={tualo} alt="Tualo logo" width={30} height={30} />,
    body: "Startup specialized in the generation of financial reports and personalized graphs through artificial intelligence.",
  },
  {
    name: "Tu Mejor Amigo",
    image: <Image src={tma} alt="Tma logo" width={30} height={30} />,
    body: "Application focused on offering pet care services developed in React Native with Typescript.",
  },
  {
    name: "Diarc Studio",
    image: <Image src={diarc} alt="diarc logo" width={30} height={30} />,
    body: "I have developed this website for Diarc Studio, a 3D Art Outsourcing studio focused on the development of Immersive Experiences, Metaverses and Gaming.",
  },
  {
    name: "Vittanut",
    image: <Image src={vittanut} alt="vittanut logo" width={30} height={30} />,
    body: "This is a landing page for Vittanut, a company that is dedicated to the export of pecan nuts.",
  },
  {
    name: "Generación Tech",
    image: <Image src={gt} alt="gt logo" width={30} height={30} />,
    body: "I have developed this website for Generación Tech, a digital marketing agency.",
  },
];

const studies = [
  {
    name: "Web Development | CoderHouse",
    body: "The duration was 36 hours taught over 9 weeks. In this course, I learned how to create a website starting from a paper prototype. I explored best practices for web development, working with HTML and CSS, and discovered tools to optimize websites, such as version control with GIT and preprocessors like SASS. I also learned how to apply Bootstrap to projects and understood the importance of SEO in development. Additionally, I gained experience in deploying websites to servers and interacting with them. Finally, I learned how to prepare budgets and effectively communicate with clients.",
  },
  {
    name: "Javascript | CoderHouse",
    body: "In this course, I learned the fundamentals of the most widely used programming language today, which enables the creation of all kinds of applications. I explored its native tools and delved into practical application cases. I also discovered the utility of libraries like jQuery and applied development techniques for modern apps using AJAX. By the end of the course, I was equipped to create interactive web solutions and apply the knowledge gained to any JavaScript framework.",
  },
  {
    name: "Fullstack Web Development | Henry",
    body: "I learned to work with programming languages like JavaScript and TypeScript. I developed full servers that communicate with databases and complete web pages while following UX/UI guidelines for user interaction. I mastered and used artificial intelligence tools to make my development faster and more efficient. I also built large-scale projects with optimized, end-to-end functionality from scratch. Finally, I learned to find software solutions to everyday problems.",
  },
  {
    name: "Systems engineering | CAECE",
    body: "I will learn to design, develop, and optimize software solutions while understanding the fundamentals of computer science and programming. I will gain knowledge in database management, network systems, and algorithms, as well as experience in project management and teamwork. Additionally, I will develop problem-solving skills to address real-world challenges and explore emerging technologies to stay updated in the ever-evolving tech industry.",
  },
  {
    name: "NextJs Course | Udemy",
    body: "I learned how to build modern, scalable web applications using this powerful framework. I gained a deep understanding of server-side rendering, static site generation, and client-side rendering. I explored features like API routes, dynamic routing, and middleware to create more efficient and secure applications. Additionally, I learned how to integrate external APIs, manage state effectively, and optimize performance. By the end of the course, I was able to deploy Next.js projects to production and leverage its new features to create cutting-edge web solutions.",
  },
];

const features = [
  {
    Icon: UserIcon,
    name: "About me",
    description: "Here you can see my personal information.",
    href: "/about-me",
    cta: "View more about me",
    className: "w-full lg:w-[30%]",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: BriefcaseIcon,
    name: "Experience",
    description: "+1 year experience developing web apps.",
    href: "/experience",
    cta: "View my profesional experience",
    className: "lg:w-[70%] w-full",
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
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
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
    href: "/education",
    cta: "Learn more",
    className: "lg:w-[70%] w-full",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {studies.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-72 h-72 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  {/* {f.image} */}
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
    Icon: CodeIcon,
    name: "Technologies",
    description:
      "Actually my favorite React framework is NextJs",
    href: "/technologies",
    cta: "View my technologies",
    className: "w-full lg:w-[30%]",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export function BentoDemo() {
  return (
    
    <div className="flex flex-col gap-4 h-full">
        <div className="flex max-lg:hidden h-full gap-4">
          {features.slice(0, 2).map((feature, idx) => (
            <BentoCard key={idx} {...(feature as any)}/>
          ))}
        </div>
        <div className="flex max-lg:hidden h-full gap-4">
          {features.slice(2, 4).map((feature, idx) => (
            <BentoCard key={idx} {...(feature as any)}/>
          ))}
        </div>
        <div className="flex flex-col lg:hidden h-full gap-4">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...(feature as any)}/>
          ))}
        </div>
    </div>
  );
}
