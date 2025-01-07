import Link from 'next/link'
import React from 'react'
import Navlinks from './Navlinks'


const navlinks = [
    {
        name: "about me",
        pathname: "/about-me"
    },
    {
        name: "experience",
        pathname: "/experience",
    },
    {
        name: "education",
        pathname: "/education"
    },
    {
        name: "skills & technologies",
        pathname: "/skills/technologies"
    }
]

const Navbar = () => {
    return (
        <nav className='flex h-[60px] w-full items-center justify-center max-lg:w-[90%] lg:w-[70%] mx-auto sticky top-0 mt-5 bg-gray-300 rounded-xl'>
            <div className='flex items-center gap-4'>
                {
                    navlinks.map((link) => (
                        <Navlinks pathname={link.pathname} name={link.name} key={link.pathname}/>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar