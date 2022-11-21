import axios from "axios";
import * as type from "./actionType";
const URL = process.env.REACT_APP_URL;

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch({ type: type.IS_PROFILE_LOADING });
  try {
    const { data } = await axios.get(`${URL}/profile/${userId}`, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });

    dispatch({ type: type.IS_LOADING_PROFILE_SUCCESS, payload: data });
  } catch ({ response }) {
    dispatch({
      type: type.IS_LOADING_PROFILE_FAILURE,
      payload: response?.data,
    });
    console.error(response);
  }
};

export const updateUserProfile = (id, data) => async (dispatch) => {
  dispatch({ type: type.IS_PROFILE_LOADING });
  try {
    await axios.patch(`${URL}/projects/${id}`, data, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    // dispatch(getProject());
  } catch (err) {
    dispatch({ type: type.IS_LOADING_PROFILE_FAILURE });
    console.error(err);
  }
};
