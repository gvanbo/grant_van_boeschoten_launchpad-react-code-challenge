import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchPostalDetails = createAsyncThunk(
  "postal/fetchPostalDetails",
  async (zipCode) => {
    return await fetch(`https://api.zippopotam.us/us/${zipCode}`).then((res) =>
      res.json()
    );
  }
);

const postalCodeAdapter = createEntityAdapter({
  selectId: (code) => code[0]["place name"]
})

export const postalSlice = createSlice({
  name: "postal",
  initialState: postalCodeAdapter.getInitialState({ loading: false }),
  reducerss: {},
  extraReducers: {
    [fetchPostalDetails.pending](state) {
      state.loading = true;
    },
    [fetchPostalDetails.fulfilled](state, { payload }) {
      state.loading = false;
      postalCodeAdapter.setAll(state, payload);
    },
    [fetchPostalDetails.rejected](state) {
      state.loading = false;
    },
  },
});


export const postalSelectors = postalCodeAdapter.getSelectors(
  (state) => state.postal
);

export default postalSlice.reducer;
