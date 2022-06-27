import { createSlice } from '@reduxjs/toolkit'

const storiesSlice = createSlice({
    name: 'stories',
    initialState: {
        stories: []
    },
    reducers: {
        setStories(state, action) {
            state.stories = action.payload
        }
    }
})

export const storiesActions = storiesSlice.actions

export default storiesSlice