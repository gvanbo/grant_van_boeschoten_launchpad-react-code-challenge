import { configureStore } from '@reduxjs/toolkit';
import homeSliceReducer from '../features/home/homeSlice';
import universitySliceReducer from '../features/university/universitySlice';

export default configureStore({
  reducer: {
    home: homeSliceReducer,
    university: universitySliceReducer
  },
});

