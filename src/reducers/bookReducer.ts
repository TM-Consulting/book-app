import { ADD_TASK } from "../actions/type";

const initialState = {
  tasks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      //console.log("testt",state)
      return {
        tasks: [...state.tasks, action.payload],
      };

    default:
      return state;
  }
}
