import { CalendarDays, MapPin } from 'lucide-react'
import { StaticImageData } from 'next/image'
import React, { JSX } from 'react'
import Image from 'next/image'
import coderhouse from '../../images/coder.png'
import udemy from '../../images/udemy.svg'
import henry from '../../images/henry.svg'
import caece from '../../images/caece.svg'
import Text from '../Text/Text'



export interface EducationItem {
  title: string | JSX.Element
  place: string | JSX.Element
  date: string | JSX.Element
  icon: StaticImageData
  description: string | JSX.Element
  location: string | JSX.Element
}

export const educationData: EducationItem[] = [

   {
    title: <Text textEn="Systems engineering"  textEs="Ingeniería en Sistemas"/>,
    place: <Text textEn="CAECE University" textEs="Universidad CAECE"/>,
    date: <Text textEn="Current" textEs="Actual"/>,
    icon: caece,
    description: "",
    location: "Mar del Plata, Buenos Aires, Argentina"
  }, 
  {
    title: "Next Js",
    place: "Udemy",
    date: <Text textEn="April 2024" textEs="Abril 2024"/>,
    icon: udemy,
    description: <Text textEn="I learned Next.js from scratch, focusing on production-ready features like SSR, SSG, ISR, and CSR rendering strategies, dynamic routing, custom authentication, API development, and deployments. The course emphasized TypeScript, NextAuth, Zustand, Material UI, and payment integrations. Through hands-on projects, including an e-commerce store, I gained practical experience in building, optimizing, and deploying scalable Next.js applications." textEs="Aprendí Next.js desde cero, enfocándome en funciones listas para producción como estrategias de renderizado SSR, SSG, ISR y CSR, enrutamiento dinámico, autenticación personalizada, desarrollo e implementaciones de API. El curso enfatizó TypeScript, NextAuth, Zustand, Material UI e integraciones de pagos. A través de proyectos prácticos, incluida una tienda de comercio electrónico, adquirí experiencia práctica en la creación, optimización e implementación de aplicaciones Next.js escalables."/>,
    location: "Online"
  },
  {
    title: <Text textEn="Fullstack Web Development" textEs="Desarrollo Web Fullstack"/>,
    place: "Henry",
    date: <Text textEn="March 2023 - July 2023" textEs="Marzo 2023 - Julio 2023"/>,
    icon: henry,
    description: <Text textEn="I learned to work with programming languages like JavaScript and TypeScript. I developed full servers that communicate with databases and complete web pages while following UX/UI guidelines for user interaction. I mastered and used artificial intelligence tools to make my development faster and more efficient. I also built large-scale projects with optimized, end-to-end functionality from scratch. Finally, I learned to find software solutions to everyday problems." textEs="Aprendí a trabajar con lenguajes de programación como JavaScript y TypeScript. Desarrollé servidores completos que se comunican con bases de datos y páginas web completas siguiendo pautas UX/UI para la interacción del usuario. Dominé y utilicé herramientas de inteligencia artificial para hacer mi desarrollo más rápido y eficiente. También construí proyectos a gran escala con funcionalidad optimizada de un extremo a otro desde cero. Finalmente, aprendí a encontrar soluciones de software a problemas cotidianos."/>,
    location: "Online"
  },
  {
    title: "JavaScript",
    place: "Coderhouse",
    date: <Text textEn="July 2023 - September 2023" textEs="Julio 2023 - Septiembre 2023"/>,
    icon: coderhouse,
    description: <Text textEn="In this course, I learned the fundamentals of the most widely used programming language today, which enables the creation of all kinds of applications. I explored its native tools and delved into practical application cases. I also discovered the utility of libraries like jQuery and applied development techniques for modern apps using AJAX. By the end of the course, I was equipped to create interactive web solutions and apply the knowledge gained to any JavaScript framework." textEs="En este curso aprendí los fundamentos del lenguaje de programación más utilizado en la actualidad, que permite la creación de todo tipo de aplicaciones. Exploré sus herramientas nativas y profundicé en casos prácticos de aplicación. También descubrí la utilidad de bibliotecas como jQuery y apliqué técnicas de desarrollo de aplicaciones modernas usando AJAX. Al final del curso, estaba preparado para crear soluciones web interactivas y aplicar los conocimientos adquiridos a cualquier marco de JavaScript.
"/>,
    location: "Online"
  },
  {
    title: <Text textEn="Web Development" textEs="Desarrollo Web"/>,
    place: "Coderhouse",
    date: <Text textEn="March 2023 - June 2023" textEs="Marzo 2023 - Junio 2023"/>,
    icon: coderhouse,
    description: <Text textEn="The duration was 36 hours taught over 9 weeks. In this course, I learned how to create a website starting from a paper prototype. I explored best practices for web development, working with HTML and CSS, and discovered tools to optimize websites, such as version control with GIT and preprocessors like SASS. I also learned how to apply Bootstrap to projects and understood the importance of SEO in development. Additionally, I gained experience in deploying websites to servers and interacting with them. Finally, I learned how to prepare budgets and effectively communicate with clients." textEs="La duración fue de 36 horas impartidas durante 9 semanas. En este curso aprendí a crear un sitio web a partir de un prototipo en papel. Exploré las mejores prácticas para el desarrollo web, trabajando con HTML y CSS, y descubrí herramientas para optimizar sitios web, como el control de versiones con GIT y preprocesadores como SASS. También aprendí a aplicar Bootstrap a proyectos y entendí la importancia del SEO en el desarrollo. Además, adquirí experiencia en la implementación de sitios web en servidores e interactuando con ellos. Finalmente, aprendí a preparar presupuestos y comunicarme efectivamente con los clientes."/>,
    location: <Text textEn="Remote" textEs="Remoto"/>
  },
]

export default function EducationTimeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {educationData.map((item, index) => (
        <TimelineItem key={index} item={item} isLast={index === educationData.length - 1} />
      ))}
    </ol>
  )
}

interface TimelineItemProps {
  item: EducationItem
  isLast: boolean
}


function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <li className={`ms-6 ${isLast ? '' : 'mb-10'}`}>
      <span className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full -start-8 ring-8 ring-white dark:ring-black dark:bg-black">
        <Image src={item.icon} alt={`${item.place} logo`} width={60} height={60} className="rounded-full dark:bg-white" />
      </span>
      <div className="p-4 bg-white border-b border-dashed dark:bg-black dark:border-gray-700 dark:rounded-lg">
        <div className="text-xl font-semibold text-gray-900 dark:text-white">
          {item.place}
        </div>
        <div className="items-center justify-between mb-2 sm:flex">
          <time className="flex items-center mb-1 font-normal text-gray-400 dark:text-gray-300 sm:order-last sm:mb-0">
            <CalendarDays className="inline-block w-4 h-4 mr-1" />
            {item.date}
          </time>
          <div className="flex items-center text-sm font-normal text-gray-500 lex dark:text-gray-300">
            <MapPin className="inline-block w-4 h-4 mr-1" />
            {item.location}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800  dark:text-white">
          {item.title}
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </li>
  )
}

