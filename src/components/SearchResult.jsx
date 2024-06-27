import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchHeader from './SearchHeader';
import Footer from './Footer';
import { Context } from '../utils/ContextApi';
import { fetchDataFromApi } from '../utils/api';
import SearchedItemTemplate from './SearchedItemTemplate';
import SearchedImageItemTemplate from './SearchedImageItemTemplate';
import Pagination from './Pagination';
import { pagination } from '../utils/Constants';



const SearchResult = () => {
      
  // console.log(useParams());
  const [result,setResult]=useState();
  const{searchIndex,setQuery  }=useParams();
     
    const {imageSearch }=useContext(Context);



  const fetchSearchResult=()=>{
        let payload={q:setQuery,start:searchIndex }

        if(imageSearch){
          payload.searchType="image"
        }

        fetchDataFromApi(payload).then((res)=>{ 
           console.log(res)
           setResult(res);
        })
  }

  useEffect(()=>{
    fetchSearchResult();
  },[ setQuery,searchIndex,imageSearch ])
 
  if(!result) return;
  const{items,queries,searchInformation }=result

       
  return (
    <div className='flex flex-col min-h-[100vh] '  >
    
  <SearchHeader/>
  <main className=' grow p-[12px] pb-0 md:pr-5 md:pl-20 ' >

       <div className='text-[#70757a] text-sm pb-2 ' >
          { `About ${searchInformation?.totalResults} results in ${searchInformation?.formattedSearchTime} ms` }
       </div>

       {
        !imageSearch ?(
          <>
          {
            items.map((item,index)=>( 
              <SearchedItemTemplate  key={index} data={item}  />
              )
            )
          }
          </>
        ):(

        <div className=' grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 ' >
            {
              items.map((item,index)=>(
                <SearchedImageItemTemplate key={index} data={item} />
              ))
            }
        </div>  
          
        )
       }

  </main>

     <Pagination  queries={queries}   />
  <Footer/>

    </div>
  )
}

export default SearchResult
