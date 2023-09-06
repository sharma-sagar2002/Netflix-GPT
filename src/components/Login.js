import React, { useRef, useState } from 'react'
import Header from "./Header";
import {validateForm} from '../utils/validate';
const Login = () => {
  const [errorMessage,setErrorMessage]=useState(null);
    const[isSignIn,setIsSignIn] =useState(true);
    const toggleSignInFrom=()=>{
       setIsSignIn(!isSignIn);
     }

     const email=useRef(null);
     const password=useRef(null);
     const name=useRef(null);
    
     const handleButton=()=>{

     const message=validateForm(email.current.value,password.current.value,null);
      setErrorMessage(message);
     }

  return (
    <div>
        <Header/>
        <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
       
            <form onSubmit={(e)=> e.preventDefault()} className='bg-black p-10 absolute w-[30%] mx-auto  my-36 right-0 left-0 bg-opacity-80' >
                <h1 className='text-white font-bold text-3xl py-4'>{isSignIn?"Sign In" : "Sign Up"}</h1>
               {
                !isSignIn&&<input type='text' placeholder='Full Name' className='p-2 my-3 w-full bg-gray-700 bg-opacity-40 rounded-lg ' ></input>
               } 
                <input ref={email} type='text'  placeholder='Email' className='p-2 my-2 w-full bg-gray-700 bg-opacity-40 rounded-lg text-white' ></input>
                <input ref={password} type='password' placeholder='Password' className='p-2 my-3 w-full bg-gray-700 bg-opacity-40 rounded-lg text-white'></input>
                 <p className='text-red-300 text-md my-3'>{errorMessage}</p>
                <button  className='bg-red-500 hover:bg-red-600 p-2 my-3 text-white w-full rounded-lg' onClick={handleButton} >{isSignIn?"Sign In" : "Sign Up"}</button>
                <p className='text-white   py-4 cursor-pointer ' onClick={toggleSignInFrom}>{isSignIn?"New to Netflix ? Sign Up now" : "Already registered ! Sign In now"}</p>
            </form>
       
    </div>
  )
}

export default Login;