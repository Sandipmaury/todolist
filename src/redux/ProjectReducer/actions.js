import axios from "axios";
import * as type from "./actionType";
const URL = process.env.REACT_APP_URL;

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("token"),
};

export const createProject = (payload) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LOADING });
  try {
    await axios.post(`${URL}/projects`, payload, {
      headers: headers,
    });
    dispatch(getProject());
  } catch (err) {
    dispatch({ type: type.IS_LOADING_FAILURE });
    console.error(err);
  }
};

export const getProject = () => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LOADING });
  try {
    const { data } = await axios.get(`${URL}/projects`, {
      headers: headers,
    });
    dispatch({ type: type.IS_LOADING_SUCCESS, payload: data });
  } catch ({ response }) {
    dispatch({ type: type.IS_LOADING_FAILURE, payload: response?.data });
    console.error(response);
  }
};

export const getSingleProject = (todoId) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LOADING });
  try {
    const { data } = await axios.get(`${URL}/projects/${todoId}`, {
      headers: headers,
    });
    dispatch({ type: type.IS_LOADING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.IS_LOADING_FAILURE });
    console.error(err);
  }
};

export const updateProject = (id, data) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LOADING });
  try {
    await axios.patch(`${URL}/projects/${id}`, data, {
      headers: headers,
    });
    dispatch(getProject());
  } catch (err) {
    dispatch({ type: type.IS_LOADING_FAILURE });
    console.error(err);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LOADING });
  try {
    await axios.delete(`${URL}/projects/${id}`, {
      headers: headers,
    });
    dispatch(getProject());
  } catch (err) {
    dispatch({ type: type.IS_LOADING_FAILURE });
    console.error(err);
  }
};
