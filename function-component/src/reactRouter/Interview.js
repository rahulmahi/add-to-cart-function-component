import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './interview.css'
import { Secondshow } from './secondshow';

export default function Interview() {
  const [arr,mainFun] = useState([]);
  const[next,setNext] = useState([]);

    useEffect( () =>{
         setFun()
    },[]);
    
    const setFun = async() =>{ 
     const res = await axios.get('http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products/seller?sellerId=6108fb29f58bf55437a79e44')
    //  let a = res.data.data
    console.log('res',res);
       mainFun(a);
      //  console.log(a)
      }
//  const clc = (data) =>{
//      setNext(data);
//      console.log(next);
 }

   return (
//     <div className='main'>
//       {
//         arr.map((data,id)=>{
//           return(
//             <div key={id} className='list'>
//               <p>{data.name}</p>
//               <img src={data.image} /><br />
//               <button onClick={() =>clc(data)}>Add to Cart</button>
//             </div>
//           )
//         })
//       }
//       {next.map((sec,index)=>{
//           <Secondshow sec={sec} key={index}/>
// })}

//     </div>
<div>

</div>
  )
}
