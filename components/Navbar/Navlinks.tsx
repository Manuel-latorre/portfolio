"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props{
    pathname:string;
    name:string;
}

const Navlinks = ({pathname, name}: Props) => {
  const path = usePathname()

  return (
    <Link href={pathname} className={`capitalize ${path === pathname ? "underline underline-offset-2" : ""}`}>
        {name}
    </Link>
  )
}

export default Navlinks