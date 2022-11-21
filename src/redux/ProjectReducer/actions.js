import axios from "axios";
import * as type from "./actionType";
const URL = process.env.REACT_APP_URL;

export const createProject = (payload) => async (dispatch) => {
  dispatch({ type: type.IS_PROJECT_LOADING });
  try {
    await axios.post(`${URL}/projects`, payload, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch(getProject());
  } catch (err) {
    dispatch({ type: type.IS_LOADING_PROJECT_FAILURE });
    console.error(err);
  }
};

export const getProject = () => async (dispatch) => {
  dispatch({ type: type.IS_PROJECT_LOADING });
  try {
    const { data } = await axios.get(`${URL}/projects`, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch({ type: type.IS_LOADING_PROJECT_SUCCESS, payload: data });
  } catch ({ response }) {
    dispatch({
      type: type.IS_LOADING_PROJECT_FAILURE,
      payload: response?.data,
    });
    console.error(response);
  }
};

export const updateProject = (id, data) => async (dispatch) => {
  dispatch({ type: type.IS_PROJECT_LOADING });
  try {
    await axios.patch(`${URL}/projects/${id}`, data, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch(getProject());
  } catch (err) {
    dispatch({ type: type.IS_LOADING_PROJECT_FAILURE });
    console.error(err);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  dispatch({ type: type.IS_PROJECT_LOADING });
  try {
    await axios.delete(`${URL}/projects/${id}`, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch(getProject());
  } catch (err) {
    dispatch({ type: type.IS_LOADING_PROJECT_FAILURE });
    console.error(err);
  }
};
