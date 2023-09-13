
import React from 'react'

const VideoTitle = (props) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black'>

        <h1 className='text-6xl font-bold text-white' >{props.title}</h1>
        <p className='py-6 text-lg w-1/3 text-white'> {props.overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 text-xl  rounded lg hover:bg-opacity-90'>▶  Play</button>
            <button className='mx-2 bg-gray-600 text-white p-4 px-12 text-xl bg-opacity-60 rounded lg hover:bg-gray-500 hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle