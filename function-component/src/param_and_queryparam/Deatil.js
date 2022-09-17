import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Deatil = () => {
    const params = useParams();
    console.log('params',params);

    useEffect(() =>{
         getPost()
    },[params]);
    const getPost = () =>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }
   return (
    <div>Deatil</div>
  )
}

export default Deatil