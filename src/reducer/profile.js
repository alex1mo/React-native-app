import profile from "../action-type/profile";

const initialState = {
  name: "",
  age: "",
  phone: "",
  email: ""
};

export default function profileReduser(state = initialState, action) {
  switch (action.type) {
    case profile.GET_DATA_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
