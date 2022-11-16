import { initialState } from "./initialState";
import * as way from "./actionType";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.IS_DATA_LOADING:
      return { ...state, isLoading: true };
    case way.IS_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessfull: true,
        data: payload,
        isError: false,
      };
    case way.IS_LOADING_FAILURE:
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
