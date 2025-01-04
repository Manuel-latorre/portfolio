
import CornerIcon from '@/icons/CornerIcon'
import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { BentoDemo } from './LayoutHome'

const HomeCard = () => {
  return (
    <div className='flex flex-col w-full justify-between'>
        <div className='mb-4'>
            <div className='flex items-start gap-4'>
                <h1 className='font-semibold lg:text-6xl 2xl:text-9xl'>Frontend Developer</h1>
                <div className='flex flex-col'>
                    <div className='p-1 bg-black w-5'></div>
                    <div className='p-1 bg-black w-5 rotate-90 translate-x-1.5'></div>
                </div>
            </div>
            <p className='xl:text-2xl'>+1 year experience developing software || Student of Systems Engineering</p>
        </div>
        <BentoDemo/>
    </div>
  )
}

export default HomeCard