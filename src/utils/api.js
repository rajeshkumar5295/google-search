// AIzaSyDWtq1AQO1gTMVDcAlWkddVTPK5bcxr4Kk
// cx=f4ddea7ef075c4872
// // cx=334434d443b9f4dcc

// {/* <script async src="https://cse.google.com/cse.js?cx=334434d443b9f4dcc">
// </script>
// <div class="gcse-search"></div> */}


//  https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures


//  import axios from 'axios'

//  const BASE_URL=" https://www.googleapis.com/customsearch/v1"

//  const params={
//     key:'AIzaSyDWtq1AQO1gTMVDcAlWkddVTPK5bcxr4Kk',
//     cx:'f4ddea7ef075c4872',

//  }

//  export const fetchDataFromApi= async(payload)=>{
//       const {data}= await axios.get(BASE_URL,{params:{...params,...payload}})
//       return data;
//  }

import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1"

const params={
    key:"AIzaSyB3CGqUHeQWA3izIRBQGb0eEv-2UfZeeeA",
    cx:"b6b3de00f9f394c25",
    
   

}

export const fetchDataFromApi=async(payload)=>{
    // console.log("checkin payload ",payload )
     const {data}= await axios.get(BASE_URL,{params:{...params,...payload}});
     return data;

}