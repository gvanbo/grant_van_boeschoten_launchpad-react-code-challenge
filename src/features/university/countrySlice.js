import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
  } from "@reduxjs/toolkit";

  export const fetchCountries = createAsyncThunk(
    "country/fetchCountries",
    async () => {
      return await fetch("https://api.first.org/data/v1/countries", {
        headers: {'Content-type': 'application/json; charset=UTF-8',}
      })
      .then((res) => res.json());
    }
  );
  
  const countryAdapter = createEntityAdapter({
    selectId: (countrySelector) => countrySelector.country,
  });
  
  export const countrySlice = createSlice({
    name: "country",
    initialState: countryAdapter.getInitialState({ loading: false }),
    reducerss: {},
    extraReducers: {
      [fetchCountries.pending](state) {
        state.loading = true;
      },
      [fetchCountries.fulfilled](state) {
        state.loading = false;
      },
      [fetchCountries.rejected](state) {
        state.loading = false;
      },
    },
  });
  
  export const countrySelectors = countryAdapter.getSelectors(
    (state) => state.country
  );
  
  export default countrySlice.reducer;
  