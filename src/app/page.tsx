import Image from "next/image";
import AboutMe from "./aboutMe/page";
import TuMejorAmigo from "./experiencie/TuMejorAmigo";
import Gentech from "./experiencie/Gentech";
import TechShopApi from "./projects/TechShopApi";
import Api from "./projects/Api";
import Technologies from "./technologies/page";
import Studies from "./studies/Studies";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="h-full w-full bg-black  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex flex-col lg:gap-36 max-lg:gap-5">
        <AboutMe/>
        <TuMejorAmigo/>
        <Gentech/>
        <TechShopApi/>
        <Api/>
        <Technologies/>
        <Studies/>
        <Footer/>
    </div>
  );
}
