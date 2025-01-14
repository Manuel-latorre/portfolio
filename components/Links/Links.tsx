"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpCircleIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Github, LinkedinIcon, MailIcon } from "lucide-react";
import Text from "../Text/Text";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Links = () => {
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredMail, setIsHoveredMail] = useState(false);
  const [isHoveredCv, setIsHoveredCv] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://www.linkedin.com/in/manuel-latorre-frontend-developer"
        target="_blank"
        className="relative inline-block w-[30px] h-[30px]"
        onMouseEnter={() => setIsHoveredLinkedin(true)}
        onMouseLeave={() => setIsHoveredLinkedin(false)}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHoveredLinkedin ? 0 : 1 }}
        >
          <LinkedinIcon width={30} height={30} />
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out rotate-45"
          style={{ opacity: isHoveredLinkedin ? 1 : 0 }}
        >
          <ArrowUpCircleIcon width={30} height={30} />
        </div>
      </Link>

      <Link
        href={"https://github.com/Manuel-latorre"}
        target="_blank"
        className="relative inline-block w-[30px] h-[30px]"
        onMouseEnter={() => setIsHoveredGithub(true)}
        onMouseLeave={() => setIsHoveredGithub(false)}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHoveredGithub ? 0 : 1 }}
        >
          <Github width={30} height={30} />
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out rotate-45"
          style={{ opacity: isHoveredGithub ? 1 : 0 }}
        >
          <ArrowUpCircleIcon width={30} height={30} />
        </div>
      </Link>

      <Link
        href="mailto:manuel.latorre11@gmail.com"
        target="_blank"
        className="relative inline-block w-[30px] h-[30px]"
        onMouseEnter={() => setIsHoveredMail(true)}
        onMouseLeave={() => setIsHoveredMail(false)}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHoveredMail ? 0 : 1 }}
        >
          <MailIcon width={30} height={30} />
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out rotate-45"
          style={{ opacity: isHoveredMail ? 1 : 0 }}
        >
          <ArrowUpCircleIcon width={30} height={30} />
        </div>
      </Link>

      <button
        
        onClick={() => {
          window.open("/Manuel-Latorre-Desarrollador-Frontend.pdf", "_blank");
        }}
        className="relative inline-block w-[30px] h-[30px]"
        onMouseEnter={() => setIsHoveredCv(true)}
        onMouseLeave={() => setIsHoveredCv(false)}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHoveredCv ? 0 : 1 }}
        >
          <DocumentTextIcon width={30} height={30}/>
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out rotate-45"
          style={{ opacity: isHoveredCv ? 1 : 0 }}
        >
          <ArrowUpCircleIcon width={30} height={30} />
        </div>
      </button>

    </div>
  );
};

export default Links;
