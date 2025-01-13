"use client"


import { useLanguage } from '@/app/context/LanguageContext';
import React, { JSX } from 'react'

const Text = ({className, textEs, textEn}:{className?:string, textEs:JSX.Element | string, textEn:JSX.Element | string}) => {

    const { language } = useLanguage();

  return (
    <p className={className}>
        {language === "es" ? textEs : textEn }
    </p>
  )
}

export default Text