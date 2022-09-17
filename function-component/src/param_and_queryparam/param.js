import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ParamComponet = () => {

  const [posts,getPosts] = useState([]);

var nav = useNavigate()
console.log(nav);
    useEffect(() =>{
       getToods();
    },[]);
    const getToods = () =>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => getPosts(json))
    }
    const goToPost = (ele) =>{
       console.log('ele',ele);
       nav(`detail/${ele.id}`);
    }
  return (
    <div>
      {
        posts.map((ele,index) =>
           <div key={index}><p>{ele.title}</p><button onClick={() =>goToPost(ele)}>More Info</button></div>
        )
      }
    </div>
  )
}

 
  export default ParamComponet