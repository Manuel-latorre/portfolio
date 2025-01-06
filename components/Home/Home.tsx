import React from 'react'
import ProfileCard from './ProfileCard'
import HomeCard from './HomeCard'

const HomePage = () => {
  return (
    <div className='flex w-full h-screen sm:p-10 gap-6'>
      <ProfileCard/>
      <HomeCard/>
    </div>
  )
}

export default HomePage