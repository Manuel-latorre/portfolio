import Image from 'next/image'
import profile from './../images/profile.svg'


const ProfileIcon = () => {
  return (
    <Image src={profile} alt="Profile" width={50} height={50}/>
  )
}

export default ProfileIcon