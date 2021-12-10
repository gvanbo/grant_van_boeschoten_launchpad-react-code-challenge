import { configureStore } from '@reduxjs/toolkit';
import homeSliceReducer from '../features/home/homeSlice';
import universitySliceReducer from '../features/university/universitySlice';
import countrySliceReducer from '../features/university/countrySlice'
import postalSliceReducer from '../features/postalLookup/postalSlice';

export default configureStore({
  reducer: {
    home: homeSliceReducer,
    university: universitySliceReducer,
    country: countrySliceReducer,
    postal: postalSliceReducer
  },
});

