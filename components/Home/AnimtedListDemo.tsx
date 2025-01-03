"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../ui/animated-list";
import NextjsIcon from "@/icons/NextjsIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import ReactIcon from "@/icons/ReactIcon";
import NodeIcon from "@/icons/NodeIcon";
import HtmlIcon from "@/icons/HtmlIcon";
import CssIcon from "@/icons/CssIcon";
import SupabaseIcon from "@/icons/SupabaseIcon";
import JavascriptIcon from "@/icons/JavascriptIcon";
import FigmaIcon from "@/icons/FigmaIcon";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "NextJs",
    description: "Favorite framework",
    time: "",
    icon: <NextjsIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Typescript",
    description: "I currently use it in my work",
    time: "",
    icon: <TypescriptIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Javacript",
    description: "I currently use it in my work",
    time: "",
    icon: <JavascriptIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Tailwind",
    description: "Excellent to write inline style",
    time: "",
    icon: <TailwindIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "React",
    description: "Learned in Henry Bootcamp",
    time: "",
    icon: <ReactIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Node",
    description: "Lorem opsum",
    time: "",
    icon: <NodeIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Html",
    description: "Learned in Henry Bootcamp",
    time: "",
    icon: <HtmlIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Css",
    description: "Learned in Henry Bootcamp",
    time: "",
    icon: <CssIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Supabase",
    description: "Learned in Henry Bootcamp",
    time: "",
    icon: <SupabaseIcon width={40} height={40}/>,
    color: "",
  },
  {
    name: "Figma",
    description: "Learned in Henry Bootcamp",
    time: "",
    icon: <FigmaIcon width={40} height={40}/>,
    color: "",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item as any} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
