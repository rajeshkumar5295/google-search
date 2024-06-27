import React from 'react'
import ProfileIcon from './ProfileIcon'

const HomeHeader = () => {
  return (
    <div className='h-16  flex justify-center md:justify-end   items-center  gap-4  p-4 ' >
          <div className='flex gap-3  text-black/[0.7]  '  >
              <span  className='hover:underline cursor-pointer text-[13px] ' >Gmail</span>
              <span className='hover:underline cursor-pointer text-[13px] ' >Images</span>
            </div>  
            <ProfileIcon/>    
    </div>
  )
}

export default HomeHeader
