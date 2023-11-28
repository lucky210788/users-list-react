import {RootState} from "../index";
import {createSelector} from "@reduxjs/toolkit";

const usersListDataSelector = (state: RootState) => state.users;

export const selectUsersListData = createSelector(usersListDataSelector, (data) => {
  if (!!data) {
    return data.data
  } else {
    return data;
  }
})
export const selectIsUsersLoading = createSelector(usersListDataSelector, (data) => {
  if (!!data) {
    return data.isUsersLoading
  } else {
    return data;
  }
})
