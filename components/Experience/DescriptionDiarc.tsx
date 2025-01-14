import CssIcon from "@/icons/CssIcon";
import ExpressIcon from "@/icons/ExpressIcon";
import GithubWhiteIcon from "@/icons/GithubWhiteIcon";
import JavascriptIcon from "@/icons/JavascriptIcon";
import MongodbIcon from "@/icons/MongodbIcon";
import NodeIcon from "@/icons/NodeIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Text from "../Text/Text";

const DescriptionDiarc = () => {
  return (
    <div>
      <Text textEn={<p className="font-medium xl:text-lg mb-4">
        3D Art Outsourcing Studio focused on the development of Immersive
        Experiences, Metaverses and Gaming.
      </p>}
        textEs={
          <p className="font-medium xl:text-lg mb-4">
        3D Art Outsourcing Studio enfocado en el desarrollo de Experiencias Inmersivas, Metaverso y Gaming.
      </p>
        }
      />
      <Text textEn={<p className="font-semibold text-lg mb-2">Principal features</p>} textEs={<p className="font-semibold text-lg mb-2">Características principales</p>}/>
      <ul className="flex flex-col gap-2">
       <Text textEn={
         <li className="text-lg">
         <span className="font-semibold text-gray-600 dark:text-white">
           Interactive Portfolio
         </span>
         : The site includes a portfolio section showcasing completed projects,
         categorized into areas such as web, mobile, console, desktop, AR, and
         VR development.
       </li>
       }
        textEs={
          <li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">Portafolio Interactivo</span>
          : El sitio incluye una sección de portafolio que muestra proyectos completados, categorizados en áreas como desarrollo web, móvil, de consola, de escritorio, realidad aumentada (AR) y realidad virtual (VR).
        </li>
        
        }
       />
       <Text textEn={ <li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">
            Animations and Transitions
          </span>
          : Subtle animations enhance the user experience, including hover
          effects and scroll-based highlights.
        </li>}
          textEs={
            <li className="text-lg">
            <span className="font-semibold text-gray-600 dark:text-white">
              Animaticiones y transisiones
            </span>
            : Animaciones sutiles que mejoran la experiencia del usuario, incluyendo efectos al pasar el cursor y destacados basados en el desplazamiento.
          </li>
          }
        />
       <Text textEn={
         <li className="text-lg">
         <span className="font-semibold text-gray-600 dark:text-white">Admin Panel:</span> The
         site features a secure admin panel that allows the administrator to
         efficiently manage portfolio content.
       </li>
       }
        textEs={ <li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">Panel adminstrativo:</span> El sitio cuenta con un panel de administración seguro que permite al administrador gestionar eficientemente el contenido del portafolio.
        </li>}
       />
        <Text textEn={<li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white"> CRUD Operations</span>:
          The admin can create, read, update, and delete projects via the admin
          panel, ensuring the portfolio is always up-to-date.
        </li>}
          textEs={
            <li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">Operaciónes CRUD:</span>
          El administrador puede crear, leer, actualizar y eliminar proyectos a través del panel de administración, asegurando que el portafolio esté siempre actualizado.
        </li>
          }
        />
        <Text textEn={<li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">SEO:</span> Search
          engine optimization practices, such as appropriate meta tags, friendly
          URLs, and relevant content, are applied to improve the site&apos;s
          visibility in search results.
        </li>}
          textEs={
            <li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">SEO:</span> Se aplican prácticas de optimización de motores de búsqueda, como metaetiquetas apropiadas y contenido amigable y relevante, para mejorar la visibilidad del sitio en los resultados de búsqueda.
        </li>
          }
        />
      </ul>

      <div className="mt-4">
        <Text textEn={<p className="font-semibold text-lg mb-2">Technology Stack</p>} textEs={<p className="font-semibold text-lg mb-2">Stack Tecnologico</p>}/>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <JavascriptIcon width={20} height={20} />
            <p>Javascript</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <TailwindIcon width={20} height={20} />
            <p>Tailwind css</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <CssIcon width={20} height={20} />
            <p>Css</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <MongodbIcon width={20} height={20} />
            <p>Mongo DB</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <ExpressIcon width={20} height={20} />
            <p>Express</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <NodeIcon width={20} height={20} />
            <p>Node</p>
          </div>
       
        </div>
      </div>

      <div className="mt-6">
        <Text textEn={<p className="font-semibold text-lg mb-2">
          Visit website or repository here!
        </p>}
          textEs={<p className="font-semibold text-lg mb-2">
            ¡Visita el sitio web o repositorio aquí!
          </p>}
        />
        <div className="flex items-center gap-4">
          <Link
            href={"https://www.diarc.studio/demo"}
            target="_blank"
            className="flex items-center gap-2 bg-zinc-900 text-white p-2 w-fit rounded-lg"
          >
            <GlobeIcon width={20} height={20} />
            <p>Website</p>
          </Link>
          <Link
            href={"https://github.com/Manuel-latorre/diarc-studio"}
            target="_blank"
            className="flex items-center gap-2 bg-zinc-900 text-white p-2 w-fit rounded-lg"
          >
            <GithubWhiteIcon width={20} height={20} />
            <p>Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DescriptionDiarc;
