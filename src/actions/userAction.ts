import { ActionTypes } from "./type";

export const adduser = (payload: any) => {
  return {
    type: ActionTypes.ADD_USER,
    payload,
  };
};
