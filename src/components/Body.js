import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
const dispatch=useDispatch();
    const approuter=createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element:<Browse/>
        },
    ]);

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}= user;
           dispatch(addUser({uid : uid, email:email,displayName:displayName}));
      } else {
           dispatch(removeUser());
      }
    });
   },[]);

   


  return (
    <div>
         <RouterProvider router={approuter} />
    </div>
   

  )


}

export default Body;