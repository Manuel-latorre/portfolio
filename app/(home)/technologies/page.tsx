import Technology from "@/components/Technologies/Technology"
import CssIcon from "@/icons/CssIcon"
import ExpressIcon from "@/icons/ExpressIcon"
import GithubWhiteIcon from "@/icons/GithubWhiteIcon"
import GitIcon from "@/icons/GitIcon"
import HtmlIcon from "@/icons/HtmlIcon"
import JavascriptIcon from "@/icons/JavascriptIcon"
import MongodbIcon from "@/icons/MongodbIcon"
import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon"
import NodeIcon from "@/icons/NodeIcon"
import NotionIcon from "@/icons/NotionIcon"
import NpmIcon from "@/icons/NpmIcon"
import PowershellIcon from "@/icons/PowershellIcon"
import ReactIcon from "@/icons/ReactIcon"
import SlackIcon from "@/icons/SlackIcon"
import SupabaseIcon from "@/icons/SupabaseIcon"
import TailwindIcon from "@/icons/TailwindIcon"
import TrelloIcon from "@/icons/TrelloIcon"
import TypescriptBlackIcon from "@/icons/TypescriptIconBlack"

const stack = [
    {
        name: "HTML",
        icon: <HtmlIcon width={28} height={28}/>
    },
    {
        name: "CSS",
        icon: <CssIcon width={28} height={28}/>
    },
    {
        name: "Javascript",
        icon: <JavascriptIcon width={28} height={28}/>
    },
    {
        name: "Typescript",
        icon: <TypescriptBlackIcon width={28} height={28}/>
    },
    {
        name: "Tailwind css",
        icon: <TailwindIcon width={28} height={28}/>
    },
    {
        name: "React",
        icon: <ReactIcon width={28} height={28}/>
    },
    {
        name: "Next Js",
        icon: <NextjsWhiteIcon width={28} height={28}/>
    },
    {
        name: "Node",
        icon: <NodeIcon width={28} height={28}/>
    },
    {
        name: "Express",
        icon: <ExpressIcon width={28} height={28}/>
    },
    {
        name: "Mongo db",
        icon: <MongodbIcon width={28} height={28}/>
    },
    {
        name: "Supabase",
        icon: <SupabaseIcon width={28} height={28}/>
    },
]

const control_tools = [
    {
        name: "Git",
        icon: <GitIcon width={28} height={28}/>
    },
    {
        name: "Github",
        icon: <GithubWhiteIcon width={28} height={28}/>
    },
    {
        name: "npm",
        icon: <NpmIcon width={28} height={28}/>
    },
]

const consoles = [
    {
        name: "Git Bash",
        icon: <GitIcon width={28} height={28}/>
    },
    {
        name: "Powershell",
        icon: <PowershellIcon width={28} height={28}/>
    },
]

const tools = [
    {
        name: "Slack",
        icon: <SlackIcon width={28} height={28}/>
    },
    {
        name: "Trello",
        icon: <TrelloIcon width={28} height={28}/>
    },
    {
        name: "Notion",
        icon: <NotionIcon width={28} height={28}/>
    },
]
export default async function Technologies(){
    return(
        <div className="lg:w-[70%] mx-auto mt-5 flex flex-col gap-12 h-full  max-lg:px-8">
            <div>
                <p className="font-semibold text-2xl mb-2">Technologies</p>
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        stack.map((data) => (
                            <Technology 
                                icon={data.icon}
                                name={data.name}
                                key={data.name}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <p className="font-semibold text-2xl mb-2">Version Control and Management Tools</p>
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        control_tools.map((data) => (
                            <Technology 
                                icon={data.icon}
                                name={data.name}
                                key={data.name}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <p className="font-semibold text-2xl mb-2">CLI and Consoles</p>
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        consoles.map((data) => (
                            <Technology 
                                icon={data.icon}
                                name={data.name}
                                key={data.name}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <p className="font-semibold text-2xl mb-2">Project management</p>
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        tools.map((data) => (
                            <Technology 
                                icon={data.icon}
                                name={data.name}
                                key={data.name}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}