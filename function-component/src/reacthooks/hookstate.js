import React, { useEffect, useState } from 'react'

function Hookstate() {
    const [name,setName] = useState('rahul');
    const [age,setAge] = useState(23); 

    //componentDidMount
    useEffect(() =>{
        console.log('componentDidMount');
    },[]);
    
    //componetDidUpdate

    useEffect(() =>{
        console.log('componetDidUpdate')
    },[name,age]);

    //compontWillUnMount()
    useEffect(() =>{

    },[]);
  return (
    <div>
        <p>hello {name} {age}</p>
       <button onClick={() => setName('fabevy')}>click</button>
       <button onClick={() =>setAge(25)}>age</button>
    </div>
  )
}

export default Hookstate