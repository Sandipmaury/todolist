import axios from "axios";
import * as type from "./actionType";
const URL = process.env.REACT_APP_URL;

export const createTask = (projectId, payload) => async (dispatch) => {
  dispatch({ type: type.IS_TASK_LOADING });
  try {
    await axios.post(`${URL}/tasks/${projectId}`, payload, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch(getTasks(projectId));
  } catch (err) {
    dispatch({ type: type.IS_LOADING_TASK_FAILURE });
    console.error(err);
  }
};

export const getTasks = (projectId) => async (dispatch) => {
  dispatch({ type: type.IS_TASK_LOADING });
  try {
    const { data } = await axios.get(`${URL}/tasks/${projectId}`, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch({ type: type.IS_LOADING_TASK_SUCCESS, payload: data });
  } catch ({ response }) {
    dispatch({ type: type.IS_LOADING_TASK_FAILURE, payload: response?.data });
    console.error(response);
  }
};

export const getSingleTask = (projectId, taskId) => async (dispatch) => {
  dispatch({ type: type.IS_TASK_LOADING });
  try {
    const { data } = await axios.get(`${URL}/tasks/${projectId}/${taskId}`, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch({ type: type.IS_LOADING_TASK_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.IS_LOADING_TASK_FAILURE });
    console.error(err);
  }
};

export const updateTask = (projectId, taskId, payload) => async (dispatch) => {
  dispatch({ type: type.IS_TASK_LOADING });
  try {
    await axios.patch(`${URL}/tasks/${projectId}/${taskId}`, payload, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch(getTasks(projectId));
  } catch (err) {
    dispatch({ type: type.IS_LOADING_TASK_FAILURE });
    console.error(err);
  }
};

export const deleteTask = (projectId, taskId) => async (dispatch) => {
  dispatch({ type: type.IS_TASK_LOADING });
  try {
    await axios.delete(`${URL}/tasks/${projectId}/${taskId}`, {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    });
    dispatch(getTasks(projectId));
  } catch (err) {
    dispatch({ type: type.IS_LOADING_TASK_FAILURE });
    console.error(err);
  }
};
