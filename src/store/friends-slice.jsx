import { createSlice } from '@reduxjs/toolkit'

const friendSlice = createSlice({
    name: 'friend',
    initialState: {
        userFriend: [],
        requestList: []
    },
    reducers: {
        setUserFriend(state, action) {
            state.userFriend = action.payload
        },
        setFriendRequest(state, action) {
            state.requestList = action.payload
        }
    }
})

export const friendActions = friendSlice.actions

export default friendSlice