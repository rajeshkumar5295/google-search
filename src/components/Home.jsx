import React from 'react'
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import Searchinput from './Searchinput'
import logo from "../assets/Google-logo.png";


const Home = () => {
  return (
   <div className=' h-[100vh] flex flex-col  ' >
       <HomeHeader/>
       <main  className=' flex grow justify-center ' >
         <div className=' w-full flex  items-center flex-col mt-44 px-5  ' > 
           <img src={logo} alt="" className='  w-[172px] md:w-[272px] p-7 ' />
           <Searchinput/>
           <div  className='flex gap-10 mt-8 text-[#3c4043] '  >
             <button  className=' h-9 p-2 rounded-md border border-[#eef2f6] hover:border-[#dadce0] hover:shadow-c2 '  > Google Search </button>
             <button className=' h-9 p-2 rounded-md border border-[#eef2f6] hover:border-[#dadce0] hover:shadow-c2 '  > I'm felling Lucky  </button>
           </div>

         </div>

       </main>
       <Footer/>
   </div>
  )
}

export default Home
