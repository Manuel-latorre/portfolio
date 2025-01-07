"use client"

import React, { useState } from 'react'
import GithubIcon from '@/icons/GithubIcon'
import Link from 'next/link'
import LinkedInIcon from '@/icons/LinkedInIcon'
import { ArrowUpRightIcon } from 'lucide-react'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

const Links = () => {
    const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false)
    const [isHoveredGithub, setIsHoveredGithub] = useState(false)

    return (
        <div className='flex items-center gap-3'>
            <Link
                href="https://www.linkedin.com/in/manuel-latorre-frontend-developer"
                target="_blank"
                className="relative inline-block w-[30px] h-[30px]"
                onMouseEnter={() => setIsHoveredLinkedin(true)}
                onMouseLeave={() => setIsHoveredLinkedin(false)}
            >
                <div
                    className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                    style={{ opacity: isHoveredLinkedin ? 0 : 1 }}
                >
                    <LinkedInIcon width={30} height={30} />
                </div>
                <div
                    className="absolute inset-0 transition-opacity duration-300 ease-in-out rotate-45"
                    style={{ opacity: isHoveredLinkedin ? 1 : 0 }}
                >
                    <ArrowUpCircleIcon width={30} height={30} />
                </div>
            </Link>

            <Link 
                href={"https://github.com/Manuel-latorre"} 
                target='_blank'
                className="relative inline-block w-[30px] h-[30px]"
                onMouseEnter={() => setIsHoveredGithub(true)}
                onMouseLeave={() => setIsHoveredGithub(false)}
                >
                <div
                    className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                    style={{ opacity: isHoveredGithub ? 0 : 1 }}
                >
                    <GithubIcon width={30} height={30} />
                </div>
                <div
                    className="absolute inset-0 transition-opacity duration-300 ease-in-out rotate-45"
                    style={{ opacity: isHoveredGithub ? 1 : 0 }}
                >
                    <ArrowUpCircleIcon width={30} height={30} />
                </div>
            </Link>

            <Link href={"https://www.linkedin.com/in/manuel-latorre-936b72223/"} target='_blank' className='flex items-start gap-2 rounded-xl text-black underline underline-offset-2 text-lg'>
                <p>Resume</p>
            </Link>
        </div>
    )
}

export default Links