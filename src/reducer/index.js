import { combineReducers } from "redux";
import signup from "./signup";
import header from "./header";
import profile from "./profile";

const rootReducer = combineReducers({
  dataForm: signup,
  page: header,
  profileData: profile
});

export default rootReducer;
