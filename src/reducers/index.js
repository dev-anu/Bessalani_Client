import langReducer from "./lang";
import { combineReducers } from "redux";

const Reducers = combineReducers({
  lang: langReducer,
});

export default Reducers;
