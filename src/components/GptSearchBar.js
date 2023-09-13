import React, { useEffect, useRef } from 'react'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addGptMovieResult, addSearchData } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const searchText=useRef('');
  // const gptQuery="Act as a Movie Recommendation system and suggest me some movies for the query : "
  //   +searchText.current.value+
  //   " only give me names of 5 movies,comma seperated like the example result given ahead . Example Result : Gadar , Sholay , Don , Golmaal , Koi Mil Gaya";
   
    //movie search in tmdb
     const handleMovieSearch = async ()=>{
      
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            searchText.current.value +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
       console.log(json.results);
       dispatch(addGptMovieResult(json.results));
       dispatch(addSearchData(searchText.current.value));

      }
 
      // GPT Search feature
//     const handleGptSearchClick=()=>{
   
//     //make api call to get results for the movies
//     const gptResults=async function main() {
//       const completion = await openai.chat.completions.create({
//         messages: [{ role: 'user', content: gptQuery}],
//         model: 'gpt-3.5-turbo',
//       });
//       console.log(gptResults.choices?.[0]?.message?.content.split(","));
//   }
// }


  return (
    <div className='pt-[10%] flex justify-center'>


        <form className=' bg-black  w-1/2 grid grid-cols-12 bg-opacity-80 ' onSubmit={(e)=> e.preventDefault()}>
           <input  ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder='What would you like to watch today !' />
           <button className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg hover:bg-red-500' onClick={handleMovieSearch}>Search </button>
        </form>
    </div>
  )
}


export default GptSearchBar;



