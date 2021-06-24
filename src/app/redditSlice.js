import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { fetchSubreddits } from "./subredditSlice";

const dispatch = useDispatch
export const initialState = {
    posts: {},
        isLoading: false,
        errorLoading: false,
        selectedSubReddit: 'r/pictures',
        searchTerm: ""
}
export const redditSlice = createSlice({
    name:'reddit',
    initialState: initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload;
        },
        startLoadPosts: (state) => {
            state.isLoading = true;
            state.errorLoading = false;
        },
        completeLoadPosts:(state, action) => {
            state.isLoading = false;
            state.errorLoading = false;
            state.posts = action.payload;
        },
        errorLoadPosts: (state) => {
            state.isLoading = false;
            state.errorLoading = true;
        },
        startLoadComments: (state, action) => {
            state.posts[action.payload].toggleComments = !state.posts[action.payload].toggleComments;
        },
        loadingComments: (state,action) => {
            state.posts[action.payload].toggleComments = state.posts[action.payload].loadComments;
            dispatch(fetchSubreddits[action.payload.index])

        },
        completeLoadComments: (state, action) => {
            state.posts[action.payload.index].comments = [action.payload.comments];
        },
        failedLoadComments: (state, action) => {
            state.posts[action.payload.index].comments = state.posts[action.payload].errorLoadComments;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSelectedSubReddit: (state, action) => {
            state.selectedSubReddit = action.payload;
            state.searchTerm = "";
        }

    }
})

export const selectPosts = (state) => state.reddit.posts;
export const selectSearchTerm = (state) => state.reddit.searchTerm;
export const getSelectedSubReddit = (state) => state.reddit.selectedSubReddit;

export const {
    setPost,
    startLoadPosts,
    completeLoadPosts,
    errorLoadPosts,
    startLoadComments,
    loadingComments,
    completeLoadComments,
    failedLoadComments,
    setSearchTerm,
    setSelectedSubReddit,
} = redditSlice.actions;

export default redditSlice.reducer

///export const showFilteredPosts = createSelector(selectPosts(selectedSubReddit.id))

/*export const fetchPost = async (subreddit) => {
    const posts = await fetch(subreddit);
    return posts;
}

export const fetchComments = async (subreddit) => {
    const comments = await fetch(subreddit.comments.id)
}
*/
