import axios from "axios";
import * as type from "./actionType";

const URL = process.env.REACT_APP_URL;

export const getUser = () => async (dispatch) => {
  dispatch({ type: type.IS_AUTH_LODING });
  const source = axios.CancelToken.source();

  try {
    const { data } = await axios.get(`${URL}/user`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      cancelToken: source.token,
    });
    dispatch({ type: type.IS_AUTH_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.IS_AUTH_FAILURE, payload: err.response.data });
  }
};

export const registerUser = (payload) => async (dispatch) => {
  dispatch({ type: type.IS_AUTH_LODING });

  const source = axios.CancelToken.source();
  try {
    const { data } = await axios.post(`${URL}/user/register`, payload, {
      cancelToken: source.token,
    });

    // save token into local storage
    await localStorage.setItem("token", data?.token);
    dispatch({ type: type.IS_AUTH_SUCCESS, payload: data });
  } catch ({ response }) {
    dispatch({ type: type.IS_AUTH_FAILURE, payload: response.data });
  }
};

export const loginUser = (payload) => async (dispatch) => {
  dispatch({ type: type.IS_AUTH_LODING });
  const source = axios.CancelToken.source();

  try {
    const { data } = await axios.post(`${URL}/user/login`, payload, {
      cancelToken: source.token,
    });
    // save token into local storage
    await localStorage.setItem("token", data?.token);
    dispatch({ type: type.IS_AUTH_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.IS_AUTH_FAILURE, payload: err.response.data });
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({ type: type.IS_AUTH_LODING });
  try {
    await localStorage.removeItem("token");
    dispatch({ type: type.IS_USER_LOGOUT, payload: {} });
  } catch (err) {
    dispatch({ type: type.IS_USER_LOGOUT, payload: {} });
  }
};
