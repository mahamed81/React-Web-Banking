import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/users/userSlice';
import logger from 'redux-logger';



export const store = configureStore({
  reducer: {
      user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});