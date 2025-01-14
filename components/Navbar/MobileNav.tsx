import Image from 'next/image'
import profile from '../../images/profile1.svg'
import TranslationSwitch from '../Buttons/TranslateButtons'

const MobileNav = () => {
  return (
    <div className='md:hidden p-5 flex justify-between border-b border-dashed mb-5 sticky top-0 nav z-50'>
        <Image src={profile} alt='Profile image' width={50} height={50}/>
        <TranslationSwitch/>
      </div>
  )
}

export default MobileNav