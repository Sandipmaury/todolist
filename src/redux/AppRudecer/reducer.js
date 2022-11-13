import { initialState } from "./initialState";
import * as way from "./actionType";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.IS_DATA_LODING:
      return { ...state, isLoding: true };
    case way.IS_LODING_SUCCESS:
      return { ...state, isLoding: false, data: payload, isError: false };
    case way.IS_LODING_FAILURE:
      return { ...state, data: [], isLoding: false, isError: true };
    default:
      return state;
  }
};
