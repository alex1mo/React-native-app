import { combineReducers } from "redux";
import { signupReduser } from "./signup";

const rootReducer = combineReducers({
  signup: signupReduser
});

export default rootReducer;
