"use client"


import { useLanguage } from '@/app/context/LanguageContext';
import React, { JSX } from 'react'

const Text = ({className, textEs, textEn}:{className?:string, textEs:JSX.Element | string, textEn:JSX.Element | string}) => {

    const { language } = useLanguage();

  return (
    <span className={className}>
        {language === "es" ? textEs : textEn }
    </span>
  )
}

export default Text