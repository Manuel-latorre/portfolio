import React from 'react'
import Navlinks from './Navlinks'
import { UserIcon } from 'lucide-react'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon } from '@heroicons/react/24/outline'


const navlinks = [
    {
        name: "about me",
        pathname: "/about-me",
        icon: <UserIcon width={20} height={20}/>
    },
    {
        name: "experience",
        pathname: "/experience",
        icon: <BriefcaseIcon width={20} height={20}/>
    },
    {
        name: "education",
        pathname: "/education",
        icon: <BookOpenIcon width={20} height={20}/>,
    },
    {
        name: "technologies",
        pathname: "/technologies",
        icon: <CodeBracketIcon width={20} height={20}/>
    }
]

const Navbar = () => {
    return (
        <nav className='flex h-[60px] w-full items-center justify-center max-md:justify-between max-lg:w-[95%] lg:w-[70%] mx-auto sticky top-3 mt-3 nav rounded-full px-2 z-50'>
                {
                    navlinks.map((link) => (
                        <Navlinks pathname={link.pathname} name={link.name} key={link.pathname} icon={link.icon}/>
                    ))
                }
        </nav>
    )
}

export default Navbar