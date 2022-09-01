import React from 'react'

function Child(f) {
  return (
    <div>
        <img src={f.data.image} className='imge'/>
        <h1>id : {f.data.id}</h1>
        <p>qty : {f.data.id}</p>
        <button>+</button>
        <button>REMOVE</button>
        <button>-</button>
    </div>
  )
}

export default Child