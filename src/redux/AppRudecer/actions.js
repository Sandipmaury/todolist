import axios from "axios";
import * as type from "./actionType";
const URL = process.env.REACT_APP_URL;

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("token"),
};

export const getTodolist = () => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LODING });
  try {
    const { data } = await axios.get(`${URL}/todolist`, {
      headers: headers,
    });
    dispatch({ type: type.IS_LODING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.IS_LODING_FAILURE });
    console.error(err);
  }
};

export const getSingleTodolist = (todoId) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LODING });
  try {
    const { data } = await axios.get(`${URL}/todolist/${todoId}`, {
      headers: headers,
    });
    dispatch({ type: type.IS_LODING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.IS_LODING_FAILURE });
    console.error(err);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LODING });
  try {
    await axios.patch(`${URL}/todolist/${id}`, data, {
      headers: headers,
    });
    dispatch(getTodolist());
  } catch (err) {
    dispatch({ type: type.IS_LODING_FAILURE });
    console.error(err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LODING });
  try {
    await axios.delete(`${URL}/todolist/${id}`, {
      headers: headers,
    });
    dispatch(getTodolist());
  } catch (err) {
    dispatch({ type: type.IS_LODING_FAILURE });
    console.error(err);
  }
};

export const getUserFromUserId = (userId) => async (dispatch) => {
  dispatch({ type: type.IS_DATA_LODING });
  try {
    await axios.delete(`${URL}/posts/user/${userId}`, {
      headers: headers,
    });
    dispatch(getTodolist());
  } catch (err) {
    dispatch({ type: type.IS_LODING_FAILURE });
    console.error(err);
  }
};
