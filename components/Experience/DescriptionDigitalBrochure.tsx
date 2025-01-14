import GithubWhiteIcon from "@/icons/GithubWhiteIcon";
import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Text from "../Text/Text";

const DescriptionDigitalBrochure = () => {
  return (
    <div>
      <Text textEn={<p className="font-medium xl:text-lg mb-4">
      Interactive Digital Brochure was designed to optimize the marketing and sales processes of real estate developments.
      </p>}
        textEs={<p className="font-medium xl:text-lg mb-4">
          Interactive Digital Brochure fue diseñado para optimizar procesos de comercialización y venta de desarrollos inmobiliarios.
          </p>}
      />
      <Text textEn={<p className="font-semibold text-lg mb-2">Principal features</p>} textEs={<p className="font-semibold text-lg mb-2">Características principales</p>}/>
      <ul className="flex flex-col gap-2">
        <Text textEn={<li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">Global Accessibility</span>
          : The brochure is accessible online from anywhere in the world, making it easy to promote and share real estate projects with a wide audience.
        </li>}
        textEs={
          <li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">Accesibilidad global</span>
          : Se puede acceder al folleto en línea desde cualquier parte del mundo, lo que facilita la promoción y el intercambio de proyectos inmobiliarios con una amplia audiencia.
        </li>
        }
        />
        <Text textEn={<li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">
          Arcane Mirage Component Integration
          </span>
          : The site integrates a component from Arcane Mirage, which likely enhances the 3D visualization and interactivity of the brochure. This integration provides a sophisticated and immersive user experience, showcasing detailed real estate layouts and masterplans.
        </li>}
        textEs={
          <li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">
          Integración de componente de Arcane Mirage
          </span>
          : El sitio integra un componente de Arcane Mirage, que mejora la visualización 3D y la interactividad del folleto. Esta integración proporciona una experiencia de usuario sofisticada e inmersiva, mostrando diseños y planes maestros detallados de bienes raíces.
        </li>
        }
        />
        <Text textEn={<li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">Bilingual Support</span>:
          The website includes a language switcher, offering content in English and Spanish, ensuring accessibility to a broader, multilingual audience.
        </li>}
        textEs={<li className="text-lg">
          <span className="font-semibold text-gray-600 dark:text-white">Opción de traducción</span>:
          El sitio web incluye un selector de idiomas que ofrece contenido en inglés y español, lo que garantiza la accesibilidad a una audiencia multilingüe más amplia.
        </li>}
        />
      </ul>

      <div className="mt-4">
        <Text textEn={<p className="font-semibold text-lg mb-2">Technology Stack</p>} textEs={<p className="font-semibold text-lg mb-2">Stack Tecnológico</p>}/>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <TypescriptIcon width={20} height={20} />
            <p>Typescript</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <NextjsWhiteIcon width={20} height={20} />
            <p>NextJs</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <TailwindIcon width={20} height={20} />
            <p>Tailwind css</p>
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

export default DescriptionDigitalBrochure;
