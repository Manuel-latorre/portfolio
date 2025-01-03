
import CornerIcon from '@/icons/CornerIcon'
import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { BentoDemo } from './LayoutHome'

const HomeCard = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className='flex items-start gap-4'>
            <h1 className='font-semibold 2xl:text-9xl'>Frontend Developer</h1>
            <CornerIcon/>
        </div>
        <p className='xl:text-2xl'>+1 year experience developing software || Student of Systems Engineering</p>
        {/* <div>
        </div>
        <div className='flex items-center gap-4 h-full'>
            <div className='w-[70%] bg-[#f4f4f4] py-4 px-6 rounded-xl h-full flex flex-col justify-end border-4  border-zinc-200 border-dashed'>
                <div className='flex items-end gap-2'>
                    <UserIcon width={40} height={40}/>
                    <p className='font-semibold text-2xl'>About me</p>
                </div>
            </div>
            <div className='w-[30%] bg-[#f4f4f4] py-4 px-6 rounded-xl h-full'>

            </div>
        </div>
        <div className='flex items-center gap-4 h-full'>
            <div className='w-[30%] bg-[#f4f4f4] py-4 px-6 rounded-xl h-full'>

            </div>
            <div className='w-[70%] bg-[#f4f4f4] py-4 px-6 rounded-xl h-full'>

            </div>
        </div> */}
        <BentoDemo/>
    </div>
  )
}

export default HomeCard