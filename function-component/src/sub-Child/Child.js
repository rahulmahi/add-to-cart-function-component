import React from 'react'

function Child(f) {

  const del = () =>{
    console.log(f);
      f.dele(f.data);
  }

  const plus = () =>{
    f.stores(f.data)
  }
  const minus = () =>{
    f.minus(f.data);
  }
  return (
    <div>
        <img src={f.data.image} className='imge'/>
        <h1>id : {f.data.id}</h1>
        <p>qty : {f.data.qty}</p>
        <button onClick={plus}>+</button>
        <button onClick={del}>REMOVE</button>
        <button onClick={minus}>-</button>
    </div>
  )
}

export default Child