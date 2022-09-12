import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/users/userSlice';
import logger from 'redux-logger';
import { transferReducer } from '../features/transfer/tansferSlice';



export const store = configureStore({
  reducer: {
      user: userReducer,
      transfer: transferReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});