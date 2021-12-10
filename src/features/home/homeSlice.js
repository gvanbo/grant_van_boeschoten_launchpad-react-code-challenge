import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("home/fetchPosts", async () => {
  return await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20"
  ).then((res) => res.json());
});

export const deletePost = createAsyncThunk("home/deletePost", async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  return id;
});

export const addPost = createAsyncThunk("home/addPost", async (title, body) => {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 101,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
});

export const editPost = createAsyncThunk(
  "home/editPost",
  async ({ id, newObj }) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(newObj),
    });
    return { id, changes: newObj };
  }
);

const postAdapter = createEntityAdapter({
  selectId: (post) => post.id,
});

export const homeSlice = createSlice({
  name: "home",
  initialState: postAdapter.getInitialState({ loading: false }),
  reducerss: {},
  extraReducers: {
    [fetchPosts.pending](state) {
      state.loading = true;
    },
    [fetchPosts.fulfilled](state, { payload }) {
      state.loading = false;
      postAdapter.setAll(state, payload);
    },
    [fetchPosts.rejected](state) {
      state.loading = false;
    },
    [deletePost.rejected](state) {
      state.loading = false;
    },
    [deletePost.fulfilled](state, { payload: id }) {
      state.loading = false;
      postAdapter.removeOne(state, id);
    },
    [deletePost.pending](state) {
      state.loading = true;
    },
    [editPost.fulfilled](state, { payload }) {
      state.loading = false;
      postAdapter.updateOne(state, {
        id: payload.id,
        changes: payload.changes,
      });
    },
    [editPost.pending](state) {
      state.loading = true;
    },
  },
});

// export const { setAllPosts } = homeSlice.actions

export const homeSelectors = postAdapter.getSelectors((state) => state.home);

export default homeSlice.reducer;
