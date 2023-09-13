import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { APP_LOGO } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
     
     <div className='fixed -z-10'>
      <img  src={APP_LOGO}/>
        </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
};

export default GptSearch