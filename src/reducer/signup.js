import signup from "../action-type/signup";

const initialState = {
  form: null
};

export function signupReduser(state = initialState, action) {
  switch (action.type) {
    case signup.GET_DATA_FORM:
      return { ...state, form: action.payload };
    default:
      return state;
  }
}
