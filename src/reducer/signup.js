import signup from "../action-type/signup";

const initialState = {
  phone: null,
  password: null
};

export default function signupReduser(state = initialState, action) {
  switch (action.type) {
    case signup.GET_DATA_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
