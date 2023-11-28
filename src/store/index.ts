import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import users from './users/index';
import posts from './posts/index';
import albums from './albums/index';

export const store = configureStore({
  reducer: {
    users,
    posts,
    albums,
  },
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
