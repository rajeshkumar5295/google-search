import React, { useEffect, useState } from 'react';

import { pagination } from '../utils/Constants';
import { useNavigate, useParams } from 'react-router-dom';

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import logo from "../assets/google-pagination-logo.png"
// import plugin from 'tailwindcss';

const Pagination = ( {queries}  ) => {

      const {setQuery} =useParams();
      const[page,setPage]=useState(pagination[0].startIndex)
      const navigate=useNavigate();

      useEffect(()=>{
        setPage(pagination[0].startIndex);
      },[setQuery])
      
      const paginationClickHandler=(startIndex)=>{
        setPage(startIndex);
        navigate(`/${setQuery}/${startIndex}`);
        
      }
  return (

    <div className='flex flex-col items-center py-14 max-w-[700px] ' >

       <div className='relative text-[#4285f4] ' >
         {
          queries.previousPage && ( 
            <div className='absolute left-[-30px] md:left-[-40px] top-[10px]   ' 
             onClick={()=>paginationClickHandler(queries.previousPage[0].startIndex)}
            >  
             <FiChevronLeft size={20} className='cursor-pointer' /> 
               <div className='cursor-pointer absolute left-[-5px] top-[30px] hidden md:block ' >
                Prev
               </div>
            
               </div>
          )
         }
         <img src={logo} alt="" className='w-[250px] md:w-[300px] '  />
        
         {
          queries.nextPage  && ( 
            <div className='absolute right-[-30px] md:right-[-40px] top-[10px]   ' 
             onClick={()=>paginationClickHandler(queries.nextPage[0].startIndex)}
            >  
             <FiChevronRight size={20} className='cursor-pointer' /> 
               <div className='cursor-pointer absolute left-[-5px] top-[30px] hidden md:block ' >
                next
               </div>
            
               </div>
          )
         }

       </div>

      

       <div className='flex gap-3 text-[#4285f4] text-sm ' > 
       {
        pagination.map((p)=>(
          <span
           key={p.page}
           onClick={()=>paginationClickHandler(p.startIndex)}
           className={`cursor-pointer  ${page===p.startIndex? "text-black":''}`}
          >
          {p.page}
          </span>
        ))
       }
        
       </div>
    
     
    </div>

    // <div className=' flex flex-col items-center w-[700px] py-6 ' >  
    //      <div className='relative text-[#2f35e8] ' >  
    //         { 
    //          queries.previousPage && (
    //           <div className=' absolute  left-[-34px] top-[35px] ' >  
    //             <FiChevronLeft/>
    //             <div>prev</div>
                     
    //            </div>
    //          )

    //         }
    //         <img src={logo} alt=""  className=' w-[250px] md:w-[300px]  '  />
    //         {
    //           queries.nextPage && (
    //              <div className='absolute right-[-40px] ' > 
    //                 <FiChevronRight/>
    //                 <div> next</div>
    //                </div>
    //           )

    //         }
    //      </div>

    //      <div  className='md:flex md:gap-2 hidden md:block ' >
    //       {
    //         pagination.map((p)=>(
    //           <span className='' >
    //              {p.page}
    //           </span>
    //         ))
    //       }
    //      </div>
        
    // </div>

  )
}

export default Pagination
