import {RootState} from "../index";
import {createSelector} from "@reduxjs/toolkit";

const albumsListDataSelector = (state: RootState) => state.albums;

export const selectAlbumsListData = createSelector(albumsListDataSelector, (data) => {
  if (!!data) {
    return data.data
  } else {
    return data;
  }
})

export const selectIsAlbumsLoading = createSelector(albumsListDataSelector, (data) => {
  if (!!data) {
    return data.isAlbumsLoading
  } else {
    return data;
  }
})
