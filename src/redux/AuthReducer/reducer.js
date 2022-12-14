import * as way from "./actionType";
import { initialState } from "./initialState";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.IS_AUTH_LODING:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isError: false,
      };
    case way.IS_AUTH_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        isAuth: true,
        isError: false,
        isLoading: false,
      };
    case way.IS_AUTH_FAILURE:
      return {
        ...state,
        userDetails: payload,
        isAuth: false,
        isLoading: false,
        isError: true,
      };
    case way.IS_USER_LOGOUT:
      return {
        ...state,
        userDetails: payload,
        isAuth: false,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
