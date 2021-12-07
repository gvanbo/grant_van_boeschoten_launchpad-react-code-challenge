import { configureStore } from '@reduxjs/toolkit';
import homeSliceReducer from '../features/home/homeSlice';

export default configureStore({
  reducer: {
    home: homeSliceReducer
  },
});

