import { createSlice } from "@reduxjs/toolkit";

export const subredditSlice = createSlice({
    name:'subreddit',
    initialState:{
        subreddits: [],
        isLoading:false,
        errorLoading:false
    },
    reducers: {
        startGetSubreddits: (state) => {
            state.isLoading = true;
            state.errorLoading = false;
        },
        completeGetSubreddits: (state, action) => {
            state.isLoading = false;
            state.errorLoading = false;
            state.subreddits = action.payload;
        },
        errorGetSubreddits: (state) => {
            state.isLoading = false;
            state.errorLoading = true;
        }
    }
})

export const selectSubreddits = state =>  state.subredditSlice.subreddits

export const {
    startGetSubreddits,
    completeGetSubreddits,
    errorGetSubreddits } = subredditSlice.actions;

    export default subredditSlice.reducer

    export const fetchSubreddits = async subreddits => {
        await GetSubreddits(subreddits);
    }