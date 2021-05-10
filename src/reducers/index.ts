import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import userReducer from "./userReducer";

export default combineReducers({
  booksStateFE: bookReducer,
  UsersStateFE: userReducer,
});
