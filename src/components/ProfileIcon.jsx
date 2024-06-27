import React from 'react'
import { BsGrid3X3Gap } from "react-icons/bs";
import profilering from "../assets/profile-ring.svg"
import profileimg from "../assets/profile.jpg"

const ProfileIcon = () => {
  return (
    <div  className='flex  gap-2  justify-center items-center '   >
    
       <span  className='h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/[0.05] '  >
       <BsGrid3X3Gap size={20} color='#5f6368'  />
       </span>
       <span className='relative h-10 w-10 flex items-center justify-center '  >
          <img src={profilering}  alt=""  className='absolute     ' />
          <span className='h-8 w-8  rounded-full overflow-hidden ' >
            <img src={profileimg} alt=""  className=' h-full w-full  object-cover  ' />
          </span>
       </span>
       
          
    </div>
  )
}

export default ProfileIcon
