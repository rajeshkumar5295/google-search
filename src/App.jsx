import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import { AppContext } from './utils/ContextApi'



function App() {


  return (
    <>  
     <AppContext>
     <Router>
         <Routes>
           <Route  path='/' exact    element={<Home/>} />
           <Route  path='/:setQuery/:searchIndex'  element={<SearchResult/>}  />
         </Routes>
       </Router>
 
     </AppContext>
    </>
  )
}

export default App
