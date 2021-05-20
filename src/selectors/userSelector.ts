import { initialUserState } from "../reducers/userReducer";
import { createSelector } from "reselect";
import { globalState, userState } from "../types";

const selectBookDomain = (glstate: globalState): userState =>
  glstate.UsersStateFE || initialUserState;

const makeSelectCurrentUser = () =>
  createSelector(selectBookDomain, (data: userState) =>
    data && "user" in data ? data.user : null
  );

export { makeSelectCurrentUser, selectBookDomain };
