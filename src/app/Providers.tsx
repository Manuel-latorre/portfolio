// app/providers.tsx
'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import {NextUIProvider} from '@nextui-org/react'

interface LanguageProviderProps {
  
}

export function Providers({children}:any) {
  return (
    <NextUIProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </NextUIProvider>
  )
}