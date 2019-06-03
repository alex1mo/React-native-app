import { combineReducers } from "redux";
import signup from "./signup";
import header from "./header";
import profile from "./profile";
import add from "./add";

const rootReducer = combineReducers({
  dataForm: signup,
  page: header,
  profileData: profile,
  list: add
});

export default rootReducer;
