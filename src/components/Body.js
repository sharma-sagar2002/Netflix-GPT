import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const Body = () => {

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

  return (
    <div className=''>
         <RouterProvider router={approuter} />
    </div>
   

  )


}

export default Body;