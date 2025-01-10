import GithubWhiteIcon from "@/icons/GithubWhiteIcon";
import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const DescriptionVittanut = () => {
  return (
    <div>
      <p className="font-medium xl:text-lg mb-4">
        Vittanut is an Argentine company specializing in the production and
        export of organic pecan nuts.
      </p>
      <p className="font-semibold text-lg mb-2">Principal features</p>
      <ul className="flex flex-col gap-2">
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Responsive Design</span>
          : Built with Tailwind CSS, the site offers a seamless user experience
          across devices, ensuring adaptability from mobile to desktop.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">
            Component-Based Architecture
          </span>
          : Leveraging React and TypeScript, the codebase is modular and
          reusable, simplifying future updates and maintenance.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">SEO-Friendly</span>:
          Implemented structured metadata and dynamic routing for better search
          engine indexing.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Multi Language</span>:
          The design accommodates scalability for multi-language
          implementations. In this case, English, Spanish and German are
          available.
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
          href={"https://www.vittanut.com/"}
          target="_blank"
          className="flex items-center gap-2 bg-zinc-900 text-white p-2 w-fit rounded-lg"
        >
          <GlobeIcon width={20} height={20} /> 
          <p>Website</p>
        </Link>
        <Link
          href={"https://github.com/Manuel-latorre/vittanut"}
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

export default DescriptionVittanut;
