import signup from "../action-type/signup";

const initialState = {
  phone: null,
  password: null
};

export default function signupReduser(state = initialState, action) {
  switch (action.type) {
    case signup.SET_FORM_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
