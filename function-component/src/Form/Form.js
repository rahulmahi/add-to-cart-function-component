import React, { useState } from 'react'
import Show from './Show';
import './style.css';


function Form() {

       const [userName,setUserName] = useState('');
       const [userAge,setAge] = useState('');
       const [userNumber,setNum] = useState('');
       const [emptyArr,emptyarr] = useState([]);
       const [storeArr,storeFun] = useState([]);
       const [chage,setChange] = useState(false);

      
//     const handlechange = (event) =>{
//         // console.log("data changed",event.target.value);
//     // }
    const input_fun = (event) => {
        console.log(event.target.value);
        if(event.target.name === 'userName')
        {
        setUserName(event.target.value); 
        }
        if(event.target.name === 'userAge')
        {
            setAge(event.target.value);
        }
        if(event.target.name === 'userNumber')
        {
            setNum(event.target.value);
        }
    }

   const submitFun = (event) =>{
        event.preventDefault();
        emptyarr([...emptyArr,{id:emptyArr.length+1,userName,userAge,userNumber}]);
        setUserName("");
        setAge("");
        setNum("");

        // console.log(emptyArr);      
    }

    const del = (e) =>{
        console.log(e);
       var x = emptyArr.filter((g)=>{
          return e !== g
        })
      emptyarr([...x]); 
    }
const change = ((e) =>{
    e.preventDefault();
    const isExist = emptyArr.some((prod) =>prod.id === storeArr.id)
    var val = storeArr;
    if(isExist)
    {
         var x = emptyArr.map((ele) =>{
            if(ele.id === val.id){
              return{
                ...ele,
                userName:userName,userAge:userAge,userNumber:userNumber
              }
            }
            else{
                return {
                    ...ele
                }
              }
         })
            
       emptyarr(x); 
    }
    setUserName("");
    setAge("");
    setNum("");
    setChange(false);
})
    const edit = (f) =>{
        setChange(true)
        setUserName(f.userName);
        setAge(f.userAge);
        setNum(f.userNumber);
        storeFun(f); 
    }
   return (
    <div className='form-ele'>
        <form>
            <label>First Name : <input type={'text'} value={userName} name ={'userName'} placeholder={'enter your name'} onChange={input_fun}/></label><br />
            <label>Age : <input type={'text'} value={userAge} placeholder={'enter your age'} name ={'userAge'} onChange={input_fun}/></label><br />
            <label>Phone Number : <input type={'text'} value={userNumber} placeholder={'enter your number'} name ={'userNumber'} onChange={input_fun}/></label><br />
            {!chage?<button onClick={submitFun}>Submit</button>:<button onClick={change}>update</button>}
        </form>
       {emptyArr.map((e,index) =>
       <Show  data={e} key={index} del={del} edit={edit}/>
       )}
      
    </div>
  )
}

export default Form
