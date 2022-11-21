import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProjectReducer } from "./ProjectReducer/reducer";
import { reducer as TaskReducer } from "./TaskReducer/reducer";
import { reducer as ProfileReducer } from "./ProfileReducer/reducer";
import thunk from "redux-thunk";

const root = combineReducers({
  AuthReducer,
  ProjectReducer,
  TaskReducer,
  ProfileReducer,
});
const store = legacy_createStore(root, applyMiddleware(thunk));
export default store;
