import React from 'react'
import './product.css'

function Product(e) { 
const fun = () =>{
  e.stores(e.data);
}
  return (
    <div>
        <img src={e.data.image} className='imge'/>
        <h1>id : {e.data.id}</h1>
        <button onClick={fun}>ADD TO CART</button>
    </div>
  )
}

export default Product