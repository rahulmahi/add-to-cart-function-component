import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './profile.css'

function Fun() {

    const [username,setName] = useState(['rahul','vel','muthu']);
    const [userpassword,setPassword] = useState(['123456','654321','567890']);
    const [emptyName,setEmptyName] = useState('');
    const [emptyPassword,setEmptyPassword] = useState('');
    const navi = useNavigate();
    const click_val = (e) =>{
        // console.log(e.target.value);
        if(e.target.name === 'username')
        {
            setEmptyName(e.target.value);
            // console.log(emptyName)
        }
        if(e.target.name === 'userpassword')
        {
            setEmptyPassword(e.target.value);
        }
    }
    const submitfun = (f) =>{

      localStorage.setItem('setItems',JSON.stringify([
        {id:1,image:require('../images/galaxy.webp'),description:'setPassword is assigned a value but never used'},
        {id:2,image:require('../images/vivo.png'),description:' Unexpected use of comma operator'},
        {id:3,image:require('../images/oneplus.webp'),description:' Unexpected use of comma operator'},
        {id:4,image:require('../images/black.jpg'),description:' Unexpected use of comma operator'},
        {id:5,image:require('../images/new.jpg'),description:' Unexpected use of comma operator'},
        {id:6,image:require('../images/oppo.png'),description:' Unexpected use of comma operator'}
       ]));

        const first = username.some((event) => event === emptyName);
        //  console.log(first);
         const second = userpassword.some((event) => event === emptyPassword);
        //  console.log(second);
         if(first === true && second === true )
         {
           navi('profile');
         } 
    }

  return (
    <div className='home'>
        <label>First Name : 
             <input type={'text'} placeholder={'enter your name'} name = {'username'} onChange={click_val}/><br />
        </label>
        <label>Password : 
         <input type={'password'} placeholder={'enter your password'} name ={'userpassword'} onChange={click_val}/><br />
        </label>
        <button onClick={submitfun}>Log In</button>
    </div>
  )
}
export default Fun