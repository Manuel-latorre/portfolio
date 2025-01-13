import { StaticImageData } from 'next/image'
import coderhouse from './images/coder.png'
import udemy from './images/udemy.svg'
import henry from './images/henry.svg'
import caece from './images/caece.svg'

export interface EducationItem {
  title: string
  place: string
  date: string
  icon: StaticImageData
  description: string
  location: string
}

export const educationData: EducationItem[] = [

   {
    title: "Systems engineering",
    place: "CAECE University",
    date: "Current",
    icon: caece,
    description: "",
    location: "Mar del Plata, Buenos Aires, Argentina"
  }, 
  {
    title: "Next Js",
    place: "Udemy",
    date: "April 2024",
    icon: udemy,
    description: "I learned Next.js from scratch, focusing on production-ready features like SSR, SSG, ISR, and CSR rendering strategies, dynamic routing, custom authentication, API development, and deployments. The course emphasized TypeScript, NextAuth, Zustand, Material UI, and payment integrations. Through hands-on projects, including an e-commerce store, I gained practical experience in building, optimizing, and deploying scalable Next.js applications.",
    location: "Online"
  },
  {
    title: "Fullstack Web Development",
    place: "Henry",
    date: "March 2023 - July 2023",
    icon: henry,
    description: "I learned to work with programming languages like JavaScript and TypeScript. I developed full servers that communicate with databases and complete web pages while following UX/UI guidelines for user interaction. I mastered and used artificial intelligence tools to make my development faster and more efficient. I also built large-scale projects with optimized, end-to-end functionality from scratch. Finally, I learned to find software solutions to everyday problems.",
    location: "Online"
  },
  {
    title: "JavaScript",
    place: "Coderhouse",
    date: "July 2023 - September 2023",
    icon: coderhouse,
    description: "In this course, I learned the fundamentals of the most widely used programming language today, which enables the creation of all kinds of applications. I explored its native tools and delved into practical application cases. I also discovered the utility of libraries like jQuery and applied development techniques for modern apps using AJAX. By the end of the course, I was equipped to create interactive web solutions and apply the knowledge gained to any JavaScript framework.",
    location: "Online"
  },
  {
    title: "Web Development",
    place: "Coderhouse",
    date: "March 2023 - June 2023",
    icon: coderhouse,
    description: "The duration was 36 hours taught over 9 weeks. In this course, I learned how to create a website starting from a paper prototype. I explored best practices for web development, working with HTML and CSS, and discovered tools to optimize websites, such as version control with GIT and preprocessors like SASS. I also learned how to apply Bootstrap to projects and understood the importance of SEO in development. Additionally, I gained experience in deploying websites to servers and interacting with them. Finally, I learned how to prepare budgets and effectively communicate with clients.",
    location: "Remote"
  },
]


