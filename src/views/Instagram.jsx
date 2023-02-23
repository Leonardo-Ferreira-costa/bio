// // import './Instragram.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Instragram = () => {
    
//     const _cookie = 'mid=Y_Z8YAALAAG-l4nfl5iH1DdLlRJg; ig_did=F243F134-89CB-4406-92A7-FDDF375B8E17; ig_nrcb=1; datr=TX_2Y6oKTRVQC0EncuGTIAbC; csrftoken=810DbqsFJlWjGV3kuxRQZqZEWvCDLiUf; ds_user_id=393757399; shbid="8999\\054393757399\\0541708634843:01f763cded8ba694d85caea676e3a4879b36c1873bb1b7b342c7bdc9b6fb06f47951941e"; shbts="1677098843\\054393757399\\0541708634843:01f7f83db9f8c13deba58590f2a61f1897fcda88c1a4ca47177f0ab9fe2a72eaecd59f8a"; sessionid=393757399%3Ag9S8u0Jgeq3awr%3A9%3AAYfoIdjkzH8O88BlTXD61rGrM1HaLKAzJngPWyHzRQ; rur="VLL\\054393757399\\0541708643528:01f7e1e04fe33148de5b5cb65b8e5a9572174588f212d976d571466a2bac8e77f41114ee"'
//     const _userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'  
//     const _xIgAppId = '936619743392459'

//     const [photos,setPhotos] = useState([])

//     useEffect(()=>{
//         const fetchPhotos = async ()=>{
//             try{
//                 const res = await axios.get("https://www.instagram.com/p/B0zfntvHOMf/",{

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

//                     id: "B0zfntvHOMf"                       // <!-- id is required

   

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