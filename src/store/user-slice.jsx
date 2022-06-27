import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentId: null,
        currentUser: {},
        userPost: []
    },
    reducers: {
        setCurrentId(state, action) {
            state.currentId = action.payload
        },
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        },
        setUserPost(state, action) {
            state.userPost = action.payload
        }
    }
})

export const userActions = userSlice.actions

export default userSlice