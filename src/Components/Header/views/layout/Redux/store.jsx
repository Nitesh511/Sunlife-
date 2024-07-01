import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';

export default configureStore({
  reducer: {
    language: languageReducer,
    // other reducers if any
  },
});
