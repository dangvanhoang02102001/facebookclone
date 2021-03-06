import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        setPost(state, action) {
            state.posts = action.payload
        }
    }
})

export const postActions = postSlice.actions

export default postSlice