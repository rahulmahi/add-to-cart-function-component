import React, { useState } from "react";
import Product from "../product/Product";
import Child from "../sub-Child/Child";

function CartItem() {
  const [arr] = useState({
    list: [
      { id: 1, image: require("../images/dove.jpg")},
      { id: 2, image: require("../images/dove.jpg")},
      { id: 3, image: require("../images/dove.jpg")},
    ],
  });
  const [store, set] = useState([]);

  const stores = (d) => {

    const isExits = store.some( (card) => card.id === d.id);

    if(isExits){
      const card = store.map((prod) =>{
       if(prod.id === d.id){
         return {
           ...prod,
           qty:prod.qty+1
         }
       }else{
          return prod;
       }
      });
      set([...card]);
    }else{
      set([...store,{...d,qty : 1}]);
      console.log(d);
    }  
  }

  const del = (datas) =>{
     console.log(datas);
     const temp = store.filter((prod) => prod.id !== datas.id)
     set(temp)
  }
  const minus = (data) =>{
    console.log(data);
    if(data.qty > 1){
    const card = store.map((prod) =>{
      if(prod.id === data.id){
        return {
          ...prod,
          qty:prod.qty-1
        }
      }else{
         return prod;
      }
     });
     set([...card]);
    }
    else{
      del(data);
    }  
  }
  return (
    <div>
      {arr.list.map((data, index) => (
        <Product data={data} key={index} stores={stores} />
      ))}

    {store.map((data, index) => (
        <Child data={data} key={index} dele={del} stores={stores} minus={minus}/>
      ))}
      
    </div>
  );
}

export default CartItem;
