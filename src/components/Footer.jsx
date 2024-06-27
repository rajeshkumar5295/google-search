import React from 'react'

import { quickLinks } from '../utils/Constants'
import { settingMenu } from '../utils/Constants'



const Footer = () => {
  return (
    <div className='flex flex-col  bg-[#f2eaea] rounded-md px-4 gap-1  py-3' >
         <div className='border-b border-[#c6baba] py-1 '  >
          <span  className='text-[#70767a]  text-[15px] leading-none ' > India </span>
         </div>

         <div  className='flex  flex-col md:flex-row  md:justify-between py-3 md:py-1 ' >
            <div  className='flex gap-3  justify-center' >
              {quickLinks.map((item,index)=>{
                // console.log(item)
                 return(
                  <span  key={index}  className='cursor-pointer hover:underline text-[12px] md:text-[14px] text-[#70757a] leading-none ' >
                    {item}
                  </span>
                 )
              })}
            </div>
              <div className='flex gap-3  justify-center mt-2 md:mt-0' >
               {
                settingMenu.map((item,index)=>{
                  return(
                    <span  key={index}  className='cursor-pointer hover:underline text-[12px]  md:text-[14px]  text-[#70757a] leading-none '  >
                      {item}
                    </span>
                  )
                })
               }
              </div> 
         </div>
    </div>
  )
}

export default Footer
