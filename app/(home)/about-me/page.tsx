import Image from "next/image";import profile from "../../../images/profile1.svg";
import Link from "next/link";

export default function AboutMePage() {
  return (
    <div className="lg:w-[70%] mx-auto mt-5 flex flex-col gap-6 h-full max-lg:px-8">
      <div className="flex items-center justify-between max-md:flex-col-reverse max-md:items-center">
        <div className=" max-md:text-center">
          <p className="font-bold text-3xl lg:text-6xl mb-2">
            Hi, I'm Manuel <span className="lg:hidden">👋</span>
          </p>
          <p>
            Systems Engineering student and Fullstack Developer at Tualo. <br />{" "}
            Passionate about optimizing processes, enhancing user experiences,
            and tackling diverse tech challenges.
          </p>
        </div>
        <Image src={profile} alt="Profile picture" width={250} height={250} />
      </div>
      <div>
        <p className="font-semibold text-2xl mb-2">About me</p>
        <p className="text-zinc-500 text-lg">
          I am a Systems Engineering student with experience in the development
          of web applications and data management platforms. <br /> My passion
          lies in creating technological solutions that optimize processes and
          improve user experiences. <br /> With more than a year of experience
          working on various projects, I currently work as a{" "}
          <span>
            <Link
              href={
                "https://www.linkedin.com/company/tualo/posts/?feedView=all"
              }
              className="text-zinc-900 font-semibold underline underline-offset-2"
              target="_blank"
            >
              Fullstack Developer at Tualo
            </Link>
          </span>
          , while also carrying out{" "}
          <span>
            <Link
              href={""}
              className="text-zinc-900 underline underline-offset-2 font-semibold"
            >
              freelance projects
            </Link>
          </span>{" "}
          that allow me to explore different environments and address exciting
          technological challenges. <br /> <br /> When I'm not working or
          studying , I enjoy immersing myself in blogs about the technologies
          that interest me to stay up to date, experiment with new projects, and
          generate innovative ideas. In my free time, I also love to spend time
          with friends, explore the outdoors or stay home doing nothing, it
          depends on the weather 😊. <br />
          For me, it's about balancing work, learning and fun while making the
          most of every opportunity to grow. 🚀
        </p>
      </div>

      <div className="mt-4">
        <p className="font-semibold text-2xl mb-2">Soft skills</p>
        <p className="text-zinc-500 text-lg">
          <span className="font-semibold text-zinc-900">Teamwork:</span> Adaptability in collaborative environments to achieve common
          goals.
        </p>
        <p className="text-zinc-500 text-lg">
          <span className="font-semibold text-zinc-900">Proactivity</span>: Ability to identify and optimize processes by
          anticipating needs.
        </p>
        <p className="text-zinc-500 text-lg">
          <span className="font-semibold text-zinc-900">Communication</span>: Strong relationship-building skills with clients and
          colleagues.
        </p>
        <p className="text-zinc-500 text-lg">
          <span className="font-semibold text-zinc-900">Problem-Solving</span>: Talent for finding creative solutions to
          technological challenges.
        </p>
      </div>
    </div>
  );
}
