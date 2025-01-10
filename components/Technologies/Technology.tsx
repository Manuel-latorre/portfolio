import React, { JSX } from 'react'

const Technology = ({icon, name} : {icon:JSX.Element, name:string}) => {
  return (
    <div className='py-2 px-4 rounded-xl bg-black flex items-center gap-2 text-white font-medium w-fit'>
        {icon}
        <p>{name}</p>
    </div>
  )
}

export default Technology