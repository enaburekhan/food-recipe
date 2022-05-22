import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './mealsSlice';

export default configureStore({
  reducer: {
    meals: mealsReducer,
  },
});
