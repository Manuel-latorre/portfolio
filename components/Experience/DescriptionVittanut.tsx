import GithubWhiteIcon from "@/icons/GithubWhiteIcon";
import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Text from "../Text/Text";

const DescriptionVittanut = () => {
  return (
    <div>
      <Text 
        textEn={
          <p className="font-medium xl:text-lg mb-4">
            Vittanut is an Argentine company specializing in the production and
            export of organic pecan nuts.
          </p>
        }
        textEs={
          <p className="font-medium xl:text-lg mb-4">
            Vittanut es una empresa argentina especializada en la producción y exportación de nueces pecanas orgánicas.
          </p>
        }
      />
      <Text 
        textEn={
          <p className="font-semibold text-lg mb-2">Principal features</p>
        }
        textEs={
          <p className="font-semibold text-lg mb-2">Características principales</p>
        }
      />
      <ul className="flex flex-col gap-2">
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Responsive Design</span>
                : Built with Tailwind CSS, the site offers a seamless user experience
                across devices, ensuring adaptability from mobile to desktop.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Diseño Responsivo</span>
                : Construido con Tailwind CSS, el sitio ofrece una experiencia de usuario
                fluida en todos los dispositivos, asegurando adaptabilidad desde móviles hasta escritorio.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">
                  Component-Based Architecture
                </span>
                : Leveraging React and TypeScript, the codebase is modular and
                reusable, simplifying future updates and maintenance.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">
                  Arquitectura Basada en Componentes
                </span>
                : Aprovechando React y TypeScript, el código es modular y
                reutilizable, simplificando futuras actualizaciones y mantenimiento.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">SEO-Friendly</span>:
                Implemented structured metadata and dynamic routing for better search
                engine indexing.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Optimizado para SEO</span>:
                Implementación de metadatos estructurados y enrutamiento dinámico para mejor
                indexación en motores de búsqueda.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Multi Language</span>:
                The design accommodates scalability for multi-language
                implementations. In this case, English, Spanish and German are
                available.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Multilenguaje</span>:
                El diseño permite la escalabilidad para implementaciones en múltiples
                idiomas. En este caso, inglés, español y alemán están
                disponibles.
              </>
            }
          />
        </li>
      </ul>

      <div className="mt-4">
        <Text 
          textEn={
            <p className="font-semibold text-lg mb-2">Technology Stack</p>
          }
          textEs={
            <p className="font-semibold text-lg mb-2">Tecnologías utilizadas</p>
          }
        />
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
        <Text 
          textEn={
            <p className="font-semibold text-lg mb-2">
              Visit website or repository here!
            </p>
          }
          textEs={
            <p className="font-semibold text-lg mb-2">
              ¡Visita el sitio web o repositorio aquí!
            </p>
          }
        />
        <div className="flex items-center gap-4">
          <Link
            href={"https://www.vittanut.com/"}
            target="_blank"
            className="flex items-center gap-2 bg-zinc-900 text-white p-2 w-fit rounded-lg"
          >
            <GlobeIcon width={20} height={20} />
            <Text 
              textEn="Website"
              textEs="Sitio web"
            />
          </Link>
          <Link
            href={"https://github.com/Manuel-latorre/vittanut"}
            target="_blank"
            className="flex items-center gap-2 bg-zinc-900 text-white p-2 w-fit rounded-lg"
          >
            <GithubWhiteIcon width={20} height={20} />
            <Text 
              textEn="Github"
              textEs="Github"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DescriptionVittanut;