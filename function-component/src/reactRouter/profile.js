import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [show, setShow] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const x = JSON.parse(localStorage.getItem("setItems"));
    // console.log(x);
    setShow(x);
  };

  const add = (e) =>
  {
    const already = shows.some((ready) => ready.id === e.id)
    console.log(already);
    if(already === false)
    {
     setShows([...shows,{...e,qty:1}]);
    }
  }
  
  var z = useNavigate();

  const viewItem = () =>{
    // localStorage.setItem(JSON.stringify("showList", shows));
     localStorage.setItem('showList',JSON.stringify(shows))
    z('/about')
  
  }
  return (
    <div>
      <div className="shows">
        {show.map((ele, index) => (
          <div key={index} className="bor">
            <img src={ele.image} className={"show"} /> <br />
            <h1>id : {ele.id}</h1>
            <p>Description : {ele.description}</p> <br />
            <button onClick={() => add(ele)}>Add To Cart</button>
            <button>More Info</button>
          </div>
        ))}
      </div>
      <div className="view">
        <button onClick={viewItem}>view items</button>
      </div>
    </div>
  );
    }
export default Profile;
