import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import useNowPlayingMovies from '../hooks.js/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks.js/usePopularMovies';
import useTrendingMovies from '../hooks.js/useTrendingMovies';
import GptSearchPage from './GptSearch';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  const showGptSearch=useSelector((store)=> store.gpt.showGptSearch);
  return (
    <div >
      <Header/>
      {
        (showGptSearch) ?   <GptSearch/> :
        <>
             <MainContainer/>
             <SecondaryContainer/>
        </>
      }
     
    
    </div>
  )
}

export default Browse;