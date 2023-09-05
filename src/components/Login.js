import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const[isSignIn,setIsSignIn] =useState(true);
    const toggleSignInFrom=()=>{
       setIsSignIn(!isSignIn);
      
    }

  return (
    <div>
        <Header/>
        <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
       
            <form className='bg-black p-10 absolute w-[30%] mx-auto  my-36 right-0 left-0 bg-opacity-60' >
                <h1 className='text-white font-bold text-3xl py-4'>{isSignIn?"Sign In" : "Sign Up"}</h1>
               {
                !isSignIn&&<input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 bg-opacity-40 rounded-lg' ></input>
               } 
                <input type='text' placeholder='Email or Phone Number' className='p-2 my-2 w-full bg-gray-700 bg-opacity-40 rounded-lg' ></input>
                <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700 bg-opacity-40 rounded-lg'></input>
                <button className='bg-red-500 hover:bg-red-600 p-2 my-2 text-white w-full rounded-lg' >{isSignIn?"Sign In" : "Sign Up"}</button>
                <p className='text-white   py-4 cursor-pointer ' onClick={toggleSignInFrom}>{isSignIn?"New to Netflix ? Sign Up now" : "Already registered ! Sign In now"}</p>
            </form>
       
    </div>
  )
}

export default Login;