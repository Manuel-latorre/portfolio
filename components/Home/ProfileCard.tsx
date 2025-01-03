import Image from 'next/image'
import React from 'react'
import profile from '../../images/profile.svg'
import GithubIcon from '@/icons/GithubIcon'
import Link from 'next/link'
import LinkedInIcon from '@/icons/LinkedInIcon'
import InboxIcon from '@/icons/InboxIcon'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'


const ProfileCard = () => {
  return (
    <div className='bg-[#f4f4f4] py-4 px-6 flex flex-col rounded-xl justify-between'>
        <div className='flex flex-col gap-6'>
            <Image src={profile} alt='Profile picture' width={400} height={400}/>
            <div className='flex flex-col gap-4'>
                <h2 className='text-7xl'>Im, <br /> <span className='font-semibold'>Manuel <br /> Latorre</span></h2>
            </div>
            <div className='flex items-end gap-6 mt-2'>
                <Link href={"https://github.com/Manuel-latorre"} target='_blank'>
                <GithubIcon width={30} height={30}/>
                </Link>

                <Link href={"https://www.linkedin.com/in/manuel-latorre-936b72223/"} target='_blank'>
                <LinkedInIcon width={30} height={30}/>
                </Link>

                <Link href={"https://www.linkedin.com/in/manuel-latorre-936b72223/"} target='_blank' className='flex items-start gap-2 rounded-xl text-black underline underline-offset-2 text-lg'>
                    Resume
                    <div className='p-1 rounded-full border border-black'>
                    <ArrowUpRightIcon width={14} height={14}/>
                    </div>
                </Link>
            </div>
        </div>
        <div className='flex flex-col gap-6'>

            <div className='flex items-center gap-2'>
                <p className='font-thin text-lg underline underline-offset-8 decoration-dashed'>manuel.latorre11@gmail.com</p>
                <InboxIcon width={20} height={20}/>
            </div>
        </div>

    </div>
  )
}

export default ProfileCard