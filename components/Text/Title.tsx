"use client"

import { useLanguage } from '@/app/context/LanguageContext';
import React from 'react'

const Title = () => {
    const { language } = useLanguage();

  return (
    <h1 className='font-semibold max-sm:text-4xl max-md:text-5xl text-6xl 2xl:text-8xl'>
        {language === "es" ? "Desarrollador Frontend" : "Frontend Developer"}
    </h1>
  )
}

export default Title