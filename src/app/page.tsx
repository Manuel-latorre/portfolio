import Image from "next/image";
import AboutMe from "./aboutMe/page";
import Experiencie from "./experiencie/page";

export default function Home() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex flex-col gap-36">
        <AboutMe/>
        <Experiencie/>
    </div>
  );
}
