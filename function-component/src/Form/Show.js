import React from 'react'

function Show(d) {
  const del = () =>{
    d.del(d.data);

  }
  const edit = () =>{
    d.edit(d.data)
  }
  return (
    <div className='input-box'>
        <p>First Name : {d.data.userName}</p>
        <p>Age : {d.data.userAge}</p>
        <p>Phone Number : {d.data.userNumber}</p>
        <button onClick={edit}>EDIT</button>
        <button onClick={del}>REMOVE</button>
    </div>
  )
}

export default Show