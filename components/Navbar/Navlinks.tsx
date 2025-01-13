"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { JSX } from 'react'

interface Props{
    pathname:string;
    name:JSX.Element | string;
    icon:JSX.Element;
}

const Navlinks = ({pathname, name, icon}: Props) => {
  const path = usePathname()

  return (
    <Link href={pathname} className={`capitalize py-2 px-4 flex items-center gap-1 rounded-full max-md:w-full max-md:justify-center ${path === pathname ? "bg-black text-white" : " max-md:bg-black/40"}`}>
        <div className='max-md:hidden'>
          {path === pathname ? icon : null}
        </div>
        <div className='md:hidden'>
          {icon}
        </div>
        <div className='max-md:hidden'>
          {name}  
        </div>
    </Link>
  )
}

export default Navlinks