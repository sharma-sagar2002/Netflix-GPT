import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector((store)=> store.movies);
  
 
 
   return   movies.nowPlayingMovies&&movies.popularMovies&&(

    <div className=' w-screen bg-black'>
      <div className=' -mt-20 relative z-20 pl-1'>
      <MovieList  title={"Now Playing" } movies={movies.nowPlayingMovies} />
      <MovieList  title={"Trending" } movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Popular" } movies={movies.popularMovies}/>
      <MovieList  title={"Upcoming Movies" } movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Horror" } movies={movies.nowPlayingMovies}/>
      </div>
     
    </div>
  )
}

export default SecondaryContainer;