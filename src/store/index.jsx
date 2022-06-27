import {
    combineReducers, configureStore
} from '@reduxjs/toolkit';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth-slice'
import friendSlice from './friends-slice';
import groupSlice from './group-slice';
import postSlice from './post-slice';
import storiesSlice from './stories-slice';
import userSlice from './user-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ui', 'posts', 'user', 'friend', 'stories', 'group']
};

const rootReducer = combineReducers({
    
    ui: authSlice.reducer,
    posts: postSlice.reducer,
    user: userSlice.reducer,
    friend: friendSlice.reducer,
    stories: storiesSlice.reducer,
    group: groupSlice.reducer
    // post: postReducer,
});

const persistReduce = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReduce
})

export const persistSto = persistStore(store);