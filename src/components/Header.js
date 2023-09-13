import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser , removeUser} from "../utils/userSlice";
import { BACKIMAGE, LOGO, USER_LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate =useNavigate();
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      navigate("/error");
    });
  }
const  dispatch=useDispatch();
const [userVar,setUserVar]=useState(null);
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserVar(user);
        const {uid,email,displayName}= user;
           dispatch(addUser({uid : uid, email:email,displayName:displayName}));
           navigate("/browse");
      } else {
           dispatch(removeUser());
           navigate("/");
      }
    });
    return ()=> unsubscribe();
   },[]);

   const handleGptSearchClick=()=>{
     dispatch(toggleGptSearchView());
   };

  return (
    
      <div className='absolute w-screen  p-2 bg-gradient-to-b from-black  z-50 flex justify-between ' >
        <img className="w-44" src={USER_LOGO}/>
          
      { userVar&&(
          <div className='flex p-3 '>
          <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>
           {showGptSearch ? "Homepage": "GPT Search" }
            </button>
        <img  className='w-12 h-12' src= {BACKIMAGE}/>
        <button onClick={handleSignOut} className='text-white mx-3 font-bold text-lg'>(Sign Out)</button>
      </div>
        ) } 
       </div>

  )
}

export default Header