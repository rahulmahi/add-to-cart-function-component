import React, { useState } from "react";
import Product from "../product/Product";
import Child from "../sub-Child/Child";

function CartItem() {
  const [arr] = useState({
    list: [
      { id: 1, image: require("../images/dove.jpg"), qty: 1 },
      { id: 2, image: require("../images/dove.jpg"), qty: 1 },
      { id: 3, image: require("../images/dove.jpg"), qty: 1 },
    ],
  });
  const [store, set] = useState([]);

  const stores = (d) => {
    console.log(d);
    const checking = store.includes(d);
    if (checking === false) {
      set([...store,d]);
      console.log(store);
      console.log("hii");
    } else {
        d.qty += 1;
        set(...arr.list,d);
    }
  };
  return (
    <div>
      {arr.list.map((data, index) => (
        <Product data={data} key={index} stores={stores} />
      ))}

    {store.map((data, index) => (
        <Child data={data} key={index}/>
      ))}
      
    </div>
  );
}

export default CartItem;
