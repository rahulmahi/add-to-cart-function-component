import React, { useEffect, useState } from 'react'

function About() {
    const [second,setSecond] = useState([]);

    useEffect(() =>{
        seconds();
    },[])
    const seconds = () =>{
        var v = JSON.parse(localStorage.getItem('showList'));
        setSecond(v);
    }
    const increase = (incre) => {
        const isExits = second.some( (card1) => card1.id === incre.id);
    
        if(isExits){
          const card = second.map((prod) =>{
           if(prod.id === incre.id){
             return {
               ...prod,
               qty:prod.qty+1
             }
           }else{
              return prod;
           }
          });
          setSecond(card);
        } 
      }

    const minus = (decre) =>{
        // const isExits = second.some( (card2) => card2.id === decre.id);
    
        // if(isExits){
    if(decre.qty > 1){
          const cards = second.map((prods) =>{
           if(prods.id === decre.id){
             return {
               ...prods,
               qty:prods.qty-1
             }
           }else{
              return prods;
           }
          });
          setSecond(cards);
        } 
      }
    return (
    <div className='shows'>
         {second.map((val,index) =>
           <div key={index}>
               <img src={val.image} className='show'/>
               <h2> id : {val.id}</h2>
               <p>description : {val.description}</p>
               <p>qty : {val.qty}</p>
               <button onClick={() => increase(val)}>+</button>
               <button>Remove</button>
               <button onClick={() =>minus(val)}>-</button>
           </div>
        )} 

    </div> 
  )
}

export default About