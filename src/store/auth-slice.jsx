import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'ui',
    initialState: {
        currentUser: null
    },
    reducers: {
        setCurrentUser(state, action) {
            const curentUser = action.payload
            state.currentUser = curentUser
        }
    }
})

export const authActions = authSlice.actions

export default authSlice