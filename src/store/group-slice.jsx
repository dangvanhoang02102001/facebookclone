import { createSlice } from '@reduxjs/toolkit'

const groupSlice = createSlice({
    name: 'group',
    initialState: {
        groupList: [],
        currentGroup: {},
        groupPost: [],
        groupFeed: []
    },
    reducers: {
        setGroup(state, action) {
            state.groupList = action.payload
        },
        setCurrentGroup(state, action) {
            state.currentGroup = action.payload
        },
        setGroupPost(state, action) {
            state.groupPost = action.payload
        },
        setGroupFeed(state, action) {
            state.groupFeed = action.payload
        }
    }
})

export const groupActions = groupSlice.actions

export default groupSlice