import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
import { useSelector } from 'react-redux';

const MovieCard = ({posterPath}) => {

   if(!posterPath) return ;

  return (
    <div className='w-48 pr-4 '>
      <img className='rounded-md' alt='movie card' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard