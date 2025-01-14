import Image from 'next/image'
import React from 'react'
import profile from '../../images/profile1.svg'
import Links from '../Links/Links'
import Text from '../Text/Text'
import TranslationSwitch from '../Buttons/TranslateButtons'
import ThemeToggle from '../Buttons/DarkLightButton'



const ProfileCard = () => {
    return (
        <div className='bg-[#f4f4f4] dark:bg-zinc-900 py-4 px-6 flex flex-col justify-between rounded-xl h-full max-lg:sticky top-0 max-lg:hidden'>
            <div>
                <Image src={profile} alt='Profile picture' width={400} height={400}/>
                <div className='flex flex-col gap-4 border-b-2 border-dashed pb-4 '>
                    <h2 className='text-6xl'><Text textEn='I&apos;m,' textEs=''/> <span className='font-semibold'><span className='ml-5'>Manuel</span> <br /> <span className='ml-14'>Latorre</span></span></h2>
                </div>
                <div className='mt-6 flex flex-col justify-center items-center gap-4'>
                    <Links/>
                </div>
            </div>
            <div className='flex items-center justify-between gap-2'>
                {/* <div className='flex items-center gap-2'>
                    <p className='font-thin text-lg underline underline-offset-8 decoration-dashed'>manuel.latorre11@gmail.com</p>
                    <InboxIcon width={16} height={16} />
                </div> */}
                <TranslationSwitch/>
                <ThemeToggle/>
            </div>

        </div>
    )
}

export default ProfileCard