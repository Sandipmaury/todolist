import axios from "axios";
import * as type from "./actionType";

const URL = process.env.REACT_APP_URL;

export const getUser = () => async (dispatch) => {
  dispatch({ type: type.IS_AUTH_LODING });
  try {
    const { data } = await axios.get(`${URL}/user`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: type.IS_AUTH_SUCCESS, payload: data });
    return data;
  } catch (err) {
    dispatch({ type: type.IS_AUTH_FAILURE, payload: err.response.data });
    return err.response.data;
  }
};

export const registerUser = (payload) => async (dispatch) => {
  dispatch({ type: type.IS_AUTH_LODING });
  try {
    const { data } = await axios.post(`${URL}/user/register`, payload);
    // save token into local storage
    await setToken(data.token);
    dispatch({ type: type.IS_AUTH_SUCCESS, payload: data });
    return data;
  } catch (err) {
    dispatch({ type: type.IS_AUTH_FAILURE, payload: err.response.data });
    return err.response.data;
  }
};

export const loginUser = (payload) => async (dispatch) => {
  dispatch({ type: type.IS_AUTH_LODING });
  try {
    const { data } = await axios.post(`${URL}/user/login`, payload);

    // save token into local storage
    await setToken(data.token);

    dispatch({ type: type.IS_AUTH_SUCCESS, payload: data });
    return data;
  } catch (err) {
    dispatch({ type: type.IS_AUTH_FAILURE, payload: err.response.data });
    return err.response.data;
  }
};

const setToken = async (token) => {
  try {
    return await localStorage.setItem("token", token);
  } catch (err) {
    return null;
  }
};

export const removeToken = async () => {
  try {
    return await localStorage.removeItem("token");
  } catch (err) {
    return null;
  }
};
