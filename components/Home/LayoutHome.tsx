import { BookTextIcon, BriefcaseIcon, CodeIcon, UserIcon } from "lucide-react";
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
import Text from "../Text/Text";

const files = [
  {
    name: "Tualo",
    image: <Image src={tualo} alt="Tualo logo" width={30} height={30} />,
    body: (
      <Text
        textEn="Startup specialized in the generation of financial reports and personalized graphs through artificial intelligence."
        textEs="Startup especializada en la generación de informes financieros y gráficos personalizados a través de inteligencia artificial."
      />
    ),
  },
  {
    name: "Tu Mejor Amigo",
    image: <Image src={tma} alt="Tma logo" width={30} height={30} />,
    body: (
      <Text
        textEn="Application focused on offering pet care services developed in React Native with Typescript."
        textEs="Aplicación enfocada a ofrecer servicios de cuidado de mascotas desarrollada en React Native con Typescript."
      />
    ),
  },
  {
    name: "Diarc Studio",
    image: <Image src={diarc} alt="diarc logo" width={30} height={30} />,
    body: (
      <Text
        textEn="I have developed this website for Diarc Studio, a 3D Art Outsourcing studio focused on the development of Immersive Experiences, Metaverses and Gaming."
        textEs="He desarrollado este sitio web para Diarc Studio, un estudio de Outsourcing de Arte 3D enfocado en el desarrollo de Experiencias Inmersivas, Metaversos y Gaming."
      />
    ),
  },
  {
    name: "Vittanut",
    image: <Image src={vittanut} alt="vittanut logo" width={30} height={30} />,
    body: (
      <Text
        textEn="This is a landing page for Vittanut, a company that is dedicated to the export of pecan nuts."
        textEs="Esta es una landing page para Vittanut, una empresa que se dedica a la exportación de nueces pecanas."
      />
    ),
  },
  {
    name: "Generación Tech",
    image: <Image src={gt} alt="gt logo" width={30} height={30} />,
    body: (
      <Text
        textEn="I have developed this website for Generación Tech, a digital marketing agency."
        textEs="He desarrollado este sitio web para Generación Tech, una agencia de marketing digital."
      />
    ),
  },
];

