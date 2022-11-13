import * as way from "./actionType";
import { initialState } from "./initialState";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.IS_AUTH_LODING:
      return {
        ...state,
        isLoding: true,
        isError: false,
        isAuth: false,
        userDetails: {},
      };
    case way.IS_AUTH_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        isAuth: true,
        isError: false,
        isLoding: false,
      };
    case way.IS_AUTH_FAILURE:
      return {
        ...state,
        userDetails: payload,
        isAuth: false,
        isLoding: false,
        isError: true,
      };
    default:
      return state;
  }
};
