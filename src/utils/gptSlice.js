import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults: null,
        searchData: null,
    },
    reducers :{
        toggleGptSearchView: (state,action)=>{
              state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult : (state , action)=> {
            state.movieResults =action.payload;
        },
        addSearchData : (state , action)=> {
            state.searchData =action.payload;
        },


  }
});

export const {toggleGptSearchView,addGptMovieResult,addSearchData}=gptSlice.actions;
export default gptSlice.reducer;