const studies = [
  {
    name: (
      <Text
        textEn="Web Development | CoderHouse"
        textEs="Desarrollo Web | CoderHouse"
      />
    ),
    body: (
      <Text
        textEn="The duration was 36 hours taught over 9 weeks. In this course, I learned how to create a website starting from a paper prototype. I explored best practices for web development, working with HTML and CSS, and discovered tools to optimize websites, such as version control with GIT and preprocessors like SASS. I also learned how to apply Bootstrap to projects and understood the importance of SEO in development. Additionally, I gained experience in deploying websites to servers and interacting with them. Finally, I learned how to prepare budgets and effectively communicate with clients."
        textEs="La duración fue de 36 horas impartidas durante 9 semanas. En este curso aprendí a crear un sitio web a partir de un prototipo en papel. Exploré las mejores prácticas para el desarrollo web, trabajando con HTML y CSS, y descubrí herramientas para optimizar sitios web, como el control de versiones con GIT y preprocesadores como SASS. También aprendí a aplicar Bootstrap a proyectos y entendí la importancia del SEO en el desarrollo. Además, adquirí experiencia en la implementación de sitios web en servidores e interactuando con ellos. Finalmente, aprendí a preparar presupuestos y comunicarme efectivamente con los clientes."
      />
    ),
  },
  {
    name: "Javascript | CoderHouse",
    body: (
      <Text
        textEn="In this course, I learned the fundamentals of the most widely used programming language today, which enables the creation of all kinds of applications. I explored its native tools and delved into practical application cases. I also discovered the utility of libraries like jQuery and applied development techniques for modern apps using AJAX. By the end of the course, I was equipped to create interactive web solutions and apply the knowledge gained to any JavaScript framework."
        textEs="En este curso aprendí los fundamentos del lenguaje de programación más utilizado en la actualidad, que permite la creación de todo tipo de aplicaciones. Exploré sus herramientas nativas y profundicé en casos prácticos de aplicación. También descubrí la utilidad de bibliotecas como jQuery y apliqué técnicas de desarrollo de aplicaciones modernas usando AJAX. Al final del curso, estaba preparado para crear soluciones web interactivas y aplicar los conocimientos adquiridos a cualquier marco de JavaScript."
      />
    ),
  },
  {
    name: (
      <Text
        textEn="Fullstack Web Development | Henry"
        textEs="Desarrollo Web Fullstack | Henry"
      />
    ),
    body: (
      <Text
        textEn="I learned to work with programming languages like JavaScript and TypeScript. I developed full servers that communicate with databases and complete web pages while following UX/UI guidelines for user interaction. I mastered and used artificial intelligence tools to make my development faster and more efficient. I also built large-scale projects with optimized, end-to-end functionality from scratch. Finally, I learned to find software solutions to everyday problems."
        textEs="Aprendí a trabajar con lenguajes de programación como JavaScript y TypeScript. Desarrollé servidores completos que se comunican con bases de datos y páginas web completas siguiendo pautas UX/UI para la interacción del usuario. Dominé y utilicé herramientas de inteligencia artificial para hacer mi desarrollo más rápido y eficiente. También construí proyectos a gran escala con funcionalidad optimizada de un extremo a otro desde cero. Finalmente, aprendí a encontrar soluciones de software a problemas cotidianos."
      />
    ),
  },
  {
    name: (
      <Text
        textEn="Systems engineering | CAECE"
        textEs="Ingeniería en Sistemas | CAECE"
      />
    ),
    body: (
      <Text
        textEn="I will learn to design, develop, and optimize software solutions while understanding the fundamentals of computer science and programming. I will gain knowledge in database management, network systems, and algorithms, as well as experience in project management and teamwork. Additionally, I will develop problem-solving skills to address real-world challenges and explore emerging technologies to stay updated in the ever-evolving tech industry."
        textEs="Aprenderé a diseñar, desarrollar y optimizar soluciones de software mientras entiendo los fundamentos de la informática y la programación. Adquiriré conocimientos en manejo de bases de datos, sistemas de redes y algoritmos, además de experiencia en gestión de proyectos y trabajo en equipo. Además, desarrollaré habilidades de resolución de problemas para abordar desafíos del mundo real y exploraré tecnologías emergentes para mantenerme actualizado en la industria tecnológica en constante evolución."
      />
    ),
  },
  {
    name: <Text textEn="NextJs Course | Udemy" textEs="NextJs | Udemy" />,
    body: (
      <Text
        textEn="I learned how to build modern, scalable web applications using this powerful framework. I gained a deep understanding of server-side rendering, static site generation, and client-side rendering. I explored features like API routes, dynamic routing, and middleware to create more efficient and secure applications. Additionally, I learned how to integrate external APIs, manage state effectively, and optimize performance. By the end of the course, I was able to deploy Next.js projects to production and leverage its new features to create cutting-edge web solutions."
        textEs="Aprendí a crear aplicaciones web modernas y escalables utilizando este poderoso marco. Obtuve un conocimiento profundo de la renderización del lado del servidor, la generación de sitios estáticos y la renderización del lado del cliente. Exploré funciones como rutas API, enrutamiento dinámico y middleware para crear aplicaciones más eficientes y seguras. Además, aprendí a integrar API externas, gestionar el estado de forma eficaz y optimizar el rendimiento. Al final del curso, pude implementar proyectos de Next.js en producción y aprovechar sus nuevas funciones para crear soluciones web de vanguardia."
      />
    ),
  },
];

const features = [
  {
    Icon: UserIcon,
    name: <Text 
      textEn="About me"
      textEs="Sobre mí"
    />,
    description: <Text
      textEn="Here you can see my personal information."
      textEs="Aquí podrás ver mi información personal"
    />,
    href: "/about-me",
    cta: <Text
      textEn="View more about me"
      textEs="Ver más sobre mí"
    />,
    className: "w-full lg:w-[30%]",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: BriefcaseIcon,
    name: <Text
      textEn="Experience"
      textEs="Experiencia"
    />,
    description: <Text
      textEn="+1 year of experience developing web applications"
      textEs="+1 año de experiencia desarrollando aplicaciones web"
    />,
    href: "/experience",
    cta: <Text
    textEn="View my profesional experience"
    textEs="Ver mi experiencia profesional"
    />,
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
    name: <Text
      textEn="Education"
      textEs="Educación"
    />,
    description: <Text
      textEn="I am currently a Systems Engineering student."
      textEs="Actualmente, estoy estudiando Ingeniería en Sistemas"
    />,
    href: "/education",
    cta: <Text
      textEn="View more about my studies"
      textEs="Ver más acerca de mis estudios"
    />,
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
    name: <Text
      textEn="Technologies"
      textEs="Tecnologías"
    />,
    description: <Text
      textEn="Actually my favorite React framework is NextJs"
      textEs="Actualmente, mi framework favorito de React es NextJs"
    />,
    href: "/technologies",
    cta: <Text
      textEn="See the technologies I use"
      textEs="Ver las tecnologías que domino"
    />,
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
          <BentoCard key={idx} {...(feature as any)} />
        ))}
      </div>
      <div className="flex max-lg:hidden h-full gap-4">
        {features.slice(2, 4).map((feature, idx) => (
          <BentoCard key={idx} {...(feature as any)} />
        ))}
      </div>
      <div className="flex flex-col lg:hidden h-full gap-4">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...(feature as any)} />
        ))}
      </div>
    </div>
  );
}
