import React, { useEffect } from "react";
import { useState } from "react";
import mic from "../assets/mic.svg";
import cam from "../assets/image.svg";
import { useNavigate, useParams } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";



const Searchinput = () => {

     const{searchIndex,setQuery  }=useParams();
     const [searchQuery,SetsearchQuery]=useState(  setQuery ||"");
     
     const navigate=useNavigate();
    

     const QueryHandler=(e)=>{ 
      //  console.log(e)
      if(e.key === "Enter" && searchQuery.length>0){
        navigate(`/${searchQuery}/${1}`);
      
      }

     }
  return (
    <div className=" flex h-[46px] items-center gap-3 px-4 w-full md:w-[584px]   rounded-3xl border  border-[#f1e8e8]   hover:bg-white hover:shadow-c hover:border-0 focus-within:shdow-c focus-within:border-0 ">
      <TbSearch  size={20} color="#9aa0a6" />
      <input  
        type="text"
        className=" flex grow outline-0 text-black/[0.87] " 
        value={searchQuery}
         onChange={(e)=>SetsearchQuery(e.target.value)} 
         onKeyUp={QueryHandler}
       />
      <div className="flex gap-3  justify-center">
          {
            searchQuery && (
              <IoMdClose  
              size={20} 
              color="#70757a" 
              className="cursor-pointer"
              onClick={(e)=>SetsearchQuery("")}
                 
              />
            )
          }

        <img src={mic} alt="" className="h-6 w-6 cursor-pointer " />
        <img src={cam} alt="" className="h-6 w-6 cursor-pointer " />
      </div>
    </div>
  );
};

export default Searchinput;
