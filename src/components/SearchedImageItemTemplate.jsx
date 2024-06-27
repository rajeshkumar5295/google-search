import React from 'react'

const SearchedImageItemTemplate = ( {data}  ) => {
  return (
    <div className='py-3 flex flex-col  cursor-pointer ' 
      onClick={()=>window.open(data.image.contextLink)}

    >
      <div className='h-[100px] md:h-[120px] lg:h-[140px] overflow-hidden bg-black/[0.03]   ' >
        <img src={data.link} alt=""  className='h-full w-full object-contain' />
      </div>
      <div className='text-xs text-[#70757a] pt-2 ' > { data.displayLink } </div>
      <div className='text-sm text-[#3c4043] truncate pt-1 hover:underline ' > {data.title } </div>
         
    </div>
  )
}

export default SearchedImageItemTemplate
