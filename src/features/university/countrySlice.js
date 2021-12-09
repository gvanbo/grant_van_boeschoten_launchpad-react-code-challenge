import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
  } from "@reduxjs/toolkit";

  export const selectCountriesList = createAsyncThunk(
    "university/selectCountriesList",
    async (post) => {
      await fetch("https://api.first.org/data/v1/countries");
    }
  );
  
  const countryAdapter = createEntityAdapter({
    selectId: (post) => post.id,
  });
  
  export const countrySlice = createSlice({
    name: "country",
    initialState: countryAdapter.getInitialState({ loading: false }),
    reducerss: {},
    extraReducers: {
      [selectCountriesList.pending](state) {
        state.loading = true;
      },
      [selectCountriesList.fulfilled](state) {
        state.loading = false;
      },
      [selectCountriesList.rejected](state) {
        state.loading = false;
      },
    },
  });
  
  export const countrySelectors = countryAdapter.getSelectors(
    (state) => state.country
  );
  
  export default countrySlice.reducer;
  