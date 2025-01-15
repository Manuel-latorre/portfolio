import Image from 'next/image'
import profile from '../../images/profile1.svg'
import TranslationSwitch from '../Buttons/TranslateButtons'
import ThemeToggle from '../Buttons/DarkLightButton'

const MobileNav = () => {
  return (
    <div className='md:hidden py-3 px-4 flex justify-between mb-5 sticky top-3 nav z-50 w-[95%] mx-auto rounded-full'>
        <Image src={profile} alt='Profile image' width={50} height={50}/>
        <div className='flex items-center gap-4'>
          <TranslationSwitch/>
          <ThemeToggle/>
        </div>
      </div>
  )
}

export default MobileNav