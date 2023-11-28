import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postsService} from "../../services/posts.service";
import {IPost} from "../type";

interface IPostsState {
  data: Array<IPost> | null,
  error: any,
  isPostsLoading: boolean
}

const initialState: IPostsState = {
  data: null,
  error: null,
  isPostsLoading: false,
};

export const getPostsData = createAsyncThunk(
  'getPostsData',
  async (userId: number) => {
    const response = await postsService.getPosts(userId);
    return await response;
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsData.pending, (state) => {
      state.isPostsLoading = true;
      state.error = null;
    });
    builder.addCase(getPostsData.fulfilled, (state, action) => {
      state.error = null;
      state.isPostsLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getPostsData.rejected, (state, action) => {
      state.isPostsLoading = false;
      state.error = action.payload;
    });
  },
});

export default postsSlice.reducer;
