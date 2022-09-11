
import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

export const Api = () => {
    
const [toods, setToods] = useState([]);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => setToods(json));
// }, []);

const Toods = async () =>{
  //  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  //  console.log('res',res.json());

  const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
  setToods(res.data);
}
  return (
    <div>
         {toods?.map((item,index) =><p key={index}>{item.title}</p>)}
    </div>
  )
}


