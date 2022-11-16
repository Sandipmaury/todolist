import { initialState } from "./initialState";
import * as way from "./actionType";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.IS_TASK_LOADING:
      return { ...state, isLoading: true };
    case way.IS_LOADING_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessfull: true,
        data: payload,
        isError: false,
      };
    case way.IS_LOADING_TASK_FAILURE:
      return {
        ...state,
        data: payload,
        isSuccessfull: false,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
