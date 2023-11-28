import {RootState} from "../index";
import {createSelector} from "@reduxjs/toolkit";

const postsListDataSelector = (state: RootState) => state.posts;

export const selectPostsListData = createSelector(postsListDataSelector, (data) => {
  if (!!data) {
    return data.data
  } else {
    return data;
  }
})

export const selectIsPostsLoading = createSelector(postsListDataSelector, (data) => {
  if (!!data) {
    return data.isPostsLoading
  } else {
    return data;
  }
})
