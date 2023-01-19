import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import tableReducer from '../features/tableSlice/tableSlice';

export const store = configureStore({
  reducer: {
    homeSlice: homeReducer,
    tableSlice: tableReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
