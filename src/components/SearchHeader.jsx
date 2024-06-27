import React, { useContext, useEffect, useState } from 'react'
import Searchinput from './Searchinput'
import ProfileIcon from './ProfileIcon'
import logo from '../assets/google-logo.png'
import {menu} from "../utils/Constants"
import { Link } from 'react-router-dom'
import { Context } from '../utils/ContextApi'


const SearchHeader = () => {

  const[selectMenu,setSelectMenu]=useState("All");
  const{ setImageSearch ,imageSearch }=useContext(Context);
  // console.log(useContext(Context))
  
    // console.log(setImageSearch)
         const clickHandler=(item)=>{
          let isTypeImage=item.name==="Images"
          console.log(isTypeImage)

             setSelectMenu(item?.name)
             setImageSearch(isTypeImage?true:false)
         }
         console.log(imageSearch)

         useEffect(()=>{
              return ()=>{
                setImageSearch(false)
              }
         },[])
  return (
    <div className=' p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b  flex flex-col border border-[#f8ebeb]   items-center  md:block' >

     <div  className='flex  flex-col  justify-between md:flex-row w-full '  >
         <div className='flex gap-2 items-center  grow ' >  
              
            <Link  to="/" >     <img src={logo} alt=""  className=' hidden md:block  md:w-[92px]   ' /> </Link>
            
              
                <Searchinput from='searchResult' />
            
        </div> 
            <div  className='  hidden md:block ' >
              <ProfileIcon/>
           </div>
     </div>



      <div  className='flex gap-4 mt-3 mb-2 ml-[-10px] ' >
         {  
          menu.map((item,index)=>(
            <span key={index}  className={`flex items-center cursor-pointer gap-[3px]  text-[#5f6368]  relative ${selectMenu===item.name ? " text-[#1a73e8]  ":""  } `} 
             onClick={()=>clickHandler(item)}
            > 
              <span  className='hidden md:block mr-2'> {item.icon} </span>
              <span className='text-sm' > {item.name} </span>
             {
              selectMenu===item.name && (
                <span className='bg-[#1a73e8] h-[2px]   w-full  md:w-[calc(100%-20px)] absolute bottom-0  md:left-[23px] top-[23px] ' ></span>
              )
             }
            </span>
          ))
         }
      </div>
      
    
    </div>
  )
}

export default SearchHeader
