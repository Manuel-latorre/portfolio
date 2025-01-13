import Image from 'next/image'
import React from 'react'
import profile from '../../images/profile.svg'
import InboxIcon from '@/icons/InboxIcon'
import Links from '../Links/Links'
import Text from '../Text/Text'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import CVbutton from '../Buttons/CVbutton'



const ProfileCard = () => {
    return (
        <div className='bg-[#f4f4f4] py-4 px-6 flex flex-col justify-between rounded-xl h-full max-lg:sticky top-0 max-lg:hidden'>
            <div>
                <Image src={profile} alt='Profile picture' width={400} height={400} />
                <div className='flex flex-col gap-4 border-b-2 border-dashed pb-4 '>
                    <h2 className='text-6xl'><Text textEn='Im,' textEs='Soy,'/> <span className='font-semibold'><span className='ml-5'>Manuel</span> <br /> <span className='ml-14'>Latorre</span></span></h2>
                </div>
                <div className='mt-6 flex flex-col justify-center items-center gap-4'>
                    <Links/>
                    <CVbutton/>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <p className='font-thin text-lg underline underline-offset-8 decoration-dashed'>manuel.latorre11@gmail.com</p>
                    <InboxIcon width={16} height={16} />
                </div>
            </div>

        </div>
    )
}

export default ProfileCard