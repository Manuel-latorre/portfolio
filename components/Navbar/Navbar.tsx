import React from "react";
import Navlinks from "./Navlinks";
import { UserIcon } from "lucide-react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import TranslationButtons from "../Buttons/TranslateButtons";
import Text from "../Text/Text";

const navlinks = [
  {
    name: "home",
    pathname: "/",
    icon: <HomeIcon width={20} height={20} />,
  },
  {
    name: <Text textEn="about me" textEs="sobre mí"/>,
    pathname: "/about-me",
    icon: <UserIcon width={20} height={20} />,
  },
  {
    name: <Text textEn="experience" textEs="experiencia"/>,
    pathname: "/experience",
    icon: <BriefcaseIcon width={20} height={20} />,
  },
  {
    name: <Text textEn="education" textEs="educación"/>,
    pathname: "/education",
    icon: <BookOpenIcon width={20} height={20} />,
  },
  {
    name: <Text textEn="technologies" textEs="tecnologías"/>,
    pathname: "/technologies",
    icon: <CodeBracketIcon width={20} height={20} />,
  },
];

const Navbar = () => {
  return (
    <div className="max-md:flex max-md:justify-center">
      <nav className="flex h-[60px] w-full items-center justify-between max-md:justify-around max-lg:w-[95%] lg:w-[70%] mx-auto sticky md:top-3 md:mt-3 nav rounded-full px-2 z-50 max-md:bottom-3 max-md:fixed max-md:gap-2">
        <div className="flex items-center max-md:gap-4">
            {navlinks.map((link) => (
            <Navlinks
                pathname={link.pathname}
                name={link.name}
                key={link.pathname}
                icon={link.icon}
            />
            ))}
        </div>
        <div className="max-md:hidden">
        <TranslationButtons/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
