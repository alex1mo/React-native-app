import signup from "../action-type/signup";

const initialState = {
  phone: null,
  password: null,
  loading: false
};

export default function signupReduser(state = initialState, action) {
  switch (action.type) {
    case signup.SET_FORM_DATA:
      return { ...state, ...action.payload };
    case signup.AUTH:
      return { ...state, ...JSON.parse(action.payload), loading: false };
    case signup.LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
