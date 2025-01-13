import CssIcon from "@/icons/CssIcon";
import ReactIcon from "@/icons/ReactIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import React from "react";
import Text from "../Text/Text";

const DescriptionTma = () => {
  return (
    <div>
      <Text 
        textEn={
          <p className="font-medium xl:text-lg mb-4">
            Application focused on offering pet care services
          </p>
        }
        textEs={
          <p className="font-medium xl:text-lg mb-4">
            Aplicación enfocada a ofrecer servicios de cuidado de mascotas
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
                  Data management
                </span>
                : Development of key functionalities through GET, POST, PUT requests
                and DELETE.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">
                  Gestión de datos
                </span>
                : Desarrollo de funcionalidades clave a través de peticiones GET, POST, PUT
                y DELETE.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Image upload</span>
                : Integration with Cloudinary for users to upload photos of
                pets and profiles.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Subida de imágenes</span>
                : Integración con Cloudinary para que los usuarios suban fotos de
                mascotas y perfiles.
              </>
            }
          />
        </li>
        <li className="text-lg">
          <Text 
            textEn={
              <>
                <span className="font-semibold text-gray-600">Notification system</span>
                : Implementation of real-time notifications with React
                Native Firebase Cloud Messaging.
              </>
            }
            textEs={
              <>
                <span className="font-semibold text-gray-600">Sistema de notificaciones</span>
                : Implementación de notificaciones en tiempo real con React
                Native Firebase Cloud Messaging.
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
            <ReactIcon width={20} height={20} />
            <p>React Native</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <CssIcon width={20} height={20} />
            <p>Css</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTma;