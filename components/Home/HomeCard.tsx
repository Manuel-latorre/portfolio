import React from 'react'
import { BentoDemo } from './LayoutHome'
import TranslationButtons from '../Buttons/TranslateButtons'
import Title from '../Text/Title'
import Text from '../Text/Text'
import TranslationSwitch from '../Buttons/TranslateButtons'
import Image from 'next/image'
import profile from '../../images/profile1.svg'


const HomeCard = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='lg:hidden pb-5 flex justify-between border-b border-dashed mb-5'>
        <Image src={profile} alt='Profile image' width={50} height={50}/>
        <TranslationSwitch/>
      </div>
        <div className='mb-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-start gap-4'>
                 <Title/>
                  <div className='max-sm:hidden flex flex-col'>
                      <div className='p-0.5 md:p-1 bg-black w-3 md:w-5'></div>
                      <div className='p-0.5 md:p-1 bg-black w-3 md:w-5 rotate-90 translate-x-1.5'></div>
                  </div>
              </div>
            </div>
            <Text 
              className='max-md:text-sm xl:text-2xl' 
              textEs='+1 año de experiencia desarrollando software & Estudiante de Ingeniera en Sistemas' 
              textEn='+1 year experience developing software & Student of Systems Engineering'
              />
        </div>
            <BentoDemo />
    </div>
  )
}

export default HomeCard