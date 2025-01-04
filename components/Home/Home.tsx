import React from 'react'
import ProfileCard from './ProfileCard'
import HomeCard from './HomeCard'

const HomePage = () => {
  return (
    <div className='xl:min-h-screen flex w-full sm:p-10 gap-6'>
      <ProfileCard/>
      <HomeCard/>
    </div>
  )
}

export default HomePage