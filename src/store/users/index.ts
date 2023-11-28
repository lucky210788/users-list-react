import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersService} from "../../services/users.service";
import {User} from "../type";

export type SearchMoviePayloadType = {
  query: string;
};

interface IUsersState {
  data: Array<User> | null,
  error: any,
  isUsersLoading: boolean
}

const initialState: IUsersState = {
  data: null,
  error: null,
  isUsersLoading: false,
};

export const getUsersData = createAsyncThunk(
  'getUsersData',
  async () => {
    const response = await usersService.getUsers();
    return await response;
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state) => {
      state.isUsersLoading = true;
      state.error = null;
    });
    builder.addCase(getUsersData.fulfilled, (state, action) => {
      state.error = null;
      state.isUsersLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUsersData.rejected, (state, action) => {
      state.isUsersLoading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
