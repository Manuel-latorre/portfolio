"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { JSX } from 'react'

interface Props{
    pathname:string;
    name:string;
    icon:JSX.Element;
}

const Navlinks = ({pathname, name, icon}: Props) => {
  const path = usePathname()

  return (
    <Link href={pathname} className={`capitalize py-2 px-4 flex items-center gap-1 rounded-full ${path === pathname ? "bg-black text-white" : ""}`}>
        {path === pathname ? icon : null}
        {name}
    </Link>
  )
}

export default Navlinks