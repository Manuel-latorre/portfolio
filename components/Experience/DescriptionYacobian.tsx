import GithubWhiteIcon from "@/icons/GithubWhiteIcon";
import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Text from "../Text/Text";
import SupabaseIcon from "@/icons/SupabaseIcon";

const DescriptionYacobian = () => {
  return (
    <div>
      <Text 
        textEn={
          <p className="font-medium xl:text-lg mb-4">
           Yacobian is an Spain Real State
          </p>
        }
        textEs={
          <p className="font-medium xl:text-lg mb-4">
            Yacobian es una inmobiliaria de España.
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
                <span className="font-semibold text-gray-600 dark:text-white">Responsive Design</span>
                : Development based on Figma prototypes, ensuring design fidelity and a mobile-first, fully responsive experience.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600 dark:text-white">Diseño Responsivo</span>
                : Desarrollo basado en prototipos de Figma, asegurando fidelidad al diseño y experiencia
                mobile-first y totalmente responsiva.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEs={
              <>
                <span className="font-semibold text-gray-600 dark:text-white">
                  Authenticación
                </span>
                : Autenticación con email/password, sistema CRUD avanzado para gestión de propiedades
                y actualización de estados.
              </>
            }
            textEn={
              <>
                <span className="font-semibold text-gray-600 dark:text-white">
                  Authentication
                </span>
                : Email/password authentication, advanced CRUD system for property management and status updates.
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
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <SupabaseIcon width={20} height={20} />
            <p>Supabase</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Text 
          textEn={
            <p className="font-semibold text-lg mb-2">
              Visit website here!
            </p>
          }
          textEs={
            <p className="font-semibold text-lg mb-2">
              ¡Visita el sitio web quí!
            </p>
          }
        />
        <div className="flex items-center gap-4">
          <Link
            href={"https://yacobian.es/"}
            target="_blank"
            className="flex items-center gap-2 bg-zinc-900 text-white p-2 w-fit rounded-lg"
          >
            <GlobeIcon width={20} height={20} />
            <Text 
              textEn="Website"
              textEs="Sitio web"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DescriptionYacobian;