// // import './Instragram.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Instragram = () => {
    
//     const _cookie = 
//     const _userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'  
//     const _xIgAppId = '9366159'

//     const [photos,setPhotos] = useState([])

//     useEffect(()=>{
//         const fetchPhotos = async ()=>{
//             try{
//                 const res = await axios.get("https://www.instagram.com/p/B0zf/",{

//                     headers: {
//                         'cookie': _cookie,
//                         'user-agent': _userAgent,
//                         'x-ig-app-id': _xIgAppId,
//                         'Access-Control-Allow-Origin': '*',
//                         'Content-Type': 'application/json',

//                     },
//                     base64images: false,                    // <!-- optional, but without it, you will be not able to store/show images
//                     file: "instagram-cache-byidurl.json",   // <!-- optional, instagram-cache.json is by default
//                     pretty: true,                           // <!-- optional, prettyfy json true/false
//                     time: 3600,                             // <!-- optional, reload contents after 3600 seconds by default

//                     id: "B0zvHOMf"                       // <!-- id is required

   

//                 })
//                 setPhotos(res.data);
//                 console.log(res.data)

//             }catch(err){
//                 console.log(err)
//             }
//         }
//         fetchPhotos()
//     }, [])

//     console.log(photos);

//     return <>

//             <div className='mainDiv'>
//                 <h1>Instragram</h1>
//             </div>
        
//         </>;
//   };
  
//   export default Instragram;
