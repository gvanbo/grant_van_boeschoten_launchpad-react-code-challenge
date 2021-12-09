import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "univeresity/fetchPosts",
  async () => {
    return await fetch(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limithttp://universities.hipolabs.com/search?country=Canada=20"
    ).then((res) => res.json());
  }
);

export const getCountries = createAsyncThunk("home/addPost", async (post) => {
  await fetch("https://api.first.org/data/v1/countries");
});

const universityAdapter = createEntityAdapter({
  selectId: (post) => post.id,
});

export const universitySlice = createSlice({
  name: "university",
  initialState: universityAdapter.getInitialState({ loading: false }),
  reducerss: {},
  extraReducers: {
    [fetchPosts.pending](state) {
      state.loading = true;
    },
    [fetchPosts.fulfilled](state, { payload }) {
      state.loading = false;
      universityAdapter.setAll(state, payload);
    },
    [fetchPosts.rejected](state) {
      state.loading = false;
    },
  },
});

export const universitySelectors = universityAdapter.getSelectors(
  (state) => state.home
);

export default universitySlice.reducer;
