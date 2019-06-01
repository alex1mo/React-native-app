import header from "../action-type/header";

const initialState = null;

export default function signupReduser(state = initialState, action) {
  switch (action.type) {
    case header.SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}
