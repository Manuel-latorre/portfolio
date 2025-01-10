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

const DescriptionDiarc = () => {
  return (
    <div>
      <p className="font-medium xl:text-lg mb-4">
        3D Art Outsourcing Studio focused on the development of Immersive
        Experiences, Metaverses and Gaming.
      </p>
      <p className="font-semibold text-lg mb-2">Principal features</p>
      <ul className="flex flex-col gap-2">
        <li className="text-lg">
          <span className="font-semibold text-gray-600">
            Interactive Portfolio
          </span>
          : The site includes a portfolio section showcasing completed projects,
          categorized into areas such as web, mobile, console, desktop, AR, and
          VR development.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">
            Animations and Transitions
          </span>
          : Subtle animations enhance the user experience, including hover
          effects and scroll-based highlights.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Admin Panel</span>: The
          site features a secure admin panel that allows the administrator to
          efficiently manage portfolio content.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600"> CRUD Operations</span>:
          The admin can create, read, update, and delete projects via the admin
          panel, ensuring the portfolio is always up-to-date.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600"> SEO</span>: Search
          engine optimization practices, such as appropriate meta tags, friendly
          URLs, and relevant content, are applied to improve the site&apos;s
          visibility in search results.
        </li>
      </ul>

      <div className="mt-4">
        <p className="font-semibold text-lg mb-2">Technology Stack</p>
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

export default DescriptionDiarc;
