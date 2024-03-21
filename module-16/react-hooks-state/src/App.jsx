
import React, { useState } from 'react'

// const App = () => {
//   //state
//   // const number = 11;

//   const [Number,SetNumber] = useState(0);

//   const Plus = ()=>{
//     SetNumber(Number+1);
//   };

//   const Minus = ()=>{
//     SetNumber(Number-1);
//   };


//   //view
//   return (
//     <div>
     

//       <button onClick={()=>{Plus()}}>PLUS</button>
//       {Number}
//       <button onClick={()=>{Minus()}}>MINUS</button>
//     </div>
//   )
// }


// export const App = () => {

//   const [loginData,SetLoginData] = useState({email:"....",password:"...."});

//   return (
//     <div>
//       <ul>
//         <li>Email-{loginData.email}</li>
//         <li>Password-{loginData.password}</li>
//       </ul>

//       <label> E-MAIL :</label>
//       <input onChange={(e)=>{
//         SetLoginData(loginData=>({
//           ...loginData,
//           'email':e.target.value
//         }))
//         }
//         } type="text" />
//       <br />
//       <label> password:</label>
//       <input onChange={(e)=>{
//         SetLoginData(loginData=>({
//           ...loginData,
//           'password':e.target.value
//         }))
//       }} type="text" />
//       <br />

//     </div>
//   )
// }



export const App = () => {

  const [loginData,SetLoginData] = useState(
    { 
      fname:"...",
      lname:"...",
      email:"...",
      password:"..."
    }
    );


    let inputLoginData=(key,value)=>{
      SetLoginData(loginData=>({
        ...loginData,
        [key]:[value]
      }))
    }
    let inputLoginData2=(e)=>{
      let key = e.target.name;
      let value = e.target.value;
      SetLoginData(loginData=>({
        ...loginData,
        [key]:[value]
      }))
    }



  return (
    <div>

      <ul>
        <li>fname::{loginData.fname}</li>
        <li>lname::{loginData.lname}</li>
        <li>email::{loginData.email}</li>
        <li>password::{loginData.password}</li>
      </ul>

      <br />

      <label htmlFor="">first Name::</label>
      <input onChange={(e)=>{inputLoginData('fname',e.target.value)}} type="text" />
      <br />


      <label htmlFor="">last Name::</label>
      <input name='lname' onChange={(e)=>{inputLoginData(e.target.name,e.target.value)}}  type="text" />
      <br />


      <label htmlFor="">email::</label>
      <input name="email" onChange={(e)=>{inputLoginData2(e)}}type="text" />
      <br />


      <label htmlFor="">password::</label>
      <input onChange={(e)=>{inputLoginData('password',e.target.value)}} type="text" />
      <br />


    </div>
  )
}



export default App;










