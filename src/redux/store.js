import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AppReducer } from "./AppRudecer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProjectReducer } from "./ProjectReducer/reducer";
import thunk from "redux-thunk";

const root = combineReducers({ AppReducer, AuthReducer, ProjectReducer });
const store = legacy_createStore(root, applyMiddleware(thunk));
export default store;
