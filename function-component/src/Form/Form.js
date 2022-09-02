import React, { useState } from 'react'

function Form() {

    const [userName,setUserName] = useState('');
    const [userAge,setAge] = useState('');
    const handlechange = (event) =>{
        // console.log("data changed",event.target.value);
    }
    const submitFun = (event) =>{
        event.preventDefault();
         console.log(event.target.value)
    }
   return (
    <div>
        <form onClick={submitFun}>
        <label>First Name : 
        <input value={userName} onChange={handlechange} type='text' /></label>
        <label>Age : <input value={userName} type='text' /></label>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Form