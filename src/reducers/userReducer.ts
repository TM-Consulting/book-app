import { ActionTypes } from "../actions/type";
import { userState } from "../types";

export const initialUserState: userState = {
  user: null,
};

const bookReducer = (
  state: userState = initialUserState,
  action: any
): userState => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};

export default bookReducer;
