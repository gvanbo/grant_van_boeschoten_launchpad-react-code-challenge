import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchUniversities = createAsyncThunk(
  "univeresity/fetchPosts",
  async (country) => {
    return await fetch(
      `http://universities.hipolabs.com/search?country=canada`
    ).then((res) => res.json());
  }
);

const universityAdapter = createEntityAdapter({
  selectId: (university) => university.web_pages[0],
});

export const universitySlice = createSlice({
  name: "university",
  initialState: universityAdapter.getInitialState({ loading: false }),
  reducerss: {},
  extraReducers: {
    [fetchUniversities.pending](state) {
      state.loading = true;
    },
    [fetchUniversities.fulfilled](state, { payload }) {
      state.loading = false;
      universityAdapter.setAll(state, payload);
    },
    [fetchUniversities.rejected](state) {
      state.loading = false;
    },
  },
});

export const universitySelectors = universityAdapter.getSelectors(
  (state) => state.university 
);

export default universitySlice.reducer;
