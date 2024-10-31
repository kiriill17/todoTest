import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/modalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
