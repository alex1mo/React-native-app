import { combineReducers } from "redux";
import signup from "./signup";
import header from "./header";

const rootReducer = combineReducers({
  dataForm: signup,
  page: header
});

export default rootReducer;
