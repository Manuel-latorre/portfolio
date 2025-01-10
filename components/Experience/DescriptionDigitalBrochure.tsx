import GithubWhiteIcon from "@/icons/GithubWhiteIcon";
import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const DescriptionDigitalBrochure = () => {
  return (
    <div>
      <p className="font-medium xl:text-lg mb-4">
      Interactive Digital Brochure was designed to optimize the marketing and sales processes of real estate developments.
      </p>
      <p className="font-semibold text-lg mb-2">Principal features</p>
      <ul className="flex flex-col gap-2">
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Global Accessibility</span>
          : The brochure is accessible online from anywhere in the world, making it easy to promote and share real estate projects with a wide audience.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">
          Arcane Mirage Component Integration
          </span>
          : The site integrates a component from Arcane Mirage, which likely enhances the 3D visualization and interactivity of the brochure. This integration provides a sophisticated and immersive user experience, showcasing detailed real estate layouts and masterplans.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Bilingual Support</span>:
          The website includes a language switcher, offering content in English and Spanish, ensuring accessibility to a broader, multilingual audience.
        </li>
      </ul>

      <div className="mt-4">
        <p className="font-semibold text-lg mb-2">Technology Stack</p>
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
        <p className="font-semibold text-lg mb-2">
          Visit website or repository here!
        </p>
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
