import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon";
import OpenAIIcon from "@/icons/OpenAIIcon";
import SupabaseIcon from "@/icons/SupabaseIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Text from "../Text/Text";

const DescriptionTualo = () => {
  return (
    <div>
      <Text 
        textEn={
          <p className="font-medium xl:text-lg mb-4">
            Startup specialized in the generation of financial reports and
            personalized graphs through artificial intelligence.
          </p>
        }
        textEs={
          <p className="font-medium xl:text-lg mb-4">
            Startup especializada en la generación de informes financieros y gráficos personalizados a través de inteligencia artificial.
          </p>
        }
      />
      <Text 
        textEn={
          <p className="font-semibold text-lg mb-2">
            My responsibilities
          </p>
        }
        textEs={
          <p className="font-semibold text-lg mb-2">
            Mis responsabilidades
          </p>
        }
      />
      <ul className="flex flex-col gap-2">
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">
                  <Link href={"https://tualo.mx/"} target="_blank">
                    Corporate Website Creation
                  </Link>
                </span>
                : Initial development of the corporate website.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">
                  <Link href={"https://tualo.mx/"} target="_blank">
                    Creación del Sitio Web Corporativo
                  </Link>
                </span>
                : Desarrollo inicial del sitio web corporativo.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Automatic Email Integration</span>: We
                have implemented an automatic email system within the platform using{" "}
                <span>
                  <Link
                    href={"https://resend.com/"}
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    RESEND
                  </Link>
                </span>
                . These emails are triggered in various scenarios, such as when users
                complete certain information, when analysts release reports to notify
                clients, and more.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Integración de Correos Automáticos</span>: Hemos
                implementado un sistema de correos automáticos dentro de la plataforma usando{" "}
                <span>
                  <Link
                    href={"https://resend.com/"}
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    RESEND
                  </Link>
                </span>
                . Estos correos se activan en varios escenarios, como cuando los usuarios
                completan cierta información, cuando los analistas liberan informes para notificar
                a los clientes, y más.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Client Platform</span>: Design and
                implementation of dedicated sections for administrators and end users.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Plataforma de Clientes</span>: Diseño e
                implementación de secciones dedicadas para administradores y usuarios finales.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">User Interface</span>: Continuous
                design and improvement of the user experience.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Interfaz de Usuario</span>: Diseño
                continuo y mejora de la experiencia de usuario.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Database Interactions</span>: Advanced
                functionality implementation for efficient data management.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Interacciones con la Base de Datos</span>: Implementación
                de funcionalidades avanzadas para la gestión eficiente de datos.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Document Management</span>:
                Integration of forms for uploading images, PDFs, and Excel files.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Gestión de Documentos</span>:
                Integración de formularios para la carga de imágenes, PDFs y archivos Excel.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Payment Integration</span>:
                Implementation of payment gateways to manage client subscriptions.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Integración de Pagos</span>:
                Implementación de pasarelas de pago para gestionar suscripciones de clientes.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Dynamic Chart Generator</span>:
                Development of interactive systems to create charts based on data
                imported from Excel.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Generador de Gráficos Dinámicos</span>:
                Desarrollo de sistemas interactivos para crear gráficos basados en datos
                importados desde Excel.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Background Tasks</span>: Utilization
                of{" "}
                <span>
                  <Link
                    href={"https://trigger.dev/"}
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    Trigger.dev
                  </Link>
                </span>{" "}
                for the automated execution of background processes.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Tareas en Segundo Plano</span>: Utilización
                de{" "}
                <span>
                  <Link
                    href={"https://trigger.dev/"}
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    Trigger.dev
                  </Link>
                </span>{" "}
                para la ejecución automatizada de procesos en segundo plano.
              </>
            }
          />
        </li>
      </ul>

      <div className="mt-4">
        <Text 
          textEn={
            <p className="font-semibold text-lg mb-2">
              Technology Stack
            </p>
          }
          textEs={
            <p className="font-semibold text-lg mb-2">
              Tecnologías utilizadas
            </p>
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
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <OpenAIIcon width={20} height={20} />
            <p>Open AI</p>
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
              ¡Visita el sitio web aquí!
            </p>
          }
        />
        <Link
          href={"https://tualo.mx/"}
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
  );
};

export default DescriptionTualo;