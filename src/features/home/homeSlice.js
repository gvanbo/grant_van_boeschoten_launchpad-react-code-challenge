import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'home/fetchPosts',
    async () => {
        return await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20")
        .then(res => res.json())
    }
)

export const deletePost = createAsyncThunk('home/deletePost', async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: "DELETE"})
    return id;
})

const postAdapter = createEntityAdapter({
    selectId: (post) => post.id,
})

export const homeSlice = createSlice({
    name: 'home',
    initialState: postAdapter.getInitialState( { loading: false}),
    reducerss: {
        
    },
    extraReducers: {
        [fetchPosts.pending](state) {
            state.loading = true
        },
        [fetchPosts.fulfilled](state, { payload }) {
            state.loading = false
            postAdapter.setAll(state, payload)
        },
        [fetchPosts.rejected](state) {
            state.loading = false
        },
        [deletePost.rejected](state) {
            state.loading = false
        },
        [deletePost.fulfilled](state, {payload: id}) {
            state.loading = false
            postAdapter.removeOne(state, id)
        },
        [deletePost.pending](state) {
            state.loading = true
        },
    }
})

// export const { setAllPosts } = homeSlice.actions

export const homeSelectors = postAdapter.getSelectors(state => state.home);

export default homeSlice.reducer