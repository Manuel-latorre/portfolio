import Image from "next/image";import profile from "../../../images/profile1.svg";
import Link from "next/link";
import Text from "@/components/Text/Text";

export default function AboutMePage() {
  return (
    <div className="lg:w-[70%] mx-auto mt-5 flex flex-col gap-6 h-full max-lg:px-8 max-md:pb-[80px]">
      <div className="flex items-center justify-between max-md:flex-col-reverse max-md:items-center">
        <div className="max-md:text-center">
          <div>
            <Text
              textEn="Hi, I'm Manuel 👋"
              textEs="Hola, soy Manuel 👋"
              className="font-bold text-3xl lg:text-6xl mb-2"
            />
          </div>
          <div className="md:w-[90%] md:mt-2">
            <Text
              textEn="Systems Engineering student and Fullstack Developer at Tualo"
              textEs="Estudiante de Ingeniería de Sistemas y Desarrollador Fullstack en Tualo."
            />
            <br />
            <Text
              textEn="Passionate about optimizing processes, enhancing user experiences,
            and tackling diverse tech challenges."
              textEs="Apasionado por optimizar procesos, mejorar las experiencias de los usuarios y abordar diversos desafíos tecnológicos."
            />
          </div>
        </div>
        <Image src={profile} alt="Profile picture" width={250} height={250} />
      </div>
      <div>
        <Text
          className="ont-semibold text-2xl mb-2"
          textEn="About me"
          textEs="Sobre mí"
        />
        <Text
          className="text-zinc-500 text-lg dark:text-white"
          textEn={
            <p className="text-zinc-500 text-lg dark:text-white">
              I am a Systems Engineering student with experience in the
              development of web applications and data management platforms.{" "}
              <br /> My passion lies in creating technological solutions that
              optimize processes and improve user experiences. <br /> With more
              than a year of experience working on various projects, I currently
              work as a{" "}
              <span>
                <Link
                  href={
                    "https://www.linkedin.com/company/tualo/posts/?feedView=all"
                  }
                  className="text-zinc-900 dark:text-[#f4f4f4] dark:font-medium font-semibold underline underline-offset-2"
                  target="_blank"
                >
                  Fullstack Developer at Tualo
                </Link>
              </span>
              , while also carrying out{" "}
              <span>
                <Link
                  href={"/experience/#freelance-proyects"}
                  className="text-zinc-900 dark:text-[#f4f4f4] dark:font-medium underline underline-offset-2 font-semibold"
                >
                  freelance projects
                </Link>
              </span>{" "}
              that allow me to explore different environments and address
              exciting technological challenges. <br /> <br /> When I&apos;m not
              working or studying, I enjoy immersing myself in blogs about the
              technologies that interest me to stay up to date, experiment with
              new projects, and generate innovative ideas. In my free time, I
              also love to spend time with friends, explore the outdoors or stay
              home doing nothing, it depends on the weather 😊. <br />
              For me, it&apos;s about balancing work, learning and fun while
              making the most of every opportunity to grow. 🚀
            </p>
          }
          textEs={
            <p className="text-zinc-500 text-lg dark:text-white">
              Soy estudiante de Ingeniería en Sistemas con experiencia en el
              desarrollo de aplicaciones web y plataformas de gestión de datos.{" "}
              <br /> Mi pasión radica en crear soluciones tecnológicas que
              optimicen procesos y mejoren las experiencias de los usuarios.{" "}
              <br /> Con más de un año de experiencia trabajando en diversos
              proyectos, actualmente me desempeño como{" "}
              <span>
                <Link
                  href={
                    "https://www.linkedin.com/company/tualo/posts/?feedView=all"
                  }
                  className="text-zinc-900 font-semibold underline underline-offset-2"
                  target="_blank"
                >
                  Desarrollador Fullstack en Tualo
                </Link>
              </span>
              , mientras también realizo{" "}
              <span>
                <Link
                  href={""}
                  className="text-zinc-900 underline underline-offset-2 font-semibold"
                >
                  proyectos freelance
                </Link>
              </span>{" "}
              que me permiten explorar diferentes entornos y abordar
              emocionantes desafíos tecnológicos. <br /> <br /> Cuando no estoy
              trabajando o estudiando, disfruto sumergirme en blogs sobre las
              tecnologías que me interesan para mantenerme actualizado,
              experimentar con nuevos proyectos y generar ideas innovadoras. En
              mi tiempo libre, también me encanta pasar tiempo con amigos,
              explorar al aire libre o quedarme en casa sin hacer nada, depende
              del clima 😊. <br />
              Para mí, se trata de equilibrar el trabajo, el aprendizaje y la
              diversión mientras aprovecho al máximo cada oportunidad para
              crecer. 🚀
            </p>
          }
        />
      </div>

      <div className="mt-4">
        <Text
          textEn="Soft skills"
          textEs="Habilidades blandas"
          className="font-semibold text-2xl mb-2"
        />
        <Text
          textEn={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">Teamwork:</span>{" "}
              Adaptability in collaborative environments to achieve common
              goals.
            </p>
          }
          textEs={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">
                Trabajo en equipo:
              </span>{" "}
              Adaptabilidad en entornos colaborativos para lograr objetivos
              comunes.
            </p>
          }
        />
        <Text
          textEn={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">Proactivity:</span>
              Ability to identify and optimize processes by anticipating needs.
            </p>
          }
          textEs={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">Proactividad:</span>
              Capacidad para identificar y optimizar procesos anticipándose a
              las necesidades.
            </p>
          }
        />
        <Text
          textEn={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">
                Communication:
              </span>
              Strong relationship-building skills with clients and colleagues.
            </p>
          }
          textEs={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">Comunicación:</span>
              Fuertes habilidades para establecer relaciones con clientes y
              colegas.
            </p>
          }
        />
        <Text
          textEn={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">
                Problem-Solving:
              </span>
              Talent for finding creative solutions to technological challenges.
            </p>
          }
          textEs={
            <p className="text-zinc-500 text-lg dark:text-white">
              <span className="font-semibold text-zinc-900 dark:text-white dark:font-medium">
                Resolución de Problemas:
              </span>
              Talento para encontrar soluciones creativas a desafíos
              tecnológicos.
            </p>
          }
        />
      </div>
    </div>
  );
}
