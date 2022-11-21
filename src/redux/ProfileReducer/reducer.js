import { initialState } from "./initialState";
import * as way from "./actionType";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.IS_PROFILE_LOADING:
      return { ...state, isLoading: true };
    case way.IS_LOADING_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
      };
    case way.IS_LOADING_PROFILE_FAILURE:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
