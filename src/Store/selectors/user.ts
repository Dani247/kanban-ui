import { createSelector } from "reselect";
import { RootState } from "../reducers";

export const getUserId = createSelector(
  (state: RootState) => state.user,
  user => user.uid
);

export const getUserData = createSelector(
  (state: RootState) => state.user,
  user => user
);