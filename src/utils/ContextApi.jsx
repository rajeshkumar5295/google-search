import { createContext,useState } from "react";

export const Context=createContext();

export const AppContext=(props)=>{
    //  console.log(props.children)
      
      
    const[imageSearch,setImageSearch]=useState(false);
      
    return(
           <Context.Provider value={{ imageSearch,setImageSearch }} >
            { props.children }
           </Context.Provider>
    )
}