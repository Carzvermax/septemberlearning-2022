// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {postService} from "../../services";
//
// const initialState = {
// posts: [],
//     errors: null,
//     loading: null,
//     selectedPost: null
// }
//
// const getAll = createAsyncThunk(
//     'postSlice/getAll',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {data} = await postService.getAll()
//             return {data}
//         }catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     })
//
// const getById = createAsyncThunk(
//     'postSlice/getById',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const{data} = await postService.getById(id)
//             return data
//         }catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     })
//
// const postSlice = createSlice({
//     name: 'postSlice',
//     initialState,
//     reducers:{
//         setSelectedPost:(state, action)=>{
//             state.selectedPost = action.payload
//         }
//     },
//     extraReducers:{
//         [getAll.fulfilled]:(state, action)=> {
//             state.posts = action.payload
//             state.loading = false
//         },
//         [getAll.rejected]:(state, action) => {
//             state.errors = action.payload
//             state.loading = false
//         },
//         [getAll.pending]:(state) => {
//             state.loading = true
//         },
//         [getById.fulfilled]:(state, action) => {
//             state.selectedPost = action.payload
//         }
//     }
// })
//
// const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;
//
// const postActions = {
//     setSelectedPost,
//     getAll,
//     getById
// }
//
// export {
//     postReducer,
//     postActions
// }

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState={
    posts:[],
    errors: null,
    loading: null,
    selectedPost: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    })

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue}) =>{
        try {
            const{data} = await postService.getById(id)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    })

const postSlice = createSlice({
    name:'postSlice',
    initialState,
    reducers:{
        // getAll:(state, action)=>{
        //     state.users = action.payload
        // },
        setSelectedPost:(state, action)=>{
            state.selectedPost = action.payload
        }
    },
    extraReducers:{
        [getAll.fulfilled]:(state, action)=> {
            state.posts = action.payload
            state.loading = false
        },
        [getAll.rejected]:(state, action) => {
            state.errors = action.payload
            state.loading = false
        },
        [getAll.pending]:(state) => {
            state.loading = true
        },
        [getById.fulfilled]:(state, action) => {
            state.selectedPost = action.payload
        }
    }
});

const {reducer: postReducer, actions:{setSelectedPost}} = postSlice;

const postActions = {
    setSelectedPost,
    getAll,
    getById
}

export {
    postReducer,
    postActions
}