import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
   
  const searchMovieResults=useSelector((store)=>store.gpt.movieResults);
const searchData=useSelector((store)=> store.gpt.searchData);
  if(!searchMovieResults) return ;
  return (
    <div className='bg-black bg-opacity-80 p-4 my-4 mx-3' > 
         
      <MovieList title={searchData} movies={searchMovieResults}/>
    </div>
  )
}

export default GptMovieSuggestions