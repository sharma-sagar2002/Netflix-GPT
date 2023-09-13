
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks.js/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const trailerVideo=useSelector((store)=> store.movies.trailerVideo);
   
    useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' 
      src={"https://www.youtube.com/embed/dG91B3hHyY4?si=BMEGHjEr-yLL6l9A"+ trailerVideo?.key+"&autoplay=0&mute=1"} 
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
    </div>
  )
}

export default VideoBackground