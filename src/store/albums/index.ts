import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {albumsService} from "../../services/albums.service";
import {IAlbum} from "../type";

interface IAlbumsState {
  data: Array<IAlbum> | null,
  error: any,
  isAlbumsLoading: boolean
}

const initialState: IAlbumsState = {
  data: null,
  error: null,
  isAlbumsLoading: false,
};

export const getAlbumsData = createAsyncThunk(
  'getAlbumsData',
  async (userId: number) => {
    const response = await albumsService.getAlbums(userId);
    return await response;
  }
)

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlbumsData.pending, (state) => {
      state.isAlbumsLoading = true;
      state.error = null;
    });
    builder.addCase(getAlbumsData.fulfilled, (state, action) => {
      state.error = null;
      state.isAlbumsLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAlbumsData.rejected, (state, action) => {
      state.isAlbumsLoading = false;
      state.error = action.payload;
    });
  },
});

export default albumsSlice.reducer;
