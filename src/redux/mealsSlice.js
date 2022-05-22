/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async () => {
    const response = await
    fetch(`https://api.edamam.com/search?q=pizza&app_id=${20152158}&app_key=${'ade1a4d845acb2ff1f90c4d87db2b70e'}`, {
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log('data', data);
    return data;
  },
);

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  extraReducers: {
    [getMeals.pending]: (state) => {
      state.loading = true;
    },
    [getMeals.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getMeals.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },

});

export default mealsSlice.reducer;

export const selectAllMeals = (state) => state.meals;
